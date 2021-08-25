import { Flex, Box, Heading, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      w="100%"
      h="335px"
      bgImage="url('/backgroundbanner.png')"
      bgSize="cover"

    >
      <Flex justify='space-between' align="center" w="100%" px={["64", "80", "200"]}>

        <Box>
          <Heading color="gray.100" fontWeight="500" fontSize="4xl">
            5 Continentes,<br />infinitas possibilidades.
          </Heading>
          <Text color="gray.300" mt="5" fontSize="xl" maxW="550px">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        <Image
          src="/airplane.svg"
          alt="Avião amarelo"
          transform="translateY(48px)"
        />
      </Flex>
    </Flex>
  )
}