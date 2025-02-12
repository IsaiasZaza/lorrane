export default function MentoraSection() {
  return (
    <section className="relative w-full -mt-0 bg-gradient-to-b from-[#e5e5e5] to-[#F5F5F5] flex items-center justify-center lg:">
      <div className="container mx-auto px-8 flex flex-col lg:flex-row items-center justify-center gap-8 lg:-mt-40">
        {/* Texto */}
        <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h2 className="text-3xl mt-10 sm:text-3xl lg:text-4xl font-bold text-[#00C6FF] mb-4">
            Conheça sua mentora
          </h2>
          <p className="text-gray-700 text-md sm:text-base md:text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
          </p>
          <p className="text-gray-700 text-md sm:text-base md:text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <span className="text-[#05D8FF]">eiusmod</span> tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-gray-700 text-md sm:text-base md:text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
          </p>
          <p className="text-gray-700 text-md sm:text-base md:text-lg mb-4">
            Lorem ipsum dolor sit amet, <span className="text-[#05D8FF] font-semibold">consectetur adipiscing elit</span>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
