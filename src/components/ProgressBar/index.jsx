import { BarStatus } from './styles'

export default function ProgressBar({value}) {

  console.log(value)

  return (
    <BarStatus value={value} max="100" />
  );
}
