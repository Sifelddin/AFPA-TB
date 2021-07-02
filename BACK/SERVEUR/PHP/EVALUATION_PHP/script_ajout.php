
<?php

require "./conect_BDD.php";


try {
    if (isset($_POST["submit"])) {


        $categorie = $_POST["cat_id"];
        $ref = $_POST['pro_ref'];
        $libelle = $_POST['libelle'];
        $description = $_POST['description'];
        $prix = $_POST['prix'];
        $stock = $_POST['stock'];
        $couleur = $_POST['couleur'];
        $photo = $_POST['photo'];
        $date_ajout = $_POST['date-Ajout'];
        $date_modif = $_POST['date-modif'];
        $pro_bloque = $_POST['pro-bloque'];



        $request = $db->prepare('INSERT INTO produits (pro_cat_id,pro_ref,pro_libelle,pro_description,pro_prix,pro_stock,pro_couleur,pro_photo,pro_d_ajout,pro_d_modif,pro_bloque)
         VALUES (:pro_cat_id,:pro_ref,:pro_libelle,:pro_description,:pro_prix,:pro_stock,:pro_couleur,:pro_photo,:pro_d_ajout,:pro_d_modif,:pro_bloque)');
        $request->execute([

            ':pro_cat_id' => $categorie,
            ':pro_ref' => $ref,
            ':pro_libelle' => $libelle,
            ':pro_description' => $description,
            ':pro_prix' => $prix,
            ':pro_stock' => $stock,
            ':pro_couleur' => $couleur,
            ':pro_photo' => $photo,
            ':pro_d_ajout' => $date_ajout,
            ':pro_d_modif' => NULL,
            ':pro_bloque' => $pro_bloque

        ]);
    }
} catch (PDOException $e) {
    $error = $e->getMessage();
}

if ($error) {
    echo $error;
} else {



    header("Location:tableau.php");
}
