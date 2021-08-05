CREATE DATABASE Projeto_escola;
go
USE Projeto_escola;


CREATE TABLE Usuarios 
(
	IdUsuario	INT PRIMARY KEY IDENTITY,
	Nome		VARCHAR(100) NOT NULL,
	Email		VARCHAR(100) NOT NULL,
	Senha		VARCHAR(100) NOT NULL,
);

CREATE TABLE Sala
(
	IdSala		INT PRIMARY KEY IDENTITY,
	Andar		VARCHAR(10),
	Nome		VARCHAR(100),
	Metragem	VARCHAR(100),
);

CREATE TABLE TipoEquipamentos
(
	IdTipoEquipamento INT PRIMARY KEY IDENTITY,
	Nome			  VARCHAR(100)
);



CREATE TABLE Equipamentos
(
	IdEquipamento         INT PRIMARY KEY IDENTITY,
	IdTipoEquipamento     INT FOREIGN KEY REFERENCES TipoEquipamentos(IdTipoEquipamento),
	IdSala				  INT FOREIGN KEY REFERENCES Sala(IdSala),
	Situacao			  BIT DEFAULT(1),
	Marca				  VARCHAR(100),
	NumeroSerie			  VARCHAR(100),
	NumeroPatrimonio	  VARCHAR(100),
	Descricao			  VARCHAR(200)
);

CREATE TABLE DataMovimentacao
(
	IdSala			INT FOREIGN KEY REFERENCES Sala(IdSala),
	IdEquipamento	INT FOREIGN KEY REFERENCES Equipamentos(IdEquipamento),
	DataEntrada		DATETIME,
	DataSaida		DATETIME
);

DROP TABLE Horario;