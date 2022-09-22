import {Box, Flex, FormControl, FormLabel, Icon, Stack } from "@chakra-ui/react";
import { useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Input, ModalFooter, Button,  } from "@chakra-ui/react"

import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { EventContext } from "../../../contexts/EventsContext";

export function SearchBox() {
  const searchInputRef = useRef<HTMLInputElement>(null)
  const [eventName, setEventName] = useState('')
  const [eventDescription, setEventDescription] = useState('')
  const [eventDate, setEventDate] = useState('')
  const [eventTime, setEventTime] = useState('')
  const { eventData, setEventData } = useContext(EventContext)
  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(eventData))
  }, [eventData])
  function handleSubmit(e) {
    e.preventDefault()
    const event ={
      eventName: eventName,
      eventDescription: eventDescription,
      eventDate: eventDate,
      eventTime: eventTime
    }
    setEventData(event)
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
            <FormControl >
              <Stack spacing={5}>
                <FormLabel>
                  Nome do evento
                  <Input type="text" onChange={(e) => setEventName(e.target.value)} />
                </FormLabel>
                <FormLabel>
                  Descrição
                  <Input type="text" onChange={(e) => setEventDescription(e.target.value)} />
                </FormLabel>
                <FormLabel>
                  Data
                <Input type="date" onChange={(e) => setEventDate(e.target.value)} />
                </FormLabel>
                <FormLabel>
                  Horário
                  <Input type='time' onChange={(e) => setEventTime(e.target.value)} />
                </FormLabel>
              </Stack>
              <Button variant='ghost' mr={3} onClick={onClose}>
                Fechar
              </Button>
              <Button colorScheme='blue' type='submit' onClick={onClose}>Salvar</Button>
              </FormControl>
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
