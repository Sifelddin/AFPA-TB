const form = document.querySelector('form');
const name_name = document.querySelector('#name');
const prename = document.querySelector('.prenom');
const sexe = document.querySelectorAll('.input-radio');
const dateN = document.querySelector('.date');
const CP = document.getElementById('number');
const adresse = document.querySelector('.adresse');
const ville = document.querySelector('.ville');
const email = document.querySelector('.email');
const selects = document.querySelector('.sujet');
const checker = document.getElementById('accepter');
const errorsexe = document.querySelector('.error-sexe') ;
const regExMail= /([A-Z]{1,})\.?(\w{1,})?(\d{1,})?@([A-Z]{1,})\.[a-z]{1,}/gi;
const regExDate= /\d{4,}/g;
const todayDate = new Date().getFullYear();



let focus = (arg) =>{
    arg.addEventListener('blur',()=>{
        if(arg.value == "" || arg.value == null){
           console.log(arg.nextElementSibling.classList.add('errorWatch'))
        }
    })
}

focus(name_name);
focus(prename);
focus(dateN);
focus(CP);
focus(adresse);
focus(ville);
focus(email);
focus(selects);



const addClass =(arg)=>{
  return  arg.nextElementSibling.classList.add('errorWatch')
}

form.addEventListener('submit',(e)=>{
   
    let messages = [];

    if(name_name.value == "" || name_name.value == null){
        messages.push("entrez le nom  s,v,p");
        addClass(name_name);
    }
    
    if(prename.value == "" || prename.value == null){
        messages.push("entrez le prenom s,v,p");
        addClass(prename);
    }
    if(sexe[0].checked == false && sexe[1].checked == false){
      errorsexe.classList.add('errorWatch')
    }
   
    if(dateN.value == "" || dateN.value == null){
        messages.push("entrez la date de naissance")
        addClass(dateN);
    }else if(dateN.value.match(regExDate) > todayDate){
        messages.push('correct date de naissance svp');
        dateN.nextElementSibling.textContent = "entrez la correct date de naissance S,V,P";
        addClass(dateN);
    }
   
   if( CP.value == "" || CP.value == null){
        messages.push("Le Code postal doit comporter 5 caractères numériques s,v,p.");
       addClass(CP);
    }else if(CP.value.length < 5 ){
        messages.push("Le Code postal doit comporter 5 caractères numériques s,v,p.");
        CP.nextElementSibling.textContent = "Le Code postal doit comporter minimum 5 caractères numériques s,v,p.*" ;
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
    if(email.value == "" || email.value == null  ){
        messages.push("Le Email doit comporter au moins le caractère @.");
        addClass(email);
    }else if(!regExMail.test(email.value)){
       messages.push("email corect") ;
       email.nextElementSibling.textContent =   "L'adresse e-mail doit être indiquée dans un format approprié.*" 
       addClass(email);
    }
    if(selects.value == "" || selects.value == null){
        messages.push('select un option');
        addClass(selects);
    }
    if(checker.checked == false ){
        messages.push("ce champ est obligatoir");
        addClass(checker);
    }
    
    if(messages.length > 0){
    
        e.preventDefault()
        
    }

})

