
// alert("trouvez le correct chiffre entre 1 et 10 inclus");

// const adeviner = Math.round(Math.random() * 10)  ;

// let essai = prompt("enterez un chiffer : ");
// essai = parseInt(essai, 10);

//  while(essai != adeviner){
//          if(essai > adeviner ){
//              alert("oops trop grand essai encore");
//          }else{ 
//              alert("oops trop petit essai encore");           
//      }
//      essai = prompt("entrer un chiffre :")
     
//  }
//      alert("bravo tu l'a trouvé");



//Exercice 2.3

// function libellés(prixHTarticle , articles, TVA){
// let prixHTarticles = prixHTarticle * articles;
// let montTVA = (TVA / 100 ) * prixHTarticles;
// let TTC = prixHTarticles + montTVA + "€";
// let resultat = {
//     "articles" : 'le prix ' + prixHTarticles + " €",
//     "montantTVA" : 'le montant de TVA ' + montTVA + " €",
//     "TTC": "le prix TTC " + TTC + " €"
//  }
// return resultat;
// }
// let res = console.log(libellés(30, 4, 5.5));
// console.log(res);




//Exercice 2.4

// L'affichage de quatre variantes de la célabre
// let str1 = " belle marquise, "
// let str2 = " vos beaux yeux "
// let str3 = " me font mourir "
// let str4 = " d’amour "
// let var1 = str3 + str4 + str2 + str1 
// console.log(var1);
// let var2 = str1 + str3 + str4 + str2
// console.log(var2);
// let var3 = str2 + str3 + str4 + str1
// console.log(var3)
// let var4 = str2 + str1 + str3 + str4
// console.log(var4);





//Exercice 3.1


// let essai = parseInt(prompt("veuillez entrer un chiffre : "), 10);

// if( essai > 0 ){
//     alert('ce chiffre est positif')
// }else if(essai < 0){
//     alert('ce chiffre est négatif');
// }else{
//     alert("ce chiffre égale zéro");
// }



//Exercice 3.2


// let nomber1 = parseInt(prompt("veuillez entrer le premier chiffre différent d'un 0 : "), 10);
// let nomber2 = parseInt(prompt("veuillez entrer le deuxième chiffre différent d'un 0 : "), 10);
// if(nomber1 > 0 && nomber2 < 0 || nomber1 < 0  &&  nomber2 > 0){
//     alert('le produit est négatif');
// }else if( nomber1 > 0 && nomber2 > 0 || nomber1 < 0 && nomber2 < 0){
//     alert("le produit est positif");
// }else{
//     alert("vous n'avez pas rentré les bons chiffres");
// }

//Exercice 3.3

// let nom1 = prompt("veuillez entrer le premier nom :").toLocaleLowerCase();
// let nom2 = prompt("veuillez entrer le deuxième nom :").toLocaleLowerCase();
// let nom3 = prompt("veuillez entrer le troisième nom :").toLocaleLowerCase();
// let alfabet = "abcdefghijklmnopqrstuvwxyz";
// const regex = /^[a-z]/g;
// let nom1lettere = alfabet.indexOf(nom1.match(regex));
// let nom2lettere = alfabet.indexOf(nom2.match(regex));
// let nom3lettere = alfabet.indexOf(nom3.match(regex));

// console.log(nom1);
// console.log(nom2);
// console.log(nom3);
// if(nom1lettere > nom2lettere || nom1lettere > nom3lettere || nom2lettere > nom3lettere  ){
//     alert("les noms ne sont pas rangés ")
// }else{
//     alert("les noms sont bien rangés ")
// }


//exercice 3.3




// let str1 = prompt("premier nom:")
// let str2 = prompt("deusième nom:")
// let str3 = prompt("troisième nom:")

// if(str1 < str2 && str2 < str3){
//     alert("++++")
// }else{
//     alert("---");
// }





//Exercice 3.4


// let essai = prompt("entrer un chiffre :");
// if(essai > 0 ){
//     alert("le chiffre est positif");
// }else if(essai < 0){
//     alert("le chiffre est nigatif")
// }else{
//     alert('le chiffre égale zéro');
// }

//Exercice 3.5


//  let nomber1 = parseInt(prompt("veuillez entrer le premier chiffre différent d'un 0 : "), 10);
//  let nomber2 = parseInt(prompt("veuillez entrer le deuxième chiffre différent d'un 0 : "), 10);
//  if(nomber1 > 0 && nomber2 < 0 || nomber1 < 0  &&  nomber2 > 0){
//      alert('le produit est négatif');
//  }else if( nomber1 > 0 && nomber2 > 0 || nomber1 < 0 && nomber2 < 0){
//      alert("le produit est positif");
//  }else{
//      alert("le traitement est null");
//  }


//Exercice 3.6

// let age = parseInt(prompt("entrez l'age d'un enfant :"), 10);

// if(age >= 6 && age <= 7){
//     alert("Poussin");    
// }else if(9 >= age && age >= 8 ){
//    alert("pupille");
// } else if( 11 >= age && age >= 10){
//     alert("Minime");
// }else if( 18 > age && age > 12){
//     alert("Cadet");
// }else{
//     alert("c'est pas l'age d'un enfant !");
// }
// console.log(age);



//Exercice 4.2


// let heure = parseInt(prompt("entrez leure :"), 10);
// let minutes = parseInt(prompt("entrez les minutes :"), 10);
// minutes += 1 ;
// let heureaprés = heure + " : " + minutes ;
// console.log(typeof(heure));
// alert("Dans une minute, il sera " +  heure + " heure(s)" + minutes + "minutes ." );


//Exercice 4.3

//  let heure = parseInt(prompt("entrez leure :"), 10);
//  let minutes = parseInt(prompt("entrez les minutes :"), 10);
//  let secondes = parseInt(prompt("entrez les secondes :"), 10);
//  secondes += 1 ;

//  alert("Dans une seconde, il sera " +  heure + " heure(s) " + minutes + " minutes  et " + secondes + " seconde(s)" );


// //Exercice 4.4



// let phoNomber = parseInt(prompt("entrez le nombre de photocopies :"), 10);
// console.log(phoNomber);

// let factDixpho =  phoNomber * 0.10 ; 


// let factVgtPho = ((phoNomber - 10) * 0.09 ) + 10 * 0.10;


// let grandFact = (phoNomber - 30) * 0.08  +  (10 * 0.10)  +  (20 * 0.09)



//  if(phoNomber <= 10 ){
//    alert(factDixpho)
    
//  }else if(phoNomber > 10 && phoNomber <= 30){

//      alert(factVgtPho);

//  }else if(phoNomber > 30) {

//      alert(grandFact);
//  }



//Exercice 4.6

//écrire un algorithme qui permette la saisie des scores de quatre candidats ensuite  Cet algorithme traitera le candidat numéro 1

// let score1Condidat = parseInt(prompt('entrez le score de premier condidat :' ), 10);
// let score2Condidat = parseInt(prompt('entrez le score de deuxième condidat :' ), 10);
// let score3Condidat = parseInt(prompt('entrez le score de troisième condidat :' ), 10);
// let score4Condidat = parseInt(prompt('entrez le score de quatrième condidat :' ), 10);

// console.log(score1Condidat + "%" );
// console.log(score2Condidat + "%" );
// console.log(score3Condidat + "%" );
// console.log(score4Condidat + "%" );


// if(score1Condidat > 50){
//     alert( score1Condidat + "%" +" le candidat numéro 1 est  élu dès le premier tour");
// }else if(score1Condidat < 12.5){
//     alert( score1Condidat + "%" +" le candidat numéro 1 est battu dès le premier tour.");
// }else if(score1Condidat > score2Condidat && score1Condidat > score3Condidat && score1Condidat > score4Condidat && score1Condidat > 12.5){
//     alert( score1Condidat + "%" +" le condidat se trouve en ballottage favorable");
// }else{
//     alert(score1Condidat + "%" +" le premier condidat se trouve en ballottage défavorable");
// }



//Exercice 4.7