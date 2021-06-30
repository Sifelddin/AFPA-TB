<?php

require "./header.php"
?>



<div class="container">
    <img class="img-fluid rounded mx-auto d-block" src="./jarditou_html_zip/jarditou_photos/7.jpg" alt="">
    <h2>formulaire d'ajout d'un produit</h2>
    <br>
    <form action="script_ajout.php" method="POST">
        <div class="form-group">

            <div>
                <label>"pro_cat_id" - Catégorie du produit:</label><br>
                <input class="form-control" type="number" value="" name="pro_cat_id">
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
                <input class="form-control" type="number" value="" name="prix">
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
                <input class="form-control" type="number" value="" name="pro-bloque">
            </div>
            <br>
            <input type="submit" class="btn btn-success" name="submit" value="Ajouter">
            <a href="index.php"><input class="btn btn-secondary" name="routeur" value="routeur"></a>
    </form>
</div>







<?php

require "./footer.php"
?>