import { Box, Text } from "@chakra-ui/react";



export function CurrentDay() {
    const currentDay = {
        month: new Date().getMonth(),
        dayOfWeek: new Date().getDate(),
        day: new Date().getDay(),
        
    }
    return (
        <Box m='auto'>
            <Text fontWeight='700' color='darkBlue.800'>Setembro</Text>
            <Text color='white.200'>Terça-feira - 20 de Set - 2022</Text>
        </Box>
    )
}