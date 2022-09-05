-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-09-2022 a las 17:51:39
-- Versión del servidor: 8.0.29
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `super-parking-lot`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `car-data`
--

CREATE TABLE `car-data` (
  `id` int UNSIGNED NOT NULL,
  `licensePlate` varchar(45) NOT NULL,
  `type` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `car-data`
--

INSERT INTO `car-data` (`id`, `licensePlate`, `type`) VALUES
(5, 'IF7-ST3', 1),
(6, 'T7S-11Q', 1),
(7, 'ODR-456', 3),
(8, 'BNC-3ER', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `car-types`
--

CREATE TABLE `car-types` (
  `id` int UNSIGNED NOT NULL,
  `nameType` varchar(45) NOT NULL,
  `price` float UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `car-types`
--

INSERT INTO `car-types` (`id`, `nameType`, `price`) VALUES
(1, 'Oficial', 0),
(2, 'Residente', 1),
(3, 'No residente', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `checkin-records`
--

CREATE TABLE `checkin-records` (
  `id` int UNSIGNED NOT NULL,
  `fk_CarData` int UNSIGNED NOT NULL,
  `checkInTime` datetime NOT NULL,
  `checkOutTime` datetime DEFAULT NULL,
  `totalCost` float UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `checkin-records`
--

INSERT INTO `checkin-records` (`id`, `fk_CarData`, `checkInTime`, `checkOutTime`, `totalCost`) VALUES
(1, 5, '2022-09-03 23:56:41', NULL, NULL),
(2, 8, '2022-09-03 23:56:41', NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `car-data`
--
ALTER TABLE `car-data`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`),
  ADD UNIQUE KEY `license-plate_UNIQUE` (`licensePlate`),
  ADD KEY `fk-type_idx` (`type`);

--
-- Indices de la tabla `car-types`
--
ALTER TABLE `car-types`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`),
  ADD UNIQUE KEY `name_UNIQUE` (`nameType`);

--
-- Indices de la tabla `checkin-records`
--
ALTER TABLE `checkin-records`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`),
  ADD KEY `fk_CarData_idx` (`fk_CarData`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `car-data`
--
ALTER TABLE `car-data`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `car-types`
--
ALTER TABLE `car-types`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `checkin-records`
--
ALTER TABLE `checkin-records`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `car-data`
--
ALTER TABLE `car-data`
  ADD CONSTRAINT `fk-type` FOREIGN KEY (`type`) REFERENCES `car-types` (`id`);

--
-- Filtros para la tabla `checkin-records`
--
ALTER TABLE `checkin-records`
  ADD CONSTRAINT `fk_CarData` FOREIGN KEY (`fk_CarData`) REFERENCES `car-data` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
