import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
    return (
        <>
            <Link to={`/movies/${movie.title}`} className="movie-card">
                <img src={movie.posterPath} alt={movie.title} />
                <div>
                    <h2 className="title">{movie.title}</h2>
                    <p className="release-date">Release Date: {movie.releaseDate}</p>
                </div>
            </Link>
        </>
    )
}