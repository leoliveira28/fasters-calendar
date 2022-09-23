import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import '../styles/react-datepicker.css'
import '../styles/rbc.css'
import { DatePickerProvider } from '../contexts/DatePickerContext'
import { EventProvider } from '../contexts/EventsContext'
function MyApp({ Component, pageProps }: AppProps) {
  return (

    <ChakraProvider theme={theme}>
      <DatePickerProvider>
      <EventProvider>
      <Component {...pageProps} />
      </EventProvider>
      </DatePickerProvider>
  </ChakraProvider>
  )
}

export default MyApp
