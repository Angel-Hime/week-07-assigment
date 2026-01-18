import { useSearchParams } from "react-router";
import useFetchCategory from "../utils/useFetchCategory";

export default function SortingComponent({ movieData }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleGenreChange = (event) => {
    setSearchParams({ category: event.target.value });
  };
  // useFetchCategory(searchParams);

  return (
    <form>
      <label>
        Choose Genre{" "}
        <select onChange={handleGenreChange}>
          <option value="All">All</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
      </label>
      <button type="submit">Choose</button>
    </form>
  );
}
