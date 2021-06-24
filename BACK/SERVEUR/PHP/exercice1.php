



<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>


  <?php


  //Exercice 1
  //   $i = 1;
  //   while($i < 150){

  //       echo $i . '<br>';
  //       $i+=2;
  //   };

  ?>





  <?php
  //EXERCICE 2
  // $str = "Je dois faire des sauvegardes régulières de mes fichiers.";

  // $i = 0;
  // while ($i <= 500){

  //   echo "$str-$i<br>";
  // $i++;
  // }
  ?>


  <table>

    <tbody>


    </tbody>


  </table>


  <table style="width: 100%;">
    <thead>
      <th style="border: 1px solid black;"></th>
      <?php
      for ($i = 0; $i <= 12; $i++) {
        echo "<th style=\"border: 1px solid black;font-size: 1.3rem;\">" . $i  . "</th>";
      }
      ?>
    </thead>
    <tbody>
      <?php for ($j = 0; $j <= 12; $j++) { ?>
        <tr>
          <th style="border: 1px solid black;font-size: 1.3rem;"><?= $j ?></th>
          <?php for ($i = 0; $i <= 12; $i++) { ?>
            <td style="border: 1px solid black; text-align: center;font-size: 1.3rem; "><?= $i * $j ?></td>
          <?php  } ?>

        </tr>
      <?php } ?>


    </tbody>


  </table>
 

</body>

</html>