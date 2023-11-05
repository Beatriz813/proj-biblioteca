CREATE DATABASE Biblioteca
GO
Use Biblioteca;
GO

CREATE TABLE Category (Id INT IDENTITY(1,1) PRIMARY KEY, NameCategory VARCHAR(50) NOT NULL)

CREATE TABLE Book (Id INT IDENTITY(1,1) PRIMARY KEY,
NameBook VARCHAR(80) NOT NULL,
Description VARCHAR(100),
PageQuantity INT,
Author VARCHAR(150) NOT NULL,
CategoryId INT Foreign key references Category(Id))

