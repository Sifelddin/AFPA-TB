<?php
//Exercice
//Ecrivez la fonction calculator() traitant les opérations d'addition, de soustraction, de multiplication et de division.


function calculator(int $chiff1,int $chiff2, $opr){

    if (isset($chiff1,$chiff2,$opr)){
        switch($opr) {
            case "+":
                echo $chiff1 + $chiff2;
                break;
            case "-":
                echo $chiff1 - $chiff2;
                break;
            case "*":
                echo $chiff1 * $chiff2;
                break;
            case "/":
                echo $chiff1 / $chiff2;
                break;
        } 
   }
}



