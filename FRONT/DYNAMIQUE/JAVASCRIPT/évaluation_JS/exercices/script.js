
const textContentExercice1 = `Exercice 1 - Calcul du nombre de jeunes, de moyens et de vieux :
Il s'agit de dénombrer les personnes d'âge strictement inférieur à 20 ans, les personnes d'âge strictement supérieur à 40 ans et celles dont l'âge est compris entre 20 ans et 40 ans (20 ans et 40 ans y compris).

Le programme doit demander les âges successifs.

Le comptage est arrêté dès la saisie d'un centenaire. Le centenaire est compté.

Donnez le programme Javascript correspondant qui affiche les résultats.`;

const textContentExercice2 = `Exercice 2 : Table de multiplication
Ecrivez une fonction qui affiche une table de multiplication.

Votre fonction doit prendre un paramètre qui permet d'indiquer quelle table afficher.

Par exemple, TableMultiplication(7) doit afficher :

1 x 7 = 7
2 x 7 = 14
3 x 7 = 21 ...`;
const textContentExercice3 = `Exercice 3 : recherche d'un prénom
Un prénom est saisi au clavier. On le recherche dans le tableau tab donné ci-après.

Si le prénom est trouvé, on l'élimine du tableau en décalant les cases qui le suivent, et en mettant à blanc la dernière case. Si le prénom n'est pas trouvé un message d'erreur apparait et aucun prénom ne se supprime.

 var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
( exemple : ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", " "]; )`;
const textContentExercice4 = `Exercice 4 : total d'une commande
A partir de la saisie du prix unitaire noté PU d'un produit et de la quantité commandée QTECOM, afficher le prix à payer PAP, en détaillant la remise REM et le port PORT, sachant que :

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
const textContentExercice5 = `Exercice 5 : vérification d'un formulaire
Effectuez le contrôle de saisie de votre formulaire Jarditou en Javascript.

Lorsqu'une erreur est détectée, l'utilisateur doit en être informé grâce à l'affichage d'un message sous le champ concerné.

Le formulaire ne peut être envoyé que lorsque tout est bon.`

const allBtns = document.querySelectorAll('[data-btn]');
const textExercice = document.querySelector('h3')
const commence = document.querySelector('.commence');
const allH2 = document.querySelectorAll('h2');


// //Exercice 1 - Calcul du nombre de jeunes, de moyens et de vieux
function evaluationExercice1() {
    let SaisirAge = parseInt(prompt("veuillez rentrer un chiffre qui va représenter l'age une personne : "), 10)
    let tableauAge = [];
    let compteJeune = 0;
    let compteMoyen = 0;
    let compteVieux = 0;

    while (SaisirAge < 100) {
        if (SaisirAge > 0 && SaisirAge < 100) {
            tableauAge.push(SaisirAge);
        }
        SaisirAge = parseInt(prompt("veuillez rentrer un chiffre qui va représenter l'age une personne : "), 10)
    }
    for (let i = 0; i < tableauAge.length; i++) {
        if (tableauAge[i] > 40 && tableauAge[i] <= 100) {
            compteVieux++;
        } else if (tableauAge[i] > 0 && tableauAge[i] < 20) {
            compteJeune++;
        } else if (tableauAge[i] >= 20 && tableauAge[i] <= 40) {
            compteMoyen++;
        }
    }

    if (SaisirAge >= 100 && SaisirAge < 150) {
        tableauAge.push(SaisirAge);
        compteVieux++;
    }
    // let arr = [];
    // [...arr] = tableauAge.forEach(item => item.toString() + "ans");


    allH2[1].innerText = "la liste d'âge des personnes  :" + "[" + tableauAge + "] ans";
    allH2[2].innerText = "le nombre de jeunes est :" + compteJeune;
    allH2[3].innerText = "le nombre de moyens  est :" + compteMoyen;
    allH2[4].innerText = "le nombre de vieux est :" + compteVieux;

}
//Exercice 2 : Table de multiplication
let tableMultip = () => {
    let num = prompt("veuillez entrer un chiffre pour afficher sa  table de multiplication :");
    let i = 0;
    // if (allH2[4].textContent == "" || allH2[4].textContent == null) {
    do {
        allH2[4].innerText += + i + "   x   " + num + "   =   " + i * num + "\n";
        i++;

    } while (i <= 10);

    // allH2[4].style.fontSize = "18px";
    // }
    return allH2[4];
}
// //Exercice 3 : recherche d'un prénom
let recherchePrénom = () => {
    const tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
    console.log(tab);
    let trouverPrenom = (arr) => {
        let prenom = prompt('entrez un prénom S,V,P');

        let result = [];
        if (arr.includes(prenom)) {

            arr.splice(arr.indexOf(prenom), 1);
            result = [...arr];

            result.push("\"    \"");
            return allH2[4].innerText = result;

        } else {
            console.log(arr);
            return allH2[4].innerText = "le prenom que vous avez saisi n'existe pas !";
        }
    }
    console.log(trouverPrenom(tab));
}
// //Exercice 4 : total d'une commande
let totalCommande = () => {

    let PU = parseInt(prompt(" le  prix unitaire :"), 10);
    let QTECOM = parseInt(prompt(" la quantité commandée :"), 10);
    let prixPayer = 0;
    let REM = 0;
    let PORT = 6;
    let ToT = 0;

    ToT = QTECOM * PU;
    if (ToT >= 100 && ToT <= 200) {
        REM = ToT * 5 / 100;
        ToT -= REM;
    } else if (ToT > 200) {
        REM = ToT * 10 / 100;
        ToT -= REM;
        if (ToT > 500) {
            PORT = 0;
        } else if (ToT > 300) {
            PORT = ToT * 2 / 100;

        }
    }
    prixPayer = ToT + PORT + " €";
    allH2[2].innerText = "-le prix de la remise est = " + REM + " €";
    allH2[3].innerText = "-le prix de port est = " + PORT + " €";
    allH2[1].textContent = "-le prix unitaire est = " + PU + " €";
    allH2[0].textContent = "-la quantité commandée est = " + QTECOM + " unité";
    allH2[4].textContent = "=> le prix à payer est = " + prixPayer;


}







//sélectionner et insérer l'éxercice
let selectExercice = (select) => {
    textExercice.innerText = select;
    commence.innerHTML = "COMMENCER";
    commence.classList.add('commence-show');
    allH2.forEach(item => item.innerHTML = "")
}
allBtns.forEach(item => item.addEventListener("click", (e) => {

    if (e.target == allBtns[0]) {
       setInterval( selectExercice(textContentExercice1),3000);
    }
    if (e.target == allBtns[1]) {
        selectExercice(textContentExercice2);
    }
    if (e.target == allBtns[2]) {
        selectExercice(textContentExercice3);
    }
    if (e.target == allBtns[3]) {
        selectExercice(textContentExercice4);
    }
    if (e.target == allBtns[4]) {
        selectExercice(textContentExercice5);
    }
}));


commence.addEventListener('click', () => {

    if (textExercice.textContent.startsWith('Exercice 1')) {
        evaluationExercice1();

    }
    if (textExercice.textContent.startsWith('Exercice 2 :')) {
        allH2[4].textContent = "";
        tableMultip();
    }
    if (textExercice.textContent.startsWith('Exercice 3 :')) {
        recherchePrénom();
    }
    if (textExercice.textContent.startsWith('Exercice 4 :')) {
        totalCommande();
    }
    if (textExercice.textContent.startsWith('Exercice 5 :')) {
        const currentURL = window.location.toString();
        const formulaireURL = currentURL.replace('exercices/index.html', "contact.html");
        window.location.href = formulaireURL;
    }

})










































