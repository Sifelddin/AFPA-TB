


// let convertToF = (celsius) => {
//     let fahrenheit = 0; 
//     fahrenheit = celsius * 9/5 + 32;
//     return fahrenheit;
// }



// let reverseString = (str) => {
//     let newStr = "";
//    newStr = str.split("").reverse().join("");
//     return newStr
// }



// function factNum(num){
//   if(num === 0){
//       return 1;
//   }  
//   return num * factNum(num - 1 );

// }

// let findTheLongestWordlength = (sentence) => {
//     let newstr = sentence.split(' ');
//     let maxlength = 0; 
//     for(let i = 0; i < newstr.length ; i++){
//         if(newstr[i].length > maxlength){
//             maxlength = newstr[i].length
//         }

//     }
//    return maxlength

// }

// let bigNumbersInArrays = (arr) => {
//     let newarr = [];
//     for(let i = 0; i < arr.length; i++){
//        newarr.push(arr[i].reduce((current, prev) => current > prev ))
//     }
//     return newarr
// }

// console.log(bigNumbersInArrays([[4,5,1,3],[13,27,18,26],[32,35,37,39]]));
// console.log('hello world');



//JS 07 : Instructions conditionnelles et alternatives 


//Exercice 1 - Parité
// let entrerNombre = parseInt(prompt("entrez un chiffre  :"), 10);
// (entrerNombre % 2 == 0)? alert("le nombre paire") : alert("le nombre est impair");
   


//Exercice 2 - Age
// let age = prompt("entrez votre age :");
// (age < 18)? alert("vous êtes mineur ") : alert("vous êtes majeur");




//Exercice 3 - Calculette

// let saisiNb1 = prompt("saisi le premeier nombre :");
// let saisiNb2 = prompt("saisi le deuxième nombre :");
// let Opérateur = prompt("saisi un de ces opérateur (+ , - , * , /) ");

// console.log(saisiNb1 + " " + saisiNb2 + " " + Opérateur);
// console.log(typeof(saisiNb2));
// console.log(typeof(saisiNb1));

// if(Opérateur == "+" ){
//     saisiNb2 = parseInt(saisiNb2, 10);
//     saisiNb1 = parseInt(saisiNb1, 10);
    
//     alert(saisiNb1 + saisiNb2);

//     }else if(Opérateur == "-" ){
//         alert(saisiNb1 - saisiNb2);

//     }else if(Opérateur == "*" ){
//         alert(saisiNb1 * saisiNb2);

//     }else if(Opérateur == "/" && saisiNb2 != 0 ){
//         alert(saisiNb1 / saisiNb2);

//     }

// else{
//     alert("c'est pas le bon opérateur ou bien d'erreur division par 0")
// }





// JS 08 : Les boucles
// Exercice 1 - Saisie

// let prenome = prompt("saisissez le prénom :");
// let nomberPrenom = 0;
// while(prenome != null){
//     console.log(prenome);
//     nomberPrenom++;
//     prenome = prompt("saisissez le prénom :");
// }

// console.log("le nombre des prénomes :"+ nomberPrenom);







//Exercice 2 - Entiers inférieurs à N

// function trouverNombresInférieurs (N){

//     while (N > 0){

//         N--;
       
//         console.log(N);
//     }
//  return N;
// }

// let res = trouverNombresInférieurs(10);
// console.log(res);





//Exercice 3 - Moyenne

// let somme = 0;
// let moyenne = 0;
// let saisiEntier = parseInt(prompt("saisi des chiffres :"),10);  

// let i = 0;  
// //
// if(Number.isInteger(saisiEntier)){
// while(saisiEntier != 0){
    
//     somme += saisiEntier;
//     i++;
//     moyenne = somme / i;
//     if(Number.isInteger(saisiEntier))  {
//     saisiEntier = parseInt(prompt("saisi des entiers :"),10);  
//     }else{
//         alert("ce n'est pas un chiffre");
//         break;
//     }
// }
// document.write("<h1> la somme est :" + somme + "</h1>")
// document.write("<h1> la somme est :" + moyenne + "</h1>")

// }
// else{
//     alert("ce n'est pas un chiffre"); 
//     }






//Exercice 4 - Multiples

// let N =parseInt(prompt("saisi le  nombre N:"), 10);
// let X =parseInt(prompt("saisi le  nombre X:"), 10);

// while(N > 0){
//     if(N == 0){
//         break;
//     }
//     console.log( N + " x " + X + " = " + N*X);
//     N--;
    
// }






// Exercice 5 - Nombre de voyelles.

// let mot = prompt("entrez un mot :");
// let voyellesN = 0;

// let regEXp = /[aeiuoy]/ig
// let matched = mot.match(regEXp);
// console.log(matched);


// for(let i = 0; i < matched.length ; i++){
//     voyellesN++;
// }
// document.write("<h1> nomber des voyellesN:  " + voyellesN + "</h1>")

//Exercice 5 

// let mot = prompt("saisissez un mot : ").toLocaleLowerCase();
// let voyellesNombre ;
// let voyelles = "";
// for(let i = 0; i < mot.length; i++){
//  if( mot[i] == "i" || mot[i] == "a" ||mot[i] == "e" ||mot[i] == "y" ||mot[i] == "o" ||mot[i] == "u" ){
//  voyelles +=  mot.substr(mot.indexOf(mot[i]), 1) ;
// }
// }
// voyellesNombre = voyelles.length;
// console.log(voyellesNombre);




// let mot = prompt("saisissez un mot : ").toLocaleLowerCase();
// let voyellesNum = 0;
// for(let i = 0; i < mot.length; i++){
//   if( mot[i] == "i" || mot[i] == "a" || mot[i] == "e" ||mot[i] == "y" ||  mot[i] == "o" ||mot[i] == "u" ){
// voyellesNum++
//   }
// }
// console.log(voyellesNum);





//  
// 
//   



//JS 09 : Fonctions

// //Exercice 1
//  let numx = prompt("chiffre x :" )
//  let numy = prompt("chiffre y :" )

// function produit (x, y){
// return x * y;
// }

//  function cube(numx){
//     return numx**2;
// }

// function afficheImg(image){
//   return  document.write(image);
// }

// afficheImg("<img src=\"https://ncode.amorce.org/ressources/Pool/TB/WEB_Javascript_BASES/images/papillon.jpg\"><br>")

// document.write(" <p>Le cube de "+ numx + " est égal à " + cube(numx) + "</p>")
// document.write(" <p>Le produit de "+ numx + " X " + numy + " est égal à "+ produit(numx, numy) +"</p>")






//Exercice 2 - String Token

//function strTok(str1, str2, n){

//  let str2Instr1 = str1.split(" ").join(str2);
//  document.write("<h1>la phrase est :  " +str2Instr1 + "</h1>");
//  let arr = str1.split(" ");
//  document.write("<h1> le nieme mot est : " + arr[n - 1] + "</h1>") ;
//  return arr[n - 1];
// }

// console.log(strTok( "robert dupont amiens 80000" , ";" , 3))

//Exercice 2 - String Token - 2
// let string = "robert dupont amiens 80000";


// function strtok(str1,str2,n){
//     let count = 0;
//  let newStr = str1.replaceAll(" ", str2).split(";")[n-1];
 
//    return newStr;

// }

// console.log(strtok(string,";",3 ));






// JS 10 : Tableaux
// Exercice 1

// let Tableau = [];

// let TailleTableau = parseInt(prompt("saisi la taille de tableau"), 10);
// let i = 0 ;
// while(i < TailleTableau){
//  let valeur = prompt('entrez une valeur dans le tableau');  
//  Tableau.push(valeur);   

//  i++;
// }

// document.write("<h1>Le tableau :" + Tableau + "</h1>");


//Exercise 2

// //une fonction GetInteger pour lire un entier au clavier,
// function GetInteger(){
//  let num = parseInt( prompt("entrez un entier qui est le nombre de postes souhaité dans le tableau:"),10);
//   if(Number.isInteger(num)){
//       return num;
//   }else{
//       alert("ce n'est pas un entier");
//   }
// }

//  let number = GetInteger();



// //une fonction InitTab pour créer et initialiser l’instance de tableau : le nombre de postes souhaité sera entré au clavier,
//  function initTab(){
//      if(Number.isInteger(number)){
//     let array = new Array(number);
//     return array;
// }else{ 
//    return null;
// }
   
// }
// try{
// //une fonction SaisieTab pour permettre la saisie des différents postes du tableau,
// function SaisieTab(arr){
//     for(let i = 0 ; i < arr.length ; i++){
//  arr[i]= parseInt(prompt("saisir des postes dans tableau :"),10);
//    }
//  return arr
// }

// const tableau = SaisieTab(initTab());


// //une fonction AfficheTab pour afficher tous les postes du tableau,
// function AfficheTab(){
    
//      document.write("<h1>l'affichage de tous les postes du tableau:  [" +  tableau + "]</h1>")

// }


// //une fonction RechercheTab pour afficher le contenu d’un poste de tableau dont le rang est saisi au clavier
// function RechercheTab(){
//     let rang =parseInt(prompt("saisir le rang d'un poste pour afficher son contenu :"))
    
//     if(Number.isInteger(rang)){
//       document.write("<br><h1>  le contenu d’un poste  de tableau dont le index est  " + rang +" est :" +  + tableau[rang] + "</h1>") ;
//       return  console.log(tableau[rang]) 
//     }
//      return   alert("c'est pas un chiffre")
    

// }



// //une fonction InfoTab qui affichera le maximum et la moyenne des postes.
// function InfoTab(arr){
// let count = 0;
//     for(let i = 0 ; i < arr.length; i++){
//         count += arr[i];
//     }
 
//  document.write("<br><h1> la moyenne des postes :" + count/arr.length + "</h1>") ;
//  document.write("<br><h1>le maximum des postes :" + Math.max(...tableau)+ "</h1>") ;

// }

// AfficheTab();
// RechercheTab()
// InfoTab(tableau);

// }catch {
//     alert('il faut rentrer un chiffre pour continuer !')
// }

<<<<<<< HEAD
// //une fonction GetInteger pour lire un entier au clavier,
=======
//une fonction GetInteger pour lire un entier au clavier,
>>>>>>> 167e0576bf0cd4404da09a93fe9533b529554b96
// let GetInteger =()=> {
//  let num = parseInt( prompt("entrez un entier qui est le nombre de postes souhaité dans le tableau:"),10);
//   if(Number.isInteger(num)){
//       return num;
//   }else{
//       alert("ce n'est pas un entier");
//   }
// }
// const entier = GetInteger();

// //une fonction InitTab pour créer et initialiser l’instance de tableau : le nombre de postes souhaité sera entré au clavier,
// let initTab = (e) => {
//     let array = new Array(e);
//     return array; 
// }
// const tableauVide = initTab(entier);

// //une fonction SaisieTab pour permettre la saisie des différents postes du tableau,
// let SaisieTab = (arr) => {  
//      if(Number.isInteger(entier) ){    
//     for(let i = 0 ; i < arr.length ; i++){
//  arr[i]= parseInt(prompt("saisir des chiffres dans les postes dans tableau :"),10);
//    }
//  return arr
// }else{
//     return alert ("un chiffre svp")
// }
// }

// const tableau = SaisieTab(tableauVide);
// console.log(tableau);

// //une fonction AfficheTab pour afficher tous les postes du tableau,
// let AfficheTab = () =>{
//     if(Number.isInteger(entier)){ 
//         if(!tableau.includes(NaN)) {
//      document.write("<h1>l'affichage de tous les postes du tableau:  [" +  tableau + "]</h1>")
//     }else{
//     return alert('veuillez entrer des chiffres s,v,p')
// }
// }
// return null

// }


// //une fonction RechercheTab pour afficher le contenu d’un poste de tableau dont le rang est saisi au clavier
// let RechercheTab = () =>{
//     if(Number.isInteger(entier) && !tableau.includes(NaN) ){ 
//     let rang =parseInt(prompt("saisir le rang d'un poste pour afficher son contenu :"))
   
//     if(rang < tableau.length  ){
//       document.write("<br><h1>  le contenu d’un poste  de tableau dont le index est  " + rang +" est :" +  + tableau[rang] + "</h1>") ;
//       console.log(tableau[rang])  }else if(Number.isInteger(rang)){
      
//         document.write("<br><h1>  le contenu d’un poste  de tableau dont le index est  " + rang +" est :"  + tableau[rang] + "</h1>")  }else{
//            return   alert(" un chiffre pour saisir le rang d'un poste !")
//         }

//       }
//       return   null
//     }
// //une fonction InfoTab qui affichera le maximum et la moyenne des postes.
// let InfoTab =(arr) =>{
//     if(Number.isInteger(entier) ){ 
// let count = 0;
//     for(let i = 0 ; i < arr.length; i++){
//         count += arr[i];
//     }
 
//  document.write("<br><h1> la moyenne des postes :" + count/arr.length + "</h1>") ;
//  document.write("<br><h1>le maximum des postes :" + Math.max(...tableau)+ "</h1>") ;

// }else{
//     return null
// }
// }
// AfficheTab();
// RechercheTab()
// InfoTab(tableau);


  





//Exercice 3 : Tri d’un tableau


// let tableau = ["ali", 'sifou', "hamid", "pierre", "good" , "day" , "ali"]
// function sorting(arr){
//  return arr.sort((a, b) => (a === b)? 0 : a > b ? 1 : -1
  
//   );
// }
// console.log(sorting(tableau));


<<<<<<< HEAD








//Evaluation Javascript pour les groupes TB

//Exercice 1 - Calcul du nombre de jeunes, de moyens et de vieux

// const allH1 = document.querySelectorAll('h1');
// let SaisirAge =parseInt(prompt("veuillez rentrer un chiffre qui va représenter l'age une personne : "),10)
// let tableau = [100];
// let compteJeune = 0;
// let compteMoyen = 0;
// let compteVieux = 0;

// while(SaisirAge != 100) {
// if(SaisirAge > 0 && SaisirAge < 100){
//     tableau.push(SaisirAge);
// }
//     SaisirAge = parseInt(prompt("veuillez rentrer un chiffre qui va représenter l'age une personne : "))
// } 
// for(let i = 0; i <tableau.length; i++){
//     if(tableau[i] > 40 && tableau[i] <= 100){
//     compteVieux++;
// } else if(tableau[i] > 0 && tableau[i] < 20){
//     compteJeune++;
// }else if(tableau[i] >= 20 && tableau[i] <= 40){
//     compteMoyen++;
// }
// }


// allH1[0].innerText =allH1[0].textContent + compteJeune;
// allH1[1].innerText =allH1[1].textContent + compteMoyen;
// allH1[2].innerText =allH1[2].textContent + compteVieux;
// console.log(compteVieux +"v");
// console.log(compteJeune + "j");
// console.log(compteMoyen +"m");
// console.log(tableau);




//Exercice 2 : Table de multiplication

// let tableMultip = (num) => {
//     let i = 0;
//     let calcul = "";
//     do{
//    calcul +="<h1>" + i + " x " + num + " = " + i*num +"<br></h1>";
//         i++;
        
//     }while(i <= 10);
  
// return document.write(calcul);
// }
// console.log(tableMultip(6));
=======
//Exercice 3 : recherche d'un prénom
// const tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
// console.log(tab);
// let trouverPrenom = (arr) =>{
//    let prenom = prompt('entrez un prénom S,V,P');
  
//     let result = [];
//     if(arr.includes(prenom)){
  
//    arr.splice(arr.indexOf(prenom),1) ;
//       result = [...arr];
     
//       result.push(" ");
//       return result;
      
//     }else{
//      console.log(arr);
//      return   alert("le prenom que vous avez saisi n'existe pas !");
//     }
// }

// console.log(trouverPrenom(tab));


//Exercice 4 : total d'une commande


// let PU = parseInt(prompt(" le  prix unitaire :"),10);
// let QTECOM = parseInt(prompt(" la quantité commandée :"),10);


// let PAP = (prixU, QT ) => {
//     let prixPayer = 0;
//     let  REM = 0;
//     let  PORT = 6;
//     let ToT = 0;

//     ToT = prixU * QT;
//     if(ToT >= 100 && ToT <= 200){
//         REM = ToT * 5/100;
//         ToT -= REM;   
//     }else if(ToT > 200){
//         REM = ToT * 10/100;
//         ToT -= REM; 
//         if(ToT > 500){
//             PORT = 0;
//         }else if(ToT > 300){
//             PORT = ToT * 2/100;
           
//         }
//     }
// return prixPayer = ToT + PORT + " €";
// }
// console.log(PAP(600,1))
// console.log(PAP(501,1))
// console.log(PAP(100,2))
// console.log(PAP(3,1))


//Exercice 5 : vérification d'un formulaire


>>>>>>> 167e0576bf0cd4404da09a93fe9533b529554b96
