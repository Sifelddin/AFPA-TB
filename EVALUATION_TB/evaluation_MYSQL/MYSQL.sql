
--TB - Evaluation bases de données

--EXERCICE 1 - LA base exo1
--Créez le script d'implémentation des différentes tables sous MySQL
--Créez un index sur le champ cli_nom de la table client.
DROP DATABASE exo1;

 CREATE DATABASE `eso1` /*!40100 DEFAULT CHARACTER SET utf8 */;

  USE exo1;

  CREATE TABLE Client (
    cli_num INT NOT NULL AUTO_INCREMENT ,
    cli_nom VARCHAR(50) NOT NULL,
    cli_adresse VARCHAR(50) NOT NULL,
    cli_tel VARCHAR(30) NOT NULL,
    PRIMARY KEY (cli_num),
    INDEX index_cli_nom (cli_nom)
  )
    ENGINE = InnoDB DEFAULT CHARSET=utf8;

  CREATE TABLE produit (
    pro_num INT NOT NULL AUTO_INCREMENT ,
    pro_libelle VARCHAR(50) NOT NULL,
    pro_description VARCHAR(50) NOT NULL,
    PRIMARY KEY (pro_num)
  )
    ENGINE = InnoDB DEFAULT CHARSET=utf8;


      CREATE TABLE Commande (
    com_num INT NOT NULL AUTO_INCREMENT ,
    cli_num INT NOT NULL,
    com_date DATETIME NOT NULL,
    com_obs VARCHAR(50) NULL,
    PRIMARY KEY (com_num),
   CONSTRAINT commande_fk1 FOREIGN KEY (cli_num) REFERENCES client(cli_num)
  )
    ENGINE = InnoDB DEFAULT CHARSET=utf8;

    CREATE TABLE est_compose (
    com_num INT NOT NULL  ,
    pro_num INT NOT NULL,
    est_qte INT NOT NULL,
    PRIMARY KEY (pro_num, com_num),
    CONSTRAINT est_compose_fk2 FOREIGN KEY (com_num) REFERENCES Commande(com_num),
    CONSTRAINT est_compose_fk1 FOREIGN KEY (pro_num) REFERENCES produit(pro_num)
  )
    ENGINE = InnoDB DEFAULT CHARSET=utf8;

--Exercice 2 - Requêtes d'interrogation sur la base Northwind

--1 - Liste des contacts français :
SELECT CompanyName AS société, ContactName AS contact, ContactTitle AS Fonction,Phone AS Téléphone  FROM customers WHERE Country = 'fRANCE';


--2 - Produits vendus par le fournisseur « Exotic Liquids » : 

SELECT ProductName AS produit , UnitPrice AS prix FROM products WHERE SupplierID = 1;

--3  - Nombre de produits vendus par les fournisseurs Français dans l’ordre décroissant :

SELECT  CompanyName AS Fournisseur , COUNT(ProductID) AS Nbre_produits
FROM suppliers JOIN Products ON products.SupplierID = suppliers.SupplierID
WHERE Country = 'France'
GROUP BY companyName
ORDER BY Nbre_produits DESC;

--4  - Liste des clients Français ayant plus de 10 commandes :

SELECT CompanyName AS client, COUNT(OrderID) AS Nbre_commandes FROM customers 
JOIN orders ON customers.CustomerID = orders.CustomerID 
WHERE Country="France" 
GROUP BY client
HAVING Nbre_commandes > 10;

--5 Liste des clients ayant un chiffre d’affaires > 30.000 :

SELECT DISTINCT CompanyName AS client, SUM(order_details.UnitPrice*order_details.Quantity) AS CA , country AS pays
FROM customers 
JOIN orders ON customers.CustomerID = orders.CustomerID 
JOIN order_details ON order_details.OrderID = orders.OrderID 
GROUP BY CompanyName , pays
HAVING CA > 30000 
ORDER BY CA DESC;

--6  Liste des pays dont les clients ont passé commande de produits fournis par « Exotic Liquids » :


SELECT orders.shipcountry AS pays
FROM orders  
JOIN order_details ON orders.OrderID = order_details.OrderID 
JOIN products ON order_details.ProductID = products.ProductID 
JOIN suppliers ON products.SupplierID = suppliers.SupplierID 
WHERE suppliers.CompanyName = 'Exotic Liquids'
GROUP by ShipCountry;

--7  Montant des ventes de 1997 :

SELECT SUM(UnitPrice*Quantity) AS montant_vents_97 
FROM orders JOIN order_details ON orders.OrderID = order_details.OrderID 
WHERE orderdate LIKE '1997%'

--8 Montant des ventes de 1997 mois par mois :

SELECT month(OrderDate) AS Mois_97, SUM(unitprice*Quantity)Montant_ventes 
FROM orders JOIN order_details ON orders.OrderID = order_details.OrderID 
WHERE OrderDate LIKE '1997%'
GROUP BY Mois_97;

--9 Depuis quelle date le client « Du monde entier » n’a plus commandé ?

SELECT Max(orderdate) AS date_de_dernière_commande 
FROM Customers JOIN orders ON customers.CustomerID = orders.CustomerID WHERE  companyName = 'Du monde entier';

--10  Quel est le délai moyen de livraison en jours ?

SELECT FLOOR(AVG(datediff(shippeddate,orderdate))) AS délai_moyen_de_livraison_en_jours FROM orders;
