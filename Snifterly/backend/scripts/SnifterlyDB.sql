CREATE DATABASE IF NOT EXISTS snifterlydb;

USE snifterlydb;

CREATE TABLE IF NOT EXISTS `Usuario` (
    `idUsuario` INT NOT NULL AUTO_INCREMENT,
    `nombre` varchar(50) NOT NULL,
    `fechaNacimiento` DATE NOT NULL,
    `peso` float NOT NULL,
    `altura` float NOT NULL,
    `email` varchar(50) NOT NULL,
    `contrasenia` varchar(20) NOT NULL,
    `fechaCreacion` DATETIME NOT NULL,
    `modResistencia` FLOAT DEFAULT NULL,
	
    PRIMARY KEY (`idUsuario`)
);

CREATE TABLE IF NOT EXISTS `Jornada` (
    `idJornada` INT NOT NULL AUTO_INCREMENT,
    `fechaInicio` DATETIME NOT NULL,
    `fechaFin` DATETIME DEFAULT NULL,
    `idUsuario` INT NOT NULL,
    `activo` BOOLEAN NOT NULL,
    
    PRIMARY KEY (`idJornada`)
);

CREATE TABLE IF NOT EXISTS `Medicion` (
    `idMedicion` INT NOT NULL AUTO_INCREMENT,
    `grado` float NOT NULL,
    `fecha` datetime NOT NULL,
    `idJornada` INT DEFAULT NULL,
    `estado` varchar(50) DEFAULT NULL,
    
    PRIMARY KEY (`idMedicion`)
);

INSERT INTO `medicion` (`idMedicion`, `grado`, `fecha`, `idJornada`, `estado`) VALUES
(1, 0.025, '2023-02-21 01:00:00', 1, 0), (6, 0.041, '2023-02-21 01:15:00', 1, 0), (7, 0.044, '2023-02-21 01:20:00', 1, 0),
(8, 0.03, '2023-02-21 02:00:00', 1, 0), (9, 0.012, '2020-10-09 09:15:00', 3, 0), (11, 0.028, '2020-10-09 09:25:00', 3, 0),
(12, 0.043, '2020-10-09 09:45:00', 3, 0), (13, 0.051, '2020-10-09 09:50:00', 3, 0), (14, 0.01, '2023-12-05 11:30:00', 5, 0),
(15, 0.037, '2023-12-06 00:05:00', 5, 0), (16, 0.049, '2023-12-06 00:15:00', 5, 0), (17, 0.055, '2023-12-06 00:40:00', 5, 0),
(18, 0.048, '2023-12-06 01:25:00', 5, 0), (19, 0.031, '2023-06-23 03:35:00', NULL, 0);

INSERT INTO `Usuario` (`idUsuario`,`nombre`,`fechaNacimiento`,`peso`,`altura`,`email`,`contrasenia`,`fechaCreacion`,`modResistencia`) VALUES (1, 'Matheo', '2006-02-07', 54, 1.79, 'sdif@gmail.com', 'Matheo', '2023-05-12 00:00:00', NULL),
(4, 'SofiB', '2005-11-16', 50, 1.66, 'sofia@gmail.com', 'SofiB', '2021-01-05 00:00:00', NULL), (5, 'Cami', '2006-06-29', 46, 1.57, 'cami@gmail.com', 'Cami', '2018-11-28 00:00:00', NULL),
(8, 'SofiC', '2005-09-05', 51, 171, 'sofi@gmail.com', 'SofiC', '2022-04-12 00:00:00', NULL), (11, '1', '2023-08-09', 49, 1.57, 'hola', 'hola', '2023-08-04 09:00:20', NULL);

INSERT INTO `jornada` (`idJornada`, `fechaInicio`, `fechaFin`, `idUsuario`, `activo`) VALUES (2, '2023-02-21 00:00:00', NULL, 1, 0),
(4, '2020-10-09 09:15:00', '2020-10-09 09:50:00', 4, 0), (6, '2023-12-05 11:30:00', '2023-12-06 01:25:00', 5, 0);