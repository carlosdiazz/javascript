const a = 12;

if(a<10){
    console.log(`El numero ${a} es menor que 10`)
}else{
    console.log(`El numero ${a} es mayor que 10`)
}

//Este objecto me indica l,a fecha de hoy
const hoy = new Date();

//Con esta opcion me dice que dia es 0: Domingo, 1:Lunes, 2:Martes
const dia = hoy.getDay()
const ano = hoy.getFullYear()

//Si pongo solo tres === el tipo de datos debe ser igual ya sea int o st
if(dia === 0){
    console.log("Hoy es Domingo")
}else if (dia === 1) {
    console.log("Hoy es Lunes")
}else if (dia === 2) {
    console.log("Hoy es Martes")
}else if (dia === 3) {
    console.log("Hoy es Miercoles")
}else if (dia === 4) {
    console.log("Hoy es Jueves")
}

//Si pongo solo dos == el tipo de datos puede ser iguales ya sea string o int
if(dia == "0"){
    console.log("Hoy es Domingo")
}else{
    console.log("Hoy no es Domingo")
}


const dias = {
    0:"Domingo",
    1:"Lunes",
    2:"Martes",
    3:"Miercoles",
    4:"Jueves",
    5:"Viernes",
    6:"Sabado"
}
console.log(`Hoy es: ${dias[55] || " "} del ano ${ano} `);