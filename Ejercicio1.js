// 1.	Realizar un programa que permita leer 2 números diferentes y nos diga cual es el mayor de los 2 números.


parar:
do{
    var num1 = parseInt(prompt("Ingrese el numero 1"));
    var num2 = parseInt(prompt("Ingrese el numero 2"));
    if(num1!==num2){
        console.log(comparacion(num1, num2));
        break parar;
    }
}while(true)

function comparacion(num1, num2){
    if(num1>num2){
        return `El numero 1: ${num1} es mayor que el numero 2: ${num2}`;
    }else{
        return `El numero 2: ${num2} es mayor que el numero 1: ${num1}`;
    }
} 



// parar:

// hacer{
// 	   var num1 = parseInt("Ingrese el numero 1"));
// 	   var num2 = parseInt("Ingrese el numero 2"));
// 	   if(num1!==num2)
// 	     {
//           consola. log(comparación(num1, num2));
// 		  romper parar;
// 	     }
//      }


// let _indexNumero = 0;

// let _arrayNumero = new Array(10);

// let menu = "";
// menu += "------------------------------------------------------------\n";
// menu += "--------------------- Menú Principal ---------------------\n"
// menu += "------------------------------------------------------------\n";
// menu += "\n";
// menu += "1. Agregar Numero Par\n";
// menu += "2. Agregar Numero Impar\n";
// menu += "4. Ver ver Numero Par\n";
// menu += "4. Ver ver Numero Impar\n";
// menu += "0. Salir";
// let opc;
// 		do{
// 			opc = parseInt(prompt(menu));
//             let Numero



