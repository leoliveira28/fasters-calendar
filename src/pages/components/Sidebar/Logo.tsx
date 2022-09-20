import { Box, Image, Img } from "@chakra-ui/react";

export function Logo() {
    return (
        <Box w='218px' h='71px' bg='#355072' p='15px' mb='20px'>
         <Img src='/fastersLogo.svg' alt='Fasters Logo' justifyContent='center'></Img>
        </Box>
    );
}