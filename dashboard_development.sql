-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : mydb:3306
-- Généré le : ven. 20 mars 2020 à 10:57
-- Version du serveur :  8.0.19
-- Version de PHP : 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `dashboard_development`
--

-- --------------------------------------------------------

--
-- Structure de la table `Actors`
--

CREATE TABLE `Actors` (
  `id` int NOT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `birthday` datetime DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `nationality` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `Actors`
--

INSERT INTO `Actors` (`id`, `firstname`, `lastname`, `birthday`, `gender`, `nationality`, `createdAt`, `updatedAt`) VALUES
(1, 'Daniel', 'Radcliffe', '2020-03-16 13:20:53', 'male', 'British', '2020-03-18 15:12:49', '2020-03-18 15:12:49'),
(2, 'Rupert', 'Grint', '2020-03-16 13:20:53', 'male', 'British', '2020-03-18 15:13:18', '2020-03-18 15:13:18'),
(3, 'Emma', 'Watson', '2020-03-16 13:20:53', 'female', 'British', '2020-03-18 15:14:11', '2020-03-18 15:14:11'),
(4, 'Kad', 'Merad', '2020-03-16 13:20:53', 'male', 'French', '2020-03-18 15:20:18', '2020-03-18 15:20:18'),
(5, 'Dany', 'Boon', '2020-03-16 13:20:53', 'male', 'French', '2020-03-18 15:20:31', '2020-03-18 15:20:31'),
(6, 'Zoé', 'Félix', '2020-03-16 13:20:53', 'female', 'French', '2020-03-18 15:20:52', '2020-03-18 15:20:52'),
(7, 'Daisy', 'Ridley', '2020-03-16 13:20:53', 'female', 'American', '2020-03-18 15:23:08', '2020-03-18 15:23:08'),
(8, 'John', 'Boyega', '2020-03-16 13:20:53', 'male', 'American', '2020-03-18 15:23:31', '2020-03-18 15:23:31'),
(9, 'Oscar', 'Isaac', '2020-03-16 13:20:53', 'male', 'American', '2020-03-18 15:23:47', '2020-03-18 15:23:47'),
(10, 'Ewan', 'McGregor', '2020-03-16 13:20:53', 'male', 'American', '2020-03-18 15:24:59', '2020-03-18 15:24:59'),
(11, 'Liam', 'Neeson', '2020-03-16 13:20:53', 'male', 'American', '2020-03-18 15:25:26', '2020-03-18 15:25:26'),
(12, 'Natalie', 'Portman', '2020-03-16 13:20:53', 'female', 'American', '2020-03-18 15:25:45', '2020-03-18 15:25:45'),
(13, 'Keanu', 'Reeves', '2020-03-16 13:20:53', 'male', 'American', '2020-03-18 15:27:01', '2020-03-18 15:27:01'),
(14, 'Laurence', 'Fishburne', '2020-03-16 13:20:53', 'male', 'American', '2020-03-18 15:27:20', '2020-03-18 15:27:20'),
(15, 'Carrie-Anne', 'Moss', '2020-03-16 13:20:53', 'female', 'American', '2020-03-18 15:27:38', '2020-03-18 15:27:38'),
(16, 'Audrey', 'Tautou', '2020-03-16 13:20:53', 'female', 'French', '2020-03-18 15:28:53', '2020-03-18 15:28:53'),
(17, 'Mathieu', 'Kassovitz', '2020-03-16 13:20:53', 'male', 'French', '2020-03-18 15:29:13', '2020-03-18 15:29:13'),
(18, 'Christian', 'Clavier', '2020-03-16 13:20:53', 'male', 'French', '2020-03-18 15:30:42', '2020-03-18 15:30:42'),
(19, 'Jean', 'Reno', '2020-03-16 13:20:53', 'male', 'French', '2020-03-18 15:30:59', '2020-03-18 15:30:59'),
(20, 'Valérie', 'Lemercier', '2020-03-16 13:20:53', 'female', 'French', '2020-03-18 15:31:17', '2020-03-18 15:31:17'),
(21, 'Josiane', 'Balasko', '2020-03-16 13:20:53', 'female', 'French', '2020-03-18 15:32:35', '2020-03-18 15:32:35'),
(22, 'Luis', 'Rego', '2020-03-16 13:20:53', 'male', 'French', '2020-03-18 15:32:52', '2020-03-18 15:32:52'),
(23, 'Marie-Anne', 'Chazel', '2020-03-16 13:20:53', 'female', 'French', '2020-03-18 15:33:12', '2020-03-18 15:33:12'),
(24, 'Michel', 'Blanc', '2020-03-16 13:20:53', 'male', 'French', '2020-03-18 15:34:20', '2020-03-18 15:34:20'),
(25, 'Sandra', 'Bullock', '2020-03-16 13:20:53', 'female', 'American', '2020-03-18 15:36:53', '2020-03-18 15:36:53'),
(26, 'George', 'Clooney', '2020-03-16 13:20:53', 'male', 'American', '2020-03-18 15:37:11', '2020-03-18 15:37:11'),
(27, 'Ed', 'Harris', '2020-03-16 13:20:53', 'male', 'American', '2020-03-18 15:37:27', '2020-03-18 15:37:27'),
(28, 'Matthew', 'McConaughey', '2020-03-16 13:20:53', 'male', 'American', '2020-03-18 15:38:39', '2020-03-18 15:38:39'),
(29, 'Anne', 'Hathaway', '2020-03-16 13:20:53', 'female', 'American', '2020-03-18 15:39:05', '2020-03-18 15:39:05'),
(30, 'Jessica', 'Chastain', '2020-03-16 13:20:53', 'female', 'American', '2020-03-18 15:39:22', '2020-03-18 15:39:22'),
(31, 'Bradley', 'Cooper', '2020-03-16 13:20:53', 'male', 'American', '2020-03-18 15:40:44', '2020-03-18 15:40:44'),
(32, 'Sienna', 'Miller', '2020-03-16 13:20:53', 'female', 'American', '2020-03-18 15:41:09', '2020-03-18 15:41:09'),
(33, 'Kyle', 'Gallner', '2020-03-16 13:20:53', 'male', 'American', '2020-03-18 15:41:41', '2020-03-18 15:41:41'),
(34, 'Anémone', 'Anémone', '2020-03-16 13:20:53', 'female', 'French', '2020-03-18 15:45:19', '2020-03-18 15:45:19'),
(35, 'Bourvil', 'Bourvil', '2020-03-16 13:20:53', 'male', 'French', '2020-03-18 15:48:42', '2020-03-18 15:48:42'),
(36, 'Louis', 'De Funès', '2020-03-16 13:20:53', 'male', 'French', '2020-03-18 15:49:04', '2020-03-18 15:49:04'),
(37, 'Claudio', 'Brook', '2020-03-16 13:20:53', 'male', 'French', '2020-03-18 15:49:22', '2020-03-18 15:49:22'),
(38, 'Elijah', 'Wood', '2020-03-16 13:20:53', 'male', 'American', '2020-03-18 15:51:09', '2020-03-18 15:51:09'),
(39, 'Ian', 'McKellen', '2020-03-16 13:20:53', 'male', 'American', '2020-03-18 15:51:35', '2020-03-18 15:51:35'),
(40, 'Orlando', 'Bloom', '2020-03-16 13:20:53', 'male', 'American', '2020-03-18 15:51:51', '2020-03-18 15:51:51');

-- --------------------------------------------------------

--
-- Structure de la table `Genres`
--

CREATE TABLE `Genres` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `Genres`
--

INSERT INTO `Genres` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'history', '2020-03-17 12:59:19', '2020-03-17 12:59:19'),
(2, 'comedy', '2020-03-17 12:59:29', '2020-03-17 12:59:29'),
(3, 'romantic', '2020-03-17 13:00:00', '2020-03-17 13:00:00'),
(4, 'adventure', '2020-03-17 13:00:35', '2020-03-17 13:00:35'),
(5, 'fantasy', '2020-03-17 13:00:51', '2020-03-17 13:00:51'),
(6, 'war', '2020-03-17 13:01:09', '2020-03-17 13:01:09'),
(7, 'sci-fi', '2020-03-17 13:01:17', '2020-03-17 13:01:17'),
(8, 'western', '2020-03-17 13:01:35', '2020-03-17 13:01:35'),
(9, 'thriller', '2020-03-17 13:01:44', '2020-03-17 13:01:44'),
(10, 'action', '2020-03-17 13:02:00', '2020-03-17 13:02:00'),
(11, 'horror', '2020-03-17 13:02:16', '2020-03-17 13:02:16'),
(12, 'documentary', '2020-03-17 13:02:33', '2020-03-17 13:02:33');

-- --------------------------------------------------------

--
-- Structure de la table `MovieActors`
--

CREATE TABLE `MovieActors` (
  `id` int NOT NULL,
  `movieId` int DEFAULT NULL,
  `actorId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `MovieActors`
--

INSERT INTO `MovieActors` (`id`, `movieId`, `actorId`, `createdAt`, `updatedAt`) VALUES
(1, 19, 3, '2020-03-18 15:16:06', '2020-03-18 15:16:06'),
(2, 20, 3, '2020-03-18 15:17:05', '2020-03-18 15:17:05'),
(3, 21, 3, '2020-03-18 15:17:09', '2020-03-18 15:17:09'),
(4, 22, 3, '2020-03-18 15:17:13', '2020-03-18 15:17:13'),
(5, 17, 3, '2020-03-18 15:17:25', '2020-03-18 15:17:25'),
(6, 18, 3, '2020-03-18 15:17:30', '2020-03-18 15:17:30'),
(7, 17, 1, '2020-03-18 15:18:01', '2020-03-18 15:18:01'),
(8, 18, 1, '2020-03-18 15:18:05', '2020-03-18 15:18:05'),
(9, 19, 1, '2020-03-18 15:18:09', '2020-03-18 15:18:09'),
(10, 20, 1, '2020-03-18 15:18:13', '2020-03-18 15:18:13'),
(11, 21, 1, '2020-03-18 15:18:21', '2020-03-18 15:18:21'),
(12, 22, 1, '2020-03-18 15:18:25', '2020-03-18 15:18:25'),
(13, 17, 2, '2020-03-18 15:18:49', '2020-03-18 15:18:49'),
(14, 18, 2, '2020-03-18 15:18:52', '2020-03-18 15:18:52'),
(15, 19, 2, '2020-03-18 15:18:56', '2020-03-18 15:18:56'),
(16, 20, 2, '2020-03-18 15:19:00', '2020-03-18 15:19:00'),
(17, 21, 2, '2020-03-18 15:19:04', '2020-03-18 15:19:04'),
(18, 22, 2, '2020-03-18 15:19:08', '2020-03-18 15:19:08'),
(19, 2, 4, '2020-03-18 15:21:26', '2020-03-18 15:21:26'),
(20, 2, 5, '2020-03-18 15:21:30', '2020-03-18 15:21:30'),
(21, 2, 6, '2020-03-18 15:21:33', '2020-03-18 15:21:33'),
(22, 3, 7, '2020-03-18 15:24:20', '2020-03-18 15:24:20'),
(23, 3, 8, '2020-03-18 15:24:24', '2020-03-18 15:24:24'),
(24, 3, 9, '2020-03-18 15:24:28', '2020-03-18 15:24:28'),
(25, 4, 10, '2020-03-18 15:26:19', '2020-03-18 15:26:19'),
(26, 4, 11, '2020-03-18 15:26:22', '2020-03-18 15:26:22'),
(27, 4, 12, '2020-03-18 15:26:25', '2020-03-18 15:26:25'),
(28, 5, 13, '2020-03-18 15:28:00', '2020-03-18 15:28:00'),
(29, 5, 14, '2020-03-18 15:28:04', '2020-03-18 15:28:04'),
(30, 5, 15, '2020-03-18 15:28:07', '2020-03-18 15:28:07'),
(31, 6, 16, '2020-03-18 15:30:00', '2020-03-18 15:30:00'),
(32, 6, 17, '2020-03-18 15:30:05', '2020-03-18 15:30:05'),
(33, 7, 18, '2020-03-18 15:31:39', '2020-03-18 15:31:39'),
(34, 7, 19, '2020-03-18 15:31:42', '2020-03-18 15:31:42'),
(35, 7, 20, '2020-03-18 15:31:47', '2020-03-18 15:31:47'),
(36, 8, 21, '2020-03-18 15:33:33', '2020-03-18 15:33:33'),
(37, 8, 22, '2020-03-18 15:33:36', '2020-03-18 15:33:36'),
(38, 8, 23, '2020-03-18 15:33:39', '2020-03-18 15:33:39'),
(39, 9, 24, '2020-03-18 15:34:50', '2020-03-18 15:34:50'),
(40, 9, 21, '2020-03-18 15:35:00', '2020-03-18 15:35:00'),
(41, 9, 23, '2020-03-18 15:35:14', '2020-03-18 15:35:14'),
(42, 10, 21, '2020-03-18 15:35:51', '2020-03-18 15:35:51'),
(43, 10, 23, '2020-03-18 15:36:05', '2020-03-18 15:36:05'),
(44, 10, 24, '2020-03-18 15:36:11', '2020-03-18 15:36:11'),
(45, 11, 25, '2020-03-18 15:38:00', '2020-03-18 15:38:00'),
(46, 11, 26, '2020-03-18 15:38:03', '2020-03-18 15:38:03'),
(47, 11, 27, '2020-03-18 15:38:06', '2020-03-18 15:38:06'),
(48, 12, 28, '2020-03-18 15:39:52', '2020-03-18 15:39:52'),
(49, 12, 29, '2020-03-18 15:39:55', '2020-03-18 15:39:55'),
(50, 12, 30, '2020-03-18 15:40:01', '2020-03-18 15:40:01'),
(51, 13, 31, '2020-03-18 15:41:59', '2020-03-18 15:41:59'),
(52, 13, 32, '2020-03-18 15:42:02', '2020-03-18 15:42:02'),
(53, 13, 33, '2020-03-18 15:42:05', '2020-03-18 15:42:05'),
(54, 14, 34, '2020-03-18 15:46:17', '2020-03-18 15:46:17'),
(55, 14, 21, '2020-03-18 15:46:36', '2020-03-18 15:46:36'),
(56, 14, 23, '2020-03-18 15:46:52', '2020-03-18 15:46:52'),
(57, 15, 35, '2020-03-18 15:49:58', '2020-03-18 15:49:58'),
(58, 15, 36, '2020-03-18 15:50:01', '2020-03-18 15:50:01'),
(59, 15, 37, '2020-03-18 15:50:04', '2020-03-18 15:50:04'),
(60, 16, 38, '2020-03-18 15:52:15', '2020-03-18 15:52:15'),
(61, 16, 39, '2020-03-18 15:52:18', '2020-03-18 15:52:18'),
(62, 16, 40, '2020-03-18 15:52:22', '2020-03-18 15:52:22');

-- --------------------------------------------------------

--
-- Structure de la table `Movies`
--

CREATE TABLE `Movies` (
  `id` int NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `year` int DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `score` float DEFAULT NULL,
  `duration` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `genreId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `Movies`
--

INSERT INTO `Movies` (`id`, `title`, `description`, `year`, `picture`, `score`, `duration`, `createdAt`, `updatedAt`, `genreId`) VALUES
(1, 'Dofus - Livre 1: Julith', 'The strange little guy in the blue hood is well known to Krosmoz. His name is Joris and he\'s proposing to take you on a fantastic adventure. Our hero is leading a happy life in his magic shop in the city of Bonta. But one day, when he seeks out his idol, a Gobbowl superstar, everything changes for the worst as Julith, the vengeful witch, is back in town!', 2015, 'assets/img/dofus.jpg', 10, 100, '2020-03-17 13:02:53', '2020-03-17 13:02:53', 5),
(2, 'Bienvenue chez les Ch\'tis', 'A French public servant from Provence is banished to the far North. Strongly prejudiced against this cold and inhospitable place, he leaves his family behind to relocate temporarily there, with the firm intent to quickly come back. ', 2008, 'assets/img/bienvenuChtis.jpg', 10, 106, '2020-03-17 13:04:54', '2020-03-17 13:04:54', 2),
(3, 'Star Wars: Episode VII - Le réveil de la Force', 'Three decades after the Empire\'s defeat, a new threat arises in the militant First Order. Defected stormtrooper Finn and the scavenger Rey are caught up in the Resistance\'s search for the missing Luke Skywalker. ', 2015, 'assets/img/starWarsVII.jpg', 9, 138, '2020-03-17 13:07:48', '2020-03-17 13:07:48', 7),
(4, 'Star Wars: Épisode I - La menace fantôme', 'Two Jedi escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their old glory. ', 1999, 'assets/img/StarWarsI.jpg', 9, 94, '2020-03-17 13:58:49', '2020-03-17 13:58:49', 7),
(5, 'Matrix', 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.', 1999, 'assets/img/Matrix.jpg', 9, 146, '2020-03-17 13:59:43', '2020-03-17 13:59:43', 7),
(6, 'Le fabuleux destin d\'Amélie Poulain', 'Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love. ', 2001, 'assets/img/Amelie.jpg', 0, 221, '2020-03-17 14:00:52', '2020-03-17 14:00:52', 2),
(7, 'Les visiteurs', 'A medieval knight and his servant ask a familiar wizard to move them back in time to prevent father-in-law\'s accidentally killing. Instead, they fly away to the 20th century. ', 1993, 'assets/img/Visiteurs1993.jpg', 10, 107, '2020-03-17 14:03:27', '2020-03-17 14:03:27', 2),
(8, 'Les bronzés', 'Holidaymakers arriving in a Club Med camp on the Ivory Coast are determined to forget their everyday problems and emotional disappointments. Games, competitions, outings, bathing and sunburn accompany a continual succession of casual affairs. ', 1978, 'assets/img/Bronzes1978.jpg', 10, 87, '2020-03-17 14:05:07', '2020-03-17 14:05:07', 2),
(9, 'Les bronzés font du ski', 'Eight tourists who met in a holiday camp on the Ivory Coast are reunited for a skiing holiday. ', 1979, 'assets/img/BronzesSki1979.jpg', 10, 102, '2020-03-17 14:10:51', '2020-03-17 14:10:51', 2),
(10, 'Les bronzés 3: amis pour la vie', 'Movie about friends who reunite after 20 years and a lot of things have changed. ', 2006, 'assets/img/Bronzes3.jpg', 8, 97, '2020-03-17 14:11:57', '2020-03-17 14:11:57', 2),
(11, 'Gravity', ' Two astronauts work together to survive after an accident leaves them stranded in space. ', 2013, 'assets/img/Gravity.jpg', 1, 143, '2020-03-17 14:14:10', '2020-03-17 14:14:10', 7),
(12, 'Interstellar', 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival. ', 2014, 'assets/img/Interstellar.jpg', 1, 148, '2020-03-17 14:15:00', '2020-03-17 14:15:00', 7),
(13, 'American Sniper', 'Navy S.E.A.L. sniper Chris Kyle\'s (Bradley Cooper\'s) pinpoint accuracy saves countless lives on the battlefield and turns him into a legend. Back home to his wife and kids after four tours of duty, however, Chris finds that it is the war he can\'t leave behind. ', 2014, 'assets/img/AmericanSniper.jpg', 9, 133, '2020-03-17 14:16:26', '2020-03-17 14:16:26', 6),
(14, 'Le père Noël est une ordure', 'Two neurotics, working for a suicide hotline on the night of Christmas Eve, get caught up in a catastrophe when a pregnant woman, her abusive boyfriend, and a transvestite visit their office. ', 1982, 'assets/img/PereNoelOrdure1982.jpg', 10, 68, '2020-03-17 14:18:38', '2020-03-17 14:18:38', 2),
(15, 'La grande vadrouille', 'Several ordinary Frenchmen, helping British pilots avoid Nazi captivity, go on epic voyage through the occupied country to the Swiss border. ', 1966, 'assets/img/Vadrouille1966.jpg', 9, 96, '2020-03-17 14:36:18', '2020-03-17 14:36:18', 6),
(16, 'Le seigneur des anneaux: La communauté de l\'anneau', 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron. ', 2001, 'assets/img/LordOfRiings2001.jpg', 9, 122, '2020-03-17 14:37:45', '2020-03-17 14:37:45', 5),
(17, 'Harry Potter et la chambre des secrets', 'An ancient prophecy seems to be coming true when a mysterious presence begins stalking the corridors of a school of magic and leaving its victims paralyzed. ', 2002, 'assets/img/HarryPotter2002.jpg', 8, 161, '2020-03-17 14:38:50', '2020-03-17 14:38:50', 5),
(18, 'Harry Potter et le prisonnier d\'Azkaban', 'Harry Potter, Ron and Hermione return to Hogwarts School of Witchcraft and Wizardry for their third year of study, where they delve into the mystery surrounding an escaped prisoner who poses a dangerous threat to the young wizard. ', 2004, 'assets/img/HarryPotter2004.jpg', 8, 162, '2020-03-17 14:40:12', '2020-03-17 14:40:12', 5),
(19, 'Harry Potter et la coupe de feu', 'Harry Potter (Daniel Radcliffe) finds himself competing in a hazardous tournament between rival schools of magic, but he is distracted by recurring nightmares. ', 2005, 'assets/img/HarryPotter2005.jpg', 8, 157, '2020-03-17 14:41:08', '2020-03-17 14:41:08', 5),
(20, 'Harry Potter et l\'ordre du Phénix', 'With their warning about Lord Voldemort\'s (Ralph Fiennes\') return scoffed at, Harry (Daniel Radcliffe) and Dumbledore (Sir Michael Gambon) are targeted by the Wizard authorities as an authoritarian bureaucrat slowly seizes power at Hogwarts. ', 2007, 'assets/img/HarryPotter2007.jpg', 7, 138, '2020-03-17 14:42:10', '2020-03-17 14:42:10', 5),
(21, 'Harry Potter et le prince de sang-mêlé', 'As Harry Potter (Daniel Radcliffe) begins his sixth year at Hogwarts, he discovers an old book marked as \"the property of the Half-Blood Prince\" and begins to learn more about Lord Voldemort\'s (Ralph Fiennes\') dark past. ', 2009, 'assets/img/HarryPotter2009.jpg', 8, 147, '2020-03-17 14:43:28', '2020-03-17 14:43:28', 5),
(22, 'Harry Potter et les reliques de la mort: Partie 1', 'As Harry (Daniel Radcliffe), Ron (Rupert Grint), and Hermione (Emma Watson) race against time and evil to destroy the Horcruxes, they uncover the existence of the three most powerful objects in the wizarding world: the Deathly Hallows. ', 2010, 'assets/img/HarryPotter2010.jpg', 9, 146, '2020-03-17 14:44:13', '2020-03-17 14:44:13', 5);

-- --------------------------------------------------------

--
-- Structure de la table `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('001-create-user.js'),
('002-create-genre.js'),
('003-create-movie.js'),
('20200316090129-create-actor.js'),
('20200316105039-create-movie-actor.js');

-- --------------------------------------------------------

--
-- Structure de la table `Users`
--

CREATE TABLE `Users` (
  `id` int NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `Users`
--

INSERT INTO `Users` (`id`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(2, 'nico@free.fr', '$2b$10$PETC7m3LxJtFqQqijLFkHuHZ0u8Gfspjf7pRmXsxPQKXo6XDnZVAm', '2020-03-17 16:38:09', '2020-03-17 16:38:09');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Actors`
--
ALTER TABLE `Actors`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `Genres`
--
ALTER TABLE `Genres`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `MovieActors`
--
ALTER TABLE `MovieActors`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `Movies`
--
ALTER TABLE `Movies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `genreId` (`genreId`);

--
-- Index pour la table `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Index pour la table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Actors`
--
ALTER TABLE `Actors`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT pour la table `Genres`
--
ALTER TABLE `Genres`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT pour la table `MovieActors`
--
ALTER TABLE `MovieActors`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT pour la table `Movies`
--
ALTER TABLE `Movies`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT pour la table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `Movies`
--
ALTER TABLE `Movies`
  ADD CONSTRAINT `Movies_ibfk_1` FOREIGN KEY (`genreId`) REFERENCES `Genres` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
