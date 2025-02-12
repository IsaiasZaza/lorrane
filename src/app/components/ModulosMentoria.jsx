"use client"

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const modules = [
  {
    id: 1,
    name: "Módulo 1 - Antônio (Contador)",
    image: "/cap1.png",
    bullets: [
      "Como abrir o CNPJ sem dores de cabeça.",
      "Registro da empresa no CREFITO.",
      "Custos mensais e emissão de notas fiscais.",
      "Como declarar o Imposto de Renda."
    ]
  },
  {
    id: 2,
    name: "Módulo 2 - Danilo (Educador Financeiro)",
    image: "/cap2.png",
    bullets: [
      "Gerencie suas finanças com estratégia.",
      "Aprenda a investir e fazer seu dinheiro trabalhar por você."
    ]
  },
  {
    id: 3,
    name: "Módulo 3 - Social Media",
    image: "/cap3.png",
    bullets: [
      "Estratégias para redes sociais: Instagram, Facebook, tráfego orgânico e pago.",
      "Como captar pacientes e criar uma comunicação profissional.",
      "Construção de marca: logotipo, cores e persona."
    ]
  },
  {
    id: 4,
    name: "Módulo 4 - Lorrane",
    image: "/cap4.png",
    bullets: [
      "Organização de rotina e metas realistas.",
      "Materiais e documentos essenciais para atendimento domiciliar.",
      "Como evoluir profissionalmente e superar desafios."
    ]
  }
];

const ModulosMentoria = () => {
  return (
    <section className="bg-gradient-to-b from-[#e5e5e5] to-[#F5F5F5] py-12 px-4">
      <h2 className="text-center text-2xl md:text-4xl font-bold mb-8">
        Conheça os módulos da mentoria:{" "}
        <span className="text-[#05D8FF]">"Saúde, Café e Inovação:"</span>
      </h2>
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            800: { slidesPerView: 3 },
            1024: { slidesPerView: 3 }
          }}
          loop={true}
        >
          {modules.map((module) => (
            <SwiperSlide key={module.id}>
              <div className="relative rounded-lg overflow-hidden shadow-lg group transform hover:scale-105 transition duration-300">
                <div className="relative lg:h-[60vh] h-[63vh]">
                  <Image
                    src={module.image}
                    alt={module.name}
                    layout="fill"
                    objectFit="cover"
                  />
                  {/* Overlay com texto que aparece no hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <h3 className="text-white text-lg font-bold text-center mb-1">
                      {module.name}
                    </h3>
                    <ul className="text-white text-xs text-center">
                      {module.bullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ModulosMentoria;
