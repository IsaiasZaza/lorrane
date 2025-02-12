'use client'; // Marca o componente como Client Component

import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa'; // Ícone de play

const QueroFaze = () => {
  const videos = [
    {
      id: 1,
      videoUrl: "https://example.com/path/to/video1.mp4",
      posterUrl: "./teste.jpg"
    },
    {
      id: 2,
      videoUrl: "https://example.com/path/to/video2.mp4",
      posterUrl: "./teste.jpg"
    },
    {
      id: 3,
      videoUrl: "https://example.com/path/to/video3.mp4",
      posterUrl: "./teste.jpg"
    }
  ];

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = (videoId) => {
    setIsPlaying((prev) => (prev === videoId ? null : videoId)); // Alterna entre mostrar e esconder
  };

  return (
    <section className="bg-gradient-to-b from-[#0f0f0f] via-[#222222] to-[#2c2c2c] text-white text-center py-12 px-6">
      <h2 className="text-xl md:text-3xl font-bold">
        <span className="text-[#05D8FF]">Seus pacientes</span> podem estar esperando por <span className="text-[#05D8FF]">você</span>. Está preparado para <span className="text-[#05D8FF]">fazer a diferença?</span>
      </h2>
      <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
        Os resultados dos atendimentos domiciliares transformam vidas! Confira o que os pacientes
        da Lar.me têm a dizer sobre o impacto do cuidado profissional e personalizado que receberam:
      </p>

      <div className="flex justify-center gap-6 mt-6 flex-wrap">
        {videos.map((video) => (
          <div
            key={video.id}
            className="relative w-80 h-56 md:w-96 md:h-56 bg-gray-800 rounded-lg overflow-hidden"
          >
            {/* Imagem de Capa */}
            {isPlaying !== video.id && (
              <div
                className="absolute inset-0 flex justify-center items-center cursor-pointer"
                onClick={() => handlePlayClick(video.id)}
              >
                <img
                  src={video.posterUrl}
                  alt={`Capa do vídeo ${video.id}`}
                  className="w-full h-full object-cover"
                />
                <FaPlay
                  className="absolute text-white text-4xl"
                />
              </div>
            )}

            {/* Vídeo */}
            {isPlaying === video.id && (
              <video
                className="w-full h-full object-cover"
                src={video.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                controls
                aria-label={`Vídeo do paciente ${video.id}`}
              >
                Seu navegador não suporta o elemento de vídeo.
              </video>
            )}
          </div>
        ))}
      </div>

      {/* Botão com animação de pulsação usando CSS */}
      <button className="mt-8 bg-gradient-to-b from-[#05D8FF] to-[#2B67DF] hover:from-[#09D9E0] hover:to-[#2A66DE] text-white font-semibold px-6 md:px-24 py-3 rounded-full focus:outline-none transition duration-300 transform hover:scale-105 animate-scale shadow-lg">
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

export default QueroFaze;
