import PokeState from "../PokeState";
import { Container } from "./styles";

export default function States({ statesPokemon }) {
  const statesPoke = statesPokemon.stats;

  return (
    <Container>
      <div>
        <p>Primary skill: {statesPokemon.abilities[0].ability.name}</p>
        {statesPokemon.abilities[1].ability.name ? (
          <p>Secondary skill: {statesPokemon.abilities[1].ability.name}</p>
        ) : (
          <p>no secondary skill</p>
        )}
      </div>
      <div>
        {statesPoke.map(({ base_stat, stat }) => (
          <PokeState stateName={stat.name} stateValue={base_stat} />
        ))}
      </div>
    </Container>
  );
}
