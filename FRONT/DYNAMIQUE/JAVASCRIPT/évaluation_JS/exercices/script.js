const exercice3 = document.querySelector('[data-exercice3]');
const exercice4 = document.querySelector('[data-exercice4]');
const result = document.querySelector('h1');


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

