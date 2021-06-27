<?php


echo "<pre>";
var_dump($_POST);
echo "<br>";
var_dump($_REQUEST);
echo "</pre>";


function condition_validation($value)
{

    if (empty($value) || is_null($value)) {
        echo " <label class= \"errorWatch\">Veuillez remplir ce champ obligatoire*</label>";
    }
    return '';
}

function check_validation($value)
{
    if (array_keys($_POST, $value) == false) {
        echo " <label class= \"errorWatch\">Veuillez remplir ce champ obligatoire*</label>";
    }
    return "";
}


function correcte_form($value)
{

    $regExpnom_prenom = "/^[a-zA-Z]+$/";
    $regExpEmail = "/[a-zA-Z]+(\d+)?(\d+|-|.|_)?[a-zA-Z\d]+@[a-z]+\.[a-z]{2,4}/";
    $regExpDate = "/\d{4}/";
    $date = time();
    $date_annee_actuelle = date("Y", $date);
    if (!empty($_POST[$value])) {


        if (($value === "nom" || $value === "prenom") && !preg_match($regExpnom_prenom, $_POST[$value]) ||  strlen($_POST[$value]) < 3) {
            echo " <label class= \"errorWatch\">nom et prénom contain que des lettres et minimum 3 lettre S,V,P </label>";
        }


        if ($value === "email"  && !preg_match($regExpEmail, $_POST[$value])) {
            echo " <label class= \"errorWatch\"> l'adresse email doit être en form correcte  </label>";
        }
    }
}
