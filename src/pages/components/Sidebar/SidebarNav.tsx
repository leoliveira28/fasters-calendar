import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from './NavSection'

export function SiderbarNav(){
    return(
        <Stack spacing='12' align='flex-start'>

                    <NavLink href='/dashboard' icon={RiDashboardLine}>Agenda</NavLink>
                    <NavLink href='/users' icon={RiContactsLine}>Mensagens</NavLink>
                    <NavLink href='/forms' icon={RiInputMethodLine}>Relatórios</NavLink>
                    <NavSection title='My Account'>
                    <NavLink href='/forms' icon={RiInputMethodLine}>Meus Eventos</NavLink>
                    <NavLink href='/forms' icon={RiInputMethodLine}>Meu Time</NavLink>
                    <NavLink href='/forms' icon={RiInputMethodLine}>Minhas Atividades</NavLink>
                    </NavSection>
                    <NavSection title='System'>
                    <NavLink href='/forms' icon={RiInputMethodLine}>Configurações</NavLink>
                    <NavLink href='/forms' icon={RiInputMethodLine}>Sair
                    </NavLink>


                    </NavSection>
            </Stack>
    );
}