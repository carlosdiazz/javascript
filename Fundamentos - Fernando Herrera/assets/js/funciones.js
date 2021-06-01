
function Hola_Mundo(nombre){

    console.log(`Hola Mundo, tu nombre es: ${nombre}`);
    return "Nada";
}

const saludar = function(){
    console.log("hola Mundo");
}

const saludar_flecha = (nombre) => {
    console.log("Hola Flecha: " + nombre);
}

//Aqui mando una argumento igual sin parentesis
const saludar_flecha2 = nombre => {
    console.log("Hola Flecha: " + nombre);
}


//Funcion de sumar normal
const sumar=(a,b)=>{
    return (a+b);
}

//Funcion de flecha para sumar 
const sumar2=(a,b)=>a+b;

//Funcion de Numero aleatorio
const aleatorio=()=>{
    return Math.random(0,10);
}

const aleatorio2=()=>Math.random(0,10);


//Hola_Mundo()
//saludar_flecha("Carlos")
//saludar_flecha2("Jose")

//console.log(aleatorio2())

//Al poner 3 puntos me crea un arreglo [] con los diferentes datos que ingrese
const ImprimirNombres = (cantidad,...nombres) => {
    console.log(cantidad)
    console.log(nombres)
}

ImprimirNombres(4,"Carlos","Maria")