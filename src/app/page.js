import Image from "next/image";
import HeroSection from "./components/HeroSection";
import ObstaclesSection from "./components/ObstaclesSection";
import MentoriasSection from "./components/MentoriasSection";
import ModulosMentoria from "./components/ModulosMentoria";
import QueroFaze from "./components/QueroFaze";
import FAQ from "./components/Faq";
import Formulário from "./components/Formulario";
import ImersaoSection from "./components/ImersaoSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ObstaclesSection />
      <MentoriasSection />
      <ModulosMentoria />
      <QueroFaze />
      <ImersaoSection />
        <Formulário />
      <FAQ />
    </>
  );
}
