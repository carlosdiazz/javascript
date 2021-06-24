/*
.forEach()se utiliza para ejecutar el mismo código en cada elemento de una matriz, pero no cambia la matriz y devuelve undefined.

.map() ejecuta el mismo código en cada elemento de una matriz y devuelve una nueva matriz con los elementos actualizados.

.filter() comprueba cada elemento en una matriz para ver si cumple con ciertos criterios y devuelve una nueva matriz con los elementos que devuelven veracidad para los criterios.

.findIndex()devuelve el índice del primer elemento de una matriz que satisface una condición en la función de devolución de llamada. Devuelve -1si ninguno de los elementos de la matriz satisface la condición.

.reduce() itera a través de una matriz y toma los valores de los elementos y devuelve un solo valor.
Todos los métodos de iterador toman una función de devolución de llamada que puede estar predefinida, una expresión de función o una función de flecha.


*/

carros={
    marca:'Tpyp',
    precio:23
}

console.log(carros)
console.log(carros.marca)
console.log(carros[0])
console.log(carros.keys('marca'))