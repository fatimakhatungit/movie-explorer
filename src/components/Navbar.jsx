import { useState } from "react";
import { Menu, X, Film, Clapperboard } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navigationData = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Movies", path: "/movies" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/70 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="flex w-full items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-gray-900 transition-opacity hover:opacity-80"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white shadow-sm">
              <Film size={22} strokeWidth={2} />
            </span>

            <span>
              Movie<span className="text-gray-500">Explorer</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navigationData.map((route) => {
              const isActive = location.pathname === route.path;

              return (
                <Link
                  key={route.id}
                  to={route.path}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  {route.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <Link
            to="/movies"
            className="hidden items-center gap-2 rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-md md:inline-flex"
          >
            <Clapperboard size={17} />
            Explore Movies
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-gray-200/70 bg-white px-4 pb-5 pt-3 shadow-sm md:hidden">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-1">
            {navigationData.map((route) => {
              const isActive = location.pathname === route.path;

              return (
                <Link
                  key={route.id}
                  to={route.path}
                  onClick={closeMenu}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  {route.name}
                </Link>
              );
            })}

            <Link
              to="/movies"
              onClick={closeMenu}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800"
            >
              <Clapperboard size={17} />
              Explore Movies
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;