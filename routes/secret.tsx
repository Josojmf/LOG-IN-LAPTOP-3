import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import Button from "../islands/Button.tsx";
import Numerajo from "../islands/Number.tsx";
import ButtonApi from "../islands/ButtonApi.tsx";
import Character from "../islands/Character.tsx";

const RegisterForm: FunctionComponent = () => {
  return (
    <div>
      <h1>Super SECRET SHIT</h1>
      <Button></Button>
      <Numerajo></Numerajo>
      <ButtonApi></ButtonApi>
      <Character></Character>
    </div>
  );
};
export default RegisterForm;
