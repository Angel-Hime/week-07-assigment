import { useEffect } from "react";

export default function useFetchUsers({ setMovieData }) {
  useEffect(() => {
    // const page = `/movies`; // you can always get this with useParams and a variable
    async function getData() {
      const response = await fetch(
        `https://week-07-assigment-server.onrender.com/movies`,
      );
      // can we use this route to
      // console.log(response);
      const data = await response.json();
      console.log(data);

      setMovieData(data);
    }
    getData();

    const pollingInterval = setInterval(getData, 7000); //5 second refresh - in case I also want to add movies on the home page
    return () => clearInterval(pollingInterval);
  }, [setMovieData]);
}
