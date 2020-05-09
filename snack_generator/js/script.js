alert('ola');

// Scrivi un generatore di frasi della Fortuna...
// ad ogni refresh della pagiuna comparirà una frase a caso tra un set di frasi
// Oggi troverai una cosa dimenticata
// Ciò che è fatto è fatto
// Il buon giorno si vede dal mattino

// Chi semina vento raccoglie tempesta


//array con frasi
var frase = [
  'Oggi sarà una bella giornata',
  'Ciò che è fatto è fatto',
  'Il buon giorno si vede dal mattino',
  'Chi semina vento raccoglie tempesta',
];
//funzione random numerica
//La funzione Math.ceil() ritorna il più piccolo intero più grande di o uguale a un dato numero.
//La funzione Math.floor() restituisce il numero intero, arrotondato per difetto, del numero passato come parametro.
function getRandomNumber(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random;
}
//richiamo function e passo come argomenti da 0 a lunghezza dell'array -1 visto che parte da 0
var numRand = getRandomNumber (0, frase.length - 1);
alert(frase[numRand]);
