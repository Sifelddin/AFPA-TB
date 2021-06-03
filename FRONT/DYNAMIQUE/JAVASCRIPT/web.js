
// function sommeMoyenneValsSaisi(){

//     let tableau = [];
//     let nomberValeurs = 0;
//     let somme = 0;
//     let moyenne = 0;
//     let saisirN = parseInt(window.prompt("saisissez un chiffre :"))
//     while(saisirN !== 0){
//         if(Number.isInteger(saisirN) ){
//             tableau.push(saisirN);
//         }
//         saisirN = parseInt(window.prompt("saisissez un chiffre :"))
// }
//     nomberValeurs = tableau.length;
//     for(let i = 0; i < nomberValeurs; i++){
//         somme += tableau[i];
//         moyenne = somme/nomberValeurs 
//     }
// return document.write("<h1>le nombre de valeurs saisies est : " + nomberValeurs + "<br> la somme est : "+ somme + "<br> la moyenne est : " + moyenne + "</h1>") ;
// }
//
// console.log(sommeMoyenneValsSaisi())






///JS 15 : Les évènements


// const btn = document.querySelector("button");

// btn.addEventListener("click",()=>{
//     alert("wow j'ai réussi")
// })


// const img = document.querySelector("img");

// img.addEventListener("mouseover",()=>{
//   console.log(img.src ="./jarditou_html_zip/images/jarditou_logo.jpg");
// })




// const textBox1 = document.getElementById('textBox1');
// const buttonVerifier = document.getElementById("button1") 
// const randomNum =Math.round(Math.random() * 10); 


// function verif(){
//     buttonVerifier.addEventListener("click",()=>{
//      let val = parseInt(textBox1.value,10 )
   
// if(val > randomNum){
//     alert("trop grand !");
//     textBox1.value="";
// }else if(val < randomNum){
//     alert("trop petit !");
//     textBox1.value ="";
// }else if(!Number.isInteger(val)){
//     alert("veuillez saisir un chiffre !")
//     textBox1.value="";
// }else{
//     alert("bravo!");
//     textBox1.value="";}

//  });
// }
// verif();
