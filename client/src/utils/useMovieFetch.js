import { useEffect } from "react";
import { useParams } from "react-router";

export default function useMovieFetch({ setMovieData }) {
  const { movie_id } = useParams();
  // console.log(movie_id);
  useEffect(() => {
    // const page = ``; // you can always get this with useParams and a variable
    async function getData() {
      const response = await fetch(
        `https://week-07-assigment-server.onrender.com/movieselection/${movie_id}`,
      );
      console.log(response);
      const data = await response.json();
      console.log(data);

      setMovieData(data);
    }
    getData();

    const pollingInterval = setInterval(getData, 7000); //5 second refresh - in case I also want to add movies on the home page
    return () => clearInterval(pollingInterval);
  }, [setMovieData, movie_id]);
}
