let nombre = prompt('Indique el nombre ')
let nota = parseFloat(prompt('Indiqueme la nota'));
let nota_promedio = 0;
contador = 0;
while (nota !=0){
  nota_promedio =  nota_promedio + nota
  nota = parseFloat(prompt('Indiqueme la nota'))
  contador = contador + 1
}

console.log('La nota promedio es ',nota_promedio/contador)