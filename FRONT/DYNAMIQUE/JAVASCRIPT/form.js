const societe = document.getElementById('soci');
const persoContact = document.getElementById('percontact');
const codeP = document.getElementById('CP');
const ville = document.getElementById("ville");
const email = document.getElementById("email");
const form = document.getElementById("form");
const select = document.getElementById('Sujet');
const textarea = document.getElementById('textarea');
console.log(select.childNodes);
form.addEventListener('submit',(e)=>{
    let messages = [];
    if(societe.value == "" || societe.value == null){
        messages.push("La Société doit comporter au moins 1 caractère.");
    }
    
    if(persoContact.value == "" || persoContact.value == null){
        messages.push("La Personne à contacter doit comporter au moins 1 caractère.");
    }
   
   if(codeP.value.length < 5  ){
        messages.push("Le Code postal doit comporter 5 caractères numériques.");
    }
    if(ville.value == "" || ville.value == null){
        messages.push("La Ville doit comporter au moins 1 caractère.");
    }
    if(email.value == "" || email.value == null || email.value.indexOf('@') == -1 ){
        messages.push("Le Email doit comporter au moins le caractère @.");
    }
    
    if(messages.length > 0){
     alert(messages.join(", "))
        e.preventDefault()
        
    }

})