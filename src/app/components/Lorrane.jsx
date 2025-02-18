export default function MentoraSection() {
  return (
    <section className="relative w-full -mt-0 bg-gradient-to-b from-[#e5e5e5] to-[#F5F5F5] flex items-center justify-center lg:">
      <div className="container mx-auto px-8 flex flex-col lg:flex-row items-center justify-center gap-8 lg:-mt-40">
        {/* Texto */}
        <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h2 className="text-3xl mt-1 sm:text-3xl lg:text-4xl font-bold text-[#009ACF] mb-4">
            Conheça sua mentora
          </h2>
          <p className="text-gray-700 text-md sm:text-base md:text-lg mb-4">
            Lorrane Azevêdo, fisioterapeuta apaixonada pelo cuidado e bem-estar de idosos. Tenho 26 anos, sou formada pelo CEUB, especializada em Gerontologia e Neurologia, áreas que me permitem atuar com excelência na recuperação e manutenção da qualidade de vida dos meus pacientes.
          </p>
          <p className="text-gray-700 text-md sm:text-base md:text-lg mb-4">
            Acredito que o envelhecimento pode e deve ser vivido com autonomia, funcionalidade e independência. Por isso, dedico meu trabalho à fisioterapia domiciliar para idosos, proporcionando atendimentos humanizados e personalizados, diretamente no conforto do lar.
          </p>
          <p className="text-gray-700 text-md sm:text-base md:text-lg mb-4">
            Assim como um bom café traz aconchego e energia, meu propósito é ser esse suporte diário na jornada dos meus pacientes.
          </p>
          <p className="text-gray-700 text-md sm:text-base md:text-lg mb-4">
            E por isso, decidi lançar a minha mentoria e ajudar a fazer com que você transforme a sua vida assim como eu consegui!
          </p>
        </div>

        {/* Imagem */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <img
            src="/trabalhoLORRANE.png"
            alt="Mentora"
            className="w-full md:w-[700px] lg:w-[700px] xl:h[700px] h-[600px] object-cover lg:mt-40"
          />
        </div>
      </div>

      {/* Borda inferior com gradiente */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#05D8FF] via-[#222222] to-[#0f0f0f]"></div>
    </section>
  );
}
