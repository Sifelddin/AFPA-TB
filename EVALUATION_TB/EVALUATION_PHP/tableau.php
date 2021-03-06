<?php

require "./elements/conect_BDD.php";
require "./elements/header.php";

$tableau = ["11", "12", "13", "8", "7"];

try {
  if (isset($_POST['recherche'])) {
    $reherche = $_POST['recherche'];
    $req = $db->prepare("SELECT * FROM produits WHERE pro_libelle LIKE '%$reherche%'  ");
    $req->execute();
  } else {
    $req = $db->prepare("SELECT * FROM produits");
    $req->execute();
  }
  $objs_dai = $req->fetchAll();
} catch (PDOException $e) {
  $error = $e->getMessage();
}

?>

<?php if ($error) : ?>
  <?= $error ?>
<?php else : ?>



  <div class="container">

    <br>
    <div class="text-center"> <a href="./forms/form_ajout.php"><input class="mx-auto px-4 mx-5 btn btn-danger" name="ajouter" value="Ajouter un produit"></a></div>
    <br>
    <br>
    <?php if (count($objs_dai) === 0) : ?>

      <div class="p-5 alert alert-danger text-center">
        <h2>le produit que vous avez recherché n'existe pas dans la liste </h2>
        <a href="tableau.php"><input class="fs-3 m-5 px-4 mx-5 btn btn-secondary" name="routeur" value="routeur"></a>
      </div>

    <?php else : ?>
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
              <?php shuffle($tableau) ?>
              <tr class="table-warning text-center ">
                <td class="align-middle"><img style="width: 160px;" class="img-responsive img-fluid" src="./jarditou_html_zip/jarditou_photos/<?php echo $tableau[2] ?>.<?=$val->pro_photo ?>" alt=""></td>
                <td class="align-middle"><?= $val->pro_id ?></td>
                <td class="align-middle"><?= $val->pro_ref ?></td>
                <td class="align-middle"><strong><a class="text-danger" href="./forms/details.php?pro_id=<?= $val->pro_id ?>"><?= $val->pro_libelle ?></strong></a></td>
                <td class="align-middle"><?= $val->pro_prix . " €" ?></td>
                <td class="align-middle"><?= $val->pro_stock ?></td>
                <td class="align-middle"><?= $val->pro_couleur ?></td>
                <td class="align-middle"><?= $val->pro_d_ajout ?></td>
                <td class="align-middle"><?= $val->pro_d_modif ?></td>
                <td class="align-middle"><?= $val->pro_bloque ?></td>
              </tr>
            <?php endforeach ?>



          </tbody>
        </table>

      </div>
    <?php endif ?>

  </div>




<?php endif ?>
<?php
require "./elements/footer.php";

?>