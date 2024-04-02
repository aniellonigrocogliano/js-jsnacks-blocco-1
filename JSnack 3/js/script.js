let sum = 0; // creo la variabile somma a 0
let userNum = 0; // creo la variabile numero utente a 0
for (let i = 1; i < 11; i++) { // creo ciclo for per 10 iterazioni (inizio da 1 per poter inserire nel prompt quale numero sta inserendo esempio il primo il secondo e via dicendo.)
    userNum = parseInt(prompt("Inserisci il " + i + "° un numero")); // chiedo il numero all'utente
    if (isNaN(userNum)) { // verifico se realmente l'utente ha inserito un numero
        alert("Non hai inserito un numero valido"); // se non ha inserito un numero avvisso dell'errore
        i--; // diminuisco di 1 il contatore per poter ripetere la richiesta del numero non valido
    } else { // in caso è un numero corretto aggiungo il numero utente alla somma
        sum = sum + userNum;
    }
}

console.log(sum);
document.getElementById("result").innerHTML = "La somma dei numeri inserito è " + sum; // stampo il risultato