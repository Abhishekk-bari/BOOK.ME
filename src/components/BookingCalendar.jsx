import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function BookingCalendar({ onDateSelect }) {
    const [date, setDate] = useState(new Date());
    const [bookedDates, setBookedDates] = useState([]);

    useEffect(() => {
        fetch('/api/available-dates')
            .then(response => response.json())
            .then(data => setBookedDates(data));
    }, []);

    const handleDateChange = (newDate) => {
        setDate(newDate);
        onDateSelect(newDate);
    };

    const tileClassName = ({ date }) => {
        if (bookedDates.includes(date.toISOString().split('T')[0])) {
            return 'booked-date'; // Add class for booked dates
        }
        return '';
    };

    return (
        <div className="calendar-container">
            <Calendar
                onChange={handleDateChange}
                value={date}
                tileClassName={tileClassName}
            />
        </div>
    );
}

export default BookingCalendar;
