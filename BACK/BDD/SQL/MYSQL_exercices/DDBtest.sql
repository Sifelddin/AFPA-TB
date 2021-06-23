-- CREATE TABLE station(
--  num_station INT NOT NULL ,
--  nom_station VARCHAR (255),
--   PRIMARY KEY (num_station)
-- );
-- CREATE TABLE hotel(
-- num_hotel INT NOT NULL,
--   capacite_hotel INT NOT NULL,
--   nom_hotel VARCHAR (255),
--   catigorie_hotel INT , 
--   adresse_hotel VARCHAR (255),
--   num_station INT NOT NULL,
--  CONSTRAINT PK_hotel_station_num PRIMARY KEY (num_hotel, num_station),
--   CONSTRAINT FK_hotel_station FOREIGN KEY (num_station) REFERENCES station(num_station)
-- );
-- CREATE TABLE chambre(
-- num_hotel INT NOT NULL,
-- num_chambre INT NOT NULL,
-- capacite_chambre INT NOT NULL,
-- degre_confort INT NULL,
-- type_chambre VARCHAR (255),
-- exposition VARCHAR (255),
-- CONSTRAINT PK_num_chambre PRIMARY KEY (num_chambre, num_hotel),
-- CONSTRAINT FK_chambre_hotel FOREIGN KEY (num_hotel) REFERENCES hotel(num_hotel)
-- );
-- CREATE TABLE client(
--     num_client INT NOT NULL ,
--     nom_client VARCHAR(255),
--     prenom_client VARCHAR(255),
--     adresse_client VARCHAR(255),
--     CONSTRAINT PK_client_num PRIMARY KEY (num_client)
-- );

-- CREATE TABLE Reservation(
--     ID INT NOT NULL,
--     num_chambre INT NOT NULL,
--     num_client INT NOT NULL,
--     date_debut DATE ,
--     date_fin DATE ,
--     date_reservation DATE ,
--     montant_arrhers INT NOT NULL,
--     prix_total INT NOT NULL ,
--     PRIMARY KEY (ID),
--     CONSTRAINT FK_reservation_chambre FOREIGN KEY (num_chambre) REFERENCES chambre(num_chambre),
--     CONSTRAINT FK_reservation_client FOREIGN KEY (num_client) REFERENCES client(num_client)
-- );

-- CREATE USER 'user'@'localhost' IDENTIFIED BY "passe";
-- ALTER USER 'user'@'localhost' IDENTIFIED BY "new";
-- RENAME USER 'user'@'localhost' TO 'user2'@"localhost";

-- GRANT ALL ON hotel.* TO 'user'@'localhost';
-- REVOKE ALL ON hotel.* FROM 'user'@'localhost';

-- SELECT USER FROM mysql.user;


-- INSERT INTO entcom (numcom, obscom,datcom,numfou)
-- VALUES(70 010,NULL ,"2018-04-23 15:59:51", 120),
-- (70011,'Commande urgente','2018-04-23 15:59:51',120),
-- (70020,NULL,'2018-04-23 15:59:51',9120),
-- (70025,'Commande urgente','2018-04-23 15:59:51',9150),
-- (70210,'Commande cadencée','2018-04-23 15:59:51',120),
-- (70250,'Commande cadencée','2018-04-23 15:59:51',8700),
-- (70300,NULL,'2018-04-23 15:59:51',9120),
-- (70620,NULL,'2018-04-23 15:59:51',540),
-- (70625,NULL,'2018-04-23 15:59:51',120),
-- (70629,NULL,'2018-04-23 15:59:51',9180),

-- INSERT INTO fournis(numfou,nomfou,ruefou,posfou,vilfou,confou,satisf)
--  VALUES(120,'GROBRIGAN','20rue du ppier','92200','papercity','Georges',8),
--  (540,'ECLIPSE','53rue laisse flotter les rubans','78250','Bugbugville','Nestor',7),
--  (8700,'MEDICIS','120rue des plantes','75014','Paris','Lison',0),
--  (9120,'DISCOBOL','11rue des sports','85100','La Roche sur Yon','Hercule',8)
--  (9150,'DEPANPAP','26avenue des locomotives','59987','Coroncountry','Pollux',5),
--  (9180,'HURRYTAPE','68boulevard des octets','4044','Dumpville','Track',0);


--INterroger la base de données / exercices :
-- LOT 1
--1 - SELECT hot_nom,hot_ville FROM hotel;
--2 - SELECT cli_nom,cli_prenom,cli_ville,cli_adresse from client WHERE cli_nom = 'White';
--3 - SELECT sta_nom,sta_altitude FROM station WHERE sta_altitude < 1000;
--4 - SELECT cha_numero,cha_capacite FROM chambre WHERE cha_capacite > 1;
--5 - SELECT cli_nom,cli_ville FROM client WHERE cli_ville != 'Londre';
--6 - SELECT hot_nom,hot_ville,hot_categorie FROM hotel where hot_ville = 'Bretou' AND hot_categorie > 3;
-- LOT 2
--7 - SELECT sta_nom,hot_nom,hot_categorie,hot_ville FROM hotel LEFT JOIN station ON hot_sta_id = sta_id;
--8 - SELECT hot_nom,hot_categorie,hot_ville,cha_numero FROM hotel JOIN chambre ON hot_id = cha_hot_id;
--9 - SELECT hot_nom,hot_categorie,hot_ville,cha_numero,cha_capacite FROM hotel JOIN chambre ON hot_id = cha_hot_id WHERE cha_capacite > 1 AND hot_ville = 'Bretou';  
--10- SELECT cli_nom,hot_nom,res_date FROM client JOIN reservation ON cli_id = res_cli_id JOIN chambre ON res_cha_id = cha_id JOIN hotel ON cha_hot_id = hot_id;
--11- SELECT sta_nom,hot_nom,cha_numero,cha_capacite FROM station JOIN hotel ON sta_id = hot_sta_id JOIN chambre ON hot_id = cha_hot_id;
--12- SELECT cli_nom,hot_nom,res_date_debut,DATEDIFF(res_date_fin, res_date_debut)AS duree_sejour FROM client JOIN reservation ON cli_id = res_cli_id JOIN chambre ON res_cha_id = cha_id JOIN hotel ON cha_hot_id = hot_id;
-- LOT 3
--13 - SELECT sta_nom,COUNT(hot_id) FROM hotel JOIN station ON sta_id = hot_sta_id GROUP BY sta_nom;
--14 - SELECT sta_nom,COUNT(cha_id) FROM station JOIN hotel ON sta_id = hot_sta_id JOIN chambre ON hot_id = cha_hot_id GROUP BY sta_nom;
--15 - SELECT sta_nom,COUNT(cha_id) FROM station JOIN hotel ON sta_id = hot_sta_id JOIN chambre ON hot_id = cha_hot_id WHERE chambre.cha_capacite > 1 GROUP BY sta_nom;
--16 - SELECT hot_nom FROM client JOIN reservation ON cli_id = res_cli_id JOIN chambre ON res_cha_id = cha_id JOIN hotel ON cha_hot_id = hot_id WHERE cli_id = 6;
--17 - SELECT sta_nom ,AVG(datediff(res_date_fin,res_date_debut)) AS duree FROM reservation JOIN chambre ON res_cha_id = cha_id JOIN hotel ON cha_hot_id = hot_id JOIN station ON hot_sta_id = sta_id GROUP BY sta_nom;

--Cas Papyrus
--LE TRAVAIL A FAIRE
--1 -SELECT numcom FROM entcom WHERE numfou = 9120;
--2 -SELECT numfou FROM vente WHERE delliv > 0;
--3 -SELECT COUNT(delliv)AS nombre_com , COUNT(DISTINCT numfou) AS nombre_fou FROM vente WHERE delliv > 0;
--4 -SELECT codart AS n_produit ,libart AS libelléproduit,stkphy AS stock, stkale AS stockactuel_alert, qteann AS quantitéannuelle FROM produit WHERE (stkphy < stkale AND qteann < 1000);
--5 -SELECT nomfou AS nom_fornisseur , posfou AS departement FROM fournis WHERE substr(posfou,1,2) IN( '92' ,'78','75','77') ORDER BY nomfou DESC;
--6 -SELECT numcom AS commandes FROM entcom WHERE (datcom < '2018-04-30' AND datcom >'2018-03-01' );
--7 -SELECT numcom as numéro_commande, datcom as date_commande FROM entcom WHERE (LENGTH(obscom) > 1);
--8 -SELECT numcom AS numero_commande , SUM(qtecde*priuni) AS total FROM ligcom GROUP BY numcom ORDER BY total DESC;
--9 -SELECT numcom AS numero_commande, SUM(qtecde*priuni) AS total FROM ligcom WHERE qtecde < 1000 GROUP BY numcom HAVING total > 10000;
--10 -SELECT nomfou AS nom_fornisseur , numcom AS numero_commande,datcom FROM entcom JOIN fournis ON fournis.numfou = entcom.numfou;
-- -11 -SELECT entcom.numcom AS numero_commande ,nomfou AS nom_fournisseur , libart AS libellé_produit , (qtecde*priuni) AS total
-- FROM ligcom 
-- JOIN produit ON ligcom.codart = produit.codart
-- JOIN entcom ON ligcom.numcom = entcom.numcom
-- JOIN fournis ON entcom.numfou = fournis.numfou
-- WHERE entcom.obscom LIKE '%urgente'
--12 -SELECT DISTINCT nomfou AS nom_fournisseur FROM fournis JOIN entcom ON fournis.numfou = entcom.numfou JOIN ligcom ON entcom.numcom = ligcom.numcom WHERE(qteliv > 0);
--13 -SELECT numcom AS numero_commande , datcom FROM entcom JOIN fournis ON entcom.numfou = fournis.numfou WHERE entcom.numfou = 120;
--14 -SELECT libart, prix1 FROM vente JOIN produit ON vente.codart = produit.codart WHERE delliv > 0 AND prix1 < 120;
--15 -SELECT libart AS produit_nom FROM produit WHERE stkphy <(stkale + stkale/2) 
--15 -SELECT nomfou,libart AS produit_nom FROM produit JOIN vente ON produit.codart = vente.codart JOIN fournis ON vente.numfou = fournis.numfou WHERE stkphy <(stkale + stkale/2);
--16 -SELECT  nomfou,libart AS produit_nom FROM produit JOIN vente ON produit.codart = vente.codart JOIN fournis ON vente.numfou = fournis.numfou
--WHERE stkphy <(stkale + stkale/2) AND delliv > 30;
--17 -SELECT  fournis.nomfou AS produit_nom, SUM(stkphy) AS total FROM produit JOIN vente ON produit.codart = vente.codart JOIN fournis ON vente.numfou = fournis.numfou
-- WHERE stkphy <(stkale + stkale/2) AND delliv > 30
-- GROUP BY fournis.nomfou
--18 -SELECT libart FROM produit JOIN ligcom ON produit.codart = ligcom.codart 
--WHERE  qtecde > produit.qteann*9/10
--19 -


--LES BESOINS DE MISE A JOUR

--1 -UPDATE vente SET 
-- prix1 = prix1 + prix1*4/100,
-- prix2 = prix2 + prix2*2/100
-- WHERE numfou = 9180 LIMIT 1;

--2 -UPDATE vente SET 
-- prix2 = 10
-- WHERE prix2 = 0;

--3 -UPDATE entcom JOIN fournis ON entcom.numfou = fournis.numfou 
-- SET obscom = 'change2'
-- WHERE obscom = 'change' AND  satisf < 5;

--4 -DELETE FROM produit WHERE codart = 'l110' LIMIT 1 ;