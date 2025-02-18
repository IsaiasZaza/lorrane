const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0f0f0f] to-[#2c2c2c] text-gray-300 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo dos 3Jovens */}
        <img
          src="/logo_branca.png"
          alt="Logo 3Jovens"
          className="mx-auto mb-4 w-20 sm:w-24 md:w-28 lg:w-32"
        />
        <p className="text-base sm:text-lg font-semibold">
          Desenvolvido por{' '}
          <a
            href="https://www.instagram.com/os3jovens/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#05D8FF] font-bold hover:underline transition-colors duration-200 uppercase"
          >
            3Jovens
          </a>
          . Transformamos ideias em experiências digitais de alto impacto.
        </p>
        <div className="mt-4 border-t border-gray-700 pt-4">
          <p className="text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} 3Jovens. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
