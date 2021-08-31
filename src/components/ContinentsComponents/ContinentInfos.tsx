import { InfoIcon } from '@chakra-ui/icons';
import { Box, Stack, Text, Tooltip } from '@chakra-ui/react';

interface ContinentInfosProps {
  countries: number,
  languages: number,
  numberCities: number,
  cities: string[][],
}


export function ContinentInfos({ countries, languages, numberCities, cities }: ContinentInfosProps) {
  return (
    <Box >
      <Stack
        direction="row"
        spacing={["8", "8", "8", "16"]}
      >
        <Stack
          spacing="0"
          align="center"
        >
          <Text
            color="#FFBA08"
            fontSize={["28px", "28px", "28px", "48px"]}
            fontWeight="600"
          >
            {countries}
          </Text>
          <Text
            color="gray.900"
            fontSize={["16px", "16px", "16px", "24px"]}
            fontWeight="600"
          >
            países
          </Text>
        </Stack>
        <Stack
          spacing="0"
          align="center"
          pl="4"
        >
          <Text
            color="#FFBA08"
            fontSize={["28px", "28px", "28px", "48px"]}
            fontWeight="600"
          >
            {languages}
          </Text>
          <Text
            color="gray.900"
            fontSize={["16px", "16px", "16px", "24px"]}
            fontWeight="600"
          >
            línguas
          </Text>
        </Stack>
        <Stack
          spacing="0"
          align="center"
        >
          <Text
            color="#FFBA08"
            fontSize={["28px", "28px", "28px", "48px"]}
            fontWeight="600"
          >
            {numberCities}
          </Text>
          <Tooltip label={cities}>
            <Text
              color="gray.900"
              fontSize={["16px", "16px", "16px", "24px"]}
              fontWeight="600"
            >
              cidades +100<InfoIcon pl="1" w={6} h={6} color="gray" />
            </Text>
          </Tooltip>
        </Stack>
      </Stack>
    </Box>
  )
}