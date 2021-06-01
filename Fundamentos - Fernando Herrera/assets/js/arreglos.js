let juegos =["Juego 1",
             "Juego 2",
             "Juego 3",
             "Juego 4",
             "Juego 5",
             "Juego 6"
            ]

            console.log(juegos[0][0])

//Saber cuantos elementos hay en un arreglo
//console.log(juegos.length)

//recorrer un elemento
juegos.forEach((elemento,indice,arr)=>{
    //console.log({elemento,indice,arr})
});

//Anadir un elemento al final
juegos.push("Juego 7")

//Anadir un elemento al inicio del arreglo
juegos.unshift("Juego antes del 0")

//Borrar el ultimo elemento y puedo regresarlo en una variable
const ultimo = juegos.pop()

//Aqui borro un elemento y puedo decir cuantos elementos quiero borrar despues de la posionj que selecione, y retornor un nuevo arreglo
let JuegosBorrados = juegos.splice(0,2)


//Saber posicon de un objecto
let DondeEstaElJuego=juegos.indexOf("Juego 5")

//console.log(DondeEstaElJuego)


//console.log(JuegosBorrados)

//console.log(ultimo)
//console.log("ok "+juegos)

//Ejemplos de Lista

const frutas = ["Manzana","Pera","limon"]

//Si quiero crear un nuevo arreglo en memoria con un arreglo existente lo hago de la siguiente manera
const otraFrutas = [...frutas];

//Con ese metodo tambien puedo crear otro arreglo en memoria
const otraFrutas2 = frutas.slice();



//Aqui agrego un elemneto a la lista
otraFrutas.push("Pina")
otraFrutas2.push("Aguacate","Melon")

console.table({frutas,otraFrutas,otraFrutas2})