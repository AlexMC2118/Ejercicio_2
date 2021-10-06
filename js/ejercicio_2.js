'use strict';

//console.log('Cargado');
//Comienzo del programa
let numero = prompt ('Introducir valor: ');
let suma = 0;
let contador = 0;
while(numero != undefined){ //repetimos hasta pulsar cancelar en el prompt
  while (numero < 0 && !Number.isInteger(numero) && numero == ''){ //comprobamos valores incorrectos
    if(numero < 0)
      alert ('El número debe ser positivo');
    else if (!Number.isInteger(numero))
      alert ('El número debe ser entero');

      numero = prompt ('Introducir valor: ');
  }
  suma = parseFloat(suma) + parseFloat(numero);
  contador++;
  numero = prompt ('Introducir nuevo valor: ');
}
let media = suma / contador;
console.log('Suma: '+suma);
console.log('Media: '+media.toFixed(3)); //toFixed viene de internet
