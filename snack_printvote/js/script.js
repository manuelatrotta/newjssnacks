alert('ola');

//funzione che esprime una votazione in stelle
//chiedere all'utente un voto da 1 a 10
var votoUtente = parseInt(prompt('inserisci una votazione da 1 a 10'));

function printVote (vote) {
  //voto si arrotonda con Math.round e si divide per due per avere da 1 a 5
  var vote = Math.round(votoUtente / 2);
  //ciclo da 1 a 5 e se il voto è maggiore di uno stampo una stella la somma delle stelle è data dalle singole stelle fino a 5
  var stars = '';
  for (var i = 1; i <= 5; i++) {
   if (i<=vote) {
     var singleStar = '★';
    }else {
      var singleStar = '☆';
    }
    stars = stars + singleStar;
  }
  return stars;
}

var vote = printVote(votoUtente);
console.log(vote);
