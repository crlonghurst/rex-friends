DROP DATABASE rexfriends;

CREATE DATABASE rexfriends;

USE rexfriends;

CREATE TABLE users(
    users_id INT NOT NULL AUTO_INCREMENT
,   user_first_name VARCHAR(150) NOT NULL
,   user_last_name VARCHAR(150) NOT NULL
,   username VARCHAR(150) NOT NULL
,   user_password VARCHAR(150) NOT NULL
,   PRIMARY KEY (users_id)
);

CREATE TABLE posts(
    post_id INT NOT NULL AUTO_INCREMENT
,   users_id INT NOT NULL
,   post_title VARCHAR(75) NOT NULL
,   post_content VARCHAR(500) NOT NULL
,   posted_date DATE NOT NULL
,   PRIMARY KEY (post_id)
);

INSERT INTO users
(
    user_first_name
,   user_last_name
,   username
,   user_password
)
VALUES
(
    'Christian'
,   'Longhurst'
,   'clonghurst'
,   'badPassword123'
);

INSERT INTO users
(
    user_first_name
,   user_last_name
,   username
,   user_password
)
VALUES
(
    'Darth'
,   'Revan'
,   'revantheButch'
,   'passwordBad123'
);

INSERT INTO users
(
    user_first_name
,   user_last_name
,   username
,   user_password
)
VALUES
(
    'Harry'
,   'Potter'
,   'chosenGriff'
,   '123BadPass'
);

INSERT INTO users
(
    user_first_name
,   user_last_name
,   username
,   user_password
)
VALUES
(
    'Luke'
,   'Skywalker'
,   'farmBoy'
,   'farmPassword123'
);

INSERT INTO users
(
    user_first_name
,   user_last_name
,   username
,   user_password
)
VALUES
(
    'Obi Wan'
,   'Kenobi'
,   'obi1Kenobi'
,   'jediMaster'
);

INSERT INTO users
(
    user_first_name
,   user_last_name
,   username
,   user_password
)
VALUES
(
    'Jean-Luc'
,   'Picard'
,   'cptpicard'
,   'PicardAlpha11'
);

INSERT INTO users
(
    user_first_name
,   user_last_name
,   username
,   user_password
)
VALUES
(
    'Anakin'
,   'Skywalker'
,   'chosen1'
,   'chosen1Jedi'
);

INSERT INTO users
(
    user_first_name
,   user_last_name
,   username
,   user_password
)
VALUES
(
    'William'
,   'Riker'
,   'williamTRiker'
,   'rikerWilliamT'
);

INSERT INTO posts
(
    users_id
,   post_title
,   post_content
,   posted_date
)
VALUES
(
    1
,   'Mandalorian Music is Awesome'
,   'With learning the Mandalorian in Band I have realized the awesomeness of the music of the Mandalorian'
,   '2021-02-03'
);

INSERT INTO posts
(
    users_id
,   post_title
,   post_content
,   posted_date
)
VALUES
(
    2
,   'The Outer Rim is where the Darkness resides'
,   'After the war with the Mandalorians I have learned there is a darkness out in the outer rim'
,   '2020-12-12'
);

INSERT INTO posts
(
    users_id
,   post_title
,   post_content
,   posted_date
)
VALUES
(
    3
,   'I am not afraid'
,   'Lord Voldemort will have my fear no longer.'
,   '2020-05-20'
);

INSERT INTO posts
(
    users_id
,   post_title
,   post_content
,   posted_date
)
VALUES
(
    3
,   'Tosche Station'
,   'I wanted to go to Tosche Station to get some power converters.'
,   '2020-12-12'
);

INSERT INTO posts
(
    users_id
,   post_title
,   post_content
,   posted_date
)
VALUES
(
    4
,   'The chosen one'
,   'My Master Qui Gon Jinn has found the chosen one and after his death I have been tasked with training him.'
,   '1998-05-10'
);

INSERT INTO posts
(
    users_id
,   post_title
,   post_content
,   posted_date
)
VALUES
(
    6
,   'Civility'
,   'You just committed an act of Udder Barbarity, we must do better.'
,   '2010-09-25'
);

INSERT INTO posts
(
    users_id
,   post_title
,   post_content
,   posted_date
)
VALUES
(
    7
,   'I need her'
,   'My new powers have brought peace, security, and justice to my new empire.'
,   '2005-06-21'
);

INSERT INTO posts
(
    users_id
,   post_title
,   post_content
,   posted_date
)
VALUES
(
    8
,   'Weapons Hot and Shields to Full'
,   'I have just gone to Alpha 9 to help Admiral Picard to defend the world against the romulans and start diplomatic channels towards the planet for the memory of my good friend Data.'
,   '2021-02-03'
);