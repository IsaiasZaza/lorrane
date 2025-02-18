"use client";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "A mentoria será online ou presencial?",
      answer:
        "A mentoria será 100% online, com aulas gravadas e acesso a materiais exclusivos na plataforma.",
    },
    {
      question: "Preciso ter experiência prévia para participar?",
      answer:
        "Não! A mentoria foi criada para atender tanto iniciantes quanto profissionais que desejam se especializar em atendimento domiciliar.",
    },
    {
      question: "O que está incluído no preço do curso?",
      answer:
        "O preço do curso inclui acesso completo ao conteúdo, materiais de estudo, fóruns de discussão e certificação ao final do curso.",
    },
    {
      question: "Posso parcelar o valor da mentoria?",
      answer:
        "Sim, oferecemos opções de pagamento parcelado no cartão de crédito.",
    },
    {
      question: "Como funcionam os bônus?",
      answer:
        "Os bônus serão disponibilizados ao longo da mentoria, com acesso garantido após a inscrição.",
    },
    {
      question: "Até quando posso me inscrever?",
      answer:
        "As inscrições para a primeira turma encerram em [data específica]. Garanta sua vaga antes que as inscrições acabem!",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-8 sm:py-12 bg-gradient-to-b from-[#e5e5e5] to-[#F5F5F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center mb-4 sm:mb-8 text-[#00C6FF] font-bold">
          Tudo o que você precisa saber!
        </h2>
        <p className="text-center text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
          Respondemos as perguntas mais frequentes para você começar com o pé direito.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white bg-opacity-70 backdrop-blur-md p-4 sm:p-6 rounded-2xl transition-shadow transform hover:-translate-y-1 duration-300 ease-in-out ${
                activeIndex === index
                  ? "border-l-4 border-[#00C6FF] shadow-xl"
                  : "border border-gray-200 shadow-md hover:shadow-xl"
              }`}
            >
              <div
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center cursor-pointer"
              >
                <h3 className="text-base sm:text-lg lg:text-xl font-medium text-gray-900">
                  {faq.question}
                </h3>
                {activeIndex === index ? (
                  <FiMinus className="text-2xl text-[#00C6FF]" />
                ) : (
                  <FiPlus className="text-2xl text-gray-500" />
                )}
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-96 mt-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
