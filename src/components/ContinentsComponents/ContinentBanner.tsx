import { Box, Flex, Text } from '@chakra-ui/react';

interface ContinentBannerProps {
  banner: string,
  title: string,
}
export function ContinentBanner({ banner, title }: ContinentBannerProps) {
  return (
    <Flex
      w="100%"
      h={["150px", "500px"]}
      bgImage={banner}
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
      justify={["center", "center", "center", "flex-start"]}
    >
      <Box
        height="100px"
        ml={["0", "16"]}
        my={["12", "12", "40", "360"]}
        textAlign={["center", "left"]}
      >
        <Text
          fontWeight="600"
          color="#F5F8FA"
          fontSize={["4xl", "6xl"]}
        >
          {title}
        </Text>
      </Box>
    </Flex>
  )
}