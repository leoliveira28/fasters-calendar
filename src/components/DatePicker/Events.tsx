import { Box, Icon, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsClock } from 'react-icons/bs'


export function Events() {
  const [localEvents, setLocalEvents] = useState([{}])
useEffect(() => {
  if(typeof window !== 'undefined') {
    const local = localStorage.getItem('events')
    setLocalEvents(JSON.parse(local))
  }
}, [])
console.log(localEvents)
  return (

    <Box>
      <Box
        px="16px"
        py="12px"
        borderRadius="8px"
        border="1px"
        borderColor="white.50"
        w="316px"
        h="108px"
      >
        <Text fontWeight="700" fontSize="16px">
          Entrevista com RH
        </Text>
        <Text fontWeight="400" fontSize="14px" color="#B4BAC5" mb="8px">
          September 20, 2022
        </Text>
        <Text fontWeight="500" fontSize="12px" color="green.400">
          <Icon as={BsClock} mr="4px" color="green.400" /> 08:00 - 09:30 AM
        </Text>
      </Box>
    </Box>
  );
}
