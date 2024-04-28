export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    other: {
      "official-artwork": { front_default: string; front_shiny: string };
    };
  };
  types: {
    slot: number;
    type: {
      name:
        | "normal"
        | "fire"
        | "water"
        | "electric"
        | "grass"
        | "ice"
        | "fighting"
        | "poison"
        | "ground"
        | "flying"
        | "psychic"
        | "bug"
        | "rock"
        | "ghost"
        | "dragon"
        | "dark"
        | "steel"
        | "fairy";
      url: string;
    };
  }[];
}
