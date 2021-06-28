<?php
require "./form_val.php";

$count = 0;
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>PAGE CONTACT</title>
    <link rel="stylesheet" href="style.css">
    <!-- <script defer src="./form2.js"></script> -->

</head>

<body>
    <header>
        <div class="logo">
            <img src="../jarditou_html_zip/images/jarditou_logo.jpg" alt="jarditou_logo" title="jarditou_logo">
            <h1> tout le jardin</h1>
        </div>
        <nav class="nav">
            <ul>
                <li><a href="index.php">Accueil</a></li>
                <li><a href="Tableau.php">Tableau</a> </li>
                <li><a href="Contact.php">Contact</a> </li>
            </ul>
        </nav>
        <img class="header-img" src="../jarditou_html_zip/images/promotion.jpg" alt="promotion sur lames de terrasse" title="promotion sur lames de terrasse">
    </header>
    <main class="main-contact">
        <h1>Contact</h1>

        <label>* Ces zones sont obligatoires</label>
        <form action=""  method="POST">
            <fieldset>
                <legend>Vos coordonnés</legend>
                <div class="div-name">
                    <label for="name">Votre nom* : </label>
                    <input class="name" type="text" id="name" name="nom">
                    <?php
                    if (isset($_POST["submit"]) && condition_validation("nom") !== NULL){
                            $count++;
                        }
                
                    ?>

                </div>
                <br>
                <div class="div-prenom">
                    <label for="prénom">Votre prénom* : </label>
                    <input class="prenom" type="text" id="prénom" name="prenom">
                    <?php
                    if (isset($_POST["submit"]) && condition_validation("prenom") !== NULL){
                            $count++;
                        }
                
                    ?>

                </div>
                <br>
                <div class="div-sexe">
                    <label>Sexe*:</label>
                    <label> Féminin<input class="input-radio" type="radio" name="sexe" value="Féminin"></label>
                    <label> Masculin<input class="input-radio" type="radio" name="sexe" value="Masculin"></label>
                    <?php 

                    if(isset($_POST["submit"]) && !isset($_POST["sexe"])){ 
                        check_validation("sexe");
                        $count++;
                    } 
                    ?>
                </div>
                <br><br>
                <div class="div-date">
                    <label for="Data">Date de naissance* : </label>
                    <input class="date" type="date" id="Data" name="naissance_date" value="">
                     <?php if (isset($_POST["submit"]) && condition_validation("naissance_date") !== NULL){
                            $count++;
                        }
                
                    ?>

                </div>
                <br>

                <div class="div-number"> <label for="number">Code postal* :</label>
                    <input id="number" class="number" type="number" name="CP">
                    <?php if (isset($_POST["submit"]) && condition_validation("CP") !== NULL){
                            $count++;
                        }
                
                    ?>
                </div>
                <br>
                <div class="div-adresse"> <label>Adresse *: </label><input class="adresse" type="text" name="adresse">
                    <?php  if (isset($_POST["submit"]) && condition_validation("adresse") !== NULL){
                            $count++;
                        }
                
                    ?>
                </div><br>
                <div class="div-ville"><label>ville *: </label><input class="ville" type="text" name="ville">
                    <?php   if (isset($_POST["submit"]) && condition_validation("ville") !== NULL){
                            $count++;
                        }
                
                    ?>
                </div><br>
                <div class="div-email">
                    <label>email* : </label>
                    <input class="email" type="email" name="email" placeholder="dave.loper@afpa.fr">
                    <?php   if (isset($_POST["submit"]) && condition_validation("email") !== NULL){
                            $count++;
                        }
                
                    ?>
                </div><br>
            </fieldset>
            <br><br>
            <fieldset>
                <legend>
                    Votre demande
                </legend>
                <div class="div-select">
                    <label for="Sujet">Sujet*</label>
                    <select class="sujet" id="Sujet" name="sujet">
                        <option value="" selected disabled>veulliez séléctionner un Sujet</option>
                        <option value="Mes commandes">Mes commandes</option>
                        <option value="Question sur le produit">Question sur le produit</option>
                        <option value="Réclamation">Réclamation</option>
                        <option value="Autre">Autre</option>
                    </select>
                   <?php if(isset($_POST["submit"]) && !isset($_POST["sujet"])){ 
                        check_validation("sujet");
                        $count++;
                    } 
                    ?>
                </div>
                <br>
                <div class="div-comment">
                    <label for="cumments">Votre question* : </label>
                    <textarea id="cumments" name="cumments" rows="3" cols="33">
</textarea>
                </div>
            </fieldset>
            <br>
            <div class="submition">
                <label>j'accepte le traitement informatique de ce formulaire*</label>
                <input class="input-checkbox" type="checkbox" id="accepter" name="accepte">
                <?php if(isset($_POST["submit"]) && !isset($_POST["accepte"])){ 
                        check_validation("accepte");
                        $count++;
                    } 
                    ?>

                <br>

                <br>
                <button class="submit" type="submit" name="submit" value="">Envoyer</button>
                <button class="exit" type="reset" value="annuler">annuler</button>

            </div>
        </form>

<?php

if(isset($_POST["submit"]) && $count === 0){
  echo "<h1> votre formulaire a été envoyé </h1>";
foreach($_POST as $champ => $valeur){
    if($champ != "submit"){
   echo "<h2>- champ $champ sa valeur est:  <span style=\"color: lightgreen;\">$valeur</span> </h2>";
}
}
}
?>


    </main>
    <footer class="footer">
        <ul>
            <li><a href="#">Mention légales</a></li>
            <li><a href="#">Horaires</a></li>
            <li><a href="#">Plan du site</a></li>
        </ul>
    </footer>
</body>

</html>



