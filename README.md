Database Driven Full Stack React & Express App

This is a simple movie review app. I have a database of users and a database of movies which are displayed in a list with a poster. The user can navigate onto the movie page and click the comments button, which will toggle to view the comments for the individual movie. Users can also leave a comment of their own, as indicated by the comment button and the modal that loads once the button is pressed. The new comment will be added to the database and show on the app.

Users can like other comments and delete comments. If a user wishes to see only films of a certain genre, they can filter these.

REFLECTION

Sorry that I never clean my code up afterwards, I ran out of time this go around as I have been super busy over the weekend. In the past, this has been essentially the same but I wanted to acknowledge it because I know that it is poor form.

Getting to the main reflectiong, I think that I implemented everything in the requirements and stretch goals but I must admit that I just had no idea what to do in terms of styling and I pushed, so I left it mostly in the realms of brutalist methodology, keeping everything black and white, retaining only necessary features and text, with a few icons for UX.

I struggled with the routing in some features, such as the category routing. I still wasn't able to make this smooth, which I would like to get some feedback on please.

I wanted to use routing for the likes and delete features but I wasn't sure how was best to do this, so I completed it differently.

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

    -

🏹 Allow users to delete posts.

✔️ - DELETE route interaction --> useParams

🏹 Add ‘like’ functionality on posts.

✔️ - PUT route interaction --> useParams

🏹 Create additional SQL queries to show filtered posts.

    - SELECT... WHERE genre = X --> using placeholders from a sorting drop down and useParams

SOURCES AND ATTRIBUTIONS

favicon
<a href="https://www.flaticon.com/free-icons/watch-movie" title="watch-movie icons">Watch-movie icons created by Freepik - Flaticon</a>

show comments
<a href="https://www.flaticon.com/free-icons/comment" title="comment icons">Comment icons created by Freepik - Flaticon</a>

write comment
<a href="https://www.flaticon.com/free-icons/write-review" title="write review icons">Write review icons created by Freepik - Flaticon</a>

favourite
<a href="https://www.flaticon.com/free-icons/favourite" title="favourite icons">Favourite icons created by Freepik - Flaticon</a>

delete
<a href="https://www.flaticon.com/free-icons/ui" title="ui icons">Ui icons created by Freepik - Flaticon</a>
