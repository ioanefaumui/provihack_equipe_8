import "./_app.css";
import GlobalStyle from "../styles/GlobalStyle";
import Router from "next/router";
import { SessionProvider } from "next-auth/react";
import Link from "next/link";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <SessionProvider session={session}>
        <GlobalStyle />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
