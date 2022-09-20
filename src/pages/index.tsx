import { Box, Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
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
      </Flex>
      </Flex></>
  )
}

export default Home
