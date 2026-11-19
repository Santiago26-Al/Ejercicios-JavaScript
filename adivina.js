const promt = require("prompt-sync")();
Math.floor(Math.random() * 10)+ 1;
let respuestausuario;
do {
    respuestausuario= Number(promt("Adivina un numero del 1 al 10: "));
    if (respuestausuario < numeroadivina){
        console.log("el numero es mayor");
    } else if (respuestausuario > numeroadivina){
        console.log("El numero es menor");
    }  
} while ( respuestausuario !== numeroadivina);
 
console.log("Adivinaste!!!");
 