/**
 * Dias de semanas abrimos a las 11,
 * Pero Los fines de semanas abrimos a las 9
 * ENTRA EN UN SITIO WEB, PARA CONSULTAR SI ESTAS ABIERTO HOY...
*/

const dias = {
    0:"Domingo",
    1:"Lunes",
    2:"Martes",
    3:"Miercoles",
    4:"Jueves",
    5:"Viernes",
    6:"Sabado"
}

const hoy = new Date().getDay();
const hora =new Date().getUTCHours()


const Estamos_open=(fecha, hora)=>{
    if((fecha === 0 && hora >= 9) || (fecha === 6 && hora >= 9)){
        return "Esta Abierto"
    }else{
        if((fecha === 1 && hora >= 11) || (fecha === 2 && hora >= 11) || (fecha === 3 && hora >= 11) || (fecha === 4 && hora >= 11) || (fecha === 5 && hora >= 11)){
            return "Esta Abierto"
        }else{
            return "Esta cerrado"
        }
    }
}

const Estamos_open2=(dia,hora)=>{
    if ((dia === 0 || dia === 6) && hora >=9){
        return `Estamos abierto hoy es el dia: ${dias[dia]} y son las: ${hora}`
    }else if((dia === 1 || dia === 2 || dia === 3 || dia === 4 || dia === 5 ) && hora>=11) {
        return `Estamos abierto hoy es el dia: ${dias[dia]} y son las: ${hora}`
    }else{
        return "Estamos cerrados"
    }
}

//con la fduncion includes, en una lsita estoy preguntando si un dato existe en ese arreglo
const Estamos_open3=(dia,hora)=>{
    if ([0,6].includes(dia) && hora >=9){
        return `Estamos abierto hoy es el dia: ${dias[dia]} y son las: ${hora}`
    }else if([1,2,3,4,5].includes(dia) && hora>=11) {
        return `Estamos abierto hoy es el dia: ${dias[dia]} y son las: ${hora}`
    }else{
        return "Estamos cerrados"
    }
}

console.log(Estamos_open2(hoy,hora))
console.log(Estamos_open2(hoy,hora))
console.log(Estamos_open2(hoy,hora))


//Operacion Termanaria
// Pongo una condicion a evaluar si es true me tomaras el valor que esta despues del ? si es false me tomara el valor que esta despues del :
const fin_de_semana = ([0,6].includes(0)) ? "Es fin de semana " : "No es fin de semana";

console.log(fin_de_semana)

const Estamos_open4 =(findesemana,hora)=>{
    if (([0,6].includes(findesemana) === true && hora >=9) || ([0,6].includes(findesemana) === false && hora >=11 )){
    return (`Estamos abiertossss hoy es :${dias[findesemana]} y son las :${hora}`)
}else{
    return("Estamos cerradoooo ")
}}

console.log(Estamos_open4(6,9))