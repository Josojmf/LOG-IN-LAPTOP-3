import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import Button from "../islands/Button.tsx";
import Numerajo from "../islands/Number.tsx";
import ButtonApi from "../islands/ButtonApi.tsx";
import Character from "../islands/Character.tsx";
import { CharacterType } from "../siganls.ts";

const RegisterForm: FunctionComponent = () => {
  const char: CharacterType = {
    id: 0,
    status: "dead",
    species: "human",
    type: "yes",
    gender: "male",
    origin: {
      name: "eatrch",
      url: "",
    },
    location: {
      name: "earth",
      url: "",
    },
    image: "",
    episode: ["", "", ""],
    url: "",
    created: "",
  };
  return (
    <div>
      <h1>Super SECRET SHIT</h1>
      <Button></Button>
      <Numerajo></Numerajo>
      <ButtonApi></ButtonApi>
      <Character character={char}></Character>
    </div>
  );
};

export default RegisterForm;
