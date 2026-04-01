// TODO:  set up a form to collect user data

import { useState } from "react";
import { useParams } from "react-router";

export default function NewCommentModal({ setModalOpen }) {
  const { movie_id } = useParams();

  const [formValues, setFormValues] = useState({
    userName: " ",
    rating: Number(""),
    comment: " ",
    movie_id: Number(`${movie_id}`),
  });

  function handleInputChange(event) {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
    // console.log(formValues);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    // alert(
    //   formValues.userName +
    //     formValues.rating +
    //     formValues.comment +
    //     formValues.movie_id,
    // );
    try {
      fetch("https://week-07-assigment-server.onrender.com/new-comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });
      // console.log(formValues);
    } catch (strays) {
      console.error(strays, "Request failed. Debug...");
    }
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
        className="fixed top-40 left-2/8 z-1000 h-150 w-4/8 rounded-2xl mt-5 shadow-2xl shadow-violet-300 bg-gray-500
    drop-shadow-x drop-shadow-violet-300
    grid grid-cols-2 grid-rows-3 items-center justify-items-center overflow-y-scroll overflow-x-hidden scroll-smooth"
      >
        <span className="col-start-1 col-end-2 row-start-1 justify-self-start self-start content-center h-20 w-50">
          <button
            onClick={() => setModalOpen(false)}
            className="h-10  bg-gray-300 rounded-2xl cursor-pointer m-1 p-1 text-center w-40 border-2 border-gray-600 
            hover:outline-2 hover:outline-gray-600 hover:border-gray-300 hover:bg-[#e9e6e6] hover:shadow-inner  hover:shadow-gray-600
              focus:outline-2 focus:outline-offset-2 focus:outline-gray-700 focus:shadow-2xl     focus:shadow-gray-900 text-sm "
          >
            Close
          </button>
        </span>
        <h2 className="col-start-1 col-end-3 row-start-1 row-end-2 text-2xl">
          Leave A Comment Below!
        </h2>
        <form
          id="commentForm"
          onSubmit={handleFormSubmit}
          className="w-screen col-start-1 col-end-3 row-start-2 row-end-4 min-w-1/5 grid grid-cols-3 grid-rows-4 items-center "
        >
          <label
            htmlFor="userName"
            className="col-start-1 col-end-2 justify-self-end"
          >
            Name:
          </label>{" "}
          <input
            type="text"
            name="userName"
            value={formValues.userName}
            required
            onChange={handleInputChange}
            placeholder="Please provide a name..."
            className="min-h-10 max-h-20 w-150 md:w-vw p-2 rounded-2xl col-start-2 col-end-3 border-2 bg-gray-300 border-gray-600 justify-self-center hover:drop-shadow-2xl hover:drop-shadow-gray-600 hover:shadow-inner  hover:shadow-gray-600"
          ></input>
          {/*  */}
          <label
            htmlFor="rating"
            className="col-start-1 col-end-2 justify-self-end"
          >
            Rating:
          </label>{" "}
          <select
            type="number"
            max={10}
            min={0}
            name="rating"
            value={formValues.rating}
            required
            onChange={handleInputChange}
            className="h-10 w-20 md:w-vw p-2 rounded-2xl col-start-2 col-end-3 border-2 justify-self-center bg-gray-300 cursor-pointer border-gray-600 hover:shadow-inner  hover:shadow-gray-600 "
          >
            {" "}
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
          <label
            htmlFor="comment"
            className="col-start-1 col-end-2 justify-self-end"
          >
            Comment:
          </label>{" "}
          <textarea
            type="text"
            name="comment"
            value={formValues.comment}
            required
            onChange={handleInputChange}
            placeholder="Leave your comment here..."
            className="min-h-10 max-h-20 w-150 md:w-vw p-2 rounded-2xl col-start-2 col-end-3 border-2 bg-gray-300 border-gray-600 justify-self-center hover:shadow-inner  hover:shadow-gray-600"
          ></textarea>
          {/*  */}
          <button
            type="submit"
            className="h-10 col-start-3 col-end-4 row-start-4 bg-gray-300 rounded-2xl cursor-pointer m-1 p-1 text-center w-40 border-2 border-gray-600
            hover:outline-2 hover:outline-gray-600 hover:border-gray-300 hover:bg-[#e9e6e6] hover:shadow-inner  hover:shadow-gray-600
              focus:outline-2 focus:outline-offset-2 focus:outline-gray-700 focus:shadow-2xl     focus:shadow-gray-900 text-sm "
          >
            submit
          </button>
        </form>{" "}
      </div>
      {/*  */}
    </>
  );
}
