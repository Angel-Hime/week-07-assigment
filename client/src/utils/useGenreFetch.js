import { useEffect } from "react";
import { useParams } from "react-router";

export default function useGenreFetch({ setMovieData }) {
  const genre = useParams();
  console.log(genre.genre);
  useEffect(() => {
    // const page = ``; // you can always get this with useParams and a variable
    async function getData() {
      const response = await fetch(
        `http://localhost:8080/movies${genre.genre}`,
      );
      // console.log(response);
      const data = await response.json();
      console.log(data);

      setMovieData(data);
    }
    getData();

    const pollingInterval = setInterval(getData, 5000); //5 second refresh - in case I also want to add movies on the home page
    return () => clearInterval(pollingInterval);
  }, [setMovieData, genre]);
}
