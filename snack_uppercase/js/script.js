alert('ola');

//scagliona la parola e se ha vocali rendile maiuscole


var frase = 'ciao sono adelaide';

var vocali = ['a', 'e', 'i', 'o', 'u'];

var upper = '';


  for (var i = 0; i < frase.length; i++) {
    if(vocali.includes(frase[i])) {
      var maiuscole = frase[i].toUpperCase();
      var upper = upper + maiuscole;
    }
    else{
      var upper = upper + frase[i];
    }
  }
console.log(upper);
