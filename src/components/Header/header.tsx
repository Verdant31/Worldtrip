import { Flex } from '@chakra-ui/react';
import { Image } from "@chakra-ui/react"
export function Header() {
  return (
    <Flex as="header" w="100%" h="100px" >
      <Image mx="auto" py="6" pl="12" src="/logo.svg" alt="Logo" />
    </Flex>
  )
}