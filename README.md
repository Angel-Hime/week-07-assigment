# week-07-assignment

# Database Driven Full Stack React & Express App

__Project Overview__

This is a simple movie review app. I have a database of users and a database of movies which are displayed in a list with a poster. The user can navigate onto the movie page and click the comments button, which will toggle to view the comments for the individual movie. Users can also leave a comment of their own, as indicated by the comment button and the modal that loads once the button is pressed. The new comment will be added to the database and show on the app.

Users can like other comments and delete comments. If a user wishes to see only films of a certain genre, they can filter these using the links provided on the root route and genre routes.

__Reflection__

Requirements:

🎯 Create a client using React.

    [x] client for general App usage

🎯 Use Express to create your server, using both GET and POST endpoints.

    [x] GET data from database to display on app

    [x] POST data to database from the app

🎯 Build a React form for users to create posts.

    [x] Form to complete with submit to database

🎯 Create multiple pages using React Router.

    [x] Browser Router, Routes, Route, Link

🎯 Design a database schema, and seed the database with some realistic data.

    [x] SQL queries

🎯 Use SQL to retrieve posts from the database in your Express server.

    [x] fetch request with SQL query

🎯 Display all posts using .map().

    [x] Have a list of comments and films

🎯 Use an interval and useEffect() to poll your database.

    [x] timer used to iterate the poll for active database updates

Stretch Goals:

🏹 Create dynamic pages using react-router.

    [x] :placeholder

🏹 Use react-router to create a dedicated route for the categories --> For example, /posts/:categoryName.

    [x] my routing system has this syntax but it I am not sure if it was correctly implemented

🏹 Allow users to delete posts.

    [x] DELETE route interaction --> useParams

🏹 Add ‘like’ functionality on posts.

    [x] PUT route interaction --> useParams

🏹 Create additional SQL queries to show filtered posts.

    [x] SELECT... WHERE genre = X --> using placeholders from a sorting drop down and useParams

For this assignment I implemented everything from the requirements and the stretch goals; however, I kept the styling very simple; everything remains mostly black and white, retaining only necessary features and text, with a few icons for a smooth UX.

I originally struggled with the routing in some features, such as the category routing, so I used a different method of filtering in order to present the movies by genre.

Sources:

    favicon
        https://www.flaticon.com/free-icons/stage
        title="stage icons"
        Stage icons created by Freepik - Flaticon

    show comments
        https://www.flaticon.com/free-icons/followers
        title="followers icons"
        Followers icons created by Secret Studio - Flaticon
    
    write comment
        https://www.flaticon.com/free-icons/blog
        title="blog icons"
        Blog icons created by Freepik - Flaticon
    
    like / favourite
        https://www.flaticon.com/free-icons/wishlist
        title="wishlist icons"
        Wishlist icons created by sonnycandra - Flaticon
    
    delete
        https://www.flaticon.com/free-icons/delete
        title="delete icons"
        Delete icons created by Ilham Fitrotul Hayat - Flaticon
