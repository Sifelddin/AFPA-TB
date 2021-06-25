<?php

$user = 'root';
$pass = '';

try{
$db = new PDO('mysql:host=localhost;dbname=hotel;charset=utf8',$user,$pass);

} catch ( PDOException $e){

print "Erreur :" . $e->getMessage() . "<br/>" ;
die("fin du script");

}
$query = $db->query('SELECT * FROM client');
if($query === false){
    var_dump($db->errorInfo());
    die('Erreur SQL');
}
$posts = $query->fetchAll();
echo '<pre>';
print_r($posts);
echo '</pre>';

require "../PHP/boutstrap_jarditou/BOOTSTRAP/header.php";

?>





<?php
require "../PHP/boutstrap_jarditou/BOOTSTRAP/footer.php";

?>