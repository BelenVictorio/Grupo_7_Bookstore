CREATE DATABASE  IF NOT EXISTS `paginasbellas_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `paginasbellas_db`;
-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: paginasbellas_db
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
INSERT INTO `carts` VALUES (1,1,5,1),(2,3,7,2),(3,8,6,1),(4,2,1,1),(5,7,1,2),(6,8,4,1),(7,1,8,1),(8,6,10,2),(9,4,3,1),(10,6,1,1),(11,7,2,1),(12,3,7,1),(13,5,9,1),(14,6,8,2);
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Adultos'),(2,'Juveniles'),(3,'Infantiles');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (1,'Literatura'),(2,'Infantiles'),(3,'Novela'),(4,'Ficcion'),(5,'No Ficcion'),(6,'Juvenil'),(7,'Romance'),(8,'Terror'),(9,'Suspenso'),(10,'Comic'),(11,'Manga'),(12,'Cuentos'),(13,'Arte'),(14,'Diseño'),(15,'Historia'),(16,'Filosofia');
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'bestia.png'),(2,'fuego.png'),(3,'kazan.png'),(4,'mike.png'),(5,'alicia.png'),(6,'el-castillo-de-barbazul.png'),(7,'pinocho.png'),(8,'a-dos-metros-de-ti.png'),(9,'dormir-en-un-mar-de-estrellas.png'),(10,'boulevard.png');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'La Bestia','Carmen Mola','Corre el año 1834 y Madrid, una pequeña ciudad que trata de abrirse paso más allá de las murallas que la rodean, sufre una terrible epidemia de cólera. Pero la peste no es lo único que aterroriza a sus habitantes: en los arrabales aparecen cadáveres desmembrados de niñas que nadie reclama. Todos los rumores apuntan a la Bestia, un ser a quien nadie ha visto pero al que todos temen.',1450,1,1,3),(2,'Trilogia Fuego','Joana Marcús','Su cena es a las nueve en punto, su sueño dura exactamente ocho horas, jamás tiene una sola arruga en la ropa, parpadea 86400 veces al día, respira 30000 veces al día, solo habla cuando le preguntan, jamás ha levantado la voz y, lo más importante, jamás se ha preguntado qué pasaría si todo cambiara.',2200,2,2,4),(3,'Operacion Kazán ','Vicente Vallés','Una novela llena de intriga que, desde una perspectiva muy original, plantea un asunto de ficción que bien podría ser de la más absoluta realidad',8000,1,3,1),(4,'Mikecrack y la estrella maldita','Miguel Bernal Montes','Amanece un nuevo día en Ciudad Cubo, y en casa de Mike y Trolli todo parece en calma. ¡Es el día de la excursión! Preparan todo lo necesario para sobrevivir en un bosque misterioso: linterna, brújula, chocolate y más chocolate',2700,3,4,12),(5,'Alicia en el pais de las maravillas','Lewis Carroll','Estás a punto de entrar en el mundo de Alicia, el más extraño y asombroso, disparatado e insólito que hayas conocido y que jamás vas a olvidar. En este mundo, los gatos desaparecen sonrientes, las reinas tienen ejércitos de naipes, los conejos visten chaleco y te apremian para que los sigas. Y si los sigues, caerás por el agujero de su madriguera… Hasta el País de las Maravillas.Allí, las reglas que conocemos no funcionan; en el País de las Maravillas todo tiene su propia lógica. La hora del té no acaba nunca, Tiempo es un señor que se enfada si no sigues el compás cuando cantas y las lágrimas pueden llegar a formar un mar si justo en aquel momento tu cuerpo se encoge hasta ser diminuto. Desde su publicación, Alicia en el país de las maravillas ha fascinado a lectores como tú.',2000,2,5,2),(6,'El castillo de Barbazul','Javier Cercas','Años después de lo ocurrido en Independencia, Melchor Marín ya no es policía: trabaja como bibliotecario y vive con su hija Cosette, convertida en una adolescente. Un día, Cosette descubre que su padre le ha ocultado cómo murió su madre, y este hecho la confunde y la subleva. Poco después parte de vacaciones a Mallorca, pero no regresa; tampoco contesta los mensajes ni las llamadas de Melchor, quien, convencido de que algo malo ha ocurrido, decide plantarse en la isla en busca de ella. A partir de aquí la novela se adentra en un laberinto absorbente, a la vez siniestro y luminoso, donde Melchor descubre que los seres humanos somos capaces de lo peor, pero también de lo mejor: que vivimos rodeados de violencia, mentiras, abusos de poder y cobardía, pero que también hay gente capaz de jugárselo todo por una causa justa. Astuta y felizmente disfrazada de novela de aventuras, El castillo de Barbazul acaba de desenmascarar las novelas de la Terra Alta como lo que son: el proyecto literario más ambicioso de Javier Cercas',2860,1,6,3),(7,'Las aventuras de Pinocho','Carlo Collodi','Geppetto tomó en seguida las herramientas y se puso a esculpir y a fabricar su muñeco.«¿Qué nombre le pondré? —se preguntó—. Le voy a llamar Pinocho. Este nombre le traerá suerte.',5770,3,7,12),(8,'A dos metros de ti','Mikki Daughtry y Tobias Iaconis','La novela que ahora llega a la pantalla grande protagonizada por Cole Sprouse y Haley Lu Richardson ¿Puedes amar a alguien que no puedes tocar? Stella y Will tienen la misma enfermedad pulmonar, en el mismo hospital. Cuando se enamoran, recuperan la alegría de vivir, pero hay un problema: por el peligro de contagio, no pueden acercarse a menos de dos metros sin arriesgar sus vidas',2700,2,8,3),(9,'Dormir en un mar de estrellas','Christopher Paolini','Durante una misión de inspección de rutina en un planeta no colonizado, la xenobióloga Kira Navárez encuentra una reliquia alienígena que la empuja a las maravillas y pesadillas del primer contacto. Las batallas espaciales épicas por el destino de la humanidad la llevan a los confines de la galaxia y, en el proceso, transforman no solo a ella, sino a todo el curso de la historia.',3150,3,9,4),(10,'Boulevard','Flor M. Salvador','Luke Howland, lleno de problemas y sumido en una desesperación profunda, y Hasley Weigel, tan despistada como optimista, no se ajustan al prototipo de pareja perfecta. Como si cada uno fuese un cielo, uno es tormenta y el otro, un día soleado: él es oscuridad. Ella, un rayo de sol. Y, sin embargo, juntos decidieron ponerle nombre a lo que habían creado: un boulevard teñido de tonos grisáceos y de azules celestes y eléctricos preparándose para la tormenta. Ella era para él y él era para ella.',1700,2,10,7);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `rols`
--

LOCK TABLES `rols` WRITE;
/*!40000 ALTER TABLE `rols` DISABLE KEYS */;
INSERT INTO `rols` VALUES (1,'admin'),(2,'user');
/*!40000 ALTER TABLE `rols` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Mab','Reirmar','mreinmar0@uol.com.br','DmljSL8VF',2,'default-user.jpg','','',NULL,'0'),(2,'Deanna','Ganderton','dganderton1@mozilla.com','KeGm4SFtLY9n',2,'default-user.jpg','','',NULL,'0'),(3,'Janenna','Truckett','jtruckett2@deviantart.com','Sqv3t9zu6F',2,'default-user.jpg','','',NULL,'0'),(4,'Casandra','Gwen','cgawen3@wiley.com','FPQb8B',2,'default-user.jpg','','',NULL,'0'),(5,'Eli','Cruess','ecruess4@artisteer.com','JVpcMPmiiYl',2,'defualt-user.jpg','','',NULL,'0'),(6,'Sol Anna','Castro','solcastro@gmail.com','$2a$10$FPm5I47ohJnXUsgW.MGtgu76S/GpM5BdByuFu9TFnDSHFT/lTQQW6',1,'default-user.jpg','ar','',NULL,'F'),(7,'Belen','Victorio','sabasta@gmail.com','$2a$10$RQ6dDvh4MsB4sejysYpJkOCUDw1OTZ5hvGRf8iRn0K81rs6HpREJK',1,'default-user.jpg','','',NULL,'0'),(8,'Damian','Fernandez','damian@fernandez.com','$2a$10$7Q8KWT4Rl31ckiKHYP50SedVBpX2AYbM0lwzYQ8EigoAp1gaMWAF2',1,'default-user.jpg','','',NULL,'0'),(9,'paginas','bellas','paginasbellas@gmail.com','$2a$10$DPP7zuiXKx1m1g3wv6Tll.hDwOMsaWXpXpW/pS/cZ.4lI/l1OerdG',1,'default-user.jpg','','',NULL,'0');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-16  9:27:08
