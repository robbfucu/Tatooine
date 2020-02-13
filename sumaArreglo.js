let limite = prompt('De cuantos numeros va a constituir el arreglo?');
let array = [];
  for(i=0; i<limite; i++){
    var arrayVal =+ prompt('Introduzca el valor '+i);
    array.push(arrayVal);
  }
console.log(array);
const reducer = (accumulator, currentValue) => accumulator + currentValue;
let suma = (array.reduce(reducer)); 
console.log(suma);
let promedio =suma/array.length;
console.log(promedio);