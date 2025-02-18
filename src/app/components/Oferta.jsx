"use client";

import Image from "next/image";

export default function Oferta() {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center bg-gradient-to-b from-[#1a1a1a] via-[#121212] to-[#0f0f0f] text-white px-6 lg:px-12 py-12">
      {/* Caixa de informações */}
      <div className="bg-white text-gray-900 rounded-3xl shadow-lg w-full max-w-md lg:max-w-xl min-h-[400px] flex flex-col justify-between relative z-10 p-6 sm:p-8 lg:p-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Tudo isso por apenas
        </h2>

        <div className="flex justify-center items-end mt-2">
          <span className="flex items-start text-5xl sm:text-6xl font-bold">
            <span className="text-2xl sm:text-3xl mr-1">12x</span>R$
          </span>
          <span className="text-7xl sm:text-8xl font-extrabold text-[#05D8FF]">33</span>
          <span className="text-6xl sm:text-7xl font-semibold text-[#05D8FF]">,33</span>
        </div>

        <p className="text-center text-gray-500 mt-2 text-sm sm:text-base">
          ou <span className="font-semibold text-gray-800">R$ 400,00</span> à vista
        </p>

        <p className="text-center text-gray-600 mt-4 leading-relaxed text-sm sm:text-base">
          O valor de um curso que pode transformar sua carreira! A primeira turma começa em abril. Aproveite o preço especial de lançamento.
        </p>

        <button
          onClick={() => document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" })}
          className="relative mt-6 w-full sm:w-auto uppercase bg-gradient-to-b from-[#05D8FF] to-[#2B67DF] hover:from-[#09D9E0] hover:to-[#2A66DE] hover:brightness-110 text-white font-semibold text-lg py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 overflow-hidden"
        >
          Quero fazer parte!
          <span className="absolute inset-0 bg-white opacity-10 blur-md"></span>
        </button>

        <p className="text-center text-gray-500 text-xs sm:text-sm mt-4">
          Você terá <span className="font-semibold">7 dias de garantia</span> para experimentar a mentoria <span className="italic">"Saúde, Café e Inovação"</span>. Se não ficar satisfeito, devolveremos <span className="font-bold">100%</span> do valor investido.
        </p>
      </div>
    </section>
  );
}
