import { Link, useParams } from "react-router";
import useGenreFetch from "../utils/useGenreFetch";

export default function MoviesByGenre({
  setMovieData,
  movieData,
  movieSelect,
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
    <>
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
                className="w-60"
                src={movie.poster_url}
                alt={movie.poster_alt}
              />
            </Link>
          ))}{" "}
      </div>
    </>
  );
}
