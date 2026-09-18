import { Github, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold">
              Movie<span className="text-gray-400">Explorer</span>
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Discover movies and shows you love.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-lg border border-gray-700 p-2.5 text-gray-400 transition hover:border-white hover:text-white"
            >
              <Github size={18} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg border border-gray-700 p-2.5 text-gray-400 transition hover:border-white hover:text-white"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded-lg border border-gray-700 p-2.5 text-gray-400 transition hover:border-white hover:text-white"
            >
              <Facebook size={18} />
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