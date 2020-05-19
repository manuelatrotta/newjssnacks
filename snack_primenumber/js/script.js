alert('ola');
// verifica se un numero è primo

var number = parseInt(prompt('inserisci un numero'));

//funzione per classificare un numero primo
function isPrime(num) {
  //esempio: 13 x 2 = 26 % 13 = 2 è primo!
  if(Math.pow(2,num) % num == 2) {
    alert('è un numero primo');
  } else{
    alert('non è un numero primo');
  }
}

var x = isPrime(number);

console.log(x);
