//@ts-check

const nume_ale=()=>{
    let nume=Math.floor(Math.random()*100)
    if(nume<10){
        return `0${nume}`
    }else{
        return String(nume)
    }
};

const mensaje ={

    _obj:{
        quinielas : {},
        pales : {},
        tripleta: {}
    },

    obtener_jugada(jugada){
        if(jugada===1){
            return [nume_ale()]
        }else if(jugada === 2){
            return [nume_ale(),nume_ale()]
        }else{
            return [nume_ale(),nume_ale(),nume_ale()]
        };
    },

    jugar_jugada(jugada){
        return [jugada,jugada.length]
    },

    comprobar_jugada(arr){
        let numero =arr[0];
        let jugada =arr[1];

        if(jugada===1){
            if(this._obj.quinielas.hasOwnProperty(numero)){
                this._obj.quinielas[numero]++;
            }else{
                this._obj.quinielas[numero]=1;
            };
        }else if(jugada===2){
            if(this._obj.pales.hasOwnProperty(numero)){
                this._obj.pales[numero]++;
            }else{
                this._obj.pales[numero]=1;
            };
        }else{
            if(this._obj.tripleta.hasOwnProperty(numero)){
                this._obj.tripleta[numero]++;
            }else{
                this._obj.tripleta[numero]=1;
            };
        }
    },

    imprimir_jugada(arr){
        let nume=arr[0];
        let jugada=arr[1];

        if(jugada===1){
            console.log(`Tu Quiniela es : ${nume}`)
        }else if(jugada===2){
            console.log(`Tu Pales es : ${nume}`)
        }else{
            console.log(`Tu tripleta es : ${nume} `)
        }
    },

    imprimir_mis_jugadas(){
        console.log(this._obj)
    }
};

let i=0;
while(i<10){
    //Si mando un 1 mando Quiniela, 2 Plae, 3 Tripleta
    let quiniela =(mensaje.obtener_jugada(1))
    let pale =(mensaje.obtener_jugada(2))
    let tripleta =(mensaje.obtener_jugada(3))

    //Aqui obtengo un arreglo de la jugada y me indica que se jugo
    let jugada_qui=mensaje.jugar_jugada(quiniela)
    let jugada_pale=mensaje.jugar_jugada(pale)
    let jugada_tri=mensaje.jugar_jugada(tripleta)

    //Aqui ar=grego la jugada a el objecto y le mando el arreglo con la jugada y el tipo de jugada
    mensaje.comprobar_jugada(jugada_qui)
    mensaje.comprobar_jugada(jugada_pale)
    mensaje.comprobar_jugada(jugada_tri)

    i++
}

//Aqui imprimo la jugada individual que jugue
//mensaje.imprimir_jugada(jugadaa)

mensaje.imprimir_mis_jugadas()
//Aqui imprimo como esta mi arreglo y los numeros que se han repetidos