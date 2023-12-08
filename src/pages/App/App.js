import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import LoginPage from '../LoginPage/LoginPage';
import MoviesListPage from '../MoviesListPage/MoviesListPage'
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage'
import ActorListPage from '../ActorListPage/ActorListPage'
import NavBar from '../../components/NavBar/NavBar';
import { movies } from "../../data"


export default function App() {
  const [user, setUser] = useState(null)

  function handleLogin(userData) {
    setUser(userData)
  }

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} />
          <Routes>
            <Route path="/" element={<MoviesListPage movies={movies} />} />
            <Route path="/movies/:movieName" element={<MovieDetailPage />} />
            <Route path="/actors" element={<ActorListPage />} />
          </Routes>
        </>
        :
        <Routes>
          <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
        </Routes>}
    </main>
  );
}
