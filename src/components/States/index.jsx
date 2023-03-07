import PokeState from "../PokeState";

export default function States({ statesPokemon }) {
  console.log(statesPokemon.stats);

  const statesPoke = statesPokemon.stats;

  return (
    <div>
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
    </div>
  );
}
