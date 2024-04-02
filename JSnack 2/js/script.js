let userWord1 = prompt("Inserisci una parola");
let userWord2 = prompt("Inserisci una seconda parola");
if (userWord1.length > userWord2.length) {
    console.log(userWord2);
    console.log(userWord1);

} else if (userWord1.length < userWord2.length) {

    console.log(userWord1);
    console.log(userWord2);
} else {
    console.log("le parole son uguali");
    console.log(userWord1);
    console.log(userWord2);
}


