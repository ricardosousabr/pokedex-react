import { BarStatus } from "./styles";

export default function ProgressBar({ value }) {
  return <BarStatus value={value} max="100" />;
}
