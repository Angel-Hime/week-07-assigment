import { Link, useParams } from "react-router";
import useGenreFetch from "../utils/useGenreFetch";
import GenreNav from "./GenreNav";

export default function MoviesByGenre({
  setMovieData,
  movieData,

  setMovieSelect,
  // setIsModalOpen,
  // isModalOpen,
}) {
  useGenreFetch({ setMovieData });
  const { genre } = useParams();
  function handleMovieSelect(movie) {
    setMovieSelect(movie);
    // console.log(`Movies movie:${movieSelect.film_name}`);
    // setIsModalOpen(true);
  }
  return (
    <section className="mt-40">
      <GenreNav />
      <div>{genre}</div>
      <div className="flex flex-row items-center gap-10 flex-wrap justify-center">
        {" "}
        {movieData.values &&
          movieData.map((movie) => (
            <Link
              to={`/movieselection/${movie.id}`}
              onClick={() => handleMovieSelect(movie)}
            >
              <img
                key={movie.id}
                className="w-150 hover:shadow-2xl hover:shadow-gray-900 
              focus:outline-2 focus:outline-offset-2 focus:outline-gray-700 focus:shadow-2xl     focus:shadow-gray-900"
                src={movie.poster_url}
                alt={movie.poster_alt}
              />
            </Link>
          ))}{" "}
      </div>
    </section>
  );
}
