alert('ola');

//cercare un valore in array

var list = ['gianni', 'vittorio', 'eleonora', 'sandro', 'robin'];

var name = prompt('inserisci un nome');

//var presente = false;

for (var i = 0; i < list.length; i++) {
  var presente = list[i];
  if(name == presente) {
    presente = true;
    console.log('presente');
  }else {
    console.log('non sei presente');
  }
}
