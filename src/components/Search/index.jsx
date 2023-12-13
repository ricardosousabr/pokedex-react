import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import {
  Container,
  ContainerImage,
  ContainerForm,
  ContainerPokemon,
  NamePoke,
  ListSkils,
  Button,
  SearchInput,
  BoxSearch,
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
      <ContainerImage>
        <Image src="./img/pokemon-logo.png" alt="" width={400} height={200} />
      </ContainerImage>
      <ContainerForm>
        <BoxSearch onSubmit={handleSubmit}>
          <SearchInput
            placeholder="Digite o nome do pokemon"
            type="text"
            value={pokemonName}
            onChange={(e) => setPokemonName(e.target.value)}
          />
          <Button>Procurar</Button>
        </BoxSearch>
      </ContainerForm>
      <ContainerPokemon>
        <ListSkils>
          {pokemonData ? (
            <li>
              <div>
                <NamePoke>{pokemonData.name}</NamePoke>
              </div>
              <div>
                <img
                  src={pokemonData.sprites.front_default}
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
              <div>
                <States statesPokemon={pokemonData} />
              </div>
            </li>
          ) : (
            <li>Escreva o nome do seu pokemon</li>
          )}
        </ListSkils>
      </ContainerPokemon>
    </Container>
  );
}
