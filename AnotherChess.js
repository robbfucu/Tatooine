/* 
========================================== 
INICIO ALGORITMO
VARIABLE SIZE = 8
VARIABLE CHESS = ""
PARA CONTADOR DESDE 1 HASTA SIZE
  PARA CONTADOR 2 DESDE 1 HASTA SIZE
    SI (CONTADOR 1 + CONTADOR 2)%2 == 0
      CHESS+="O"
    SI NO
      CHESS +="X"
    FIN SI
  FIN PARA
  TABLERO =+"\n"
FIN PARA
IMPRIMIR CHESS
FIN ALGORITMO
========================================== 
*/

let size = 8;
let chess = "";

for(let i=1; i<=size; i++){
  for(let x=1; x<=size; x++){
    if((i+x)%2==0){
      chess+="O"; 
    }
    else{
      chess+="X";
    }
  }
  chess+="\n"
}
console.log(chess);