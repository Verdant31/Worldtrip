import { GetStaticProps } from 'next';
import { Box, Flex, Image, SimpleGrid, Stack, Text, Tooltip } from '@chakra-ui/react';

import { RichText } from 'prismic-dom';
import { InfoIcon } from '@chakra-ui/icons';

import { getPrismicClient } from '../../services/prismic';
import { ContinentBanner } from '../../components/ContinentsComponents/ContinentBanner';
import { ContinentDescription } from '../../components/ContinentsComponents/ContinentDescription';
import { ContinentInfos } from '../../components/ContinentsComponents/ContinentInfos';
import { ContinentCities } from '../../components/ContinentsComponents/ContinentCities';

interface Continent {
  data: {
    banner: string,
    title: string;
    description: string;
    citiesQuant: number,
    languages: number,
    countries: number,
    cities: [{
      flag: string,
      cityimage: string,
      name: string,
      country: string
    }],
  };
}


interface ContinentProps {
  continent: Continent
}


export default function Continent({ continent }: ContinentProps) {
  const cities = continent.data.cities.map((citie) => {
    return [citie.name.concat(', ')]
  })
  cities.push(["etc", "..."]);

  return (
    <Box mb="100px">
      <ContinentBanner banner={continent.data.banner} title={continent.data.title} />
      <Flex mt="20">
        <Stack
          direction={["column", "column", "row"]}
          mx="auto"
          spacing={["20", "20", "20", "60"]}
          align="center"
        >
          <ContinentDescription description={continent.data.description} />
          <ContinentInfos cities={cities} languages={continent.data.languages} countries={continent.data.countries} numberCities={continent.data.citiesQuant} />
        </Stack>
      </Flex>

      <ContinentCities cities={continent.data.cities} />
    </Box>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params;
  const prismic = getPrismicClient()
  const response = await prismic.getByUID('continent', String(slug?.slug), {})

  const cities = response.data.cities.map((item: any, indice: any) => {
    return {
      flag: item.flag.url,
      cityimage: item.cityimage.url,
      name: RichText.asText(item.name),
      country: RichText.asText(item.country),
    }
  })

  const continent = {
    data: {
      title: RichText.asText(response.data.title),
      description: RichText.asText(response.data.description),
      citiesQuant: Number(RichText.asText(response.data.citiesquant)),
      languages: Number(RichText.asText(response.data.languages)),
      countries: Number(RichText.asText(response.data.countries)),
      cities: cities,
      banner: response.data.banner.url,
    }
  }

  return {
    props: {
      continent
    }
  }
}