//import
import express from "express";
import cors from "cors";
import { db } from "./dbConnection.js";

//init express
const app = express();

//use JSON in our server
app.use(express.json());

// config cors
app.use(cors());

// PORT
const PORT = 8080;
app.listen(PORT, () => {
  console.info(`Server API is runnon on port ${PORT}`);
});

// ===============Additonal Routes Below=========================

// root route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the server, we are happy to serve'ya" });
});

//TODO: READ movies data with async function
app.get("/movies", async (req, res) => {
  try {
    const query = await db.query("SELECT movie_table.* FROM movie_table");
    //   Debug to see if we are getting the data:
    //   console.log(query);
    //   wrangle the data with dot notation
    res.json(query.rows);
    //   Debug to see if our wrangling is correct:
    console.log(query.rows);
  } catch (strays) {
    console.error(strays, "Response failed. Debug...");
    res.status(500).json({ response: "fail" });
  }
});

//TODO: READ comments data with async function
app.get("/comments", async (req, res) => {
  try {
    const query = await db.query(
      "SELECT movie_comments.* FROM movie_comments JOIN movie_table ON movie_comments.movie_id = movie_table.id",
    );
    //   Debug to see if we are getting the data:
    // console.log(query);
    //   wrangle the data with dot notation
    res.json(query.rows);
    //   Debug to see if our wrangling is correct:
    // console.log(query.rows);
  } catch (strays) {
    console.error(strays, "Response failed. Debug...");
    res.status(500).json({ response: "fail" });
  }
});

//TODO: POST route
app.post("/new-comment", (req, res) => {
  try {
    const newComment = req.body;
    console.log(newComment);
    const query = db.query(
      `INSERT INTO movie_comments (user_name, rating, comment, movie_id) VALUES ($1, $2, $3, $4) RETURNING *`,
      [
        newComment.userName,
        newComment.rating,
        newComment.comment,
        newComment.movie_id, // get this from useParams when completing the form?
      ],
    );
    console.log(query);
    res.status(200).json({ request: "success" });
  } catch (strays) {
    console.error(strays, "Request failed. Debug...");
    res.status(500).json({ request: "fail" });
  }
});

// ===============Additonal Routes Below=========================

// TODO: DELETE ROUTE
app.delete("/delete-comment/:id", (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const query = db.query(
      `DELETE FROM movie_comments WHERE id = $1 RETURNING *`,
      [data.id],
    );
    res.status(200).json({ request: "success" });
  } catch (strays) {
    console.error(strays, "Response failed. Debug...");
    res.status(500).json({ response: "fail" });
  }
});

// TODO: LIKES/ PUT ROUTE
app.put("/like-comment/:id", (req, res) => {
  const updatedComment = req.body;
  updatedComment.comment_likes = updatedComment.comment_likes + 1;
  console.log(updatedComment);

  try {
    const query = db.query(
      `UPDATE movie_comments SET user_name = $1, rating = $2, comment = $3, movie_id = $4, comment_likes = $5 WHERE id = $6`,
      [
        updatedComment.user_name,
        updatedComment.rating,
        updatedComment.comment,
        updatedComment.movie_id,
        updatedComment.comment_likes,
        updatedComment.id,
      ],
    );
    res.status(200).json({ request: "success" });
  } catch (strays) {
    console.error(strays, "Response failed. Debug...");
    res.status(500).json({ response: "fail" });
  }
});

// TODO: FILTER / GET ROUTE
app.get("/movies:category", async (req, res) => {
  const { category } = req.params;
  try {
    const query = await db.query(
      "SELECT movie_table.* FROM movie_table WHERE genre = $1",
      [category],
    );
    //   Debug to see if we are getting the data:
    //   console.log(query);
    //   wrangle the data with dot notation
    res.json(query.rows);
    //   Debug to see if our wrangling is correct:
    //   console.log(query.rows);
  } catch (strays) {
    console.error(strays, "Response failed. Debug...");
    res.status(500).json({ response: "fail" });
  }
});

// TODO: Add movie / POST ROUTE

// TODO: update movie/ PUT ROUTE
// app.put("/update-movie/:id", (req, res) => {
//   // const  = req.body;

//   try {
//     const query = db.query(
//       `UPDATE movie_table SET x = $1, x = $2, x = $3, x = $4, x = $5 WHERE id = $6`,
//       [
//         //  variables from the form
//       ],
//     );
//     res.status(200).json({ request: "success" });
//   } catch (strays) {
//     console.error(strays, "Response failed. Debug...");
//     res.status(500).json({ response: "fail" });
//   }
// });
