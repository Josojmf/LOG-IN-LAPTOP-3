import { useState } from "preact/hooks";
import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import { CharactersSignal, NumberSignal } from "../siganls.ts";
type Character = {
  id: number;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};
type APIDATA = {
  results: Character[];
};
import axios from "npm:axios";

const ButtonApi: FunctionComponent = () => {
  const [number, setNumber] = useState<number>(0);
  const [apidata, setapidata] = useState();
  async function fetchData() {
    const apiurl = "https://rickandmortyapi.com/api/character";
    const response = await axios.get(apiurl);
    const data: APIDATA = response.data as APIDATA;
    const results: Character[] = data.results;
    CharactersSignal.value = results;
  }
  return (
    <div className="ButtonIslandContainer">
      <button className="ButtonIsland" onClick={fetchData}>Fetch Api</button>
    </div>
  );
};
export default ButtonApi;
