
const nombres = ["Carlos","Jose","Juan","Marcos","Leonel","Daniel"]

let i = 0

//Ciclo While
while (i< nombres.length){
    console.log(nombres[i])
    i++
}

let j = 0
console.log("---------------")
//Aqui siempre se va a ejuctar una vez y depeidndo si es true o false seguira ejecutandose
//Ciclo Do While
do{
    console.log(nombres[j])
    j++
}while(j<3);