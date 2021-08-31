import { SwiperSlide } from "swiper/react";
import { Box, Flex, Link, ResponsiveValue, Text } from '@chakra-ui/react';

type BackgroundImage = "none" | (string & {});

interface swiperProps {
  title: String,
  subtitle: String,
  image: ResponsiveValue<BackgroundImage>,
  continentRoute: String,
}

export function Slider({ image, title, subtitle, continentRoute }: swiperProps) {
  return (
    <SwiperSlide>
      <Flex
        w="100%"
        h="100%"
        align="center"
        justify="center"
        direction="column"
        bgImage={image}
        bgSize="cover"
        bgPosition="center"

        textAlign="center"
      >
        <Box width={["220px", "220px", "220px", "400px"]}>
          <Link
            as="a"
            textDecoration="none"
            href={`/continents/${continentRoute}`}
          >
            <Text
              color="White"
              fontSize={["4xl", "6xl"]}
              fontWeight="bold"
            >
              {title}
            </Text>
            <Text
              fontSize="2xl"
              color="White"
            >
              {subtitle}
            </Text>
          </Link>
        </Box>
      </Flex>
    </SwiperSlide>
  )
}