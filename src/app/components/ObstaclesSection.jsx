"use client";

import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
};

const ObstaclesSection = () => {
    return (
        <motion.div
            className="w-full py-12 bg-gray-100 flex flex-col items-center text-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.5 }}
        >
            <motion.h2
                className="text-2xl md:text-4xl font-bold mb-6 w-1/2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Você também sente que algo está te{" "}
                <span className="text-red-500">impedindo de crescer</span> como fisioterapeuta?
            </motion.h2>
            <motion.ul
                className="text-lg text-gray-700 space-y-4 text-left"
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.2 }}
            >
                <motion.li
                    className="flex items-center text-xl text-black font-semibold"
                    variants={listItemVariants}
                >
                    <FaTimesCircle className="text-red-600 mr-2 text-2xl" /> Não sabe como obter o seu alvará e CNPJ ou prevenir questões burocráticas?
                </motion.li>
                <motion.li
                    className="flex items-center text-xl text-black font-semibold"
                    variants={listItemVariants}
                >
                    <FaTimesCircle className="text-red-600 mr-2 text-2xl" /> Tem medo de largar a estabilidade para empreender?
                </motion.li>
                <motion.li
                    className="flex items-center text-xl text-black font-semibold"
                    variants={listItemVariants}
                >
                    <FaTimesCircle className="text-red-600 mr-2 text-2xl" /> Fica perdido(a) ao tentar criar um plano financeiro que funcione?
                </motion.li>
                <motion.li
                    className="flex items-center text-xl text-black font-semibold"
                    variants={listItemVariants}
                >
                    <FaTimesCircle className="text-red-600 mr-2 text-2xl" /> Quer aprender a captar pacientes, mas não entende como usar as redes sociais de forma estratégica?
                </motion.li>
                <motion.li
                    className="flex items-center text-xl text-black font-semibold"
                    variants={listItemVariants}
                >
                    <FaTimesCircle className="text-red-600 mr-2 text-2xl" /> Sente insegurança por achar que não está pronto(a) para competir com profissionais mais experientes?
                </motion.li>
            </motion.ul>
            <motion.button
                className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-2xl focus:outline-none shadow-black"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    opacity: { duration: 0.5, delay: 0.5 },
                    y: { duration: 0.5, delay: 0.5 },
                    scale: { duration: 1.5, ease: "easeInOut", repeat: Infinity },
                }}
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.95 }}
            >
                SIM, QUERO MUDAR MINHA HISTÓRIA!
            </motion.button>

        </motion.div>
    );
};

export default ObstaclesSection;
