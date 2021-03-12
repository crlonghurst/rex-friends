USE rugarug_rexfriends;

-- CREATE TABLE Groups(
--     groups_id INT NOT NULL AUTO_INCREMENT
-- ,   groups_name VARCHAR(150) NOT NULL
-- ,   groups_description VARCHAR(300) 
-- ,   groups_creation_date DATE NOT NULL
-- ,   PRIMARY KEY (groups_id)
-- );

CREATE TABLE user_group(
    user_group_id INT NOT NULL AUTO_INCREMENT
,   groups_id INT NOT NULL
,   user_id   INT NOT NULL
,   PRIMARY KEY (user_group_id)
,   FOREIGN KEY (groups_id) REFERENCES Groups(groups_id)
,   FOREIGN KEY (user_id) REFERENCES users(users_id)
);

-- CREATE TABLE friends(
--     friends_id INT NOT NULL AUTO_INCREMENT
-- ,   friend1_id INT NOT NULL
-- ,   friend2_id INT NOT NULL
-- ,   PRIMARY KEY (friends_id)
-- ,   FOREIGN KEY(friend1_id) REFERENCES users(users_id)
-- ,   FOREIGN KEY (friend2_id) REFERENCES users(users_id)
-- );