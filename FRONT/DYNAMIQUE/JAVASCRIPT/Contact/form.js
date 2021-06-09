const societe = document.getElementById('soci');
const persoContact = document.getElementById('percontact');
const codeP = document.getElementById('CP');
const ville = document.getElementById("ville");
const email = document.getElementById("email");
const form = document.getElementById("form");
const select = document.getElementById('Sujet');
const textarea = document.getElementById('textarea');
const telephone = document.getElementById('tel');

form.addEventListener('submit',(e)=>{
   
    let messages = [];
    if(societe.value == "" || societe.value == null){
        messages.push("entrez le nom de la société s,v,p");
    }
    
    if(persoContact.value == "" || persoContact.value == null){
        messages.push("entrez le nom de la personne à contacter s,v,p");
    }
   
   if(codeP.value.length < 5  ){
        messages.push("Le Code postal doit comporter 5 caractères numériques s,v,p.");
    }
   if(telephone.value.length < 10  ){
        messages.push("Le numéro de telephone doit comporter 10 caractères numériques s,v,p.");
        
    }
    if(ville.value == "" || ville.value == null){
        messages.push("La Ville doit comporter au moins 1 caractère.");
    }
    if(email.value == "" || email.value == null || email.value.indexOf('@') == -1 ){
        messages.push("Le Email doit comporter au moins le caractère @.");
    }
    if(select.value != "" || select.value != null){
        textarea.value = select.value + "," + textarea.value;
    }
    
    if(messages.length > 0){
     alert(messages.join(", "))
        e.preventDefault()
        
    }

})