/* Escribe un programa que imprima todos los numeros del 1 al 100 con unas excepciones, cuando el numero sea divisible por 3 debe imprimir "Fizz" en lugar del numero, cuando el numero sea divisible por 5 y no por 3 debe imprimir "Buzz" y cuando en numero sea divisible por 3 y 5 debe imprimir "FizzBuzz" */


/* 
========================================== 
ALGORITMO

PARA contador desde 1 hasta 101

SI contador%3 = 0 Y contador%5 = 0
  Escribir ("FizzBuzz") 

SINO SI contador%3 = 0
  Escribir ("Fizz")

SINO SI contador%5 = 0
  Escribir ("Buzz")
  
SINO
  Escribir (i)

FIN SI

FIN PARA

FIN

========================================== 
*/

for (let i = 1; i < 101; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  }
  else if (i % 3 == 0) {
    console.log("Fizz");
  }  else if (i % 5 == 0) {
    console.log("Buzz");
  }   else {
    console.log(i);
  }
}
