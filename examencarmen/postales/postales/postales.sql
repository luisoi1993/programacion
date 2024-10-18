-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 10-02-2022 a las 12:57:19
-- Versión del servidor: 8.0.27-0ubuntu0.20.04.1
-- Versión de PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `postales`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `nombre` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `apellidos` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `direccion` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `codigo_postal` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `fecha_nacimeinto` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`nombre`, `apellidos`, `direccion`, `codigo_postal`, `email`, `fecha_nacimeinto`) VALUES
('Sheila', 'Portillo Cordero', 'Cruce Casa de Postas, 4', '18290 ', 'calfuSolisSolis@dayrep.co', '1965-03-29'),
('Donina ', 'Curiel Grijalva', 'Inglaterra, 98', '18518 ', 'doninaCurielGrijalva@jourrapide.com', '1973-05-19'),
('Icaro ', 'Narváez López', 'Atamaria, 21', '36680 ', 'icaroNarvaezLopez@armyspy.com', '1984-02-03'),
('Lion', 'Almonte Fuentes', 'La Fontanilla, 39', '14140 ', 'lionAlmonteFuentes@armyspy.com', '1945-12-21'),
('Lourdes ', 'Palacios Mondragón', 'Puerto Lugar, 25', '29712 ', 'lourdesPalaciosMondragon@teleworm.us', '1999-02-21'),
('Melinda ', 'Trejo Bonilla', 'Reiseñor, 53', '45516 ', 'melindaTrejoBonilla@rhyta.com', '1953-06-06');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
