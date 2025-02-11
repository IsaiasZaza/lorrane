"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Importação dinâmica do componente react-typed (com SSR desabilitado)
import dynamic from "next/dynamic";
const Typed = dynamic(
  () => import("react-typed").then((mod) => mod.ReactTyped),
  { ssr: false }
);

const HeroSection = () => {
  return (
    <div className="relative w-full h-[650px] flex items-center justify-center text-center text-white">
      {/* Iframe de fundo */}
      <iframe
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&controls=0&showinfo=0"
        frameBorder="0"
        allow="autoplay; fullscreen; loop; encrypted-media; picture-in-picture"
      ></iframe>

      {/* Sobreposição escura */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70"></div>

      {/* Conteúdo principal */}
      <div className="relative z-10 px-6 max-w-4xl">
        <Image
          className="text-center mx-auto"
          src="/logo.png"
          alt="Mulher com tablet"
          width={180}
          height={100}
        />
        <h1 className="text-3xl md:text-5xl font-bold">
          O <span className="text-blue-400">Primeiro Passo</span> para{" "}
          <Typed
            strings={[
              "Transformar sua Carreira!",
              "Mudar sua Vida Profissional!",
              "Alavancar sua Fisioterapia Domiciliar!",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </h1>
        <p className="mt-4 text-lg">
          Descubra como iniciar sua jornada empreendedora com orientação prática, segurança
          financeira e marketing de impacto.
        </p>

        {/* Botão com efeito de animação usando Framer Motion */}
        <motion.button
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
          animate={{
            scale: [1, 1.05, 1],
            transition: {
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
            },
          }}
          className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg focus:outline-none shadow-black"
        >
          QUERO FAZER PARTE DO TIME!
        </motion.button>
      </div>
    </div>
  );
};

export default HeroSection;
