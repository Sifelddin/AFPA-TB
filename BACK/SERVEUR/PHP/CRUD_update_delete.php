<?php

require "./conect_BDD.php";
require "./bootstrap_jarditou/BOOTSTRAP/header.php";

try{

 
$req = $db->query("SELECT sta_id FROM station ");
$res = $req->fetchAll();
$req->closeCursor();

} catch (PDOException $e){
    $error = $e->getMessage();
}

?>
<div class="container">
<?php if($error):?>
<?=$error?>
<?php else :?>


<h1>liste des station</h1>
<?php foreach ($res as $tab) :?>
   <div><a href="CRUD_update_delete.php?sta_id=<?php echo $tab->sta_id  ;?> ">station_détail id <?php echo $tab->sta_id  ;?></a></div>
<?php endforeach ?>


<?php if($_GET["sta_id"]) :?>

<?php 
$sta_id=$_GET["sta_id"];
    $req_All_tab = $db->query("SELECT * FROM station WHERE sta_id=".$sta_id );
    $row = $req_All_tab->fetch();
    $req_All_tab->closeCursor();
    
    ?>
<?php endif ?>



    <form action ="php05.php" method="post">
    <div class="form-group">
    <h2>formulaire de modification</h2>
    <div>
        <label>Identifiant de la station</label><br>
        <input class="form-control" type="text" value="<?php echo $row->sta_id?>" readonly name="id"> 
    </div>
    <br>

    <div>
        <label for="nom_for_label">Nom de la station</label><br>
        <input class="form-control" type="text" value="<?php echo $row->sta_nom?>" name="nom" id="nom_for_label">
    </div>
    <br>

    <div>
        <label for="altitude_for_label">Altitude</label><br>
        <input class="form-control" type="text" value="<?php echo $row->sta_altitude?>"  name="altitude" id="altitude_for_label">
    </div>

    <br>
</div>
    <input class="btn btn-primary" type="submit" name="submit" value="Valider les modifications">

    </form>
<br><br>
    <form action ="php05.php" method="post">
    <div class="form-group">
    <h2>formulaire de suppression</h2>
    <div>
        <label>Identifiant de la station</label><br>
        <input class="form-control" type="text" value="<?php echo $row->sta_id?>" readonly name="id"> 
    </div>
    <br>

    <div>
        <label for="nom_for_label">Nom de la station</label><br>
        <input class="form-control" type="text" value="<?php echo $row->sta_nom?>" name="nom" id="nom_for_label">
    </div>
    <br>

    <div>
        <label for="altitude_for_label">Altitude</label><br>
        <input class="form-control" type="text" value="<?php echo $row->sta_altitude?>"  name="altitude" id="altitude_for_label">
    </div>

    <br>
</div>
    <input class="btn btn-primary" type="submit" name="submit" value="suppression">

    </form>
</div>

<?php endif?>
<?php
require "./bootstrap_jarditou/BOOTSTRAP/footer.php";
?>