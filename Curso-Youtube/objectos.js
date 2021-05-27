//Aqui estoy construyendo un objecto
const mascota={
    nombre:'Rubi',
    raza:'Chihuhua',
    edad:20,
    vivo:true,
    gusto:['rojo','azul','amarillo']
} 

//Aqui agregamos una nueva propiedad
mascota.id=45


//console.log(mascota)
//console.log(mascota.gusto[0])

//Destruturing Onjects

//Si quiero sacar una variable de un objectos 

const{nombre,raza}=mascota

//console.log(nombre)

//Aqui constuyo un objectos con objectos dentros

const web={
    nombre:"Carlos Diaz",
    links:{
        pagina1:"pagina1",
        pagina2:"pagina2",
        pagina3:"pagina3",
        youtube:{
            links:"wwww.yotube.com",
            canal:"Carlos Diaz"
        }
    },
    edad:14
}

console.log(web.links.youtube.canal)

//Usando destruturing para sacar el valor a una variable
const {links,canal}=web.links.youtube
console.log(links)