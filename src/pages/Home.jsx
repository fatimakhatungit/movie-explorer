import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Hero from '../components/HeroBanner'
import MovieCard from '../components/MovieCard'
import MovieModal from '../components/MovieModal'
import Navbar from '../components/Navbar'

function Home() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedMovie, setSelectedMovie] = useState(null)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          'https://api.tvmaze.com/shows'
        )

        const data = await response.json()

        setMovies(data.slice(0, 8))
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
  }, [])

  const handleDetails = (movie) => {
    setSelectedMovie(movie)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>
        <Hero />

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">

            {/* Section Header */}
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-red-500">
                  Discover
                </p>

                <h2 className="text-3xl font-bold sm:text-4xl">
                  Popular Shows
                </h2>
              </div>

              <a
                href="/movies"
                className="hidden rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:border-red-500 hover:bg-red-500 hover:text-white sm:block"
              >
                View All
              </a>
            </div>

            {/* Loading */}
            {loading ? (
              <div className="flex justify-center py-20">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-700 border-t-red-500"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                {movies.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    onDetails={handleDetails}
                  />
                ))}
              </div>
            )}

            {/* Mobile View All */}
            <div className="mt-8 text-center sm:hidden">
              <a
                href="/movies"
                className="inline-block rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold transition hover:bg-red-700"
              >
                View All Shows
              </a>
            </div>

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

export default Home