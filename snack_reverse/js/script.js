alert('ola');

//scrivi la parola data al rovescio

var parolaDaRovesciare = prompt('inserire una parola')

function reverse(parola) {
 var contrario ='';
  for (i=parola.length -1; i>=0; i--) {
    var contrario = contrario + parola[i]
  }
  return contrario;
}

var rovesciata = reverse(parolaDaRovesciare);

console.log(rovesciata);
