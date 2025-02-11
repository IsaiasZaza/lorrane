"use client";

export default function Formulário() {
  return (
    <div className="bg-black text-white py-12 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
      {/* Texto */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-2xl md:text-3xl font-bold">
          Inscreva-se <span className="text-blue-400">agora</span> e dê o primeiro passo para a sua{" "}
          <span className="text-blue-400">liberdade profissional</span>
        </h2>
        <p className="mt-4 text-gray-300 text-sm">
          Fique por dentro de todas as novidades e receba informações exclusivas sobre o treinamento, 
          além de documentos e conteúdos que vão transformar sua carreira. Não perca a chance de fazer 
          parte da primeira turma em abrir!
        </p>
      </div>

      {/* Formulário */}
      <div className="md:w-1/2 bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Digite seu nome"
            className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Digite seu e-mail"
            className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Digite seu WhatsApp"
            className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Digite sua mensagem"
            className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-3 rounded-full shadow-lg hover:bg-blue-600 transition-all"
          >
            🚀 Quero participar da primeira turma!
          </button>
        </form>
      </div>
    </div>
  );
}
