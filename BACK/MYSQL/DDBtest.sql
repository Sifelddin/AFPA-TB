CREATE TABLE station(
 num_station INT NOT NULL ,
 nom_station VARCHAR (255),
  PRIMARY KEY (num_station)
);
CREATE TABLE hotel(
num_hotel INT NOT NULL,
  capacite_hotel INT NOT NULL,
  nom_hotel VARCHAR (255),
  catigorie_hotel INT , 
  adresse_hotel VARCHAR (255),
  num_station INT NOT NULL,
 CONSTRAINT PK_hotel_station_num PRIMARY KEY (num_hotel, num_station),
  CONSTRAINT FK_hotel_station FOREIGN KEY (num_station) REFERENCES station(num_station)
);
CREATE TABLE chambre(
num_hotel INT NOT NULL,
num_chambre INT NOT NULL,
capacite_chambre INT NOT NULL,
degre_confort INT NULL,
type_chambre VARCHAR (255),
exposition VARCHAR (255),
CONSTRAINT PK_num_chambre PRIMARY KEY (num_chambre, num_hotel),
CONSTRAINT FK_chambre_hotel FOREIGN KEY (num_hotel) REFERENCES hotel(num_hotel)
);
CREATE TABLE client(
    num_client INT NOT NULL ,
    nom_client VARCHAR(255),
    prenom_client VARCHAR(255),
    adresse_client VARCHAR(255),
    CONSTRAINT PK_client_num PRIMARY KEY (num_client)
);

CREATE TABLE Reservation(
    ID INT NOT NULL,
    num_chambre INT NOT NULL,
    num_client INT NOT NULL,
    date_debut DATE ,
    date_fin DATE ,
    date_reservation DATE ,
    montant_arrhers INT NOT NULL,
    prix_total INT NOT NULL ,
    PRIMARY KEY (ID),
    CONSTRAINT FK_reservation_chambre FOREIGN KEY (num_chambre) REFERENCES chambre(num_chambre),
    CONSTRAINT FK_reservation_client FOREIGN KEY (num_client) REFERENCES client(num_client)
);
