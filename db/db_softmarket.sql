CREATE DATABASE  IF NOT EXISTS `soft_market` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `soft_market`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: soft_market
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carrinho`
--

DROP TABLE IF EXISTS `carrinho`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carrinho` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `produto_PRODUTOS` int NOT NULL,
  `quantidade` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `produto_PRODUTOS_idx` (`produto_PRODUTOS`),
  CONSTRAINT `produto_PRODUTOS` FOREIGN KEY (`produto_PRODUTOS`) REFERENCES `produtos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=211 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrinho`
--

LOCK TABLES `carrinho` WRITE;
/*!40000 ALTER TABLE `carrinho` DISABLE KEYS */;
/*!40000 ALTER TABLE `carrinho` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `categoria` varchar(100) NOT NULL,
  `imposto` float unsigned DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3 COMMENT='Categorias de Produtos';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Hardware',0.5),(2,'Periféricos',0.5);
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historico_de_vendas`
--

DROP TABLE IF EXISTS `historico_de_vendas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `historico_de_vendas` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `codigo_venda` int unsigned NOT NULL,
  `produto_PRODUTOS` int NOT NULL,
  `quantidade` int unsigned NOT NULL,
  `valor` float unsigned NOT NULL,
  `subtotal` float unsigned NOT NULL,
  `imposto` float unsigned NOT NULL,
  `valor_imposto` float unsigned NOT NULL,
  `subtotal_imposto` float unsigned NOT NULL,
  `data` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `produto_PRODUTOS_idx` (`produto_PRODUTOS`),
  CONSTRAINT `historico_produtos` FOREIGN KEY (`produto_PRODUTOS`) REFERENCES `produtos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historico_de_vendas`
--

LOCK TABLES `historico_de_vendas` WRITE;
/*!40000 ALTER TABLE `historico_de_vendas` DISABLE KEYS */;
INSERT INTO `historico_de_vendas` VALUES (11,338700,1,1,10,10,0.5,0.05,0.05,'2023-08-01'),(12,338700,3,5,20,100,0.5,0.1,0.5,'2023-08-01'),(13,338700,4,3,89,267,0.5,0.445,1.335,'2023-08-01'),(14,787045,3,5,20,100,0.5,0.1,0.5,'2023-08-01'),(15,787045,1,1,10,10,0.5,0.05,0.05,'2023-08-01'),(16,354911,7,1,300,300,0.5,1.5,1.5,'2023-08-01'),(17,354911,1,1,10,10,0.5,0.05,0.05,'2023-08-01'),(18,175285,3,5,20,100,0.5,0.1,0.5,'2023-08-01'),(19,175285,1,3,10,30,0.5,0.05,0.15,'2023-08-01');
/*!40000 ALTER TABLE `historico_de_vendas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `categoria_CATEGORIAS` int unsigned NOT NULL,
  `produto` varchar(100) NOT NULL,
  `valor` float unsigned NOT NULL,
  `foto` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idprodutos_UNIQUE` (`id`),
  UNIQUE KEY `produto_UNIQUE` (`produto`),
  KEY `categoria_CATEGORIAS_idx` (`categoria_CATEGORIAS`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb3 COMMENT='Produtos';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (1,1,'Cabo de Rede',10,NULL),(3,1,'Mouse',20,NULL),(4,1,'Teclado',89,NULL),(7,1,'Memória RAM',300,NULL),(19,1,'SSD',45,NULL);
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-01 19:43:58
