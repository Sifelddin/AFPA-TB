<?php 

require "conect_BDD.php";
require "./header.php";

try {
    $req = $db->query("SELECT * FROM produits");
  
} catch (PDOException $e) {
    $error = $e->getMessage();
}

?>

<?php if($error) :?>
<?=$error?>
<?php else :?>
<?php 
  $objs = $req->fetch();
  $objs_dai = $req->fetchAll();
?>


<div class="container-fluid">
    
   <div class="table-responsive-md">
         <table class="table table-bordered table-sm">
        <thead class="bg-light h5 display-5">
            <tr>
            <th>photos</th> 
         
           
           <?php foreach($objs as $obj => $valeur) :?> 
          <?php if($obj != 'pro_cat_id' && $obj != 'pro_d_modif' && $obj != 'pro_bloque' && $obj != 'pro_description' && $obj != 'pro_photo') :?>
            <th> <?=$obj?></th> 
            <?php endif ?>   
<?php endforeach?> 
  
        </tr> 
        </thead>
        <tbody class="table-hover"> 
        <tr  class="table-warning">
        <td><img style="width: 160px;"  class="img-responsive img-fluid" src="./jarditou_html_zip/jarditou_photos/11.jpg" alt=""></td>
        <?php foreach($objs as $obj => $valeur) :?> 

          <?php if($obj != 'pro_cat_id' && $obj != 'pro_d_modif' && $obj != 'pro_bloque' && $obj != 'pro_description' && $obj != 'pro_photo' ) :?>
            <td> <?=$valeur?></td> 
            <?php endif ?> 

        <?php endforeach?> 
      </tr>

         <?php foreach($objs_dai as  $val) :?>
        <tr class="table-warning">
          <td><img style="width: 160px;"  class="img-responsive img-fluid" src="./jarditou_html_zip/jarditou_photos/11.jpg" alt=""></td>
          <td><?=$val->pro_id?></td>
          <td><?=$val->pro_ref?></td>
          <td><?=$val->pro_libelle?></td>
          <td><?=$val->pro_prix?></td>
          <td><?=$val->pro_stock?></td>
          <td><?=$val->pro_couleur?></td>
          <td><?=$val->pro_d_ajout?></td>
        </tr>
     <?php endforeach?>  
             
        </tbody>
    </table>
</div>


</div>




<?php endif ?>
<?php
require "./footer.php";

?>