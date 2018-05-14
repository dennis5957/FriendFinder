/*Create burgers_db database*/
CREATE DATABASE `burgers_db`;

/*Create burgers table*/
CREATE TABLE `burgers_db`.`burgers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `burger_name` varchar(255) DEFAULT NULL,
  `devoured` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
