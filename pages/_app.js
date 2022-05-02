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
          textAlign: "right",
        }}
      >
        <Link href="/">
          <a>Landing Page</a>
        </Link>
        <Link href="/home">
          <a>Home</a>
        </Link>
        <Link href="/cadastro_products">
          <a>Cadastrar Produtos</a>
        </Link>
        <Link href="/lista_pecas">
          <a>Lista pecas</a>
        </Link>
        <Link href="/buscar_peca">
          <a>Buscar peca</a>
        </Link>
        <Link href="/pecas_id">
          <a>Pecas ID</a>
        </Link>
        <Link href="/lista_profissional">
          <a>Lista profissional</a>
        </Link>
        <Link href="/buscar_profissional">
          <a>Buscar profissional</a>
        </Link>

        <Link href="/profissional_id">
          <a>Profissional ID</a>
        </Link>
      </div>
      <SessionProvider session={session}>
        <GlobalStyle />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
