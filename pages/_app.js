import "./_app.css";
import GlobalStyle from "../styles/GlobalStyle";
import Router from "next/router";
<<<<<<< Updated upstream
import Link from "next/link";
import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <UserProvider>
=======
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    </UserProvider>
=======
    </SessionProvider>
>>>>>>> Stashed changes
  );
}

export default MyApp;
