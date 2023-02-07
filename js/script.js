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

// 3. Stampo i Numeri della Lista a console (uno per volta)
for (let i=0; i < numeriDispari.length; i++){
  console.log("Il numero della Lista con Indice ", i, " è: ", numeriDispari[i]);
}