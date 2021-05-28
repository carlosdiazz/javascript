//Funciones

//Esta dos funciones hacen lo mismo pero con una sintaxis diferente
const CrearPersona=(nombre,apellido)=>{
    return{
        nombre: nombre,
        apellido: apellido
    }
}

//Esta funcion me devuelve un objecto con lo que esta dentro de los parentesis
const CrearPersona2=(nombre,apellido)=>({nombre,apellido})

const Carlos=CrearPersona("Carlos","Diaz")
const Carlos2=CrearPersona2("Carlos","Diaz")

//console.log(Carlos2)
//console.log(Carlos)


//Funcion para imprimir argumentos
//Al yo poner ... antes de la variable se crea un arreglos con los numeros que ingrese, y la variable Rest
const ImprimirGustos =(Nombres,...Gustos)=>{
    console.log(Nombres,Gustos);
}
//ImprimirGustos("Carlos",false,34,23,"gfgfd")

//Una funcion apra sacar promedios de un areglo
const Promedio=(...numeros)=>{
    prome = numeros.length
    inicio = 0
    numeros.forEach(function(a){inicio += a;});
    return inicio/prome
}
//console.log(Promedio(10,20))
//console.log(Promedio(10,20,15,17,156,14,1,0,87,15,74,89,54,65,23))


//Metodo, para sacar variables de un arreglo
const colores=["Azul","Rojo","Verde","Morado","Amarillo"]

const[Color1,Color2,Color3]=colores


//Metodo para scar variable de un objecto

const Jose={
    Nombre:"Jose",
    Apellido:"DIaz",
    Edad:20,
    Estudiante:true,
    Gustos:["MTB","PC","TECNOLOGIA"],
    Padres:{
        Madre: "Gisell",
        Padre: "Jose Carlos"
    }
}

// Aqui puedo sacar una variable de un objecto, con el nombre del mismo objecto, en este caso se crea una variable edad con el mismo valor del objecto

//Al colocar : luego de la variable en esta constante, la variable se va a llamar con el nuevo nombre que le pongamos
const {Edad, Estudiante: EstudianteActivo}=Jose



//Extraer valores de un objecto, con esta funcion, solo saco cierto valores que llame comoparametros

const ImprimirPropiedades = ({Estudiante,Edad,Apellido,Nombre})=>{
    console.log({Estudiante});
    console.log({Edad});
    console.log({Apellido});
    console.log({Nombre});
}

ImprimirPropiedades(Jose);