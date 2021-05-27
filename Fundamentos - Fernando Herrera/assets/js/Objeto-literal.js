const personaje = {
    Nombre:"Carlos",
    Numero: 8095737775,
    Ciudad: "La Vega",
    Edad: 20,
    Estudiante: true,
    Padres: {
        Madre: "Gisell",
        Padre: "Jose"
    },
    Gustos:["Ciclismo", "MTB", "Juegos"]
};

//Aqui agregoi nueva clave 
personaje.Casado = false;

console.log(personaje);

console.log("Nombre: " + personaje.Nombre);

console.log("Nombre: " + personaje["Nombre"]);

console.log("Madre: " + personaje.Padres.Madre + " Padre: " + personaje.Padres.Padre);

console.log("Gustos: " + personaje.Gustos.length);

console.log("Gusto Favorito: " + personaje.Gustos[0]);

console.log(`Nombre: ${personaje.Nombre} Edad: ${personaje.Edad} Ciudad: ${personaje.Ciudad}`)

//Asi puedo borrar una clave de un Obejcto
delete personaje.Edad

//Asi puedo convertir un objecto en una Lista
const lista_Personaje = Object.entries(personaje)
console.log(lista_Personaje);

//personaje.Dinero=9999;

//Con este Metodo lo congelo el objecto en el momemnto que yo hice esta propiedad para que no lo puedan editar
Object.freeze(personaje);
//En este caso esta nueva palabra clave no se va ejecutar
personaje.Dinero=9999;
//No incluye los objectos dentro de los objecto, en ese caso un emtodo seria usar freeze para todos
personaje.Padres.Abuela="Socorro"

//Con este metodos obtengos los nombres de la clave de un Obejcto o diccionario
const propiedades = Object.getOwnPropertyNames(personaje);

//Con este metodo obtenemos solos los valores d eun objecto o diccioanrio
const valores = Object.values(personaje);

console.log({propiedades, valores})




//console.log(personaje);