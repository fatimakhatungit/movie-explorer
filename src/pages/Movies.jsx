import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MovieCard from '../components/MovieCard'
import MovieModal from '../components/MovieModal'

function Movies() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedMovie, setSelectedMovie] = useState(null)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true)
        setError('')

        const response = await fetch(
          'https://api.tvmaze.com/shows'
        )

        if (!response.ok) {
          throw new Error('Failed to fetch shows')
        }

        const data = await response.json()

        setMovies(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
  }, [])

  const filteredMovies = movies.filter((movie) =>
    movie.name
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  const handleDetails = (movie) => {
    setSelectedMovie(movie)
  }

  return (
    <div className="min-h-screen bg-[#08090d] text-white">
      <Navbar />

      <main>

        {/* Hero */}
        <section className="border-b border-white/5 bg-gradient-to-b from-[#11131a] to-[#08090d]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">

            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-1 w-8 rounded-full bg-red-500"></span>

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                  Explore
                </span>
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Discover Your Next
                <span className="block text-red-500">
                  Favorite Show
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
                Explore thousands of TV shows and find something
                worth watching. Search by title and discover your
                next favorite series.
              </p>
            </div>

          </div>
        </section>

        {/* Shows */}
        <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">

            {/* Top Bar */}
            <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

              <div>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  All Shows
                </h2>

                {!loading && !error && (
                  <p className="mt-2 text-sm text-slate-500">
                    Browse our complete collection
                  </p>
                )}
              </div>

              {/* Search */}
              <div className="w-full lg:w-[380px]">
                <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-500">
                  Search
                </label>

                <div className="group relative">

                  <svg
                    className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500 transition group-focus-within:text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                    />
                  </svg>

                  <input
                    type="text"
                    placeholder="Search shows by title..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3.5 pl-12 pr-12 text-sm text-white outline-none transition placeholder:text-slate-600 hover:border-white/20 focus:border-red-500/60 focus:bg-white/[0.06] focus:ring-4 focus:ring-red-500/10"
                  />

                  {search && (
                    <button
                      type="button"
                      onClick={() => setSearch('')}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-white"
                    >
                      ✕
                    </button>
                  )}

                </div>
              </div>

            </div>

            {/* Loading */}
            {loading && (
              <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {Array.from({ length: 10 }).map((_, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-xl border border-white/5 bg-white/[0.03]"
                  >
                    <div className="h-64 animate-pulse bg-white/5 sm:h-72"></div>

                    <div className="space-y-3 p-4">
                      <div className="h-5 w-3/4 animate-pulse rounded bg-white/5"></div>
                      <div className="h-4 w-1/2 animate-pulse rounded bg-white/5"></div>
                      <div className="h-4 w-1/3 animate-pulse rounded bg-white/5"></div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Error */}
            {error && !loading && (
              <div className="rounded-2xl border border-red-500/20 bg-red-500/5 px-6 py-12 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10 text-2xl">
                  !
                </div>

                <h3 className="text-lg font-semibold">
                  Something went wrong
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {error}
                </p>
              </div>
            )}

            {/* Results */}
            {!loading && !error && (
              <>
                <div className="mb-6 flex items-center justify-between border-b border-white/5 pb-4">
                  <p className="text-sm text-slate-500">
                    Showing{' '}
                    <span className="font-semibold text-white">
                      {filteredMovies.length}
                    </span>{' '}
                    {filteredMovies.length === 1
                      ? 'show'
                      : 'shows'}
                  </p>

                  {search && (
                    <p className="text-sm text-slate-600">
                      Search: "
                      <span className="text-slate-400">
                        {search}
                      </span>
                      "
                    </p>
                  )}
                </div>

                {filteredMovies.length > 0 ? (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">

                    {filteredMovies.map((movie) => (
                      <MovieCard
                        key={movie.id}
                        movie={movie}
                        onDetails={handleDetails}
                      />
                    ))}

                  </div>
                ) : (
                  <div className="flex min-h-[350px] flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] px-6 text-center">

                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white/5 text-2xl">
                      🔎
                    </div>

                    <h3 className="text-xl font-semibold">
                      No shows found
                    </h3>

                    <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                      We couldn't find any shows matching "
                      {search}".
                      Try searching with another title.
                    </p>

                    <button
                      type="button"
                      onClick={() => setSearch('')}
                      className="mt-6 rounded-lg bg-red-500 px-5 py-2.5 text-sm font-semibold transition hover:bg-red-600"
                    >
                      Clear Search
                    </button>

                  </div>
                )}
              </>
            )}

          </div>
        </section>

      </main>

      {/* Movie Details Modal */}
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}

      <Footer />
    </div>
  )
}

export default Movies