import ProgressBar from "../ProgressBar/index";

export default function PokeState({ stateName, stateValue }) {
  return (
    <div>
      <p>
        {stateName}:{stateValue}
      </p>
      <ProgressBar value={stateValue} max="100" />
    </div>
  );
}
