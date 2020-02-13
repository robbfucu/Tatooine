/* 
========================================== 
INICIO ALGORITMO
VARIABLE ARREGLO: [1,2,3,4,5,6,7,8,9,10]
VARIABLE TOTAL : 0
PARA CONTADOR DESDE 0 HASTA CAPACIDAD ARREGLO INCREMENTO EN 2
  TOTAL += CONTADOR
FIN PARA
IMPRIMIR TOTAL
FIN ALGORITMO
========================================== 
*/
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total = 0;
for (let i = 0; i <= array.length; i=i+2) {
  total += i;
}
console.log(total);
