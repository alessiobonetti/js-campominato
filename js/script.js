
var bombe = 16;
var tryNumber = 10;
//creo variabile array che contiene i numeri utent>
var arrayUserNumbers = [];
//funzione che genera un numero casuale tra 1 e 100
function numGenerator (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//funzione che dato un array e un numero mi controlla che il numero non sia già nell'array
function checkNumber (array, number){
  var i=0 ;
  var numberFound= false;
  while (i < array.length && numberFound == false){
    if (array[i] == number){
      numberFound = true;
    }
    i++ ;
  }
  return numberFound;
}
//creo variabile array che contiene i numeri bomba
var bombNumbers = [];
//ciclo che chiama la mia funzione di generazione dei numeri 16 volte  while(i<bombe)

while (bombNumbers.length<bombe) {
  var bombRandomNumber = numGenerator (1, 100);
  var bombCheckNumber = checkNumber (bombNumbers, bombRandomNumber);
  if (bombCheckNumber == false){
    bombNumbers.push(bombRandomNumber);
  }
}
console.log(bombNumbers);
    //check che il numero non sia duplicato
    //se non è duplicato, lo salvo nell'array bombe



//variabili boolean
var explodedBomb = false

//ciclo di 100-16 volte
  while (arrayUserNumbers.length < tryNumber && explodedBomb == false){
    var userNumber = parseInt(prompt("Inserisci un numero compreso tra 1 e 100"));
    // controllo inserimento
    if (isNaN(userNumber) || userNumber > 100 || userNumber < 1){
      alert("Attento hai inserito un numero errato");
    }
    else if (checkNumber(arrayUserNumbers, userNumber) == false){
      if (checkNumber(bombNumbers, userNumber) == true){
        explodedBomb = true;
      }
      else {
        arrayUserNumbers.push(userNumber);
      }
    }
  }
  console.log(arrayUserNumbers);

//Risulktato
if (explodedBomb==true){
  alert("Hai perso, hai vinto" + arrayUserNumbers.length + "volte in fila." );
}
else {
  alert("Congratulazioni hai finito il gioco");
}
