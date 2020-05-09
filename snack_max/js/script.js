alert('ola');

//stampa il numero massimo presente
//Math.max trova il valore massimo
//Il metodo apply() chiama una funzione passandole il "this" ed i parametri forniti sottoforma di array (o array-like object).

var array = [1,2,3,22,59,69,79,222];

function getMaxOfArray(array) {
  return Math.max.apply(null, array);
}

console.log(Math.max.apply(null, array));//222 // -infinity senza null
