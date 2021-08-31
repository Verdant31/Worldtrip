import { Flex, Box, Heading, Image, Text } from "@chakra-ui/react";


export function Banner() {
  return (
    <Flex
      w="100vw"
      h="335px"
      bgImage="url('/backgroundbanner.png')"
      bgSize="cover"
    >
      <Flex
        justify={['center', 'space-between']}
        align="center"
        w="100%"
        px={{ sm: "10", md: "120", lg: "200", xl: "200" }}
      >
        <Box
          width={{ md: "300px", lg: "550px", xl: "550px" }}
          px="4"
        >
          <Heading
            lineHeight="1.5"
            color="gray.100"
            fontWeight="500"
            fontSize={{ sm: "xl", md: "2xl", lg: "2xl", xl: "4xl" }}
          >
            5 Continentes,<br />infinitas possibilidades.
          </Heading>
          <Text
            lineHeight="1.5"
            color="gray.300"
            mt="5"
            fontSize={{ sm: "sm", md: "xl", lg: "xl", xl: "xl" }}
            maxW="550px"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        <Image
          display={['none', 'none', 'block']}
          boxSize={{ sm: "300px", md: "300px", lg: "400px", xl: "500px" }}
          src="/airplane.svg"
          alt="Avião amarelo"
          ml="80px"
          transform="translateY(48px)"
        />
      </Flex>
    </Flex>
  )
}

