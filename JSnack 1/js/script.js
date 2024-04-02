let userNum1 = prompt("Inserisci un numero");
let userNum2 = prompt("Inserisci un secondo numero");
console.log(userNum1);
console.log(userNum2);
let maxNum = "";
if (userNum1 > userNum2) {
    maxNum = "Il numero maggiore è " + userNum1;
} else if (userNum1 < userNum2) {
    maxNum = "Il numero maggiore è " + userNum2;
} else {
    maxNum = "I numeri sono uguali";
}
document.getElementById("result").innerHTML = maxNum;