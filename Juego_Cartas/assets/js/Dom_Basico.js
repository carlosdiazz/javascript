//Esto codigo dolo funciona en la consla del navegador porque estoy interactuando con el Dom HTML directamente

//Cuando uso querySelector solo cambio el primer elemento que sea igual, si pongo querySelectorall cambio todo lso elkemtnos que cumplan la condicion

//Con esta linea puedo cambiar una etiquita HTMl por otra y mandar html directo
document.querySelector('header').innerHTML = "<b>Hola</b>"

//Con esta puedo cambiar el texto de un html
document.querySelector('header').innerText = "Hola"

//Con este puedo cambair toda una imagen 
document.querySelector('img').src = "imagenn/ghh/hd" //Daqui pongo la direccion de la imagen

//Aqui guardo en una variable el elemnto a buscar o cambiar
const carta = document.querySelector("#carta");

// Y puedo cambiar el vlaor de la siguiente manera
carta.innerHTML =<b>Otrra carta</b>



//Una manera de agregar un elemnto al Dom

// Primero voy a crear una variable del div que quiero editar
const divBotones = document.querySelector("#botones");

//Creo el boton
const BotonNuevo = document.createElement('button');

//Aqui agrego el nuevo boton a la variable
divBotones.append(BotonNuevo)

//Aqui agrego letra 
BotonNuevo.innerText="Boton Nuevo"

//Aqui agrego una clase al boton o a la variable
BotonNuevo.classList.add('btn')
BotonNuevo.classList.add('btn-succes')