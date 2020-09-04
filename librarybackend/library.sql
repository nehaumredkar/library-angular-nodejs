-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 04, 2020 at 10:53 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `library`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `status` enum('issue','return') NOT NULL DEFAULT 'return'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `name`, `status`) VALUES
(1, 'c programming', 'issue'),
(2, 'c++', 'return'),
(3, 'JAVA', 'return'),
(4, 'Nodejs', 'issue'),
(5, 'Angular', 'return'),
(6, 'Unix power tool', 'return'),
(7, 'Art of computer programming', 'issue'),
(8, 'computer networking', 'return'),
(9, 'AI Book', 'return'),
(10, 'Data Structure', 'return'),
(11, 'Python', 'issue'),
(12, 'The Rise and Fall of the Dinosaurs: A New History of a Lost World', 'return');

-- --------------------------------------------------------

--
-- Table structure for table `book_issue_details`
--

CREATE TABLE `book_issue_details` (
  `id` int(11) NOT NULL,
  `book_Id` int(11) NOT NULL,
  `Issue_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `book_issue_details`
--

INSERT INTO `book_issue_details` (`id`, `book_Id`, `Issue_date`) VALUES
(1, 4, '2020-07-16'),
(2, 9, '2020-07-31'),
(3, 11, '2020-07-31'),
(4, 2, '2020-08-01'),
(5, 3, '2020-08-03'),
(6, 1, '2020-08-02'),
(7, 4, '2020-09-04'),
(8, 5, '2020-08-05'),
(9, 7, '2020-08-11'),
(10, 1, '2020-08-18'),
(11, 2, '2020-09-04'),
(12, 3, '2020-09-04'),
(13, 6, '2020-08-21'),
(14, 9, '2020-07-15'),
(15, 10, '2020-09-01'),
(16, 1, '2020-09-02'),
(17, 2, '2020-08-28'),
(18, 2, '2020-08-26'),
(19, 3, '2020-09-04'),
(20, 1, '2020-09-03'),
(21, 1, '2020-09-01'),
(22, 4, '2020-09-02'),
(23, 8, '2020-09-04'),
(24, 3, '2020-09-04'),
(25, 4, '2020-09-04'),
(26, 3, '2020-09-04'),
(27, 2, '2020-09-04'),
(28, 1, '2020-09-04'),
(29, 7, '2020-09-04'),
(30, 6, '2020-09-04'),
(31, 1, '2020-09-04'),
(32, 1, '2020-09-04'),
(33, 1, '2020-09-04'),
(34, 2, '2020-09-04'),
(35, 3, '2020-09-04'),
(36, 1, '2020-09-04'),
(37, 2, '2020-09-04'),
(38, 1, '2020-09-04'),
(39, 12, '2020-09-04');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `book_issue_details`
--
ALTER TABLE `book_issue_details`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `book_issue_details`
--
ALTER TABLE `book_issue_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
