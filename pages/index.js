
import Router from "next/router";

export default function Home() {
  return(
    <>
    <button onClick={() => Router.push('/cadastro_servicos')}>
      Cadastrar serviços
    </button>
    <button onClick={() => Router.push('/cadastro_products')}>
      Cadastrar serviços
    </button>
    </>
  ) 
}
