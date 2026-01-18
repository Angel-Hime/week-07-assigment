// TODO:  set up a form to collect user data

import { useState } from "react";
import { useParams } from "react-router";

export default function NewCommentModal({ setModalOpen }) {
  const { movie_id } = useParams();

  const [formValues, setFormValues] = useState({
    userName: "",
    rating: Number(""),
    comment: "",
    movie_id: Number(`${movie_id}`),
  });
  function handleInputChange(event) {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    alert(
      formValues.userName +
        formValues.rating +
        formValues.comment +
        formValues.movie_id,
    );
    // try {
    fetch("http://localhost:8080/new-comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });
    // console.log(formValues);
    // } catch (strays) {
    //   console.error(strays, "Request failed. Debug...");
    // }
    setModalOpen(false);
  }

  document.onkeydown = (push) => {
    if (push.key === "Escape") {
      setModalOpen(false);
    }
  };
  return (
    <>
      <div
        className="relative z-1000 h-100 rounded-2xl mt-5 shadow-2xl shadow-violet-300 
    drop-shadow-x drop-shadow-violet-300
    grid grid-cols-2 grid-rows-3 items-center justify-items-center overflow-y-scroll overflow-x-hidden   scroll-smooth"
      >
        <h2 className="col-start-1 col-end-3 row-start-1 row-end-2">
          Leave A Comment Below!
        </h2>
        <form
          id="commentForm"
          onSubmit={handleFormSubmit}
          className="w-screen col-start-1 col-end-3 row-start-2 row-end-4 min-w-1/5 grid grid-cols-3 grid-rows-4 items-center justify-items-center"
        >
          <label htmlFor="userName" className="col-start-1 col-end-2">
            Name
          </label>{" "}
          <input
            type="text"
            name="userName"
            value={formValues.userName}
            required
            onChange={handleInputChange}
            placeholder="Please provide a name..."
            className=" w-4/5 md:w-vw p-2 rounded-2xl col-start-2 col-end-3"
          ></input>
          {/*  */}
          <label htmlFor="rating" className="col-start-1 col-end-2">
            Rating
          </label>{" "}
          <select
            type="number"
            max={10}
            min={0}
            name="rating"
            value={formValues.rating}
            required
            onChange={handleInputChange}
            className=" w-4/5 md:w-vw p-2 rounded-2xl col-start-2 col-end-3"
          >
            <option disabled>Select...</option>
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </select>
          {/*  */}
          <label htmlFor="comment" className="col-start-1 col-end-2">
            Comment
          </label>{" "}
          <textarea
            type="text"
            name="comment"
            value={formValues.comment}
            required
            onChange={handleInputChange}
            placeholder="Leave your comment here..."
            className="min-h-20 max-h-20 w-4/5 md:w-vw p-2 rounded-2xl col-start-2 col-end-3"
          ></textarea>
          {/*  */}
          <button
            type="submit"
            className="col-start-3 col-end-4 bg-[#d8d0d0cf] pl-2 pr-2 rounded-2xl cursor-pointer 
            hover:bg-[#d8d0d0] hover:shadow-2xl hover:shadow-violet-500 
              focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 focus:shadow-2xl     focus:shadow-violet-500 text-sm md:w-20"
          >
            submit
          </button>
        </form>{" "}
      </div>
      {/*  */}
    </>
  );
}
