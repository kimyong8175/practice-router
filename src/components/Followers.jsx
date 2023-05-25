import { useOutletContext } from "react-router-dom";

export default function Followers() {
  const { nameOfMyUser } = useOutletContext();

  return <h1>{nameOfMyUser}</h1>;
}
