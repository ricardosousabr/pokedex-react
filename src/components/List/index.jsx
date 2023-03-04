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
import  ProgressBar from "../ProgressBar/index"
export default function List() {
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
    setPokemonName("w");
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
        <ProgressBar value="44"/>
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
                <p>Primary skill: {pokemonData.abilities[0].ability.name}</p>
                {pokemonData.abilities[1].ability.name ? (
                  <p>
                    Secondary skill: {pokemonData.abilities[1].ability.name}
                  </p>
                ) : (
                  <p>no secondary skill</p>
                )}
              </div>
              <div>
                <div>
                  <p>
                    {pokemonData.stats[0].stat.name}:{" "}
                    {pokemonData.stats[0].base_stat}
                  </p>
                  <BarStatus id="file" value={pokemonData.stats[0].base_stat} max="100">
                    {" "}
                    32%{" "}
                  </BarStatus>
                </div>
                <div>
                  <p>
                    {pokemonData.stats[1].stat.name}:{" "}
                    {pokemonData.stats[1].base_stat}
                  </p>
                  <progress id="file" value={pokemonData.stats[1].base_stat} max="100">
                    {" "}
                    32%{" "}
                  </progress>
                </div>
                <div>
                  <p>
                    {pokemonData.stats[2].stat.name}:{" "}
                    {pokemonData.stats[2].base_stat}
                  </p>
                  <progress id="file" value={pokemonData.stats[2].base_stat} max="100">
                    {" "}
                    32%{" "}
                  </progress>
                </div>
                <div>
                  <p>
                    {pokemonData.stats[3].stat.name}:{" "}
                    {pokemonData.stats[3].base_stat}
                  </p>
                  <progress id="file" value={pokemonData.stats[3].base_stat} max="100">
                    {" "}
                    32%{" "}
                  </progress>
                </div>
                <div>
                  <p>
                    {pokemonData.stats[4].stat.name}:{" "}
                    {pokemonData.stats[4].base_stat}
                  </p>
                  <progress id="file" value={pokemonData.stats[4].base_stat} max="100">
                    {" "}
                    32%{" "}
                  </progress>
                </div>
                <div>
                  <p>
                    {pokemonData.stats[5].stat.name}:{" "}
                    {pokemonData.stats[5].base_stat}
                  </p>
                  <progress id="file" value={pokemonData.stats[5].base_stat} max="100">
                    {" "}
                    32%{" "}
                  </progress>
                </div>
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
