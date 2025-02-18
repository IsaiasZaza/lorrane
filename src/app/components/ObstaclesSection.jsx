"use client";

import React from "react";
import { FaTimesCircle } from "react-icons/fa";

const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
};

const ObstaclesSection = () => {
    return (
        <div className="w-full py-12 bg-[#F5F5F5] flex flex-col items-center text-center px-6">
            <h2 className="text-2xl text-[#0F0F0F] md:text-4xl font-bold mb-6 max-w-4xl">
                Você também sente que algo está te{" "}
                <span className="text-[#A52A2A]">impedindo de crescer</span> como fisioterapeuta?
            </h2>
            <ul className="text-lg text-[#2C2C2C] space-y-4 text-left">
                {[
                    "Não sabe como obter o seu alvará e CNPJ ou prevenir questões burocráticas?",
                    "Tem medo de largar a estabilidade para empreender?",
                    "Fica perdido(a) ao tentar criar um plano financeiro que funcione?",
                    "Quer aprender a captar pacientes, mas não entende como usar as redes sociais de forma estratégica?",
                    "Sente insegurança por achar que não está pronto(a) para competir com profissionais mais experientes?",
                ].map((text, index) => (
                    <li key={index} className="flex items-center text-xl font-semibold">
                        <div className="mr-2">
                            <FaTimesCircle className="text-[#A52A2A] text-2xl" />
                        </div>
                        {text}
                    </li>
                ))}
            </ul>
            
            {/* Botão com animação de pulsação usando CSS */}
            <button 
            className="mt-8 shadow-blue-300 bg-gradient-to-b from-[#05D8FF] to-[#2B67DF] hover:from-[#09D9E0] hover:to-[#2A66DE] text-white font-semibold px-6 md:px-24 py-3 rounded-full focus:outline-none transition duration-300 transform hover:scale-105 animate-scale shadow-"
            onClick={() => document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" })}
            >
                QUERO FAZER PARTE DO TIME!
            </button>

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

export default ObstaclesSection;
