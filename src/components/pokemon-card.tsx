import Link from "next/link";
import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pokemon } from "@/types/data";

export function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <li className="group transform transition-transform hover:z-10 hover:scale-105 hover:cursor-pointer">
      <Link
        title={`View ${pokemon.name}`}
        href={`pokemons/${pokemon.url.split("/")[6]}`}
      >
        <Card>
          <CardContent className="flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="capitalize group-hover:text-orange-400 group-hover:underline">
                {pokemon.name}
              </CardTitle>
            </CardHeader>
            <Image
              alt={pokemon.name}
              priority
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split("/")[6]}.png`}
              className="group-hover:hidden"
              width={200}
              height={200}
            />
            <Image
              className="hidden group-hover:block"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${pokemon.url.split("/")[6]}.png`}
              alt={pokemon.name}
              width={200}
              height={200}
            />
          </CardContent>
        </Card>
      </Link>
    </li>
  );
}
