
const colores = ["Rojo", "Azul", "Verde", "Maranja", "Amarillo", "Negro", "Blanco"]

//For Tradicional
for( let i=0;i<colores.length ;i++){
    console.log(colores[i])
}


console.log("--------")
//For In
for (let i in colores){
    console.log(colores[i])
}

console.log("--------")
//For Off, hace que el vlaor que obtenga la variable se lo asigna
for(let color of colores){
    console.log(color)
}