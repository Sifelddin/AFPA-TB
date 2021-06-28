<?php





require "conect_BDD.php";
try {
    $req = $db->query("SELECT * FROM station");
} catch (PDOException $e) {
    $error = $e->getMessage();
}

echo "<pre>";
$result = NULL;

echo "</pre>";









require "./bootstrap_jarditou/BOOTSTRAP/header.php";


?>

<div class="container">
    <?php if ($error) : ?>
        <br>
        <div class="alert alert-danger"><?= $error ?></div>
    <?php else : ?>
        <pre>
        <?php $nbRow = $req->rowCount();
        if ($nbRow > 1) {
            while ($row = $req->fetch()) // Tant qu'il y a des lignes à afficher :
            { ?>
            
                     <div> 
                          <?php echo $row->sta_nom; ?> 
                     </div> 
            <?php
            }
        }
            ?>

    <?php endif ?>
   <?php  ?>
</pre>


</div>





<?php



require "./bootstrap_jarditou/BOOTSTRAP/footer.php";



?>