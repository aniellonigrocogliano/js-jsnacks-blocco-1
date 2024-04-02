let userNum = 0; // creo la variabile numero utente a 0
let listNum = []; // creo array dove salvare le 4 cifre
let sum=0; // creo variabile somma
for (let i = 0; i < 1; i++) { // creo ciclo for per poter ripetere la richiesta del numero in caso di errore dell'utente
    userNum = parseInt(prompt("Inserisci un numero di 4 cifre")); // chiedo il numero all'utente
    if (isNaN(userNum) || userNum < 1 || (userNum.toString()).length != 4) { // verifico se realmente l'utente ha inserito un numero ed è maggiore di 0 ed è formato da 4 cifre
        alert("Non hai inserito un numero valido"); // se non ha inserito un numero coerente avviso dell'errore
        i--; // diminuisco di 1 il contatore per poter ripetere la richiesta del numero non valido
    } else { // in caso è un numero corretto proseguo
         listNum = (userNum.toString()).split(""); // trasformo il numero in stringa e salvo ogni carattere nell'array
         sum= parseInt(listNum[0])+parseInt(listNum[1])+parseInt(listNum[2])+parseInt(listNum[3]); // sommo ogni carattere, trasformandoli prima di nuovo in un numeri, 
        }
    
}
document.getElementById("result").innerHTML = "La somma delle cifre del numero " + userNum + " è: "+sum; //Stampo il risultato