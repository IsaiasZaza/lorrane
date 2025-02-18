"use client";
import { useState } from "react";
import { 
  FiUserCheck, 
  FiBriefcase, 
  FiDollarSign, 
  FiGlobe, 
  FiCalendar,
  FiChevronDown,
  FiChevronUp 
} from "react-icons/fi";

const ModulesFaq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const modulesData = [
    {
      icon: <FiUserCheck className="text-[#00C6FF] w-8 h-8 sm:w-10 sm:h-10 mr-4" />,
      question: "Módulo 1 - Bem-vinda ao Time Café com Consistência",
      answer: (
        <ul className="list-disc pl-8 space-y-2 text-gray-700 text-base sm:text-lg font-medium">
          <li>Aula 1: BOAS VINDAS</li>
          <li>Aula 2: Conheça sua mentora!</li>
          <li>Aula 3: Eu quero te conhecer 🩵</li>
          <li>Aula 4: Deixe aqui sua sugestão de aula</li>
        </ul>
      ),
    },
    {
      icon: <FiBriefcase className="text-[#00C6FF] w-8 h-8 sm:w-10 sm:h-10 mr-4" />,
      question: "Módulo 2: Descomplicando o CNPJ com a presença do contador",
      answer: (
        <ul className="list-disc pl-8 space-y-2 text-gray-700 text-base sm:text-lg font-medium">
          <li>Aula 1: CNPJ x Pessoa física. Qual é o melhor?</li>
          <li>Aula 2: Como abrir o CNPJ sem dores de cabeça</li>
          <li>Aula 3: Registro da empresa no CREFITO</li>
          <li>Aula 4: Custos mensais e emissão de notas fiscais</li>
          <li>Aula 5: Como declarar o Imposto de Renda</li>
        </ul>
      ),
    },
    {
      icon: <FiDollarSign className="text-[#00C6FF] w-8 h-8 sm:w-10 sm:h-10 mr-4" />,
      question: "Módulo 3: Inteligência Financeira com um especialista",
      answer: (
        <ul className="list-disc pl-8 space-y-2 text-gray-700 text-base sm:text-lg font-medium">
          <li>Aula 1: Gerencie suas finanças com estratégia</li>
          <li>Aula 2: Aprenda a investir e fazer seu dinheiro trabalhar por você</li>
        </ul>
      ),
    },
    {
      icon: <FiGlobe className="text-[#00C6FF] w-8 h-8 sm:w-10 sm:h-10 mr-4" />,
      question: "Módulo 4 - Marketing e redes sociais para fisioterapeutas",
      answer: (
        <ul className="list-disc pl-8 space-y-2 text-gray-700 text-base sm:text-lg font-medium">
          <li>Aula 1: Como se posicionar nas redes sociais</li>
          <li>Aula 2: Defina sua identidade profissional e encontre seu diferencial</li>
          <li>Aula 3: Estratégia de conteúdo para fisioterapeutas</li>
          <li>Aula 4: Como captar pacientes e criar uma comunicação profissional</li>
        </ul>
      ),
    },
    {
      icon: <FiCalendar className="text-[#00C6FF] w-8 h-8 sm:w-10 sm:h-10 mr-4" />,
      question: "Módulo 5 - Rotina, evolução e atendimento domiciliar",
      answer: (
        <ul className="list-disc pl-8 space-y-2 text-gray-700 text-base sm:text-lg font-medium">
          <li>Aula 1: Organização de rotina e metas realistas</li>
          <li>Aula 2: O que você precisa para começar a atender em casa (passo a passo)</li>
          <li>Aula 3: Gestão de tempo para atender mais pacientes e manter qualidade de vida</li>
        </ul>
      ),
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-r from-white via-gray-100 to-gray-200 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 text-[#00C6FF]">
          Conheça os módulos da mentoria 
          <br />
          "Saúde, Café e Inovação"
        </h2>
        <p className="text-center text-base sm:text-lg text-gray-600 mb-6">
          Clique em cada módulo para visualizar as aulas correspondentes.
        </p>

        <div className="space-y-6">
          {modulesData.map((module, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl transition-all duration-300 ease-in-out ${
                activeIndex === index
                  ? "bg-white border-l-4 border-[#00C6FF] shadow-xl scale-105"
                  : "bg-white bg-opacity-80 border border-gray-300 hover:shadow-lg"
              }`}
            >
              <div
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center cursor-pointer"
              >
                <div className="flex items-center">
                  {module.icon}
                  <h3 className="text-base sm:text-lg lg:text-xl font-medium text-gray-800">
                    {module.question}
                  </h3>
                </div>
                {activeIndex === index ? (
                  <FiChevronUp className="text-2xl text-[#00C6FF] transition-all duration-300" />
                ) : (
                  <FiChevronDown className="text-2xl text-gray-500 transition-all duration-300 hover:text-[#00C6FF]" />
                )}
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeIndex === index ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {module.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesFaq;
