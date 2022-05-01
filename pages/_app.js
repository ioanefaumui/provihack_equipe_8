import "./_app.css";
import GlobalStyle from "../styles/GlobalStyle";
import Router from "next/router";
import { SessionProvider } from "next-auth/react";
import Link from "next/link";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
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
        <Link href="/">
          <button>Landing Page</button>
        </Link>
        <Link href="/home">
          <button>Home</button>
        </Link>
        <Link href="/cadastro_products">
          <button>Cadastrar Produtos</button>
        </Link>
        <Link href="/lista_pecas">
          <button>Lista pecas</button>
        </Link>
        <Link href="/lista_profissional">
          <button>Lista profissional</button>
        </Link>
        <Link href="/pecas_id">
          <button>Pecas ID</button>
        </Link>
        <Link href="/profissional_id">
          <button>Profissional ID</button>
        </Link>
        Esse menu é somente pra facilitar a navegação em desenvolvimento
      </div>
      <SessionProvider session={session}>
        <GlobalStyle />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
