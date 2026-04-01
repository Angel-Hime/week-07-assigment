import { Link, Outlet } from "react-router";
// import {useSearchParams } from "react-router";
import useFetchMovies from "../utils/useFetchMovies";
import Header from "./Header";

import GenreNav from "./GenreNav";

export default function Movies({
  setMovieData,
  movieData,

  // setMovieSelect,
  // setIsModalOpen,
  // isModalOpen,
}) {
  // console.log(`Movies id: ${id}`);

  useFetchMovies({ setMovieData });

  // function handleMovieSelect(movie) {
  //   setMovieSelect(movie);
  //   // console.log(`Movies movie:${movieSelect.film_name}`);
  //   // setIsModalOpen(true);
  // }
  // const [searchParams] = useSearchParams();
  // console.log(searchParams);

  return (
    <main className="w-screen overflow-x-hidden flex flex-col gap-20 ">
      <header className="flex flex-col h-max gap-1">
        <Header />
        <GenreNav />
      </header>
      <section className="flex flex-row justify-center gap-10 flex-wrap">
        {movieData.values &&
          movieData.map((movie) => (
            <Link key={movie.id} to={`/movieselection/${movie.id}`}>
              <img
                key={movie.id}
                className="w-150 h-200 hover:shadow-2xl hover:shadow-gray-900 
              focus:outline-2 focus:outline-offset-2 focus:outline-gray-700 focus:shadow-2xl     focus:shadow-gray-900"
                src={movie.poster_url}
                alt={movie.poster_alt}
              />
            </Link>
          ))}
      </section>
      <footer className="h-10"></footer>
    </main>
  );
}
