import { Link } from "react-router-dom";


export default function NavBar({ user }) {
    return (
        <>
            <nav className="nav">
                <div className="nav-links">
                    <Link className="nav-link" to="/">Movies</Link>
                    &nbsp; | &nbsp;
                    <Link className="nav-link" to="/actors">Actors</Link>
                </div>
                <div className="nav-user">
                    {user.username}
                </div>
            </nav>
        </>
    )
}