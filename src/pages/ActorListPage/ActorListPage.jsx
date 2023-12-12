import { movies } from '../../data'
import ActorCard from '../../components/ActorCard/ActorCard';

export default function ActorListPage() {
    const actors = new Set();
    movies.forEach(movie => {
        movie.cast.forEach(actor => {
            actors.add(actor);
        })
    })
    const actorsArr = Array.from(actors).sort()

    return (
        <>
            <h1>Actors</h1>
            <div className="actor-list-container">
                <div className='actor-list'>
                    {actorsArr.map(actor => (
                        <ActorCard actor={actor} />
                    ))}
                </div>
            </div>
        </>
    )
}