import { Swiper, SwiperSlide } from "swiper/react";
import { Flex } from '@chakra-ui/react';

import { Slider } from '../swiper';
import SwiperCore, { Navigation, Pagination, Keyboard } from 'swiper/core';

SwiperCore.use([Navigation, Pagination, Keyboard]);

export function Continents() {
  return (
    <Flex
      w="100%"
      h={["250px", "450px"]}
      maxW="1240px"
      mx="auto"
      mb="12"
      mt="12"
    >
      <Swiper
        navigation={true}
        pagination={true}
        keyboard={true}
        style={{ width: "100%", flex: 1 }}
      >
        <SwiperSlide>
          <Slider
            image="./continents/europe.jpg"
            title="Europa"
            subtitle="O mais antigo."
            continentRoute="europa"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slider
            image="./continents/africa.jpg"
            title="África"
            subtitle="Desfrute do incrível por do sol da savana."
            continentRoute="europa"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slider
            image="./continents/asia.jpg"
            title="Asia"
            subtitle="O maior continente.."
            continentRoute="europa"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slider
            image="./continents/oceania.jpg"
            title="Oceania"
            subtitle="O continente com as ilhas mais belas."
            continentRoute="europa"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slider
            image="./continents/america.jpg"
            title="America"
            subtitle="América do Sul, do Norte ou Central?"
            continentRoute="europa"
          />
        </SwiperSlide>

      </Swiper>
    </Flex>
  )
}