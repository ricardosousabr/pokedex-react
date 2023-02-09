import { useState } from "react"
import axios from "axios"

export default function List() {
  const [pokemonData, setPokemonData] = useState("")
  const [pokemonName, setPokemonName] = useState("")
  const apiPokemon = "https://pokeapi.co/api/v2/pokemon/" + pokemonName

  function getPokemon() {

    axios.get(apiPokemon)
    .then(response => {
      setPokemonData(response.data)
      console.log(response.data)
    })
    .catch(error => console.log(error))
  }

  function handleSubmit(e) {
    e.preventDefault();

    getPokemon()
  }

  return(
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={(e) => setPokemonName(e.target.value)}/>
          <button>Search</button>
          <p>lorem</p>
        </form>
      </div>
      <div>
        <ul>{pokemonData ? <li>{pokemonData.name}</li> : <li>Escreva o nome do seu pokemon</li>}</ul>
      </div>
    </div>
  )
}