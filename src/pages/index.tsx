import { Banner } from '../components/Banner/banner';
import { LetsDoIt } from '../components/LetsdoIt/letsdoit';
import { Options } from '../components/Options/options';
import { Continents } from '../components/Swipers/swipers';

export default function Home() {
  return (
    <>
      <Banner />
      <Options />
      <LetsDoIt />
      <Continents />
    </>
  )
}