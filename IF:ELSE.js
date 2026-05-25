//Valor dentro de rango

let minimo = 0;
let maximo = 5;
let dato = 9;

//revisar si esta en rango

let dentroRango = dato >= minimo && dato <= maximo;
console.log('Valor dentro rango:', dentroRango);

if (dato >= minimo && dato <= maximo) {
  console.log('Valor' + ' ' + dato + ' ' + 'dentro del rango');
} else console.log('Valor' + ' ' + dato + ' ' + 'Fuera del rango');
