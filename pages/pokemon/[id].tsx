import React from "react";
import { Layout } from "../../components/layouts";
import { useRouter } from 'next/router';

const PokemonPage = () => {

  const router = useRouter();

  console.log(router.query)

  return (
    <Layout>
      <div>{router.query.id}</div>
    </Layout>
  );
};

export default PokemonPage;
