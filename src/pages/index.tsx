import { Banner } from '../components/Banner/banner';
import { Header } from '../components/Header/header';
import { LetsDoIt } from '../components/LetsdoIt/letsdoit';
import { Options } from '../components/Options/options';
import { Contnents } from '../components/Swipers/swiper';

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Options />
      <LetsDoIt />
      <Contnents />
    </>
  )
}