import { useState } from "react"
import axios from "axios"
import {Container} from "./styles"

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

  function clearInputpokemon() {
    setPokemonName("w")
  }

  function handleSubmit(e) {
    e.preventDefault()

    getPokemon()
    clearInputpokemon()
  }

  return(
    <Container>
      <div>
        <h1>Pokedex</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input placeholder="Digite o nome do pokemon" type="text" value={pokemonName} onChange={(e) => setPokemonName(e.target.value)}/>
          <button>Search</button>
        </form>
      </div>
      <div>
        <ul>
          {pokemonData ?
            <li>
              <div>
                <h2>{pokemonData.name}</h2>
              </div>
              <div>
                <img src={pokemonData.sprites.front_default} alt="" width={100} height={100}/>
              </div>
              <div>
                <p>Primary skill: {pokemonData.abilities[0].ability.name}</p>
                {pokemonData.abilities[1].ability.name ? <p>Secondary skill: {pokemonData.abilities[1].ability.name}</p>
                 : <p>no secondary skill</p>
                }
              </div>
              <div>
                <p>{pokemonData.stats[0].stat.name}: {pokemonData.stats[0].base_stat}</p>
                <p>{pokemonData.stats[1].stat.name}: {pokemonData.stats[1].base_stat}</p>
                <p>{pokemonData.stats[2].stat.name}: {pokemonData.stats[2].base_stat}</p>
                <p>{pokemonData.stats[3].stat.name}: {pokemonData.stats[3].base_stat}</p>
                <p>{pokemonData.stats[4].stat.name}: {pokemonData.stats[4].base_stat}</p>
                <p>{pokemonData.stats[5].stat.name}: {pokemonData.stats[5].base_stat}</p>
              </div>
            </li> : <li>Escreva o nome do seu pokemon</li>
          }
        </ul>
      </div>
    </Container>
  )

  module.exports = getPokemon;
  module.exports = clearInputpokemon
}
