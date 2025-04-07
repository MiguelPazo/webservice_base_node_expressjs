CREATE DATABASE demo
CHARACTER SET utf8
COLLATE utf8_general_ci;

USE demo;

CREATE TABLE demo.users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user VARCHAR(50) NOT NULL,
    pass VARCHAR(100) NOT NULL
);

INSERT INTO demo.users (user, pass) VALUES ('user1', 'pass1');
INSERT INTO demo.users (user, pass) VALUES ('user2', 'pass2');
commit;

SELECT * FROM demo.users;