//Forma Breve

//async await

const obtenerpokemones=async()=>{
    try {
      const res= await fetch('https://pokeapi.co/api/v2/pokemon/')
      const data= await res.json()
      console.log(data.results)
    } catch (error) {
      console.log(error)
    }
  
  }
  
  obtenerpokemones()