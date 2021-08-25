import { Flex, Stack, Image, Text, Box, Divider } from '@chakra-ui/react';

export function Options() {
  return (
    <Flex w="100%" justify="center" mt="24" textAlign="center" display="flex">
      <Stack direction={["column", "row"]} spacing="48" mx="auto">
        <Box align="center">
          <Image boxSize="100px" src="/nightlife.svg" alt="Vida noturna" />
          <Text fontSize="4xl" color="gray.900" mt="8" fontWeight="500">vida noturna</Text>
        </Box>
        <Box align="center">
          <Image boxSize="100px" src="/beach.svg" alt="Vida noturna" />
          <Text fontSize="4xl" color="gray.900" mt="8" fontWeight="500">praia</Text>
        </Box>
        <Box align="center">
          <Image boxSize="100px" src="/modern.svg" alt="Vida noturna" />
          <Text fontSize="4xl" color="gray.900" mt="8" fontWeight="500">moderno</Text>
        </Box>
        <Box align="center">
          <Image boxSize="100px" src="/classic.svg" alt="Vida noturna" />
          <Text fontSize="4xl" color="gray.900" mt="8" fontWeight="500">clássico</Text>
        </Box>
        <Box align="center">
          <Image boxSize="100px" src="/earth.svg" alt="Vida noturna" />
          <Text fontSize="4xl" color="gray.900" mt="8" fontWeight="500">e mais...</Text>
        </Box>

      </Stack>

    </Flex>
  );
}