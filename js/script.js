
var bombe = 5;
//var tentativi = 100;
var arrayNumeri = [1,2,3,4,5];
//funzione che genera un numero casuale tra 1 e 100
function numGenerator (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//funzione che dato un array e un numero mi controlla che il numero non sia già nell'array
function checkNumber (array, number){
  var numberFound = array.includes(number);
  return numberFound;
}
//creo variabile array che contiene i numeri bomba
var bombNumbers = [];
//ciclo che chiama la mia funzione di generazione dei numeri 16 volte  while(i<bombe)
var index = 0;
while (index<bombe) {
  var bombRandomNumber = numGenerator (1, 10);
  var bombCheckNumber = checkNumber (bombNumbers, bombRandomNumber);
  if (bombCheckNumber == true){
    bombRandomNumber = numGenerator (1, 10);
  }
  else{
    bombNumbers.push(bombRandomNumber);
  }
  index++;
}
console.log(bombNumbers);
    //check che il numero non sia duplicato
    //se non è duplicato, lo salvo nell'array bombe

//creo variabile array che contiene i numeri utente

//variabili booleana haPerso = false

//ciclo di 100-16 volte  //for(i=0; i<tentativi-bombe; i++)
  //prompt in cui chiedo all'utente un numero
  //check che il numero sia compreso tra 1 e 100
  //check che il numero non sia duplicato nell'array utente
  //se non è duplicato, salvo il numero nell'array utente
  //check che il numero non sia nell'array bomba
  //se il numero è nell'array bomba -> alert hai perso
      //alert con array utente .length -> numero di volte che l'utente ha inserito un numero corretto
      //haPerso = true;
      //esco dal ciclo

//controllo se haPerso è false
  //alert hai vinto
  //alert con array utente .length -> numero di volte che l'utente ha inserito un numero corretto
