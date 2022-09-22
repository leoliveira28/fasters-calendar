import { Calendar, momentLocalizer, Views, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import { Box } from '@chakra-ui/react'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { DatePickerContext } from '../../../contexts/DatePickerContext';
import { useContext, useEffect, useState } from 'react';
import { EventContext } from '../../../contexts/EventsContext';

interface EventData {
    eventName: string;
    eventDescription: string;
    eventDate: string;
    eventTime: string;
}
export function Schedule(){
    const { eventData } = useContext(EventContext)
    const { dateValue } = useContext(DatePickerContext)
    const [eventsInput, setEventsInput] = useState({} as EventData)
    const [allEvents, setAllEvents] = useState(eventsInput)
    
    useEffect(() => {
        setEventsInput(eventData)
    }, [eventData])
    
    const locales = {
        'pt-BR': require('date-fns/locale/pt-BR'),
    }
    const localizer = dateFnsLocalizer({
        format,
        parse,
        startOfWeek,
        getDay,
        locales    
    })

    const defaultDate = new Date()
    const events = [{
        id: 0,
        title: allEvents.eventName,
        start: allEvents.eventDate,
        end: allEvents.eventDate +1
    }]
    return(
        <Box mt='20px'>
        <Calendar
        events={events}
        defaultView={Views.DAY}
        defaultDate={defaultDate}
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        />
        </Box>

    )
}

