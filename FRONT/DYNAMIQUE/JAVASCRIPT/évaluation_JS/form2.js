//semect HTML elements avec d'autres variables 
const form = document.querySelector('form');
const nom = document.querySelector('#name');
const prenom = document.querySelector('.prenom');
const sexe = document.querySelectorAll('.input-radio');
const dateN = document.querySelector('.date');
const CP = document.getElementById('number');
const adresse = document.querySelector('.adresse');
const ville = document.querySelector('.ville');
const email = document.querySelector('.email');
const selects = document.querySelector('.sujet');
const checker = document.getElementById('accepter');
const errorsexe = document.querySelector('.error-sexe') ;
const regExMail= /^([A-Za-z]){1,}([0-9]+)?(\.)?(|\w+|\d+)?@[a-z]+\.[a-z]{1,4}$/;
const regExDate= /\d{4,}/;
const regNomPrenom = /^[a-zA-z]+$/
const todayDate = new Date().getFullYear();


//
let focus = (arg) =>{
    arg.addEventListener('blur',()=>{
        if(arg.value == "" || arg.value == null){
          arg.nextElementSibling.classList.add('errorWatch');
        }else{
            arg.nextElementSibling.classList.remove("errorWatch");
        }
    })
}





const addClass =(champ)=> {return champ.nextElementSibling.classList.add('errorWatch');}

const removeClass = (champ) => { return champ.nextElementSibling.classList.remove('errorWatch');}



//submit function avec toute les conditions pour submit le formulaire
form.addEventListener('submit',(e)=>{
   
    let messages = [];

    if(nom.value == "" || nom.value == null || regNomPrenom.test(nom.value) == false ){
        nom.nextElementSibling.textContent = "entrez un nom correcte S,V,P "
        messages.push(" le nom ");
        addClass(nom);
    }
    
    if(prenom.value == "" || prenom.value == null || regNomPrenom.test(prenom.value) == false){
        messages.push(" le prenom");
        prenom.nextElementSibling.textContent = "entrez le prenom S,V,P "
        addClass(prenom);
    }
    if(sexe[0].checked == false && sexe[1].checked == false){
      errorsexe.classList.add('errorWatch')
    }else{
        errorsexe.classList.remove('errorWatch');
    }
   
    if(dateN.value == "" || dateN.value == null || dateN.value.match(regExDate) > todayDate){
        messages.push(" la date de naissance")
        dateN.nextElementSibling.textContent = "entrez une date de naissance correcte  S,V,P";
        addClass(dateN);
       
    }
   
   if( CP.value == "" || CP.value == null || CP.value.length != 5 ){
        messages.push("Le Code postal");
        CP.nextElementSibling.textContent = "Le Code postal doit comporter 5 caractères numériques s,v,p."
       addClass(CP)
    }
   if(adresse.value == "" || adresse.value == null  ){
        messages.push("entrez votre adreese  s,v,p.");
        addClass(adresse);
        
    }
    if(ville.value == "" || ville.value == null){
        messages.push("La Ville doit comporter au moins 1 caractère.");
        addClass(ville)
    }
    if(email.value == "" || email.value == null || regExMail.test(email.value) == false  ){
        email.nextElementSibling.textContent =   "L'adresse e-mail doit être indiquée dans un format approprié.*"; 
        messages.push(" Email");
        addClass(email);
      
    }
    if(selects.value == "" || selects.value == null){
        messages.push('select un option');
        addClass(selects);
    }
    if(checker.checked == false ){
        messages.push("ce champ est obligatoir");
        addClass(checker);
    }else{
        removeClass(checker);
    }
    
    if(messages.length > 0){
        e.preventDefault()  
    }
    console.log(messages)
})

form.addEventListener("reset", () =>{
    removeClass(nom)
    removeClass(prenom)
    removeClass(dateN)
    removeClass(CP)
    removeClass(adresse)
    removeClass(ville)
    removeClass(email)
    removeClass(selects)
    errorsexe.classList.remove('errorWatch');
    removeClass(checker);   
  })

  
focus(nom);
focus(prenom);
focus(dateN);
focus(CP);
focus(adresse);
focus(ville);
focus(email);
focus(selects);