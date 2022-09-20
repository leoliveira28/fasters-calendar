import { Button, Flex, Icon, Input } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
  const searchInputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <Flex align="center" ml="auto">
        <Button bg="green.400" color='#FFFFFF' fontWeight='normal'>+ Create event</Button>
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
