"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[80vh] flex items-center justify-center text-center text-white">
      {/* Iframe de fundo */}
      <iframe
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://www.youtube.com/embed/YYXyLYA2M7I?si=q34PJ92aQqliw3IS"
        frameBorder="0"
        allow="autoplay; fullscreen; loop; encrypted-media; picture-in-picture"
      ></iframe>

      {/* Sobreposição escura */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-85"></div>

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
          O <span className="text-[#05D8FF]">Primeiro Passo</span> para Transformar sua Carreira!
        </h1>
        <p className="mt-4 text-lg">
          Descubra como iniciar sua jornada empreendedora com orientação prática, segurança
          financeira e marketing de impacto.
        </p>

        {/* Botão com animação de pulsação usando CSS */}
        <button
          className="mt-8 bg-gradient-to-b from-[#05D8FF] to-[#2B67DF] hover:from-[#09D9E0] hover:to-[#2A66DE] text-white font-semibold px-6 md:px-24 py-3 rounded-full focus:outline-none transition duration-300 transform hover:scale-105 animate-scale shadow-lg"
          onClick={() => document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" })}
        >
          QUERO FAZER PARTE DO TIME!
        </button>
      </div>

      <style jsx>{`
        @keyframes scaleAnimation {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        .animate-scale {
          animation: scaleAnimation 1.5s ease-in-out infinite;
        }

        .animate-scale:hover {
          animation: scaleAnimation 0.2s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
