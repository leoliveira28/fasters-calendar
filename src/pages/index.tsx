import { Box, Flex, Icon, SimpleGrid, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { InlineCalendar } from './components/DatePicker'
import { Events } from './components/DatePicker/Events'
import { Header } from './components/Header'
import { Logo } from './components/Logo'
import { Sidebar } from './components/Sidebar'
const Home: NextPage = () => {
  return (
    <>
    <Flex w='100%'  maxWidth={1480} mx='auto' px='6'>
      <Box borderRight='1px' borderRightColor='white.50' my='1' h='100vh' p='2' >
        <Box mb='20px'>
        <Logo />
        </Box>
      <Sidebar />
      </Box>
    <Flex direction="column" w='100%'>
        <Header />
        <SimpleGrid columns={1} spacing={5} mx={10} my={10}>
        <InlineCalendar />
        <Text fontWeight="700" fontSize="20px">
        Next Event
      </Text>
        <Events />
        <Events />
        <Events />
        </SimpleGrid>
      </Flex>
      </Flex>
 
      </>
  )
}

export default Home
