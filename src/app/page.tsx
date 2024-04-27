import { PokemonCard } from "@/components/pokemon-card";
import { Pokemon } from "@/types/data";

export default async function Home() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=9");

  if (!response.ok) throw new Error("Failed to fetch");

  const data = (await response.json()) as {
    results: Pokemon[];
  };

  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
      {data.results.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </ul>
  );
}
