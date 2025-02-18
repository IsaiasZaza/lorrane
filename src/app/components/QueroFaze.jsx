'use client'; // Marca o componente como Client Component

import React, { useState } from 'react';
import { FaPlay, FaStar } from 'react-icons/fa'; // Ícone de play e estrela
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

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

  const testimonials = [
    {
      id: 1,
      name: "Ana Luísa Portela",
      subtitle: "Um comentário",
      time: "5 meses atrás",
      comment:
        "Lorrane é uma excelente profissional, me atendeu com muito carinho e dedicação. Um problema que estava me atormentando por meses foi resolvido em algumas sessões – muito cuidadosa e, o melhor, o atendimento a domicílio."
    },
    {
      id: 2,
      name: "Raquel Zaine",
      subtitle: "Raquel Zaine",
      commentsCount: "7 comentários",
      time: "9 meses atrás",
      comment:
        "Excelente profissional! Atenciosa, prestativa, dedicada, sabe estabelecer um bom vínculo com o paciente que, no caso da minha avó, foi essencial para que já pudéssemos ver os resultados do trabalho desenvolvido. Vc é 10!"
    },
    {
      id: 3,
      name: "Estela Freitas",
      subtitle: "Estela Freitas",
      commentsCount: "2 comentários",
      time: "4 meses atrás",
      comment:
        "Lorrane é referência no atendimento domiciliar e na fisioterapia com idosos em Brasília, sempre muito prestativa e cuidadosa!"
    },
    {
      id: 4,
      name: "Josy Portela",
      subtitle: "Josy Portela",
      commentsCount: "2 comentários",
      time: "11 meses atrás",
      comment:
        "Que profissional excelente! Lorrane demonstrou competência ao proporcionar um atendimento especializado à minha avó. Sua empatia e comunicação clara foram um diferencial, criando um ambiente acolhedor. …Mais"
    },
    {
      id: 5,
      name: "Leonor Costa",
      subtitle: "Leonor Costa",
      commentsCount: "6 comentários",
      time: "5 meses atrás",
      comment:
        "Lorrane é uma excelente fisioterapeuta, atenciosa e competente! Super recomendo!"
    },
    {
      id: 6,
      name: "Eldo Gomes",
      subtitle: "Eldo Gomes",
      commentsCount: "17 comentários · 11 fotos",
      time: "4 meses atrás",
      comment: "A melhor fisioterapeuta para idosos em Brasília!"
    },
    {
      id: 7,
      name: "Lidiane kaizer",
      subtitle: "Lidiane kaizer",
      commentsCount: "5 comentários",
      time: "11 meses atrás",
      comment:
        "Ótima fisioterapeuta, atenciosa e muito carinhosa com o paciente! Atendeu meu avô com muita paciência e profissionalismo!"
    },
    {
      id: 8,
      name: "Victor Campos",
      subtitle: "Victor Campos",
      commentsCount: "3 comentários",
      time: "4 meses atrás",
      comment: "Excelente profissional! Recomendo demais."
    },
    {
      id: 9,
      name: "Darlyson Backup",
      subtitle: "Darlyson Backup",
      time: "5 meses atrás",
      comment: "Super cuidadosa e atenciosa com a minha velhinha! <3"
    },
    {
      id: 10,
      name: "Foco Automotivo",
      subtitle: "Foco Automotivo",
      commentsCount: "4 comentários",
      time: "10 meses atrás",
      comment:
        "Excelente profissional! Super cuidadosa e atenciosa com seus pacientes! Atendimento personalizado e humano!"
    },
    {
      id: 11,
      name: "Larissa Jesus",
      time: "11 meses atrás",
      comment: ""
    },
    {
      id: 12,
      name: "Hugo Lacerda",
      comment: ""
    }
  ];

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = (videoId) => {
    setIsPlaying((prev) => (prev === videoId ? null : videoId));
  };

  return (
    <section className="bg-gradient-to-b from-[#0f0f0f] via-[#222222] to-[#2c2c2c] text-white text-center py-12 px-6">
      <h2 className="text-xl md:text-4xl font-bold cursor-default">
        <span className="text-[#05D8FF]">Seus pacientes</span> podem estar esperando por{" "}
        <span className="text-[#05D8FF]">você.</span>
        <br />
        <span>
          Está preparado para{" "}
          <span className="text-[#05D8FF]">fazer a diferença?</span>
        </span>
      </h2>
      <p className="mt-4 text-gray-300 mx-auto text-xl cursor-default">
        Os resultados dos atendimentos domiciliares transformam vidas!
        <span className="w-full">
          <br />
          Confira o que os pacientes da Lorrane têm a dizer sobre o impacto do
          cuidado profissional e personalizado que receberam:
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
          autoplay
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-[#0f0f0f] p-6 shadow-lg rounded-lg text-left h-80 flex flex-col justify-between">
                <div>
                  <p className="font-bold text-lg">{item.name}</p>
                  <p className="text-xs text-gray-400">
                    {item.subtitle && `${item.subtitle} • `}
                    {item.commentsCount && `${item.commentsCount} • `}
                    {item.time}
                  </p>
                  {item.comment && (
                    <p
                      className="italic mt-2"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden"
                      }}
                    >
                      {item.comment}
                    </p>
                  )}
                </div>
                <div className="flex justify-end text-[#05D8FF]">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button
        onClick={() =>
          document
            .getElementById("formulario")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="mt-8 uppercase bg-gradient-to-b from-[#05D8FF] to-[#2B67DF] hover:from-[#09D9E0] hover:to-[#2A66DE] text-white font-semibold px-6 md:px-24 py-3 rounded-full focus:outline-none transition duration-300 transform hover:scale-105 animate-scale shadow-lg"
      >
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
