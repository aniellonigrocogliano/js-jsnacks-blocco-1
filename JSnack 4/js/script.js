const nameList = ["pippo", "paperino", "pluto", "aniello", "topolino", "paperone", "qui", "quo", "qua",]; // creo lista di invitati
let userName = prompt("Qual'è il tuo nome?"); // chiedo il nome all'utente
let flag = false; // creo la variabile flag impostandola falsa
for (let i = 0; i < nameList.length; i++) { // scorro l'itero array
    let nameCont = userName.toLowerCase(); // per evitare falsi negativi rendo il nome inserito dall'utente tutto in minuscolo
    if (nameList[i] === nameCont) { // controllo se il nome utente è nella lista
        flag = true; // se presente il nome in lista imposto flag a vero
        break; //blocco il ciclo avendo trovato il nome è inutile continuare
    }

}
if (flag) { // se flag è vero significa che il nome è stato trovato 
    document.getElementById("result").innerHTML = userName + " è invitato alla festa di Gatsby"; // stampo il risultato positivo
} else {
    document.getElementById("result").innerHTML = userName + " non è invitato alla festa di Gatsby"; // stampo il risultato negativo
}