import { Calendar, momentLocalizer, Views, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import ptBR from 'date-fns/locale/pt-BR';
import { Box } from '@chakra-ui/react'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { DatePickerContext } from '../../contexts/DatePickerContext';
import { useContext, useEffect, useState } from 'react';
import { EventContext } from '../../contexts/EventsContext';

interface EventData {
    title: string;
    start: string;
    end: string;
    id?: number;
}
export function Schedule(){
    const events = [{
        id: 0,
        start: new Date(2022, 8, 22),
        end: new Date(2022, 8, 22),
        title: 'teste',
    }]
    const { eventData } = useContext(EventContext)
    const [eventsInput, setEventsInput] = useState({} as EventData)
    const [allEvents, setAllEvents] = useState(events)
    
    useEffect(() => {
        setAllEvents([...allEvents, eventData])
        if(allEvents === undefined){
            return
         } else {
            localStorage.setItem('events', JSON.stringify(allEvents))

         }
    }, [eventData])
    console.log(!allEvents)

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

    

    return (
        <Box mt='20px'>
        <Calendar
        events={allEvents}
        defaultView={Views.DAY}
        defaultDate={defaultDate}
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        />
        </Box>

    )
}

