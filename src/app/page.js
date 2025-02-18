import Image from "next/image";
import HeroSection from "./components/HeroSection";
import ObstaclesSection from "./components/ObstaclesSection";
import MentoriasSection from "./components/MentoriasSection";
import ModulosMentoria from "./components/ModulosMentoria";
import QueroFaze from "./components/QueroFaze";
import FAQ from "./components/Faq";
import Formulário from "./components/Formulario";
import ImersaoSection from "./components/ImersaoSection";
import Oferta from "./components/Oferta";
import Lorrane from "./components/Lorrane";
import Footer from "./components/Footer";
import ModulesFaq from "./components/ModulesFaq";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ObstaclesSection />
      <MentoriasSection />
      <ModulesFaq />
      <QueroFaze />
      <ImersaoSection />
      <Oferta />
      <Lorrane> </Lorrane>
      <Formulário />
      <FAQ />
      <Footer />
    </>
  );
}
