import React, { useState } from 'react';
import { Calendar as BigCalendar, dateFnsLocalizer, Event, View } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { enUS, hi } from 'date-fns/locale';
import { useTranslation } from 'react-i18next';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.scss';

const locales = {
  'en': enUS,
  'hi': hi,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

interface CustomEvent extends Event {
  type: 'daily' | 'upcoming' | 'past';
  titleKey: string;
  descriptionKey?: string;
  title?: string;
  description?: string;
}

const Calendar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<View>('month');

  // Helper function to generate recurring daily events
  const generateDailyEvents = (baseDate: Date): CustomEvent[] => {
    const events: CustomEvent[] = [];
    const daysInMonth = new Date(baseDate.getFullYear(), baseDate.getMonth() + 1, 0).getDate();

    for (let day = 1; day <= daysInMonth; day++) {
      // Morning Aarti
      events.push({
        titleKey: 'events.eventTypes.puja',
        start: new Date(baseDate.getFullYear(), baseDate.getMonth(), day, 5, 30),
        end: new Date(baseDate.getFullYear(), baseDate.getMonth(), day, 6, 30),
        type: 'daily',
        descriptionKey: 'events.descriptions.morningAarti',
      });

      // Evening Aarti
      events.push({
        titleKey: 'events.eventTypes.puja',
        start: new Date(baseDate.getFullYear(), baseDate.getMonth(), day, 18, 30),
        end: new Date(baseDate.getFullYear(), baseDate.getMonth(), day, 19, 30),
        type: 'daily',
        descriptionKey: 'events.descriptions.eveningAarti',
      });

      // Morning Meditation
      events.push({
        titleKey: 'events.eventTypes.meditation',
        start: new Date(baseDate.getFullYear(), baseDate.getMonth(), day, 6, 30),
        end: new Date(baseDate.getFullYear(), baseDate.getMonth(), day, 7, 30),
        type: 'daily',
        descriptionKey: 'events.descriptions.morningMeditation',
      });
    }

    return events;
  };

  // Generate special events for the current month
  const generateSpecialEvents = (baseDate: Date): CustomEvent[] => {
    const currentDate = new Date();
    
    return [
      // Upcoming Events
      {
        titleKey: 'events.specialEvents.guruPurnima',
        start: new Date(baseDate.getFullYear(), baseDate.getMonth(), 20, 9, 0),
        end: new Date(baseDate.getFullYear(), baseDate.getMonth(), 20, 20, 0),
        type: 'upcoming',
        descriptionKey: 'events.descriptions.guruPurnima',
      },
      {
        titleKey: 'events.eventTypes.bhandara',
        start: new Date(baseDate.getFullYear(), baseDate.getMonth(), 25, 11, 0),
        end: new Date(baseDate.getFullYear(), baseDate.getMonth(), 25, 14, 0),
        type: 'upcoming',
        descriptionKey: 'events.descriptions.monthlyBhandara',
      },
      {
        titleKey: 'events.specialEvents.gaushalaSeva',
        start: new Date(baseDate.getFullYear(), baseDate.getMonth(), 18, 7, 0),
        end: new Date(baseDate.getFullYear(), baseDate.getMonth(), 18, 17, 0),
        type: 'upcoming',
        descriptionKey: 'events.descriptions.gaushalaSeva',
      },
      {
        titleKey: 'events.specialEvents.vedantaStudy',
        start: new Date(baseDate.getFullYear(), baseDate.getMonth(), 22, 16, 0),
        end: new Date(baseDate.getFullYear(), baseDate.getMonth(), 22, 18, 0),
        type: 'upcoming',
        descriptionKey: 'events.descriptions.vedantaStudy',
      },
      // Past Events (for dates before current date)
      {
        titleKey: 'events.specialEvents.ramNavami',
        start: new Date(baseDate.getFullYear(), baseDate.getMonth(), 5, 8, 0),
        end: new Date(baseDate.getFullYear(), baseDate.getMonth(), 5, 21, 0),
        type: baseDate < currentDate ? 'past' : 'upcoming',
        descriptionKey: 'events.descriptions.ramNavami',
      },
      {
        titleKey: 'events.specialEvents.retreat',
        start: new Date(baseDate.getFullYear(), baseDate.getMonth(), 8, 9, 0),
        end: new Date(baseDate.getFullYear(), baseDate.getMonth(), 10, 18, 0),
        type: baseDate < currentDate ? 'past' : 'upcoming',
        descriptionKey: 'events.descriptions.retreat',
      },
      {
        titleKey: 'events.specialEvents.sannyasaDeeksha',
        start: new Date(baseDate.getFullYear(), baseDate.getMonth(), 3, 8, 0),
        end: new Date(baseDate.getFullYear(), baseDate.getMonth(), 3, 12, 0),
        type: baseDate < currentDate ? 'past' : 'upcoming',
        descriptionKey: 'events.descriptions.sannyasaDeeksha',
      },
    ];
  };

  // Combine daily and special events
  const events = [...generateDailyEvents(currentDate), ...generateSpecialEvents(currentDate)].map(event => ({
    ...event,
    title: t(event.titleKey),
    description: event.descriptionKey ? t(event.descriptionKey) : undefined,
  }));

  const eventStyleGetter = (event: CustomEvent) => {
    let style = {
      backgroundColor: '',
      borderRadius: '4px',
      opacity: 0.8,
      color: '#fff',
      border: '0',
      display: 'block',
    };

    switch (event.type) {
      case 'daily':
        style.backgroundColor = '#FF7F27';
        break;
      case 'upcoming':
        style.backgroundColor = '#2C5282';
        break;
      case 'past':
        style.backgroundColor = '#718096';
        break;
      default:
        style.backgroundColor = '#FF7F27';
    }

    return {
      style,
    };
  };

  const handleNavigate = (newDate: Date) => {
    setCurrentDate(newDate);
  };

  const handleViewChange = (newView: View) => {
    setView(newView);
  };

  return (
    <div className="calendar-container">
      <BigCalendar<CustomEvent>
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 700 }}
        eventPropGetter={eventStyleGetter}
        tooltipAccessor={(event) => `${event.title}${event.description ? `: ${event.description}` : ''}`}
        popup
        views={['month', 'week', 'day']}
        view={view}
        onView={handleViewChange}
        onNavigate={handleNavigate}
        date={currentDate}
        culture={i18n.language}
        messages={{
          month: t('events.calendar.month'),
          week: t('events.calendar.week'),
          day: t('events.calendar.day'),
          today: t('events.calendar.today'),
          previous: t('events.calendar.previous'),
          next: t('events.calendar.next'),
        }}
      />
    </div>
  );
};

export default Calendar; 