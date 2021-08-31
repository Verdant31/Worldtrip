import { Box, Text } from '@chakra-ui/react';

interface ContinentDescriptionProps {
  description: String,
}


export function ContinentDescription({ description }: ContinentDescriptionProps) {
  return (
    <Box
      width={["300px", "300px", "300px", "500px"]}
      fontSize={["18px", "18px", "18px", "24px"]}
    >
      <Text>{description}</Text>
    </Box>
  )
}