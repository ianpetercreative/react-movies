import { Link } from "react-router-dom";

export default function ActorCard({ actor }) {
    const randomImageId = Math.floor(Math.random() * 1000) + 1;
    const imageUrl = `https://picsum.photos/300?random=${randomImageId}`;

    return (
        <>
            <div className="actor-card">
                <img className="actor-image" src={imageUrl} alt={`Random ${actor} image`} />
                <div className="actor-name">{actor}</div>
            </div>
        </>
    )
}