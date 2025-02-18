'use client'; // Marca o componente como Client Component

import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa'; // Ícone de play
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

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
    setIsPlaying((prev) => (prev === videoId ? null : videoId));
  };

  return (
    <section className="bg-gradient-to-b from-[#0f0f0f] via-[#222222] to-[#2c2c2c] text-white text-center py-12 px-6">
      <h2 className="text-xl md:text-4xl font-bold cursor-default">
        <span className="text-[#05D8FF]">Seus pacientes</span> podem estar esperando por <span className="text-[#05D8FF]">você.</span>
        <br />
        <span>Está preparado para <span className="text-[#05D8FF]">fazer a diferença?</span></span>
      </h2>
      <p className="mt-4 text-gray-300 mx-auto text-xl cursor-default">
        Os resultados dos atendimentos domiciliares transformam vidas!
        <span className='w-full'>
          <br />Confira o que os pacientes da Lorrane têm a dizer sobre o impacto do cuidado profissional e personalizado que receberam:
        </span>
      </p>

      <div className="flex justify-center gap-6 mt-6 flex-wrap">
        <Swiper
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Autoplay]}
          autoplay>
          <SwiperSlide>
            <div className="bg-[#0f0f0f] p-6 shadow-lg rounded-lg text-center">
              <p className="italic mb-4 font-bold">"O atendimento da Lorrane foi excepcional. Me recuperei rapidinho!"</p>
              <p>João Silva - Asa Sul, Brasília</p>
              <div className="text-[#05D8FF]">
                ★★★★★
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#0f0f0f] p-6 shadow-lg rounded-lg text-center">
              <p className="italic mb-4 font-bold">"Profissional competente e muito legal. Recomendo demais!"</p>
              <p>Maria Oliveira - Asa Norte, Brasília</p>
              <div className="text-[#05D8FF]">
                ★★★★★
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#0f0f0f] p-6 shadow-lg rounded-lg text-center">
              <p className="italic mb-4 font-bold">"Com a fisioterapia da Lorrane, voltei a ter qualidade de vida."</p>
              <p>Carlos Souza - Lago Sul, Brasília</p>
              <div className="text-[#05D8FF]">
                ★★★★★
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#0f0f0f] p-6 shadow-lg rounded-lg text-center">
              <p className="italic mb-4 font-bold">"Fiquei encantado com a eficácia e o carinho no atendimento."</p>
              <p>Ana Paula - Lago Norte, Brasília</p>
              <div className="text-[#05D8FF]">
                ★★★★★
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#0f0f0f] p-6 shadow-lg rounded-lg text-center">
              <p className="italic mb-4 font-bold">"O tratamento personalizado fez toda a diferença. Recomendo!"</p>
              <p>Ricardo Mendes - Plano Piloto, Brasília</p>
              <div className="text-[#05D8FF]">
                ★★★★★
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <button
        onClick={() => document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" })}
        className="mt-8 uppercase bg-gradient-to-b from-[#05D8FF] to-[#2B67DF] hover:from-[#09D9E0] hover:to-[#2A66DE] text-white font-semibold px-6 md:px-24 py-3 rounded-full focus:outline-none transition duration-300 transform hover:scale-105 animate-scale shadow-lg">
        Quero participar agora mesmo!
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
