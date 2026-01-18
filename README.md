Database Driven Full Stack React & Express App

This is a simple movie review app. I have a database of users and a database of movies which are displayed in a list with a poster. The user can navigate onto the movie page and click the comments button, which will toggle to view the comments for the individual movie. Users can also leave a comment of their own, as indicated by the comment button and the modal that loads once the button is pressed. The new comment will be added to the database and show on the app.

Users can like other comments and delete comments. If a user wishes to see only films of a certain genre, they can filter these.

I think I made it so it goes a little slowly and my theory is that I used my home route as my movies page meaning that every time it goes to another route the movies component is still doing its call to fetch database data. I am not sure of this though.

REFLECTION

Sorry that I never clean my code up afterwards, I ran out of time this go around as I have been super busy over the weekend. In the past, this has been essentially the same but I wanted to acknowledge it because I know that it is poor form.

Getting to the main reflectiong, I think that I implemented everything in the requirements and stretch goals but I must admit that I just had no idea what to do in terms of styling and I pushed, so I left it mostly in the realms of brutalist methodology, keeping everything black and white, retaining only necessary features and text, with a few icons for UX.

I struggled with the routing in some features, such as the category routing. I still wasn't able to make this smooth, which I would like to get some feedback on please.

I wanted to use routing for the likes and delete features but I wasn't sure how was best to do this, so I completed it differently. I wasn't sure how to set the params or useState and, in the same function, complete the http method so that the server would pick it up correctly.

REQUIREMENTS AND STRETCH GOALS

🎯 Create a client using React.

✔️ - client for general App usage

🎯 Use Express to create your server, using both GET and POST endpoints.

✔️ - GET data from database to display on app

✔️ - POST data to database from the app

🎯 Build a React form for users to create posts.

✔️ - Form to complete with submit to database

🎯 Create multiple pages using React Router.

✔️ - Browser Router, Routes, Route, Link

🎯 Design a database schema, and seed the database with some realistic data.

✔️ - SQL queries

🎯 Use SQL to retrieve posts from the database in your Express server.

✔️ - fetch request with SQL query

🎯 Display all posts using .map().

✔️ - Have a list of comments and films

🎯 Use an interval and useEffect() to poll your database.

✔️ - timer

🏹 Create dynamic pages using react-router.

✔️ - :placeholder

🏹 Use react-router to create a dedicated route for the categories --> For example, /posts/:categoryName.

✔️ - my routing system has this syntax but it I am not sure if it was correctly implemented

🏹 Allow users to delete posts.

✔️ - DELETE route interaction --> useParams

🏹 Add ‘like’ functionality on posts.

✔️ - PUT route interaction --> useParams

🏹 Create additional SQL queries to show filtered posts.

✔️ - SELECT... WHERE genre = X --> using placeholders from a sorting drop down and useParams

SOURCES AND ATTRIBUTIONS

favicon
<a href="https://www.flaticon.com/free-icons/stage" title="stage icons">Stage icons created by Freepik - Flaticon</a>

show comments
<a href="https://www.flaticon.com/free-icons/followers" title="followers icons">Followers icons created by Secret Studio - Flaticon</a>

write comment
<a href="https://www.flaticon.com/free-icons/blog" title="blog icons">Blog icons created by Freepik - Flaticon</a>

like / favourite
<a href="https://www.flaticon.com/free-icons/wishlist" title="wishlist icons">Wishlist icons created by sonnycandra - Flaticon</a>

delete
<a href="https://www.flaticon.com/free-icons/delete" title="delete icons">Delete icons created by Ilham Fitrotul Hayat - Flaticon</a>
