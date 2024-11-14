import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function BookingCalendar({ onDateSelect }) {
    const [date, setDate] = useState(new Date());

    const handleDateChange = (newDate) => {
        setDate(newDate);
        onDateSelect(newDate); // Pass selected date to parent
    };

    return (
        <div className="calendar-container">
            <Calendar onChange={handleDateChange} value={date} />
        </div>
    );
}

export default BookingCalendar;
