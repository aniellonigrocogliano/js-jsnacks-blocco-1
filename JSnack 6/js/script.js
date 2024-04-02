const listNum = []; // creo un array per poter conservare tutti i cubi generati
let userNum = 0; // creo la variabile numero utente a 0
for (let i = 0; i < 1; i++) { // creo ciclo for per poter ripetere la richiesta del numero in caso di errore dell'utente
    userNum = parseInt(prompt("Inserisci un numero")); // chiedo il numero all'utente
    if (isNaN(userNum) || userNum < 1 ) { // verifico se realmente l'utente ha inserito un numero ed è maggiore di 0
        alert("Non hai inserito un numero valido"); // se non ha inserito un numero coerente avviso dell'errore
        i--; // diminuisco di 1 il contatore per poter ripetere la richiesta del numero non valido
    } else { // in caso è un numero corretto proseguo
        for (let y = 1; y <= userNum; y++) { // creo un ciclo for col numero di interazioni scelte dall'utente
            listNum.push(y*y*y); // inserisco il cubo in un array
            
        }
    }
}
let result = listNum.join(" - "); // creo una stringa con tutti i cubi
    document.getElementById("result").innerHTML = "I cubi dei primi " + userNum + " numeri sono: "+result; // stampo il risultato della lista dei cubi