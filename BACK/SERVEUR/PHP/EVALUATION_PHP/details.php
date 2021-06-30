<?php
require "conect_BDD.php";
require "./header.php";
if (isset($_GET["pro_id"])) {
    $id = $_GET["pro_id"];
    $request = $db->query("SELECT * FROM produits JOIN categories ON cat_id = pro_cat_id WHERE pro_id = $id");
    $row = $request->fetch();
}
$tableu = [];
$tableu[] = $row->cat_nom;
print_r($tableu);
?>
<div class="container">
    <form action="modif_form.php" method="GET">
        <div class="form-group">
            <img class="img-fluid rounded mx-auto d-block" src="./jarditou_html_zip/jarditou_photos/7.jpg" alt="">
            <div>
                <label>Référence :</label><br>
                <input class="form-control" type="text" value="<?= $row->pro_ref ?>" readonly name="ref">
            </div>
            <br>

            <div>
                <label for="categorie_for_label">Catégorie :</label><br>
                <input class="form-control" type="text" value="<?= $row->cat_nom ?>" name="categorie" id="categorie_for_label" readonly>

            </div>
            <br>

            <div>
                <label for="libellé_for_label">Libellé :</label><br>
                <input class="form-control" type="text" value="<?= $row->pro_libelle ?>" name="libelle" id="libellé_for_label" readonly>
            </div>

            <br>
            <div>
                <label for="description_for_label">Description :</label><br>
                <textarea class="form-control" name="description" id="" cols="10" rows="3" readonly><?= $row->pro_description ?></textarea>
            </div>

            <br>
            <div>
                <label for="prix_for_label">Prix :</label><br>
                <input class="form-control" type="text" value="<?= $row->pro_prix ?>" name="prix" id="prix_for_label" readonly>
            </div>

            <br>
            <div>
                <label for="stock_for_label">Stock :</label><br>
                <input class="form-control" type="text" value="<?= $row->pro_stock ?>" name="stock" id="stock_for_label" readonly>
            </div>

            <br>
            <div>
                <label for="couleur_for_label">Couleur :</label><br>
                <input class="form-control" type="text" value="<?= $row->pro_couleur ?>" name="couleur" id="couleur_for_label" readonly>
            </div>

            <br>


            <label for="">Produit Bloqué :</label>
            <div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="produitbloque" id="inlineRadio1" value="oui" readonly <?php if ($row->pro_bloque !== NULL) {
                                                                                                                                    echo "checked";
                                                                                                                                }  ?>>
                    <label class="form-check-label" for="inlineRadio1">oui</label>
                </div>

                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="produitbloque" id="inlineRadio2" value="non" readonly <?php if ($row->pro_bloque === NULL) {
                                                                                                                                    echo "checked";
                                                                                                                                }  ?>>
                    <label class="form-check-label" for="inlineRadio2">non</label>
                </div>
            </div>

            <br>
            <div>
                <label for="ajout_for_label">Date d'ajout :</label><br>
                <input class="form-control" type="text" value="<?= $row->pro_d_ajout ?>" name="date_ajout" id="ajout_for_label" readonly>
            </div>
            <br>
            <div>
                <label for="modif_for_label">Date de modification :</label><br>
                <input class="form-control" type="text" value="<?= $row->pro_d_modif ?>" name="date_modif" id="modif_for_label" readonly>
            </div>
            <br>
        </div>

        <a href="index.php"><input class="px-4 mx-5 btn btn-secondary"name="submit" value="Routeur"></a>
        <a href="delete_form.php"><input class="px-4 mx-5 btn btn-danger"  name="supprimer" value="suppression"></a>
        <a href="modif_form.php?pro_id=<?= $row->pro_id?>"><input class="px-4 mx-5 btn btn-warning" name="modifier" value="Modification"></a>
       
    </form>
    <br>
    <br>
</div>
<?php
require "./footer.php";
?>