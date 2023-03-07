import { useState } from "react";
import axios from "axios";
import {
  Container,
  Title,
  InformationPokemon,
  NamePoke,
  ItemList,
  Button,
  SearchInput,
  BoxSearch,
  BarStatus,
} from "./styles";
import States from "../States/index";
export default function Search() {
  const [pokemonData, setPokemonData] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const apiPokemon = "https://pokeapi.co/api/v2/pokemon/" + pokemonName;

  function getPokemon() {
    axios
      .get(apiPokemon)
      .then((response) => {
        setPokemonData(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }

  function clearInputpokemon() {
    setPokemonName("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    getPokemon();
    clearInputpokemon();
  }

  return (
    <Container>
      <div>
        <Title>Pokedex</Title>
      </div>
      <div>
        <BoxSearch onSubmit={handleSubmit}>
          <SearchInput
            placeholder="Digite o nome do pokemon"
            type="text"
            value={pokemonName}
            onChange={(e) => setPokemonName(e.target.value)}
          />
          <Button>Search</Button>
        </BoxSearch>
      </div>
      <InformationPokemon>
        <ul>
          {pokemonData ? (
            <ItemList>
              <div>
                <NamePoke>{pokemonData.name}</NamePoke>
              </div>
              <div>
                <img
                  src={pokemonData.sprites.front_default}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <States statesPokemon={pokemonData} />
              </div>
            </ItemList>
          ) : (
            <li>Escreva o nome do seu pokemon</li>
          )}
        </ul>
      </InformationPokemon>
    </Container>
  );

  module.exports = getPokemon;
  module.exports = clearInputpokemon;
}
