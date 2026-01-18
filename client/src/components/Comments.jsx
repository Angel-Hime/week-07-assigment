import { Link, Outlet, useParams } from "react-router";
import useFetchUsers from "../utils/useFetchUsers";
import NewCommentModal from "./NewCommentModal";
import { Fragment, useState } from "react";

// TODO: render data from database

export default function Comments({
  userData,
  setUserData,
  setModalOpen,
  isModalOpen,
}) {
  const { movie_id } = useParams();
  //
  const [deleteData, setDeleteData] = useState({});
  // get comments data
  useFetchUsers({ setUserData });
  // test data
  // console.log({ userData });

  // get comment id for test
  const { commentid } = useParams();
  console.log(commentid);

  //like comment
  function handleLike(comment) {
    // TODO: now we need to send it to the server
    fetch(`http://localhost:8080/like-comment/${commentid}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment),
    });
  }

  function handleDelete(comment) {
    fetch(`http://localhost:8080/delete-comment/${commentid}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment),
    });
  }

  function handleAddComment() {
    if (isModalOpen) {
      setModalOpen(false);
    } else if (!isModalOpen) {
      setModalOpen(true);
    }
    // console.log(isModalOpen);
  }

  return (
    <div className="col-start-1 col-end-4 row-start-2 row-span-2">
      <h2>Comments</h2>

      {userData.values &&
        userData.map((comment) => (
          <>
            {movie_id == comment.movie_id ? (
              <div
                key={comment.id}
                className="col-start-1 col-end-4 flex flex-row gap-3"
              >
                {" "}
                <h4>User Name: {comment.user_name}</h4>
                <p>User Rating: {comment.rating}</p>
                <p>User Comment: {comment.comment}</p>
                <section className="flex flex-row gap-10">
                  {" "}
                  <section>
                    <p>{comment.comment_likes} Likes</p>

                    <button
                      className=" bg-[#46424269] rounded-sm cursor-pointer 
          hover:drop-shadow-2xl hover:drop-shadow-gray-900 hover:bg-[#cbc2c269]
          focus:outline-2 focus:outline-offset-2 focus:outline-gray-700 focus:drop-shadow-2xl     focus:drop-shadow-gray-700 w-max h-max "
                      onClick={() => handleLike(comment)}
                    >
                      <img
                        className="w-20 p-2 z-100"
                        src="/icons/favourite.png"
                        alt="show comments"
                      />
                    </button>

                    <button
                      className=" bg-[#46424269] rounded-sm cursor-pointer 
          hover:drop-shadow-2xl hover:drop-shadow-gray-900 hover:bg-[#cbc2c269]
          focus:outline-2 focus:outline-offset-2 focus:outline-gray-700 focus:drop-shadow-2xl     focus:drop-shadow-gray-700 w-max h-max "
                      onClick={() => handleDelete(comment)}
                    >
                      <img
                        className="w-20 p-2 z-100"
                        src="/icons/delete.png"
                        alt="show comments"
                      />
                    </button>
                  </section>
                </section>
              </div>
            ) : null}
          </>
        ))}

      <button
        className=" bg-[#46424269] rounded-sm cursor-pointer 
          hover:drop-shadow-2xl hover:drop-shadow-gray-900 hover:bg-[#cbc2c269]
          focus:outline-2 focus:outline-offset-2 focus:outline-gray-700 focus:drop-shadow-2xl     focus:drop-shadow-gray-700 w-max h-max "
      >
        <img
          className="w-20 p-2 z-100"
          src="/icons/write-comment.png"
          alt="show comments"
          onClick={() => handleAddComment()}
        />
      </button>
      {isModalOpen ? <NewCommentModal setModalOpen={setModalOpen} /> : null}

      {/*  */}
    </div>
  );
}
