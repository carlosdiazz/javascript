//async await

const obtenerpokemones=async()=>{
  try {
    const res= await fetch('https://pokeapi.co/api/v2/pokemon/')
    const data= await res.json()
   //console.log(data.results)
   //Aqui estoy usando la funcion map, para imprimir los elemenots de una lista
    data.results.map(poke=>console.log(poke.name))
    

  } catch (error) {
    console.log(error)
  }

}

obtenerpokemones()