import { redirect } from "next/navigation";
import Image from "next/image";

import { PokemonDetail } from "@/types/data";
import { Badge } from "@/components/ui/badge";

export default async function PokemonDetailPage({
  params,
}: {
  params: { pokemonId: string };
}) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.pokemonId}`,
  );

  if (!response.ok) {
    redirect(`/`);
  }

  const pokemon = (await response.json()) as PokemonDetail;

  return (
    <div className="group pt-4">
      <Image
        alt={pokemon.name}
        priority
        src={pokemon.sprites.other["official-artwork"].front_default}
        className="group-hover:hidden"
        width={200}
        height={200}
      />
      <Image
        alt={pokemon.name}
        priority
        src={pokemon.sprites.other["official-artwork"].front_shiny}
        className="hidden group-hover:block"
        width={200}
        height={200}
      />
      <div className="flex items-center justify-center gap-2">
        {pokemon.types.map((type) => (
          <Badge
            key={type.slot}
            variant={type.type.name}
            className="shadow-text inline-flex select-none items-center justify-center rounded-full px-4 py-2 font-semibold capitalize text-white"
          >
            {type.type.name}
          </Badge>
        ))}
      </div>
    </div>
  );
}
