import "./_app.css";
import GlobalStyle from "../styles/GlobalStyle";
import Router from "next/router";
import { SessionProvider } from "next-auth/react";
import Link from "next/link";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <div
        style={{
          position: "absolute",
          right: "0",
          display: "flex",
          flexDirection: "column",
          width: "200px",
          fontSize: "13px",
        }}
      >
        <button onClick={() => Router.push("/cadastro_servicos")}>
          Cadastrar serviços
        </button>
        <button onClick={() => Router.push("/cadastro_products")}>
          Cadastrar Produtos
        </button>
        <button onClick={() => Router.push("/landing_page")}>
          Landing page
        </button>
        <Link href="/login">
          <button>Login</button>
        </Link>
        Esse menu é somente pra facilitar a navegação em desenvolvimento
      </div>
      <GlobalStyle />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
