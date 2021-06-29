<?php 

echo '<pre>';
echo $_POST["submit"];
echo '</pre>';

$id_station = $_POST['id'];
$nom_station = $_POST['nom'];
$altitude_station = $_POST['altitude'];


require "conect_BDD.php";


if($_POST["submit"] === "Valider les modifications"){
// Construction de la requête UPDATE sans injection SQL
try {
$rq = "UPDATE station SET sta_nom=:sta_nom, sta_altitude=:sta_altitude WHERE sta_id=:sta_id";
$requete = $db->prepare($rq);

$requete->execute([
    ":sta_id" => $id_station,
    ":sta_nom" => $nom_station,
    ":sta_altitude" => $altitude_station
]);

} catch (PDOException $e) {
$error = $e->getMessage();
echo "N° : " . $e->getCode();
}
if($error){
    echo $error;
}
}
if($_POST["submit"] === "suppression"){
// Construction de la requête DELETE sans injection SQL
try {
$rq = "DELETE FROM station WHERE sta_id=:sta_id";
$requete = $db->prepare($rq);

$requete->execute([
    ":sta_id" => $id_station
]);
$requete->closeCursor();
} catch (PDOException $e) {
$error = $e->getMessage();
echo "N° : " . $e->getCode();
}
if($error){
    echo $error;
}
}


try {
    $req = $db->query("SELECT * FROM station");
} catch (PDOException $e) {
   
}

echo "<pre>";
$resultat = $req->fetchAll();
print_r(($resultat));
echo "</pre>";

?>



<html>

<body>


    <?php if ($error) : ?>
        <br>
        <div class="alert alert-danger"><?php echo $error ; $error = $e->getMessage();?></div>
    <?php else : ?>

    <?php endif ?>


    <?php
    // //var_export($_POST);
    // //echo "<br>";
    // $buttons=[1,2,3,'+',4,5,6,'-',7,8,9,'*','C',0,'.','/','='];
    // $pressed='';
    // if(isset($_POST['pressed']) && in_array($_POST['pressed'],$buttons)){
    //     $pressed=$_POST['pressed'];
    // }
    // $stored='';
    // if(isset($_POST['stored']) && preg_match('~^(?:[\d.]+[*/+-]?)+$~',$_POST['stored'],$out)){
    //     $stored=$out[0];    
    // }
    // $display=$stored.$pressed;
    // //echo "$pressed & $stored & $display<br>";
    // if($pressed=='C'){
    //     $display='';
    // }elseif($pressed=='=' && preg_match('~^\d*\.?\d+(?:[*/+-]\d*\.?\d+)*$~',$stored)){
    //     $display.=eval("return $stored;");
    // }

    // echo "<form action=\"\" method=\"POST\">";
    //     echo "<table style=\"width:300px;border:solid thick black;\">";
    //         echo "<tr>";
    //             echo "<td colspan=\"4\">$display</td>";
    //         echo "</tr>";
    //         foreach(array_chunk($buttons,4) as $chunk){
    //             echo "<tr>";
    //                 foreach($chunk as $button){
    //                     echo "<td",(sizeof($chunk)!=4?" colspan=\"4\"":""),"><button name=\"pressed\" value=\"$button\">$button</button></td>";
    //                 }
    //             echo "</tr>";
    //         }
    //     echo "</table>";
    //     echo "<input type=\"hidden\" name=\"stored\" value=\"$display\">";
    // echo "</form>";
    ?>



    <pre>
<?php



?>
</pre>
</body>

</html>