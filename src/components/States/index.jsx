import PokeState from "../PokeState";
import { Container } from "./styles";

export default function States({ statesPokemon }) {
  const statesPoke = statesPokemon.stats;
  const primarySkill = statesPokemon.abilities[0].ability.name;
  const secondarySkill = statesPokemon.abilities[1].ability.name;

  return (
    <Container>
      <div>
        <p>Primary skill: {primarySkill}</p>
        {secondarySkill ? (
          <p>Secondary skill: {secondarySkill}</p>
        ) : (
          <p>no secondary skill</p>
        )}
      </div>
      <div>
        {statesPoke.map(({ base_stat, stat }) => (
          <PokeState
            key="satespoke"
            stateName={stat.name}
            stateValue={base_stat}
          />
        ))}
      </div>
    </Container>
  );
}
