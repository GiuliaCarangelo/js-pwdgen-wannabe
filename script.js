let sum = 0; 

const firstNum = prompt('Scrivi qui sotto il tuo nome');
const secondNum = prompt('Scrivi qui sotto il tuo cognome');
const thirdNum = prompt('Scrivi qui sotto il tuo colore preferito');

sum = firstNum + secondNum + thirdNum;

document.getElementById("sumresult").innerHTML = "La tua password è stata generata con successo: " + sum;

