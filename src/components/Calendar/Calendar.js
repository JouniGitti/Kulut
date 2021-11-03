import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

function Calendar() {
    return(
        <div>
            <FullCalendar
                headerToolbar = {{
                    start: 'title',
                    center: 'dayGridMonth, timeGridWeek, timeGridDay',
                    end: 'today prev,next'
                }}
                plugins={[dayGridPlugin, timeGridPlugin,interactionPlugin]}
                initialView="dayGridMonth"
            />
        </div>
    )
}

export default Calendar;