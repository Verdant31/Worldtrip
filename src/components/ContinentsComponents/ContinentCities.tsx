import { Box, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'

interface ContinentCitiesProps {
  cities: [{
    flag: string,
    cityimage: string,
    name: string,
    country: string
  }]
}


export function ContinentCities({ cities }: ContinentCitiesProps) {
  return (
    <Box
      mx="auto"
      width="80vw"
      fontSize="24px"
      mt="20"
    >
      <Text
        mb="12"
        fontWeight="500"
        fontSize="36px"
        color="gray.900"
      >
        Cidades +100
      </Text>
      <SimpleGrid
        flex="1"
        gap={["20", "28"]}
        minChildWidth="250px"
      >
        {cities.map((citie) => {
          return (
            <Box
              key={citie.name}
              border="1px"
              height={["290px"]}
              borderRadius="8"
              borderColor="#FFBA08"
            >
              <Image
                src={citie.cityimage}
                alt="Imagem da cidade"
                width="100%"
                height={["70%", "", "", ""]}
              />
              <Flex justify="space-between">
                <Box
                  ml="4"
                  mt="4"
                >
                  <Text fontSize="20px">{citie.name}</Text>
                  <Text fontSize="16px">{citie.country}</Text>
                </Box>
                <Image
                  mt="6"
                  mr="4"
                  src={citie.flag}
                  alt="Bandeira do país"
                  height="30px"
                  width="30px"
                />
              </Flex>
            </Box>
          )
        })}
      </SimpleGrid>
    </Box >
  )
}