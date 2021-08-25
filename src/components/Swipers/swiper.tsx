import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"



// import Swiper core and required modules
import SwiperCore, {
  Navigation, Pagination, Mousewheel, Keyboard
} from 'swiper/core';
import { Box, Flex, Image, Text } from '@chakra-ui/react';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Keyboard]);


export function Contnents() {
  return (
    <Flex
      w="100%"
      h="450px"
      maxW="1240px"
      mx="auto"
      mb="40"
      mt="20"
    >
      <Swiper
        navigation={true}
        pagination={true}
        keyboard={true}
        className="mySwiper"
        style={{ width: "100%", flex: 1 }}
      >
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="./europe.jpg"
            bgSize="cover"
            textAlign="center"
          >
            <Text color="Black" fontSize="6xl" fontWeight="bold">Europa</Text>
            <Text fontSize="2xl" color="Black">O continente mais antigo.</Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="./continents/africa.jpg"
            bgSize="cover"
            textAlign="center"
          >
            <Text color="Black" fontSize="6xl" fontWeight="bold">Africa</Text>
            <Text fontSize="2xl" color="Black">Desfrute do incrível por do sol da savana.</Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="./continents/asia.jpg"
            bgSize="cover"
            textAlign="center"
          >
            <Text color="white" fontSize="6xl" fontWeight="bold">Asia</Text>
            <Text fontSize="2xl" color="white">O maior continente.</Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="./continents/oceania.jpg"
            bgSize="cover"
            textAlign="center"
          >
            <Text color="white" fontSize="6xl" fontWeight="bold">Oceania</Text>
            <Text fontSize="2xl" color="white">O continente com as ilhas mais belas.</Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="./continents/america.jpg"
            bgSize="cover"
            textAlign="center"
          >
            <Text color="white" fontSize="6xl" fontWeight="bold">America</Text>
            <Text fontSize="2xl" color="white">América do Sul, do Norte ou Central?</Text>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}