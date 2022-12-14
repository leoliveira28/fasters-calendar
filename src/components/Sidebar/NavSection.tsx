import { Box, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SectionProps {
    title: string;
    children: ReactNode;
}
export function NavSection({ title, children }: SectionProps) {
    return (
        <Box>
        <Text fontWeight='bold'
        color='white.200'
        fontSize='small'>{title}</Text>
        <Stack spacing='4' mt='8' align='stretch'>
            {children}
        </Stack>
    </Box>
    );
}