import { Text, Flex, Image, Box, Stack } from '@chakra-ui/react';

export function LetsDoIt() {
  return (
    <Box>
      <Image mt="20" mx="auto" pl="8" src="divider.png" alt="" />

      <Stack align="center" justify="center" pl="8" mt="12" mx="auto" direction="column">
        <Text fontSize="4xl" fontWeight="500">Vamos nessa?<br></br></Text>
        <Text fontSize="4xl" fontWeight="500">Então escolha seu continente</Text>
      </Stack>

    </Box >
  )
}