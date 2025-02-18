"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AiFillCheckCircle } from "react-icons/ai";

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const MentoriaSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#0f0f0f] via-[#222222] to-[#2c2c2c] text-white px-6 md:px-36 flex flex-col lg:flex-row items-center">
      {/* Conteúdo de texto */}
      <motion.div
        className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 py-12 "
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-3xl text-[#f5f5f5] md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Esta <span className="text-[#05D8FF]">mentoria</span> é para{" "}
          <span className="text-[#05D8FF]">fisioterapeutas</span> que:
        </motion.h2>
        <motion.ul
          className="space-y-4 text-gray-300 mb-6 lg:text-xl text-base font-semibold"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          {[
            "Estão no início da carreira e querem evitar os erros mais comuns do mercado.",
            "Desejam trabalhar com autonomia e liberdade, atendendo em domicílio.",
            "Querem construir um modelo de negócio próprio e estável.",
            "Buscam conhecimento prático sobre marketing, gestão e documentação.",
          ].map((text, index) => (
            <motion.li
              key={index}
              className="flex items-center text-start gap-3"
              variants={listItemVariants}
            >
              <AiFillCheckCircle className="text-[#05D8FF] text-2xl flex-shrink-0" />
              <span className="leading-tight">{text}</span>
            </motion.li>
          ))}
        </motion.ul>
        {/* Botão com animação de pulsação usando CSS */}
        <button 
        onClick={() => document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" })}
        className="mt-8 bg-gradient-to-b from-[#05D8FF] to-[#2B67DF] hover:from-[#09D9E0] hover:to-[#2A66DE] text-white font-semibold px-6 md:px-24 py-3 rounded-full focus:outline-none transition duration-300 transform hover:scale-105 animate-scale shadow-lg uppercase">
          Quero participar agora mesmo!
        </button>
      </motion.div>

      {/* Imagem - fica ao lado em telas grandes e abaixo em telas menores */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center lg:justify-end order-last lg:order-none"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/lorrane-mentoria.png"
          alt="Mentora"
          className="w-full h-[500px] -mt-30 sm:w-[500px] md:w-[600px] lg:w-[700px] lg:h-[700px] object-cover lg:mt-1"
        />
      </motion.div>

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
    </section>
  );
};

export default MentoriaSection;
