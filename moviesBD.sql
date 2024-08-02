CREATE DATABASE moviescontroll;

USE moviescontroll;

CREATE TABLE movies (
    id INT PRIMARY KEY AUTO_INCREMENT,
    type INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    gender VARCHAR(30) NOT NULL,
    duration VARCHAR(12), 
    total_ep INT,
    atual_temp INT,
    etaria INT,
    last_view DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO movies (type, name, gender, total_ep, atual_temp, etaria) VALUES 
(0, 'COBRA KAI', 'AÇÃO', 55, 6),
(0, 'STRANGER THINGS', 'FICÇÃO CIENTÍFICA', 34, 4),
(0, 'ARCANE', 'AVENTURA', 9, 1);

INSERT INTO movies (type, name, gender, duration, etaria) VALUES
(1, 'RESGATE 2', 'AVENTURA', '2h 3min'),
(1, 'PICA-PAU', 'COMÉDIA', '1h 40min');

DELETE FROM movies WHERE id = 2;

UPDATE movies
SET last_view = '2023-11-02 20:55:00'
WHERE id = 1;

SELECT * FROM movies;

DROP TABLE movies;