import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import { useSidebarDrawer } from "../../../contexts/SidebarDrawerContext";
import { Logo } from "./Logo";
import { SiderbarNav } from "./SidebarNav";



export function Sidebar() {
    const {isOpen, onClose} = useSidebarDrawer()
    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false,
    }) 
    
    if (isDrawerSidebar) {
        return (
            <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
         <DrawerOverlay>
             <DrawerContent bg='gray.50' p='4'>
                 <DrawerCloseButton mt='6' />
                 <DrawerHeader>Navegação</DrawerHeader>
                 <DrawerBody>
                     <SiderbarNav />
                 </DrawerBody>
             </DrawerContent>
             </DrawerOverlay>   
            </Drawer>
        );
        
    }
    return (
        <Box as='aside' w='64' mr='8'>
            <SiderbarNav />
        </Box>
    )
}