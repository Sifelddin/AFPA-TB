<?php
require "conect_BDD.php";
require "./header.php";

if (isset($_GET["pro_id"])) {
    $id = $_GET["pro_id"];

    $req = $db->query("SELECT * FROM produits JOIN categories ON cat_id = pro_cat_id WHERE pro_id = $id");
    $row = $req->fetch();

}

?>



<div class="container">
   
    <form action="script_modif.php" method="post">
        <div class="form-group">
            <img class="img-fluid rounded mx-auto d-block" src="./jarditou_html_zip/jarditou_photos/7.jpg" alt="">
            <div>
                <label>ID :</label><br>
                <input class="form-control" type="text" value="<?= $row->pro_id ?>"  name="ID" readonly>
            </div>
            <br>
            <div>
                <label>Référence :</label><br>
                <input class="form-control" type="text" value="<?= $row->pro_ref ?>"  name="ref">
            </div>
            <br>

            <div>
                <label>Catégorie :</label><br>
                <input class="form-control" type="text" value="<?= $row->cat_nom ?>" name="categorie"  >

            </div>
            <br>

            <div>
                <label >Libellé :</label><br>
                <input class="form-control" type="text" value="<?= $row->pro_libelle ?>" name="libelle"  >
            </div>

            <br>
            <div>
                <label for="description_for_label">Description :</label><br>
                <textarea class="form-control" name="description" id="" cols="10" rows="3" ><?= $row->pro_description ?></textarea>
            </div>

            <br>
            <div>
                <label >Prix :</label><br>
                <input class="form-control" type="text" value="<?= $row->pro_prix?>" name="prix"  >
            </div>

            <br>
            <div>
                <label>Stock :</label><br>
                <input class="form-control" type="text" value="<?= $row->pro_stock ?>" name="stock"  >
            </div>

            <br>
            <div>
                <label >Couleur :</label><br>
                <input class="form-control" type="text" value="<?= $row->pro_couleur ?>" name="couleur"  >
            </div>

            <br>
            <div>
                <label >Photo :</label><br>
                <input class="form-control" type="text" value="<?= $row->pro_photo ?>" name="photo" >
            </div>

            <br>


            <label for="">Produit Bloqué :</label>
            <div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="produitbloque" id="inlineRadio1" value="oui"  <?php if ($row->pro_bloque !== NULL) {
                                                                                                                                    echo "checked";
                                                                                                                                }  ?>>
                    <label class="form-check-label" for="inlineRadio1">oui</label>
                </div>

                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="produitbloque" id="inlineRadio2" value="non"  <?php if ($row->pro_bloque === NULL) {
                                                                                                                                    echo "checked";
                                                                                                                                }  ?>>
                    <label class="form-check-label" for="inlineRadio2">non</label>
                </div>
            </div>

            <br>
            <div>
                <label >Date d'ajout :</label><br>
                <input class="form-control" type="text" value="<?= $row->pro_d_ajout ?>" name="date_ajout"  readonly>
            </div>
            <br>
            <div>
                <label >Date de modification :</label><br>
                <input class="form-control" type="text" value="<?= $row->pro_d_modif ?>" name="date_modif"  readonly >
            </div>
            <br>
        </div>

        <a href="index.php"><input class="px-4 mx-5 btn btn-secondary"name="submit" value="Routeur"></a>
        <a href="delete_form.php"><input class="px-4 mx-5 btn btn-danger" type="submit" name="Enregistrer" value="Enregistrer"></a>
        
    </form>
    <br>
    <br>
</div>
<?php
require "./footer.php";
?>