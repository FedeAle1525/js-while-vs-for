// ESERCIZIO: Chiedere a Utente un Numero finchè non si ottiene una Lista di 10 Numeri Dispari. 
//            Alla fine stampare ogni Numero della Lista a console.

// 1. Creo array vuoto che sarà la Lista di Numeri Dispari
let numeriDispari = [];

// 2. Creo Ciclo While per chiedere a Utente di inserire un Numero, finchè non ho una Lista di 10 Numeri Dispari
while (numeriDispari.length < 10){
  // 2.1 - Richiesta Numero a Utente
  const numero = parseInt(prompt("Inserisci un numero intero ;)"));

  // 2.2 - Controllo che il Numero inserito sia effettivamento un Numero e che non sia già incluso, 
          // cosi da avere tutti numeri diversi
  if ((isNaN(numero)) === false && numeriDispari.includes(numero) === false && numero >= 0){

    // 2.3 - Calcolo resto per controllo Numero Dispari
    const resto = numero % 2;

    // 2.4 - Se il Numero è dispari, metto dentro la Lista
    if (resto === 1){
      numeriDispari.push(numero);
    }
  }
}

// 3. Recupero Elemento HTML per scrivere la Lista di Numeri
const listaElement = document.getElementById("lista");

// 4. Stampo i Numeri della Lista a console e dentro Elemento HTML Lista (uno per volta)
for (let i=0; i < numeriDispari.length; i++){
  console.log("Il numero della Lista con Indice ", i, " è: ", numeriDispari[i]);
  listaElement.innerHTML += numeriDispari[i] + "  ";
}

// BONUS: Mescolare elementi dell'Array in modo Random

// 1. Recupero Pulsante "Random" e Elemento HTML in cui inserire Lista dei Numeri Randomizzata
const buttonRandomEl = document.getElementById("random");
const listaRandomEl = document.getElementById("lista-random");

// 2. Creo evento "click" sul Pulsante Random
buttonRandomEl.addEventListener("click", function(){

  // 3. Creo Array vuoto di supporto in cui inserire i Numeri Disperi in ordine Random e
        // svuoto contenuto HTML dell'elemento Lista per poi riempirlo ogni volta con il nuovo Array Randomizzato
  let numeriDispariRandom = [];
  listaRandomEl.innerHTML = "";

  // 4. Creo Ciclo While per essere sicura di creare un Array Random della stessa lunghezza di quello ordinato
  while(numeriDispariRandom.length !== numeriDispari.length){
  
    // 4.1 - Creo Indice in modo Random per pescare valore corrispondente da Array Ordinato
    const indiceRandom = Math.floor(Math.random() * (9 - 0 + 1) + 0);
      
    // 4.2 - Controllo che il valore non sia già presente nell'Array Random e lo inserisco
    if ( numeriDispariRandom.includes(numeriDispari[indiceRandom]) === false ){
      numeriDispariRandom.push(numeriDispari[indiceRandom]);
    }
  }

  // 5. Stampo i valori dell'Array Random in console
  for (let i=0; i < numeriDispariRandom.length; i++){
    console.log("Il numero della Lista Random con Indice ", i, " è: ", numeriDispariRandom[i]);
    listaRandomEl.innerHTML += numeriDispariRandom[i] + "  ";
  }

});