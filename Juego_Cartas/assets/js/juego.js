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

let puntosJugador = 0;
let puntosComputadora = 0 ;

//Referencias del HTML
const btnPedir = document.querySelector("#BtnPedir");

const btnDetener = document.querySelector("#BtnDetener");

const btnNuevo = document.querySelector("#BtnNuevo");

const puntoss = document.querySelectorAll('small')

const CartaJugador = document.querySelector('#jugador-carta')

const CartaComputadora = document.querySelector('#computadora-carta')


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


//Turno de la Computadora 

const turnoComputadora = (puntosMinimo) =>{

    do{
        const carta = pedirCarta();
        puntosComputadora = puntosComputadora + valorCarta(carta);
        console.log(puntosComputadora);
        puntoss[1].innerText = puntosComputadora
    
        const imgCarta = document.createElement('img');
        imgCarta.src=`assets/img/cartas/${carta}.png`
        imgCarta.classList.add('carta')
        CartaComputadora.append(imgCarta)


        if (puntosMinimo > 21){
            break;
        }

    }while( (puntosMinimo < 21) && (puntosComputadora < puntosMinimo)  );

    setTimeout(() => {
        if ( puntosComputadora === puntosMinimo ){
            alert("Nadie Gano");
            console.log("nadie Gana");
        }else if (puntosMinimo > 21){
            alert("Computadora Gana")
            console.log("Nadie Gana")
        }else if(puntosComputadora > 21){
            alert("Jugador Gana")
            console.log("Jugador Gana")
        }else if (puntosMinimo<puntosComputadora){
            alert("Computadora Gano")
            console.log("PC gano")
        }        
    }, 10);


    

}


//Eventos

btnPedir.addEventListener('click', ()=>{
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    console.log(puntosJugador);
    puntoss[0].innerText = puntosJugador

    const imgCarta = document.createElement('img');
    imgCarta.src=`assets/img/cartas/${carta}.png`
    imgCarta.classList.add('carta')
    CartaJugador.append(imgCarta)

    if(puntosJugador>21){
        //Aqui desahabilito el boton si paso de 21
        btnPedir.disabled=true;
        btnDetener.disabled=true;
        turnoComputadora(puntosJugador)
    }else if(puntosJugador === 21){
        btnPedir.disabled=true;
    }
});

btnDetener.addEventListener('click',()=>{
    btnPedir.disabled=true;
    btnDetener.disabled=true;
    turnoComputadora(puntosJugador);
})

btnNuevo.addEventListener('click',()=>{
    console.clear()
    btnPedir.disabled=false;
    btnDetener.disabled=false;
    deck=[]
    crearDeack()
    puntosComputadora=0
    puntosJugador=0
    puntoss[0].innerText = puntosJugador
    puntoss[1].innerText = puntosComputadora
    CartaComputadora.innerHTML=''
    CartaJugador.innerHTML=''

})

console.log(deck)