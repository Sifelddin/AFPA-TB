
<?php
require "../elements/conect_BDD.php";

$id = $_GET["pro_id"];
echo $id;
 
if(isset($_POST["Enregistrer"])){
    $ref = $_POST["ref"];
    $categorie = $_POST["cat_id"];
    $libelle = $_POST["libelle"];
    $couleur = $_POST["couleur"];
    $description = $_POST["description"];
    $prix = $_POST["prix"];
    $stock = $_POST["stock"];
    $photo = $_POST["photo"];
    $produitbloque = $_POST["produitbloque"];
    $date_modif = $_POST['date_modif'];
   
echo  $categorie;
try {
    $rq = "UPDATE produits JOIN categories ON cat_id = pro_cat_id 
    SET pro_ref=:pro_ref, pro_cat_id=:pro_cat_id , pro_libelle=:pro_libelle, pro_description=:pro_description,
     pro_prix=:pro_prix, pro_stock=:pro_stock, pro_couleur=:pro_couleur, pro_photo=:pro_photo,pro_d_modif=:pro_d_modif  WHERE pro_id = $id ";
    $requete = $db->prepare($rq);
    

$requete->execute([
    ":pro_ref" => $ref,
    ":pro_cat_id" => $categorie,
    ":pro_libelle" => $libelle,
    ":pro_description" => $description,
    ":pro_prix" => $prix,
    ":pro_stock" => $stock,
    ":pro_couleur" => $couleur,
    ":pro_photo" => $photo,
    ":pro_d_modif" => $date_modif
]);

} catch (PDOException $e) {
$error = $e->getMessage();
echo "N° : " . $e->getCode();
}
if($error){
    echo $error;
}else{
    header("Location:../tableau.php");
}
}

?>