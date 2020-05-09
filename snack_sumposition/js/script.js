alert('ola');

//somma in posizione pari

var numeri = [1,2,3,4,5,6,7,8,9,10];

var somma = 0;

for (var i = 0; i < numeri.length; i++) {
  if(i % 2 == 0) {
    var somma = somma + numeri[i];
    console.log(somma);//risultato 1, 4, 9, 16, 25 
  }
}
