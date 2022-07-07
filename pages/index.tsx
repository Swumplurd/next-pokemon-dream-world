import type { NextPage, GetStaticProps } from "next";

import { pokeApi } from "../api";
import { PokemonListResponse } from "../interfaces";

import { Layout } from "../components/layouts";
import { SmallPokemons } from "../interfaces/pokemon-list";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { PokemonCard } from "../components/pokemon";

interface Props {
  pokemons: SmallPokemons[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Listado de Pokémons">
      <Grid.Container gap={2} justify={"flex-start"}>
        {pokemons.map((pokemon) => {
          return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
        })}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>(
    "/pokemon/?limit=649"
  );

  const pokemons: SmallPokemons[] = data.results.map((pokemon, i) => ({
    ...pokemon,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
