CREATE DATABASE vet_db;

USE vet_db;

CREATE TABLE client (
id INT PRIMARY KEY AUTO_INCREMENT,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR (30)NOT NULL,
email VARCHAR(100) NOT NULL UNIQUE,
username VARCHAR (100) NOT NULL,
password VARCHAR (100) NOT NULL,
phone_number VARCHAR(30)
);

CREATE TABLE pet (
    id INT PRIMARY KEY AUTO_INCREMENT,
    client_id INT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR (30),
    species VARCHAR(100) NOT NULL,
    breed VARCHAR(100),
    age INT NOT NULL,
    FOREIGN KEY (client_id) REFERENCES client(id)
);

CREATE TABLE veterinarian (
    id INT PRIMARY KEY AUTO_INCREMENT,
    dea VARCHAR(30) NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR (30)NOT NULL
);

CREATE TABLE forum (
    forum_id INT PRIMARY KEY AUTO_INCREMENT,
    post TEXT NOT NULL,
    response TEXT
);

