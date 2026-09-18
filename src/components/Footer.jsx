const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-tight">
              Movie<span className="text-gray-400">Explorer</span>
            </h2>

            <p className="mt-2 max-w-md text-sm leading-6 text-gray-400">
              Discover movies and shows you love. Search, explore,
              and find your next favorite movie.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-gray-700 px-4 py-2 text-sm text-gray-300 transition hover:border-gray-400 hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-gray-700 px-4 py-2 text-sm text-gray-300 transition hover:border-gray-400 hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-gray-700 px-4 py-2 text-sm text-gray-300 transition hover:border-gray-400 hover:text-white"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2026 MovieExplorer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

