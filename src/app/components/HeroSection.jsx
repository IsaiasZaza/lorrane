"use client";

import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[90vh] flex items-center justify-center text-center text-white">
      {/* Vídeo de fundo */}
      <video
        src="/video/IMG_7504.MOV"
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        onEnded={(e) => e.currentTarget.play()}
      ></video>

      {/* Sobreposição escura */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-85"></div>

      {/* Conteúdo principal */}
      <div className="relative z-10 px-6 sm:px-8 md:px-12 max-w-4xl">
        <Image
          className="mx-auto"
          src="/logo.png"
          alt="Mulher com tablet"
          width={180}
          height={100}
        />
        <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          O <span className="text-[#05D8FF]">Primeiro Passo</span> para Transformar sua Carreira!
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl">
          Descubra como iniciar sua jornada empreendedora com orientação prática, segurança financeira e
          marketing de impacto.
        </p>

        {/* Botão com animação de pulsação */}
        <button
          className="mt-8 bg-gradient-to-b from-[#05D8FF] to-[#2B67DF] hover:from-[#09D9E0] hover:to-[#2A66DE] text-white font-semibold px-4 sm:px-6 md:px-12 py-2 sm:py-3 rounded-full focus:outline-none transition duration-300 transform hover:scale-105 animate-scale shadow-lg"
          onClick={() =>
            document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" })
          }
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
