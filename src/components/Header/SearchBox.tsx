import {Box, Flex, FormControl, FormLabel, Icon, Stack } from "@chakra-ui/react";
import { useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Input, ModalFooter, Button,  } from "@chakra-ui/react"

import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { EventContext } from "../../contexts/EventsContext";

export function SearchBox() {
  const searchInputRef = useRef<HTMLInputElement>(null)
  const { setEventData } = useContext(EventContext)

  const  [newEvent, setNewEvent] = useState({title: '', start: new Date(), end: new Date(), description: '', time: new Date()})
  function handleSubmit(e) {
    e.preventDefault()
    setEventData(newEvent)

}

  const { isOpen, onClose, onOpen: onCreateOpen } = useDisclosure();
  return (
    <>
      <Flex align="center" ml="auto">
        <Button bg="green.400" color='#FFFFFF' fontWeight='normal' onClick={onCreateOpen}>+ Create event</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Adicionar evento na Agenda</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form onSubmit={(e) => handleSubmit(e)}>
              <Stack spacing={5}>
                <FormLabel>
                  Nome do evento
                  <Input type="text" onChange={(e) => setNewEvent({...newEvent, title: e.target.value})} />
                </FormLabel>
                <FormLabel>
                  Descrição
                  <Input type="text" onChange={(e) => setNewEvent({...newEvent, description: e.target.value})} />
                </FormLabel>
                <FormLabel>
                  Data incio
                <Input type="date" onChange={(e) => setNewEvent({...newEvent, start: new Date(Date.parse(e.target.value))})} />
                </FormLabel>
                <FormLabel>
                  Data termino
                <Input type="date" onChange={(e) => setNewEvent({...newEvent, end: new Date(Date.parse(e.target.value))})} />
                </FormLabel>
                <FormLabel>
                  Horário
                  <Input type='time' onChange={(e) => setNewEvent({...newEvent, time: new Date(Date.parse(e.target.value))})} />
                </FormLabel>
              </Stack>
              <Button variant='ghost' mr={3} onClick={onClose}>
                Fechar
              </Button>
              <Button colorScheme='blue' type='submit' onClick={onClose}>Salvar</Button>
              </form> 
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        w="460px"
        h="56px"
        maxWidth="400"
        alignSelf="center"
        color="white.200"
        position="relative"
        bg="white.100"
        borderRadius="12px"
      >
        <Input
          color="white.200"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Search task, event, calendar"
          _placeholder={{ color: "gray.400" }}
          ref={searchInputRef}
        />
        <Icon fontSize="20" as={RiSearchLine} />
      </Flex>
    </>
  );
}
