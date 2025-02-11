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
    <section className="bg-gradient-to-b from-[#0f0f0f] via-[#222222] to-[#2c2c2c] text-white px-6 md:px-36 flex flex-col md:flex-row items-center">
      {/* Conteúdo de texto */}
      <motion.div
        className="md:w-1/3 mx-auto text-center md:text-left mb-10 md:mb-0 py-12"
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
          className="space-y-4 text-gray-300 mb-6 text-xl font-semibold"
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
              className="flex items-center gap-3"
              variants={listItemVariants}
            >
              <AiFillCheckCircle className="text-[#05D8FF] text-2xl flex-shrink-0" />
              <span className="leading-tight">{text}</span>
            </motion.li>
          ))}
        </motion.ul>
        {/* Botão com animação de pulsação usando CSS */}
        <button className="mt-6 w-full bg-gradient-to-b from-[#05D8FF] to-[#2B67DF] hover:from-[#09D9E0] hover:to-[#2A66DE] text-white font-semibold px-24 py-3 rounded-full focus:outline-none animate-scale">
          QUERO PARTICIPAR AGORA
        </button>
      </motion.div>

      {/* Imagem */}
      <motion.div
        className="md:w-1/3 mx-auto flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/mulher.png"
          alt="Mentora"
          width={300}
          height={400}
          className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md rounded-lg"
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
