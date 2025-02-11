import Image from 'next/image';

const QueroFaze = () => {
  const videos = [
    {
      id: 1,
      videoUrl: "https://example.com/path/to/video1.mp4",    // Substitua pela URL do primeiro vídeo
      posterUrl: "https://example.com/path/to/poster1.jpg"     // Substitua pela URL da imagem de poster do primeiro vídeo
    },
    {
      id: 2,
      videoUrl: "https://example.com/path/to/video2.mp4",    // Substitua pela URL do segundo vídeo
      posterUrl: "https://example.com/path/to/poster2.jpg"     // Substitua pela URL da imagem de poster do segundo vídeo
    },
    {
      id: 3,
      videoUrl: "https://example.com/path/to/video3.mp4",    // Substitua pela URL do terceiro vídeo
      posterUrl: "https://example.com/path/to/poster3.jpg"     // Substitua pela URL da imagem de poster do terceiro vídeo
    }
  ];

  return (
    <section className="bg-black text-white text-center py-12 px-6">
      <h2 className="text-xl md:text-2xl font-semibold">
        <span className="text-blue-400">Seus pacientes</span> podem estar esperando por <span className="text-pink-500">você</span>. Está preparado para <span className="text-blue-400">fazer a diferença?</span>
      </h2>
      <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
        Os resultados dos atendimentos domiciliares transformam vidas! Confira o que os pacientes
        da Lar.me têm a dizer sobre o impacto do cuidado profissional e personalizado que receberam:
      </p>

      <div className="flex justify-center gap-4 mt-6 flex-wrap">
        {videos.map(video => (
          <div key={video.id} className="relative w-60 h-40 bg-gray-800 rounded-lg overflow-hidden">
            <video
              className="w-full h-full object-cover"
              src={video.videoUrl}
              poster={video.posterUrl}
              autoPlay
              loop
              muted
              playsInline
              controls    // Remova esta propriedade se não desejar exibir os controles do vídeo
            >
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        ))}
      </div>

      <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg">
        QUERO FAZER PARTE AGORA MESMO!
      </button>
    </section>
  );
};

export default QueroFaze;
