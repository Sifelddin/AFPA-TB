const exercice1 =  document.querySelector('[data-exercice1]');
const exercice2 =  document.querySelector('[data-exercice2]');
const exercice3 = document.querySelector('[data-exercice3]');
const exercice4 = document.querySelector('[data-exercice4]');
const textExercice= document.querySelector('h2')
const commence = document.querySelector('.commence');
const allH1 = document.querySelectorAll('h1');


//Exercice 1 - Calcul du nombre de jeunes, de moyens et de vieux
exercice1.addEventListener("click", ()=>{
textExercice.innerText = `Il s'agit de dénombrer les personnes d'âge strictement inférieur à 20 ans, les personnes d'âge strictement supérieur à 40 ans et celles dont l'âge est compris entre 20 ans et 40 ans (20 ans et 40 ans y compris).

 Le programme doit demander les âges successifs.

Le comptage est arrêté dès la saisie d'un centenaire. Le centenaire est compté.

Donnez le programme Javascript correspondant qui affiche les résultats.`
commence.innerHTML = "START";
commence.classList.add('commence-show');

commence.addEventListener('click', ()=>{


let SaisirAge =parseInt(prompt("veuillez rentrer un chiffre qui va représenter l'age une personne : "),10)
let tableau = [100];
let compteJeune = 0;
let compteMoyen = 0;
let compteVieux = 0;

while(SaisirAge != 100) {
if(SaisirAge > 0 && SaisirAge < 100){
    tableau.push(SaisirAge);
}
    SaisirAge = parseInt(prompt("veuillez rentrer un chiffre qui va représenter l'age une personne : "))
} 
for(let i = 0; i <tableau.length; i++){
    if(tableau[i] > 40 && tableau[i] <= 100){
    compteVieux++;
} else if(tableau[i] > 0 && tableau[i] < 20){
    compteJeune++;
}else if(tableau[i] >= 20 && tableau[i] <= 40){
    compteMoyen++;
}
}


allH1[0].innerText = "le nombre de jeunes est :" + compteJeune;
allH1[1].innerText ="le nombre de moyens  est :" + compteMoyen;
allH1[2].innerText ="le nombre de vieux est :" + compteVieux;
console.log(compteVieux +"v");
console.log(compteJeune + "j");
console.log(compteMoyen +"m");
console.log(tableau);
})
})








//Exercice 2 : Table de multiplication
exercice2.addEventListener("click", ()=>{

    textExercice.innerText = `Ecrivez une fonction qui affiche une table de multiplication.

    Votre fonction doit prendre un paramètre qui permet d'indiquer quelle table afficher.
    
    Par exemple, TableMultiplication(7) doit afficher :
    
    1 x 7 = 7
    
    2 x 7 = 14
    
    3 x 7 = 21 ...`
    commence.innerHTML = "START";
   commence.classList.add('commence-show');
    
commence.addEventListener('click', ()=>{

    
let tableMultip = (num) => {
    let i = 0;
  
    do{
   allH1[4].innerText += + i + " x " + num + " = " + i*num +"\n" ;
        i++;
        
    }while(i <= 10);
  
return allH1[4];
}
allH1[4].style.fontSize="20px";
let chiffre = prompt("veuillez entrer un chiffre pour afficher sa  table de multiplication :")
console.log(tableMultip(chiffre));


})

})









//Exercice 3 : recherche d'un prénom
exercice3.addEventListener("click",()=>{
    textExercice.innerText = `Un prénom est saisi au clavier. On le recherche dans le tableau tab donné ci-après.

    Si le prénom est trouvé, on l'élimine du tableau en décalant les cases qui le suivent, et en mettant à blanc la dernière case. Si le prénom n'est pas trouvé un message d'erreur apparait et aucun prénom ne se supprime.
    
     var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
    ( exemple : ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", " "]; )`
    commence.innerHTML = "START";
   commence.classList.add('commence-show');

    commence.addEventListener('click',()=>{
            const tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
console.log(tab);
let trouverPrenom = (arr) =>{
   let prenom = prompt('entrez un prénom S,V,P');
  
    let result = [];
    if(arr.includes(prenom)){
  
   arr.splice(arr.indexOf(prenom),1) ;
      result = [...arr];
     
      result.push("vide");
      return allH1[4].innerText =  result;
      
    }else{
     console.log(arr);
     return   allH1[4].innerText ="le prenom que vous avez saisi n'existe pas !";
    }
}
console.log(trouverPrenom(tab));
    })


})














//Exercice 4 : total d'une commande

exercice4.addEventListener("click", ()=>{
    textExercice.innerText = `A partir de la saisie du prix unitaire noté PU d'un produit et de la quantité commandée QTECOM, afficher le prix à payer PAP, en détaillant la remise REM et le port PORT, sachant que :

    TOT = ( PU * QTECOM )
    la remise est de 5% si TOT est compris entre 100 et 200 € et de 10% au-delà
    le port est gratuit si le prix des produits ( le total remisé ) est supérieur à 500 €. Dans le cas contraire, le port est de 2%
    la valeur minimale du port à payer est de 6 €
    Testez tous les cas possibles afin de vous assurez que votre script fonctionne.
    
    Ci-dessous, un jeu de tests :
    
    Saisir 600 € et quantité = 1 : remise 10% (-60 €) soit 540,00 et frais port = 0; à payer : 540 €
    Saisir 501 € et quantité = 1 : remise 10% (-50,1 €) soit 450,90 et frais port 2% (de 450,90 €) soit +9,01 € ; à payer : 450,90+9.01 = 459,91 €.
    Saisir 100 € et quantité = 2 : 200 € donc remise 5% soit 190 € et frais de port 2% soit 3,8 € mini 6 €; à payer : 190+6 = 196 €
    Saisir 3 € et quantité = 1 : remise 0, frais de port 2% soit 0.06 € donc le minimum de 6 € s'applique; à payer : 3+6 = 9 €`
    commence.innerHTML = "START";
   commence.classList.add('commence-show');

commence.addEventListener("click", ()=>{
  let PU = parseInt(prompt(" le  prix unitaire :"),10);
    let QTECOM = parseInt(prompt(" la quantité commandée :"),10);
    
    
    let PAP = (prixU, QT ) => {
        let prixPayer = 0;
        let  REM = 0;
        let  PORT = 6;
        let ToT = 0;
    
        ToT = prixU * QT;
        if(ToT >= 100 && ToT <= 200){
            REM = ToT * 5/100;
            ToT -= REM;   
        }else if(ToT > 200){
            REM = ToT * 10/100;
            ToT -= REM; 
            if(ToT > 500){
                PORT = 0;
            }else if(ToT > 300){
                PORT = ToT * 2/100;
               
            }
        }
    return prixPayer = ToT + PORT + " €";
    }
    allH1[4].textContent = "le prix à payer est = " + PAP(PU, QTECOM);
    console.log(PAP(PU, QTECOM));
    console.log(PAP(600,1))
    console.log(PAP(501,1))
    console.log(PAP(100,2))
    console.log(PAP(3,1))
})
  
})

