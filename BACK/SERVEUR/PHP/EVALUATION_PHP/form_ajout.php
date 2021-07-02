<?php
require "./conect_BDD.php";
require "./header.php";
$tableau = ["11", "12", "13", "8", "7"];
shuffle($tableau);
try {
    $req = $db->query("SELECT DISTINCT cat_nom ,cat_id  FROM produits JOIN categories ON cat_id = pro_cat_id");
    $all_rows = $req->fetchAll();
} catch (PDOException $e) {
    $error = $e->getMessage();
}
if ($error) {
    echo $error;
    exit();
}
?>



<div class="container">
    <img class="img-responsive img-fluid rounded mx-auto d-block" src="./jarditou_html_zip/jarditou_photos/<?= $tableau[2] ?>.jpg" alt="">
    <h2>formulaire d'ajout d'un produit</h2>
    <br>
    <form action="script_ajout.php" method="POST">
        <div class="form-group">

            <div>
                <label>Catégorie :</label><br>
                <select class="form-control" name="cat_id">
                    <?php foreach ($all_rows as $one_row) : ?>
                        <option value="<?= $one_row->cat_id ?>"><?= $one_row->cat_nom ?></option>
                    <?php endforeach ?>
                </select>
            </div>
            <br>
            <div>
                <label>"pro_ref" - Référence produit :</label><br>
                <input class="form-control" type="text" value="" name="pro_ref">
            </div>
            <br>


            <div>
                <label>"pro_libelle"- Nom du produit :</label><br>
                <input class="form-control" type="text" value="" name="libelle">
            </div>

            <br>
            <div>
                <label>"pro_description"- Description du produit :</label><br>
                <textarea class="form-control" name="description" id="" cols=ly></textarea>
            </div>

            <br>
            <div>
                <label>"pro_prix"- Prix :</label><br>
                <input class="form-control" type="text" value="" name="prix">
            </div>

            <br>
            <div>
                <label>"pro_stock"- Nombre d'unités en Stock :</label><br>
                <input class="form-control" type="number" value="" name="stock">
            </div>

            <br>
            <div>
                <label>"pro_couleur"- Couleur :</label><br>
                <input class="form-control" type="text" value="" name="couleur">
            </div>

            <br>
            <div>
                <label>"pro_photo"- Extension de la Photo :</label><br>
                <input class="form-control" type="text" value="jpg" name="photo">
            </div>

            <br>
            <div>
                <label>"pro_d_ajout"- Date d'ajout :</label><br>
                <input class="form-control" type="date" value="" name="date-Ajout">
            </div>

            <br>
            <div>
                <label>"pro_d_modif"- Date de modification :</label><br>
                <input class="form-control" type="date" value="" name="date-modif" readonly>
            </div>

            <br>
            <div>
                <label>"pro_bloque" Bloquer le produit à la vente :</label><br>
                <input class="form-control" type="text" value="" name="pro-bloque">
            </div>
            <br>
            <input type="submit" class="btn btn-success" name="submit" value="Ajouter">
            <a href="tableau.php"><input class="btn btn-secondary" name="routeur" value="routeur"></a>
    </form>
</div>







<?php

require "./footer.php"
?>