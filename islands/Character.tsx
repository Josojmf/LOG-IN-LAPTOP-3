import { useEffect, useState } from "preact/hooks";
import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import { CharactersSignal, CharacterType, NumberSignal } from "../siganls.ts";
import { PageProps } from "$fresh/server.ts";
type Props = {
  character: CharacterType;
};

const CharacterComponent: FunctionComponent<Props> = ({ character }) => {
  const Characters: CharacterType[] = CharactersSignal.value;
  useEffect(() => {
    console.log("CHARACTER ISLAND USEEFFECT", CharactersSignal.value);
  }, [CharactersSignal.value]);

  return (
    <div>
      Character
      {CharactersSignal.value}
    </div>
  );
};

export default CharacterComponent;
