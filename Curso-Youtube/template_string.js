//Aqui a utilizar esta comilla podemos concatenar en un string variables

const suma=(nume)=>{
    return `La suma de ${nume} + 10 es: ${nume+10}`
}

const resta=nume=>`La resta de ${nume} - 10 es: ${nume-10}`

const resultado= suma(10)
console.log(resultado)

const resultado2=resta(40)
console.log(resultado2)