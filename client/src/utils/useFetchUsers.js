import { useEffect } from "react";

export default function useFetchUsers({ setUserData }) {
  useEffect(() => {
    // you can always get this with useParams and a variable
    async function getData() {
      const response = await fetch(
        `https://week-07-assigment-server.onrender.com/comments`,
      );
      // console.log(response);
      const data = await response.json();
      console.log(data);
      setUserData(data);
    }
    getData();

    const pollingInterval = setInterval(getData, 2000); //2 second refresh
    return () => clearInterval(pollingInterval);
  }, [setUserData]);
}
