import MovieCard from "../../components/MovieCard/MovieCard"
export default function MoviesListPage({ movies }) {
    return (
        <>
            <h1>MoviesListPage</h1>
            <div className="movies-list-container">
                <div className="movies-list">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
            </div>
        </>
    )
}