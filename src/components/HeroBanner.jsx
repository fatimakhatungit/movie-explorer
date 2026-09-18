import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-black">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=2000&q=85"
        alt="Movie theater"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex  w-full max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
            <Play size={15} fill="currentColor" />
            Discover • Watch • Enjoy
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Discover Your Next
            <span className="block text-gray-300">
              Favorite Movie
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
            Explore amazing movies and shows from around the world.
            Search for your favorite titles, discover new stories,
            and find something exciting to watch.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/movies"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gray-100"
            >
              Explore Movies
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/movies"
              className="inline-flex items-center rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
            >
              Browse Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;