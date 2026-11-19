const prompt = require("prompt-sync")();
 
const contraseña = 1234;
let contraseñaingresada;
let intentos = 0;
 
do {
    contraseñaingresada = Number(prompt("ingresa tu contraseña"));
    if (isNaN(contraseñaingresada)) { //validacion de errores isNaN
        console.log("por favor ingresa un número");
        continue; // Salta a la siguiente iteración del bucle si no es un número
    }
    if (contraseñaingresada === contraseña){
        console.log ("contraseña correcta");
    } else {
        console.log ("contraseña incorrecta");
        intentos++;
    }
} while (contraseñaingresada !== contraseña && intentos < 3);{
    if (intentos === 3){
        console.log("cuenta bloqueada");
    }
}