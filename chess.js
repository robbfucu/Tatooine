var tablero = "";
var pares = "*O*O*O*O";
var impares = "*O*O*O*O";
var i = 1;
while (i <= 8) {
  if (i % 2 == 0) {
    console.log(pares);
  } else {
    console.log(impares);
  }
  var i = i + 1;
}