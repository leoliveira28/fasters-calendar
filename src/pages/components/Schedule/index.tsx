import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
import { Box } from '@chakra-ui/react'
import 'react-big-calendar/lib/css/react-big-calendar.css'

export function Schedule(){
    const localizer = momentLocalizer(moment)
    const defaultDate = new Date()
    const events = [{
        id: 0,
        title: 'Teste de Eventos',
        start: new Date(defaultDate.getHours() -4),
        end: new Date(defaultDate.getHours())
    }]
    
    return(
        <Box mt='20px'>
        <Calendar
        events={events}
        localizer={localizer}
        defaultView={Views.DAY}
        defaultDate={defaultDate}
        startAccessor="start"
        endAccessor="end"
        />
        </Box>

    )
}

