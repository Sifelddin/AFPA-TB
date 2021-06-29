<?php

require "conect_BDD.php";
require "./header.php";

try {
  $req = $db->query("SELECT * FROM produits");
} catch (PDOException $e) {
  $error = $e->getMessage();
}

?>

<?php if ($error) : ?>
  <?= $error ?>
<?php else : ?>
  <?php

  $objs_dai = $req->fetchAll();
  ?>


  <div class="container-fluid">

    <div class="table-responsive-md">
      <table class="table table-bordered table-sm">
        <thead class="bg-light h5 display-5">
          <tr class="text-center">
            <th>photos</th>
            <th>ID</th>
            <th>référence</th>
            <th>Libellé</th>
            <th>Prix</th>
            <th>stock</th>
            <th>Couleur</th>
            <th>Ajout</th>
            <th>Modif</th>
            <th>Bloqué</th>
          </tr>
        </thead>
        <tbody class="table-hover">

          <?php foreach ($objs_dai as  $val) : ?>
            <tr class="table-warning text-center ">
              <td><img style="width: 160px;" class="img-responsive img-fluid" src="./jarditou_html_zip/jarditou_photos/11.jpg" alt=""></td>
              <td><?= $val->pro_id ?></td>
              <td><?= $val->pro_ref ?></td>
              <td><a href="Tableau.php?pro_id=<?= $val->pro_id ?>"><?= $val->pro_libelle ?></a></td>
              <td><?= $val->pro_prix . " €" ?></td>
              <td><?= $val->pro_stock ?></td>
              <td><?= $val->pro_couleur ?></td>
              <td><?= $val->pro_d_ajout ?></td>
              <td><?= $val->pro_d_modif ?></td>
              <td><?= $val->pro_bloque ?></td>
            </tr>
          <?php endforeach ?>

        </tbody>
      </table>
    </div>


  </div>




<?php endif ?>
<?php
require "./footer.php";

?>