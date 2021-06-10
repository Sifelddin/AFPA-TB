const exercice1 =  document.querySelector('[data-exercice1]');
const exercice2 =  document.querySelector('[data-exercice2]');
const exercice3 = document.querySelector('[data-exercice3]');
const exercice4 = document.querySelector('[data-exercice4]');
const result = document.querySelector('h1');

//Exercice 1 - Calcul du nombre de jeunes, de moyens et de vieux
exercice1.addEventListener("click", ()=>{


const allH1 = document.querySelectorAll('h1');
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


allH1[0].innerText =allH1[0].textContent + compteJeune;
allH1[1].innerText =allH1[1].textContent + compteMoyen;
allH1[2].innerText =allH1[2].textContent + compteVieux;
console.log(compteVieux +"v");
console.log(compteJeune + "j");
console.log(compteMoyen +"m");
console.log(tableau);
})








//Exercice 2 : Table de multiplication
exercice2.addEventListener("click", ()=>{

    

let tableMultip = (num) => {
    let i = 0;
    let calcul = "";
    do{
   calcul +="<h1>" + i + " x " + num + " = " + i*num +"<br></h1>";
        i++;
        
    }while(i <= 10);
  
return calcul;
}
console.log(tableMultip(6));

})









//Exercice 3 : recherche d'un prénom
exercice3.addEventListener("click",()=>{
    const tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
console.log(tab);
let trouverPrenom = (arr) =>{
   let prenom = prompt('entrez un prénom S,V,P');
  
    let result = [];
    if(arr.includes(prenom)){
  
   arr.splice(arr.indexOf(prenom),1) ;
      result = [...arr];
     
      result.push(" ");
      return result;
      
    }else{
     console.log(arr);
     return   alert("le prenom que vous avez saisi n'existe pas !");
    }
}
console.log(trouverPrenom(tab));

})














//Exercice 4 : total d'une commande

exercice4.addEventListener("click", ()=>{

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
    result.textContent = "le prix à payer est = " + PAP(PU, QTECOM);
    console.log(PAP(PU, QTECOM));
    console.log(PAP(600,1))
    console.log(PAP(501,1))
    console.log(PAP(100,2))
    console.log(PAP(3,1))
})

