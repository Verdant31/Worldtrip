import { Text, Image, Box, Stack } from '@chakra-ui/react';

export function LetsDoIt() {
  return (
    <Box >
      <Image
        mt="20"
        mx="auto"
        src="divider.png"
        alt=""
      />
      <Stack
        align="center"
        justify="center"
        mt="12"
        mx="auto"
        direction="column"
      >
        <Text
          fontSize={{ sm: "2xl", md: "2xl", lg: "2xl", xl: "4xl" }}
          fontWeight="500"
        >
          Vamos nessa?<br></br>
        </Text>
        <Text
          fontSize={{ sm: "2xl", md: "2xl", lg: "2xl", xl: "4xl" }}
          fontWeight="500"
        >
          Então escolha seu continente
        </Text>
      </Stack>

    </Box >
  )
}