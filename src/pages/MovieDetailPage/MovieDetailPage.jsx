import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { movies } from "../../data";

export default function MovieDetailPage() {
    const { movieName } = useParams();
    const [movie, setMovie] = useState(null)
    useEffect(() => {
        const foundMovie = movies.find(movie => movie.title === movieName)
        if (foundMovie) {
            setMovie(foundMovie)
        }
    }, [movieName])

    if (!movie) {
        return <p>Loading...</p>
    }

    return (
        <>
            <h1>{movie.title}</h1>
            <p>Release Date: {movie.releaseDate}</p>
            <img src={movie.posterPath} alt={movie.title} />
            <p>Cast: {movie.cast.join(', ')}</p>
        </>
    )
}