let result = ""; // creo una stringaper poter conservare tutte le potenze di due
let startNum = 1;
for (let i = 1; i < 1000; i++) { // creo un ciclo 
    startNum = startNum * 2;
    if (startNum > 1000) { // blocco il ciclo quando la potenza è maggiore di 1000
        break;
    }
    result += "2 elevato a " + i + " è uguale a " + startNum + `<br>`;

}
document.getElementById("result").innerHTML = result; // stampo il risultato della lista dei cubi