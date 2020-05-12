//scrivi una funzione che calcoli la media aritmetica

var array = [2,3,4];

function media (a) {
  var s = 0;
  for (var i = 0; i < a.length; i++) {
    s = s + a[i];
  }
  return (s / a.length);
}

var x = media(array);

console.log(x);
