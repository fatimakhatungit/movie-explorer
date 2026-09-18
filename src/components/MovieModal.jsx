const MovieModal = ({ movie, onClose }) => {
  if (!movie) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/10 bg-[#11131a] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-lg text-white transition hover:bg-red-500"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Movie Image */}
        <div className="h-64 overflow-hidden sm:h-80">
          <img
            src={
              movie.image?.original ||
              movie.image?.medium ||
              'https://via.placeholder.com/800x450?text=No+Image'
            }
            alt={movie.name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Movie Details */}
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-bold sm:text-3xl">
            {movie.name}
          </h2>

          {/* Meta Information */}
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-yellow-500/10 px-3 py-1.5 text-yellow-400">
              ⭐ {movie.rating?.average || 'N/A'}
            </span>

            <span className="rounded-full bg-white/5 px-3 py-1.5 text-slate-300">
              📅 {movie.premiered || 'N/A'}
            </span>

            <span className="rounded-full bg-white/5 px-3 py-1.5 text-slate-300">
              🌐 {movie.language || 'N/A'}
            </span>
          </div>

          {/* Genres */}
          {movie.genres?.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <span
                  key={genre}
                  className="rounded-md border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs text-red-400"
                >
                  {genre}
                </span>
              ))}
            </div>
          )}

          {/* Summary */}
          <div className="mt-6">
            <h3 className="mb-2 text-lg font-semibold">
              Overview
            </h3>

            <div
              className="text-sm leading-7 text-slate-400"
              dangerouslySetInnerHTML={{
                __html:
                  movie.summary ||
                  '<p>No summary available.</p>',
              }}
            />
          </div>

          {/* Status */}
          <div className="mt-6 border-t border-white/5 pt-5">
            <p className="text-sm text-slate-500">
              Status:{' '}
              <span className="text-slate-300">
                {movie.status || 'N/A'}
              </span>
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="mt-7 w-full rounded-lg bg-red-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default MovieModal