import { Box, Flex, Icon, SimpleGrid, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { InlineCalendar } from '../components/DatePicker'
import { Events } from '../components/DatePicker/Events'
import { Header } from '../components/Header'
import { Logo } from '../components/Logo'
import { Schedule } from '../components/Schedule'
import { Sidebar } from '../components/Sidebar'
const Home: NextPage = () => {
  return (
    <>
    <Header />
    <Flex maxWidth={1480} mx='auto' px='2'>
      <Box borderRight='1px' borderRightColor='white.50' my='1'>
        <Box mb='20px'>
        <Logo />
        <Box mt='20px'>
        <Sidebar />
        </Box>
        </Box>
      </Box>
      <SimpleGrid columns={1} spacing={5} mx={2} my={10}>
        <InlineCalendar />
        <Text fontWeight="700" fontSize="20px">
        Next Event
      </Text>
        <Events />
        <Events />
        <Events />
        </SimpleGrid>
        <Flex mx='auto'>
        <Schedule />
        </Flex>
       
      </Flex>
 
      </>
  )
}

export default Home
