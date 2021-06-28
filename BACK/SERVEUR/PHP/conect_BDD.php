<?php


$user = 'root';
$pass = '';
$error = null;

$db = new PDO('mysql:host=localhost;dbname=hotel;charset=utf8',$user,$pass,[
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ
]);
?>