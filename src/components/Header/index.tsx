import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { CurrentDay } from './CurrentDay';
import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';

export function Header() {
    const { onOpen } = useSidebarDrawer()
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })
    return (
        <Flex as='header'
        maxWidth={1480}
        h='20'
        marginX='auto'
        mt='4'
        w='100%'
        borderBottom='1px'
        borderBottomColor='white.50'
        >
            {! isWideVersion && (
                <IconButton aria-label='Open navigation'
                icon={<Icon as={RiMenuLine} />}
                fontSize='24'
                variant='unstyled'
                onClick={onOpen}
                mr='2'>
                    </IconButton>
            )}
            {isWideVersion && (
                        <>
                        <CurrentDay /><SearchBox />
                        </>

            )}
            <NotificationsNav />
            <Profile showProfileData={isWideVersion}/>
        </Flex>

    );
}