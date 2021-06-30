//@ts-check

const cursos={
    _profesores:{
        materia1:[],
        materia2:[],
        materia3:[]
    },

    notas:{
        color:'AZUL',
        vivo: true
    },

    votar:false,

    //Con el metodo get se encargar de recibir un valor
    set profesores(materias){
        this._profesores.materia1.push(materias[0]);
        this._profesores.materia2.push(materias[1]);
        this._profesores.materia3.push(materias[2]);
        return this._profesores
    },
    //El set asigna un nuevo valor
    get materia3(){
        return this._profesores.materia3
    }

}

//cursos.profesores=['hola','como','estas']
//console.log(cursos._profesores)

//console.log(cursos.materia3)

let obj={
    uno:1,
    dos:2,
    tres:3
}

console.log(obj['tres'])

if(obj['tres']) console.log('Estoy aqui')