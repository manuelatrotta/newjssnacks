alert('ola');

//somma i numeri dispari presenti nell'array

var array = [1,2,3,4,5,6,7,8,9];
var sum = 0;

for (var i = 0; i < array.length; i++) {
  if(array[i] % 2 != 0) {
    sum = sum + array[i];
    console.log(sum); //somma progressiva dei soli valori dispari
  }
}
