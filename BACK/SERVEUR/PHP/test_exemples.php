<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="test_exemples.php" method="GET">
        Tu utilises internet plutôt le :<br>
        <input type="checkbox" name="Fjour[]" value="Lundi">Lundi<br>
        <input type="checkbox" name="Fjour[]" value="Mardi">Mardi<br>
        <input type="checkbox" name="Fjour[]" value="Mercredi">Mercredi<br>
        <input type="checkbox" name="Fjour[]" value="Jeudi">Jeudi<br />
        <input type="checkbox" name="Fjour[]" value="Vendredi">Vendredi<br>
        <input type="submit" name="envoyer" value="Envvoyer">
    </form>

    <pre>
<?php
echo "Tu surfes sur le web en semaine plutôt le : ";

if (isset($_REQUEST)) {
    foreach ($_REQUEST["Fjour"] as $jour) {
        echo $jour . "\n";
    }
};


?>
</pre>

</body>

</html>