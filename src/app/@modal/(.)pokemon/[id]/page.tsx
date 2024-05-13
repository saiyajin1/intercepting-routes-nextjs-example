import Image from "next/image";

import { PokemonDetail } from "@/types/data";
import { Badge } from "@/components/ui/badge";

export default async function InterceptedPageAsModal({
  params,
}: {
  params: { id: string };
}) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.id}`,
  );

  if (!response.ok) {
    return (
      <div className="flex items-center justify-center">Failed to load</div>
    );
  }

  const pokemon = (await response.json()) as PokemonDetail;
  return (
    <div className="group flex flex-col items-center justify-center gap-2 pt-2">
      <h1 className="text-center text-3xl font-bold capitalize">
        {pokemon.name}
      </h1>
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
            title={type.type.name}
          >
            {type.type.name}
          </Badge>
        ))}
      </div>
    </div>
  );
}
