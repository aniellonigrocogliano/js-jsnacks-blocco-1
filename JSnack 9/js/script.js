let sum = 0; //inizializzo variabile sum
for (let i = 1; i <=10; i++) {
    sum=sum+i; // ad ogni ciclo aggiungo il numero i
    
}
let media = sum/10; // divido per 10 per calcolare la media
document.getElementById("result").innerHTML = "La somma da 1 a 10 è: " + sum + " e la media è: " + media; // stampo il risultato di somma e media