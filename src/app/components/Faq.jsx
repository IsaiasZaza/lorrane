"use client";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Como posso me inscrever no curso?",
      answer:
        "Você pode se inscrever diretamente em nosso site, na página do curso de sua preferência. Basta clicar em 'Inscreva-se' e preencher os dados necessários.",
    },
    {
      question: "Os cursos são presenciais ou online?",
      answer:
        "Nossos cursos são 100% online, permitindo que você estude de qualquer lugar e no seu próprio ritmo.",
    },
    {
      question: "O que está incluído no preço do curso?",
      answer:
        "O preço do curso inclui acesso completo ao conteúdo, materiais de estudo, fóruns de discussão e certificação ao final do curso.",
    },
    {
      question: "Há algum pré-requisito para os cursos?",
      answer:
        "A maioria dos nossos cursos não exige pré-requisitos. No entanto, alguns cursos podem exigir conhecimentos básicos em áreas relacionadas.",
    },
    {
      question: "Como funciona a certificação?",
      answer:
        "Ao concluir um curso, você receberá um certificado digital que pode ser baixado diretamente do nosso portal de cursos.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gradient-to-b from-[#e5e5e5] to-[#F5F5F5]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl text-center mb-8 text-[#00C6FF] font-bold">
          Tudo o que você precisa saber!
        </h2>
        <p className="text-center text-lg text-gray-700 mb-6">
          Respondemos as perguntas mais frequentes para você começar com o pé direito.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white bg-opacity-70 backdrop-blur-md p-6 rounded-2xl transition-shadow transform hover:-translate-y-1 duration-300 ease-in-out ${
                activeIndex === index
                  ? "border-l-4 border-[#00C6FF] shadow-xl"
                  : "border border-gray-200 shadow-md hover:shadow-xl"
              }`}
            >
              <div
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center cursor-pointer"
              >
                <h3 className="text-lg lg:text-xl font-medium text-gray-900">
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
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
