const listNum = [];
let userNum = 0; // creo la variabile numero utente a 0
for (let i = 1; i < 7; i++) { // creo ciclo for per 10 iterazioni (inizio da 1 per poter inserire nel prompt quale numero sta inserendo esempio il primo il secondo e via dicendo.)
    userNum = parseInt(prompt("Inserisci il " + i + "° un numero")); // chiedo il numero all'utente
    if (isNaN(userNum)) { // verifico se realmente l'utente ha inserito un numero
        alert("Non hai inserito un numero valido"); // se non ha inserito un numero avvisso dell'errore
        i--; // diminuisco di 1 il contatore per poter ripetere la richiesta del numero non valido
    } else { // in caso è un numero corretto proseguo con la verifica
        if (userNum % 2 != 0) { // verifico se il numero è dispari
            listNum.push(userNum); // se dispari lo inserisco nell'array
        }
    }
}

if (listNum.length === 0) { // verifico se esiste almeno un numero dispari
    document.getElementById("result").innerHTML = "Non ci sono numeri dispari"; //  se non c'è nessun numero dispari stampo il risultato che non ci sono numeri dispari
} else {
    let result = listNum.join(" - "); // creo una stringa con tutti i numeri dispari
    document.getElementById("result").innerHTML = "I numeri dispari sono: " + result; // stampo il risultato della lista di numeri dispari
}