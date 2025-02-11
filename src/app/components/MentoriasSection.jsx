"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const MentoriaSection = () => {
  return (
    <section className="bg-black text-white px-6 md:px-36 flex flex-col md:flex-row items-center">
      {/* Conteúdo de texto */}
      <motion.div
        className="md:w-1/3 mx-auto text-center md:text-left mb-10 md:mb-0 py-12"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Esta <span className="text-blue-400">mentoria</span> é para{" "}
          <span className="text-blue-400">fisioterapeutas</span> que:
        </motion.h2>
        <motion.ul
          className="space-y-4 text-gray-300 mb-6 text-xl font-semibold"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.li className="flex items-start gap-2" variants={listItemVariants}>
            <FaCheck className="text-green-500 mt-1" />
            <span>
              Estão no início da carreira e querem evitar os erros mais comuns do mercado.
            </span>
          </motion.li>
          <motion.li className="flex items-start gap-2" variants={listItemVariants}>
            <FaCheck className="text-green-500 mt-1" />
            <span>
              Desejam trabalhar com autonomia e liberdade, atendendo em domicílio.
            </span>
          </motion.li>
          <motion.li className="flex items-start gap-2" variants={listItemVariants}>
            <FaCheck className="text-green-500 mt-1" />
            <span>Querem construir um modelo de negócio próprio e estável.</span>
          </motion.li>
          <motion.li className="flex items-start gap-2" variants={listItemVariants}>
            <FaCheck className="text-green-500 mt-1" />
            <span>
              Buscam conhecimento prático sobre marketing, gestão e documentação.
            </span>
          </motion.li>
        </motion.ul>
        <motion.button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-sm focus:outline-none w-full shadow-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: [1, 1.05, 1],
          }}
          transition={{
            opacity: { duration: 0.5 },
            y: { duration: 0.5 },
            scale: { duration: 1.5, ease: "easeInOut", repeat: Infinity },
          }}
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          whileTap={{ scale: 0.95 }}
        >
          QUERO PARTICIPAR AGORA!
        </motion.button>
      </motion.div>

      {/* Imagem */}
      <motion.div
        className="md:w-1/4 mx-auto flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/mulher.png" // Substitua pelo caminho correto da imagem
          alt="Mentora"
          width={300}
          height={400}
          className="rounded-lg"
        />
      </motion.div>
    </section>
  );
};

export default MentoriaSection;
