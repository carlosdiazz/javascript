//Funcion normal
function sumar(nu1,nu2){
    console.log(nu1+nu2)
}


//Funciones de Flechas
const sumar2=(nu1,nu2)=>{
    return(nu1+nu2)
}

//Si solo usare un parametro no tengo que colocar los parentesis
const sumar3=nume=>{
    console.log(nume)
}

const resultado=sumar2(10,20)


//console.log(resultado)
//sumar3(10)
//sumar(10,15)


//La funcion de flecha va a retornar cuando no colquemos las llaves como ejemplo de abajo
const restar=(nu1,nu2)=>(nu1-nu2)

const nume1=restar(40,10)
console.log(nume1)

//Aqui creo una funcion, y si al parametro no le dan valor automaticamente va a colocar el valor que se declaro en la funcion
const sumar_dos_siempre=(nu1=0)=>{
    console.log(nu1+2)
}
sumar_dos_siempre(10) 