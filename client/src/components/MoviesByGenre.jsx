import { Link, useParams } from "react-router";
import useGenreFetch from "../utils/useGenreFetch";
import GenreNav from "./GenreNav";
import Header from "./Header";

export default function MoviesByGenre({
  setMovieData,
  movieData,

  // setMovieSelect,
  // setModalOpen,
  // isModalOpen,
}) {
  useGenreFetch({ setMovieData });

  const { genre } = useParams();

  // function handleMovieSelect(movie) {
  //   setMovieSelect(movie);
  //   // console.log(`Movies movie:${movieSelect.film_name}`);
  //   // setIsModalOpen(true);
  // }

  const pageTitle = genre.toString();

  return (
    <main className="w-screen overflow-x-hidden flex flex-col gap-20 ">
      <header className="flex flex-col h-max gap-1">
        <Header />
        <GenreNav />
      </header>
      <h2 className="text-2xl underline">{pageTitle}</h2>
      <div className="flex flex-row items-center gap-10 flex-wrap justify-center">
        {" "}
        {movieData.values &&
          movieData.map((movie) => (
            <Link
              key={movie.id}
              to={`/movieselection/${movie.id}`}
              // onClick={() => handleMovieSelect(movie)}
            >
              <img
                key={movie.id}
                className="w-150 h-200 hover:shadow-2xl hover:shadow-gray-900 
              focus:outline-2 focus:outline-offset-2 focus:outline-gray-700 focus:shadow-2xl     focus:shadow-gray-900"
                src={movie.poster_url}
                alt={movie.poster_alt}
              />
            </Link>
          ))}{" "}
      </div>
      <footer className="h-10"></footer>
    </main>
  );
}
