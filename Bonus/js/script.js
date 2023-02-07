// ESERCIZIO: Chiedere a Utente un Numero finchè non si ottiene una Lista di 10 Numeri Dispari. 
//            Alla fine stampare ogni Numero della Lista a console.

// 1. Creo array vuoto che sarà la Lista di Numeri Dispari
let numeriDispari = [];

// 2. Creo Ciclo While per chiedere a Utente di inserire un Numero, finchè non ho una Lista di 10 Numeri Dispari
while (numeriDispari.length < 10){
  // 2.1 - Richiesta Numero a Utente
  const numero = parseInt(prompt("Inserisci un numero intero ;)"));

  // 2.2 - Controllo che il Numero inserito sia effettivamento un Numero
  if ((isNaN(numero)) === false){

    // 2.3 - Calcolo resto per controllo Numero Dispari
    const resto = numero % 2;

    // 2.4 - Se il Numero è dispari, metto dentro la Lista
    if (resto === 1){
      numeriDispari.push(numero);
    }
  }
}

// 3. Stampo i Numeri della Lista a console (uno per volta)
for (let i=0; i < numeriDispari.length; i++){
  console.log("Il numero della Lista con Indice ", i, " è: ", numeriDispari[i]);
}

// BONUS: Mescolare elementi dell'Array in modo Random

// 1. Creo Array di supporto per la versione Random
let numeriDispariRandom = [];

// 2. Creo Ciclo While per essere sicura di creare un Array Random della stessa lunghezza di quello ordinato
while(numeriDispariRandom.length !== numeriDispari.length){
  
  // 2.1 - Creo Ciclo For pescare in modo randomico i numeri dell'Array Ordinato
  for (let i = 0; i < numeriDispari.length; i++){

    // 2.2 - Creo Indice in modo Random per pescare valore corrispondente da Array Ordinato
    const indiceRandom = Math.floor(Math.random() * (9 - 0 + 1) + 0);
    
    // 2.3 - Controllo che il valore non sia già presente nell'Array Random e lo inserisco
    if ( numeriDispariRandom.includes(numeriDispari[indiceRandom]) === false ){
      numeriDispariRandom.push(numeriDispari[indiceRandom]);
    }
  }
}

// 3. Stampo i valori dell'Array Random in console
for (let i=0; i < numeriDispariRandom.length; i++){
  console.log("Il numero della Lista Random con Indice ", i, " è: ", numeriDispariRandom[i]);
}
