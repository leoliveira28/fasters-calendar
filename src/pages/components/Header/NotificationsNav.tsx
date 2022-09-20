import { Box, HStack, Icon } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

export function NotificationsNav() {
    return(
        <HStack spacing={['6', '8']}
            mx={['6', '8']}
            pr={['6', '8']}
            py='1'
            color='white.200'
            >
            <Box p='16px' bg='white.100' borderRadius='12px'>
            <Icon as={RiNotificationLine} fontSize='20' />
            </Box>
            <Box p='16px' bg='white.100' borderRadius='12px'>
            <Icon as={RiUserAddLine} fontSize='20' />
            </Box>
            </HStack>
    );
}