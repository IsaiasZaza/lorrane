"use client";
import { useRef, useEffect } from "react";

// Componente do fundo interativo com partículas (restrito ao container de fundo escuro)
function InteractiveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas.parentElement;
    const ctx = canvas.getContext("2d");

    // Obtém as dimensões do container pai
    let width = parent.clientWidth;
    let height = parent.clientHeight;
    canvas.width = width;
    canvas.height = height;

    // Cria partículas
    const particles = [];
    const particleCount = 250; // Ajuste conforme desejado
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    let animationFrameId;

    function animate() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        // Atualiza posição
        p.x += p.vx;
        p.y += p.vy;

        // Rebote nas bordas do container
        if (p.x < 0 || p.x > width) p.vx = -p.vx;
        if (p.y < 0 || p.y > height) p.vy = -p.vy;

        // Desenha a partícula
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,198,255,0.5)";
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(animate);
    }
    animate();

    function handleResize() {
      // Atualiza dimensões quando o container for redimensionado
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
    />
  );
}

export default function Formulario() {
  return (
    // Container com fundo escuro e efeito interativo restrito a ele
    <div className="relative bg-gradient-to-b from-[#0f0f0f] via-[#222222] to-[#2c2c2c] text-[#f5f5f5] py-16 px-6 md:px-12 flex flex-col items-center justify-center mx-auto space-y-8">
      {/* Fundo interativo apenas para esta seção */}
      <InteractiveBackground />

      {/* Texto */}
      <div className="relative z-10 w-full max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Inscreva-se <span className="text-[#00C6FF]">agora</span> e dê o primeiro
          passo para a sua{" "}
          <span className="text-[#00C6FF]">liberdade profissional</span>
        </h2>
        <p className="mt-4 text-gray-300 text-lg">
          Fique por dentro de todas as novidades e receba informações exclusivas sobre
          o treinamento, além de documentos e conteúdos que vão transformar sua carreira.
          Não perca a chance de fazer parte da primeira turma em abrir!
        </p>
      </div>

      {/* Formulário */}
      <div className="relative z-10 w-full max-w-xl bg-[#181818] p-8 rounded-xl shadow-2xl border border-[#2A2A2A] ring-1 ring-[#0f0f0f]">
        <form className="space-y-5">
          {/* Nome */}
          <div className="space-y-1">
            <label htmlFor="nome" className="sr-only">
              Nome
            </label>
            <input
              id="nome"
              type="text"
              placeholder="Digite seu nome"
              className="w-full p-4 rounded-md bg-[#222222] text-white placeholder-gray-400 border border-transparent focus:outline-none focus:shadow-inner transition-all"
            />
          </div>

          {/* E-mail */}
          <div className="space-y-1">
            <label htmlFor="email" className="sr-only">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              className="w-full p-4 rounded-md bg-[#222222] text-white placeholder-gray-400 border border-transparent focus:outline-none focus:shadow-inner transition-all"
            />
          </div>

          {/* WhatsApp */}
          <div className="space-y-1">
            <label htmlFor="whatsapp" className="sr-only">
              WhatsApp
            </label>
            <input
              id="whatsapp"
              type="text"
              placeholder="Digite seu WhatsApp"
              className="w-full p-4 rounded-md bg-[#222222] text-white placeholder-gray-400 border border-transparent focus:outline-none focus:shadow-inner transition-all"
            />
          </div>

          {/* Mensagem */}
          <div className="space-y-1">
            <label htmlFor="mensagem" className="sr-only">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              placeholder="Digite sua mensagem"
              className="w-full p-4 rounded-md bg-[#222222] text-white placeholder-gray-400 border border-transparent focus:outline-none focus:shadow-inner transition-all"
              rows="4"
            ></textarea>
          </div>

          {/* Botão com efeito neon */}
          <button className="w-full mt-6 bg-gradient-to-r from-[#00C6FF] to-[#0066FF] hover:brightness-110 text-white font-semibold text-lg  py-4 rounded-lg focus:outline-none shadow-md transform hover:scale-105 transition duration-300 relative overflow-hidden px-6 ">
            QUERO PARTICIPAR DA PRIMEIRA TURMA
            <span className="absolute inset-0 bg-white opacity-10 blur-lg"></span>
          </button>
        </form>
      </div>
    </div>
  );
}
