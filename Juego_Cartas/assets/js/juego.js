/**
 * 2C   =   2 de Clubs
 * 2D   =   2 de Diamands
 * 2H   =   2 de Hearts
 * 2S   =   2 de Spades
 */

//Pon a funcioanr la libreria con NodeJs


let deck = [];
const tipos = ["C","D","H","S"];
const letras =["A","J","K","Q"];

//Esta funcion crear un Deck con las 52 Cartas
const  crearDeack = () => {
    for(let i = 2 ; i<=10 ; i++){
        for (let j of tipos){
            deck.push(i+j);
        }
    }
    for (let letra of letras){
        for (let tipo of tipos){
            deck.push(letra+tipo);
        }
    }
    //Con esta funcion estoy desordenando una lista
    deck = _.shuffle ( deck );
    //console.log(deck)
    return deck
}

crearDeack()

//Esta funcion me permite tomar una carta
const pedirCarta = () => {
    
    if(deck.length === 0){
        throw "No hay carta en el Deck"
    }
    const carta = deck.pop()
    return carta;
}

//Aqui tomo el valor real de la carta
const valorCarta = (carta) => { 
    
    //Aqui tomo el primer valor del string, En el caso del 10 tomo el 1 y el 0 formando 10
    const valor = carta.substring(0,carta.length-1);
    
    //Si no es una letra me va a a devolver el valor * 1 para convertir el striong e numero, si es una letra y es A me duevuelve 11 en caso contrario me devuelve 10
    //Aqui evaluo si es una letra, y si es una letra y es a retorna 11 en caso contraio retorna 10, pero si desde el comeinzo es un numero me va a retornar le numero
    return (isNaN(valor))   ?
            ( valor === "A")? 11 : 10
            : valor * 1
}

