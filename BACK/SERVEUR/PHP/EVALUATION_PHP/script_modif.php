
<?php
require "conect_BDD.php";


if(isset($_POST["Enregistrer"])){

    $ref = $_POST["ref"];
    $categorie = $_POST["categorie"];
    $libelle = $_POST["libelle"];
    $couleur = $_POST["couleur"];
    $description = $_POST["description"];
    $prix = $_POST["prix"];
    $stock = $_POST["stock"];
    $photo = $_POST["photo"];
    $produitbloque = $_POST["produitbloque"];
    

try {
    $rq = "UPDATE produits JOIN categories ON cat_id = pro_cat_id 
    SET pro_ref=:pro_ref, cat_nom=:cat_nom , pro_libelle=:pro_libelle, pro_description=:pro_description,
     pro_prix=:pro_prix, pro_stock=:pro_stock, pro_couleur=:pro_couleur, pro_photo=:pro_photo";
    $requete = $db->prepare($rq);
    

$requete->execute([
    ":pro_ref" => $ref,
    ":cat_nom" => $categorie,
    ":pro_libelle" => $libelle,
    ":pro_description" => $description,
    ":pro_prix" => $prix,
    ":pro_stock" => $stock,
    ":pro_couleur" => $couleur,
    ":pro_photo" => $photo
]);

} catch (PDOException $e) {
$error = $e->getMessage();
echo "N° : " . $e->getCode();
}
if($error){
    echo $error;
}else{
    header("Location:index.php");
}
}

?>