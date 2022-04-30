
import Router from "next/router";

import HomePage from "../components/HomePages/homepage";


export default function Home() {
  return(
    <>
    <button onClick={() => Router.push('/cadastro_servicos')}>
      Cadastrar serviços
    </button>
    <button onClick={() => Router.push('/cadastro_products')}>
      Cadastrar Produtos
    </button>
    </>
  ) 

}
