export default function MentoraSection() {
  return (
    <section className="w-full -mt-0 bg-gradient-to-b from-[#e5e5e5] to-[#F5F5F5] flex items-center justify-center lg:-mt-20 ">
      <div className="container mx-auto px-8 flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* Texto */}
        <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h2 className="text-3xl mt-10 sm:text-3xl lg:text-4xl font-bold text-[#009ACF] mb-4">
            Conheça sua mentora
          </h2>
          <p className="text-gray-700 text-md sm:text-base lg:text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
          </p>
          <p className="text-gray-700 text-md sm:text-base lg:text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <span className="text-[#05D8FF]">eiusmod</span> tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-gray-700 text-md sm:text-base lg:text-lg mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
          </p>
          <p className="text-gray-700 text-md sm:text-base lg:text-lg -mb-14">
            Lorem ipsum dolor sit amet, <span className="text-[#05D8FF] font-semibold">consectetur adipiscing elit</span>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Imagem */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <img
            src="/lorrane3.png"
            alt="Mentora"
            className="w-full -my-14 sm:w-[500px] md:w-[600px] lg:w-[700px] h-[700px] object-cover lg:mt-12"
          />
        </div>
      </div>
    </section>
  );
}
