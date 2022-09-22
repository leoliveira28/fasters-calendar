import { useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Input, ModalFooter, Button,  } from "@chakra-ui/react"



export function ModalEvent({onOpen}) {
    const { isOpen, onClose } = useDisclosure()
    return (
      <>  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input type="date" />
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Fechar
              </Button>
              <Button variant='ghost'>Salvar</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }