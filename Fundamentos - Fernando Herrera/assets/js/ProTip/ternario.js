const ElMayor = (a,b) => {
    return(a>b) ? a : b
}

const ElMayor2 = (a,b) => ( a > b ) ? a : b

//Esto es una funcion de flecha con un parametro y una evalucion si es true es miebro si es false no es miembro
const TieneMembresia = miembro => miembro ? "Eres Miembro" : "No eres Miembro"

console.log(ElMayor2(4,6));
console.log(TieneMembresia(false))

//Evaluar notas
//Aqui uso el operador ternario apra evaluar diferentes y nota y retornar un mensaje distinto
const SaberNota = nota =>   nota >= 95 ? "A+":
                            nota >= 90 ? "A" :
                            nota >= 85 ? "B+":
                            nota >= 80 ? "B" :
                            nota >= 75 ? "C+":
                            nota >= 70 ? "C" :
                            "F"

console.log(SaberNota(84.9))