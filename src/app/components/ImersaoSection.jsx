import React from "react";

const ImersaoSection = () => {
  return (
    <section className="bg-white py-16 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-black uppercase">
        Voce tambem vai <span className="text-blue-600">ganhar</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {[
          { text: "Material completo para consulta pós-mentoria. " },
          { text: "30 templates prontos para redes sociais." },
          { text: "Documentos editáveis em Word e Canva para facilitar sua rotina" },
          { text: "Cartões de visita editáveis no Canva." }
        ].map((item, index) => (
          <div
            key={index}
            className="w-64 p-6 bg-white rounded-lg shadow-lg text-black border border-gray-200"
          >
            <p className="text-md font-medium">{item.text}</p>
          </div>
        ))}
      </div>
      <button className="mt-8 px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg">
      Garanta seu lugar agora mesmo!
      </button>
    </section>
  );
};

export default ImersaoSection;
