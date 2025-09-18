-- Skapa databas om den inte redan finns
CREATE DATABASE IF NOT EXISTS dt207g_courses;

-- Använd databasen
USE dt207g_courses;

-- Skapa tabell
CREATE TABLE IF NOT EXISTS courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    coursecode VARCHAR(20) NOT NULL,
    coursename VARCHAR(100) NOT NULL,
    syllabus VARCHAR(255),
    progression VARCHAR(10)
);