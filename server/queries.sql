CREATE TABLE IF NOT EXISTS movie_table (
id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
film_name VARCHAR(255),
poster_url TEXT,
poster_alt TEXT,
release_date DATE NOT NULL,
genre VARCHAR (255),
director VARCHAR(30)
);

INSERT INTO movie_table(film_name, poster_url, release_date, genre, director) VALUES ('28 Years Later', 'https://resizing.flixster.com/iBImSX7-VRjcV7kyjqqSXlaes5M=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzc5YTYzMDk1LTZkODgtNDQ3Ny1hOTZjLWRjNzQwMTg0NWNmMC5qcGc=', '28 Years Later film poster', '2025-06-20', 'Horror', 'Danny Boyle'), 
('One Battle After Another', 'https://resizing.flixster.com/yepsxuaCu3f7igZnTo2huAOVtCU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzNhNmQzNDA0LWFhYjQtNDA5Mi04OTMyLTA2Y2U2OWI5ZjVmYS5qcGc=', 'One Battle After Another film poster' , '2025-09-26', 'Drama', 'Paul Thomas Anderson'), 
('Sinners', 'https://resizing.flixster.com/VR3Tfr9zpNllsU6RchvnbhGmPkc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2VhOTdiZDNjLTlmODQtNGNlYi1iZWYwLWNkYjY2YmI5YzZjYS5qcGc=', 'Sinners film poster', '2025-08-18', 'Horror', 'Ryan Coogler'), 
('Star Wars: Episode IV - A New Hope', 'https://resizing.flixster.com/rIic1xQq9hyHMW6OJsCNOCVKRdw=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzQ4Y2VkZjJhLWRmMGYtNDljZC1iN2JhLTYzMjk1YzMxNWMwOC53ZWJw', 'Star Wars: Episode IV - A New Hope film poster', '1977-05-25', 'Sci-Fi', 'George Lucas'), 
( 'Dune', 'https://resizing.flixster.com/gcRn4_emLo1Iz5ndbvUOKDYq35c=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzdhYTI2NDJkLTU5YTYtNDNkOS05ZWQxLWZiNjFlOTZmYjZlZS5qcGc=', 'Dune film poster', '2021-10-22', 'Sci-Fi', 'Denis Villeneuve'), 
('There Will Be Blood', 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p171565_p_v8_aa.jpg', 'There Will Be Blood film poster', '2008-01-25',  'Drama', 'Paul Thomas Anderson');

CREATE TABLE IF NOT EXISTS movie_comments (
id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
user_name VARCHAR(30),
rating INT NOT NULL,
comment TEXT NOT NULL,
comment_likes INT DEFAULT 0,
movie_id INTEGER REFERENCES movie_table(id)
);

INSERT INTO movie_comments (user_name, rating, comment, movie_id) VALUES ('Helena Lovefilm', 8, 'One of my favourites, Dicaprio really deserves the oscar', 2) , ('Cam Mann', 4, 'This was just far too long, I just do not understand why people like it', 6), ('Poppy Kern', 10, 'I love George Lucas, he cannot do wrong!', 4), ('Mo V Goerr', 6, 'I love a good zombie film and this one was a thrilling watch, although it was missing something.', 1), ('Phil M', 8, 'I cannot wait for the next installment, it is a perfect reboot!', 5),('Thea Treacle', 7, 'There are vampire films and there is this, it had slow points but wow the way they work with music was incredible', 3);