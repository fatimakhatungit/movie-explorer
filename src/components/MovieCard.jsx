const MovieCard = ({ movie, onDetails }) => {
  if (!movie) {
    return null
  }

  const releaseYear = movie.premiered
    ? new Date(movie.premiered).getFullYear()
    : 'N/A'

  return (
    <div className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Movie Image */}
      <div className="overflow-hidden bg-gray-100">
        <img
          src={
            movie.image?.medium ||
            movie.image?.original ||
            'https://via.placeholder.com/210x295?text=No+Image'
          }
          alt={movie.name}
          className="h-[280px] w-full object-cover transition duration-300 group-hover:scale-105 sm:h-[320px]"
        />
      </div>

      {/* Movie Information */}
      <div className="p-4">

        {/* Title */}
        <h3
          className="mb-2 truncate text-lg font-semibold text-gray-900"
          title={movie.name}
        >
          {movie.name}
        </h3>

        {/* Genres */}
        <p className="mb-3 min-h-[20px] text-sm text-gray-500">
          {movie.genres?.length
            ? movie.genres.slice(0, 2).join(' • ')
            : 'Genre not available'}
        </p>

        {/* Rating & Release Year */}
        <div className="mb-4 flex items-center justify-between border-t border-gray-100 pt-3">
          <span className="text-sm text-gray-500">
            📅 {releaseYear}
          </span>

          <span className="font-semibold text-yellow-500">
            ⭐ {movie.rating?.average || 'N/A'}
          </span>
        </div>

        {/* See Details Button */}
      <button
  type="button"
  onClick={() => onDetails?.(movie)}
  className="w-full rounded-md bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition duration-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
>
  See Details
</button>

      </div>
    </div>
  )
}

export default MovieCard