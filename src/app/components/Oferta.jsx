"use client";

import Image from "next/image";

export default function Oferta() {
  return (
<section className="relative flex flex-col lg:flex-row items-center justify-center bg-gradient-to-b from-[#1a1a1a] via-[#121212] to-[#0f0f0f] text-white px-6 lg:px-12 py-12">
{/* Caixa de informações */}
      <div className="bg-gradient-to-b from-[#f5f5f5] to-[#ebebeb] text-[#0f0f0f] p-8 lg:p-14 rounded-3xl shadow-2xl max-w-md lg:max-w-xl min-h-[400px] flex flex-col justify-between relative z-10">
        <h2 className="text-4xl font-bold text-center">Tudo isso por apenas</h2>
        <p className="text-center text-gray-700 mt-3 leading-relaxed">
          O valor de um curso que pode transformar sua carreira inteira! A primeira turma será agora em abril, aproveite o preço especial de lançamento!
        </p>
        <h3 className="text-xl font-semibold text-center mt-5">
          Participe agora por apenas
        </h3>
        <div className="flex justify-center items-end mt-3">
          <span className="text-4xl font-extrabold">R$</span>
          <span className="text-6xl font-extrabold text-[#00C6FF]">99</span>
          <span className="text-2xl font-semibold text-[#00C6FF]">,99</span>
        </div>

        <button className="w-full sm:w-auto uppercase mt-6 bg-gradient-to-b from-[#00C6FF] to-[#0066FF] hover:brightness-110 text-white font-semibold text-lg sm:text-base py-4 rounded-lg focus:outline-none shadow-md transform hover:scale-105 transition duration-300 relative overflow-hidden px-6">
  Quero fazer parte!
  <span className="absolute inset-0 bg-white opacity-10 blur-lg"></span>
</button>


        <p className="text-gray-600 text-sm text-center mt-4">
          Você terá <span className="font-semibold">7 dias de garantia</span> para experimentar a mentoria <span className="italic">"Saúde, Café e Inovação"</span>. Caso não se sinta satisfeito(a), devolveremos <span className="font-bold">100%</span> do valor investido. Sem riscos, sem <span className="font-bold">complicações</span>.
        </p>
      </div>
    </section>
  );
}
