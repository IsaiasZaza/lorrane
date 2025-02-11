'use client'
import React from "react";
import { FaFileAlt, FaLayerGroup, FaFileWord, FaIdCard } from "react-icons/fa";

const ImersaoSection = () => {
  const items = [
    { 
      text: "Material completo para consulta pós-mentoria.", 
      icon: <FaFileAlt className="text-3xl" />,
      dark: true 
    },
    { 
      text: "30 templates prontos para redes sociais.", 
      icon: <FaLayerGroup className="text-3xl" />,
      dark: false 
    },
    { 
      text: "Documentos editáveis em Word e Canva para facilitar sua rotina", 
      icon: <FaFileWord className="text-3xl" />,
      dark: true 
    },
    { 
      text: "Cartões de visita editáveis no Canva.", 
      icon: <FaIdCard className="text-3xl" />,
      dark: false 
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[#e5e5e5] to-[#F5F5F5] py-16 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0f0f0f] uppercase">
        Você também vai <span className="text-[#05D8FF]">ganhar</span>
      </h2>
      <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
        Ao fazer parte da nossa jornada, você terá acesso a uma série de recursos que ajudarão a impulsionar ainda mais o seu sucesso.
      </p>

      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {items.map((item, index) => (
          <div
            key={index}
            className={`w-full sm:w-72 md:w-80 lg:w-96 p-6 rounded-xl shadow-xl border transition-all transform hover:scale-105 hover:shadow-2xl
              ${item.dark ? "bg-black text-[#f5f5f5] border-black" : "bg-[#f5f5f5] text-black border-gray-300"}`}
            style={{ borderBottom: "3px solid #05D8FF" }}
          >
            <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-full bg-[#05D8FF] shadow-md">
              {item.icon}
            </div>
            <p className="text-lg font-semibold">{item.text}</p>
          </div>
        ))}
      </div>

      <button className="mt-8 bg-gradient-to-b from-[#05D8FF] to-[#2B67DF] hover:from-[#09D9E0] hover:to-[#2A66DE] text-white font-semibold px-24 py-3 rounded-full focus:outline-none transition duration-300 transform hover:scale-105 animate-scale shadow-lg">
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
    </section>
  );
};

export default ImersaoSection;
