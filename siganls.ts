import { signal } from "@preact/signals";

export type CharacterType = {
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

export const NumberSignal = signal<number>(0);
export const CharactersSignal = signal<Character[]>([]);
