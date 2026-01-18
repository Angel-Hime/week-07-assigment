import { Link, useSearchParams, useParams } from "react-router";

export default function SortingComponent({
  movieData,
  searchParams,
  setSearchParams,
}) {
  const handleGenreChange = (event) => {
    setSearchParams({ genre: event.target.value });
  };

  return (
    <label>
      Choose Genre: {"  "}
      <select onChange={handleGenreChange} defaultValue={"Select"}>
        <option value="Select" disabled>
          Select...
        </option>
        <option value="All">All</option>
        <option value="Drama">Drama</option>
        <option value="Horror">Horror</option>
        <option value="Sci-Fi">Sci-Fi</option>
      </select>
      {searchParams.values ? <p> {searchParams.value} </p> : null}
    </label>
  );
}
