DROP DATABASE IF EXISTS blog_db;

CREATE DATABASE ecommerce_db;

USE ecommerce_db;


CREATE TABLE users (
    email VARCHAR(200) PRIMARY KEY,
    password VARCHAR(200) NOT NULL

)

CREATE TABLE posts (
    title VARCHAR(150) NOT NULL,
    post_id INT PRIMARY KEY,
    post_contents TEXT,
    post_user VARCHAR(200),
    FOREIGN KEY(post_user) REFERENCES users(users_email),
    post_date DATE 
)

CREATE TABLE comments (
    comment_user VARCHAR(200),
    FOREIGN KEY (comment_user) REFERENCES users(users_email),
    comment_post INT,
    FOREIGN KEY (comment_post) REFERENCES posts(post_id),
    comment_contents TEXT,
    comment_date DATE,
) 