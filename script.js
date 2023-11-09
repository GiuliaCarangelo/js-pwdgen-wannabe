let sum = 0; 

const firstValue = prompt('Scrivi qui sotto il tuo nome');
const secondValue = prompt('Scrivi qui sotto il tuo cognome');
const thirdValue = prompt('Scrivi qui sotto il tuo colore preferito');

sum = firstValue + secondValue + thirdValue;

document.getElementById("sumresult").innerHTML = "La tua password è stata generata con successo: " + sum;

