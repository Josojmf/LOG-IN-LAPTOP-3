import { useEffect, useState } from "preact/hooks";
import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import { Character, CharactersSignal, NumberSignal } from "../siganls.ts";
import { PageProps } from "$fresh/server.ts";
type Props = {
  character: Character;
};

const CharacterComponent: FunctionComponent<Props> = ({ character }) => {
  console.log(CharactersSignal.value);

  return (
    <div>
      Character
      {CharactersSignal.value}
    </div>
  );
};

export default CharacterComponent;
