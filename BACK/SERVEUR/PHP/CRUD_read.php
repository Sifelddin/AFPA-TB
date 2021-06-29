<?php

require "conect_BDD.php";
try {
    $req = $db->query("SELECT * FROM station");
} catch (PDOException $e) {
    $error = $e->getMessage();
}
// A. Création d'un SYSTÈME listant les stations de notre base
$objs = $req->fetchAll();

require "./bootstrap_jarditou/BOOTSTRAP/header.php";

?>

<div class="container">
    <?php if ($error) : ?>
        <br>
        <div class="alert alert-danger"><?= $error ?></div>
    <?php else : ?>

        <pre>
        <?php foreach($objs as $obj ):?>
        <div>
         <?php  echo $obj->sta_nom  ;?>
         <a href="CRUD_read.php?sta_id=<?php echo $obj->sta_id  ;?> ">station_détail <?php echo $obj->sta_id  ;?></a>
         </div>

          <?php endforeach ; ?>
          <?php $req->closeCursor();  ?>
        </pre>
         <?php endif ?>



<!-- B. Création d'un SYSTÈME nous permettant d'accéder aux détails d'une station -->

<?php if(isset( $_GET["sta_id"])) :?>
<?php
try{
        $sta_id = $_GET["sta_id"];
        $req_list = $db->query("SELECT * FROM station WHERE sta_id=".$sta_id);
        $row = $req_list->fetch();
        $req_list->closeCursor();
} catch (PDOException $e){
    $error = $e->getMessage();
}
?>
     <?php if($error): ?>  
     <?=$error ?>  
        <?php else :?>
        
<div>
    Identifiant : <?php echo   $row->sta_id."<br>"; ?>
     Nom de la station : <?php echo   $row->sta_nom."<br>"; ?>
     Altitude de la station : <?php  echo   $row->sta_altitude."<br>"; ?>   
</div>
        <?php endif?>
        <?php endif?>
            


<?php

require "./bootstrap_jarditou/BOOTSTRAP/footer.php";
?>