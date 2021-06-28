<?php

if (isset($_POST["nom"], $_POST["altitude"])) {
    $nom_station = $_POST['nom'];
    $altitude_station = $_POST['altitude'];
}
require "../PHP/conect_BDD.php";
require_once "../PHP/bootstrap_jarditou/BOOTSTRAP/header.php";

try {
    if (isset($_POST["nom"], $_POST["altitude"])) {
        $request = $db->prepare('INSERT INTO station (sta_nom,sta_altitude) VALUES (:sta_nom, :sta_altitude)');
        $request->execute([

            ':sta_nom' => $nom_station,
            ':sta_altitude' => $altitude_station

        ]);

        header("Location: php05.php");
    }
} catch (PDOException $e) {
    $error = $e->getMessage();
}


?>
<?php if ($error) : ?>
    <br>
    <div class="alert alert-danger"><?= $error ?></div>
<?php else : ?>

<?php endif ?>




<div class="container">
    <h1>Saisie d'un nouvel enregistrement</h1>


    <form action="" method="post">
        <label for="nom_for_label">Nom de la station :</label><br>
        <div class="form-group">
            <input type="text" value="" name="nom" id="nom_for_label">
        </div>


        <label for="altitude_for_label">Altitude :</label><br>
        <div class="form-group">
            <input type="text" value="" name="altitude" id="altitude_for_label">

        </div>
        <input class="btn btn-primary" name="submit" type="submit" value="Ajouter">

    </form>
</div>


<?php
require_once "../PHP/bootstrap_jarditou/BOOTSTRAP/footer.php";

?>