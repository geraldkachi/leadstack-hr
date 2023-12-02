import { Calendar, Views, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'

const locales = {
  'en-US': enUS,
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const defaultView = Views.MONTH;

// const formats = {
//   dateFormat: 'dd', // Adjust the date format as needed
//   dayFormat: 'EEEEEE', // Short day names, adjust as needed
// };

const views = [Views.MONTH];

const events = [
  {
    title: 'Event 1',
    start: new Date(2023, 10, 1, 10, 0),
    end: new Date(2023, 10, 1, 12, 0),
  },
  // Add more events as needed
];


const formats = {
  dayFormat: (date, culture) => localizer.format(date, 'DD', culture),
};
// const date_today = new Date();
// const firstDay = new Date(date_today.getFullYear(), date_today.getMonth(), 1);

const Calender = () => {
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        formats={formats}
        startAccessor={events => new Date(events.start)}
        endAccessor={events => new Date(events.end)}
        showAllEvents
        // title={() => new Date(events[0].title)}
        defaultDate={format(new Date(), 'MMMM dd yy')}
        // views={['month']}
        views={views}
        defaultView={defaultView}
        step={60}
        showMultiDayTimes
        style={{
          backgroundColor: '#FFFFFF',
          height: 650,
          width: '100%',
        }}
      />
    </div>
  )
}

export default Calender