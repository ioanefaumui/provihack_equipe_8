import { useState } from "react";
import Router from "next/router";
import styles from "../styles/pages/ListaProfissional.module.css";
import { useSession } from "next-auth/react";
import { GraphQLClient } from "graphql-request";
import { LISTA_PROFISSIONAIS } from "../graphql/queries";
import Header from "../components/Header";

export const getStaticProps = async () => {
  const client = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });

  const data = await client.request(LISTA_PROFISSIONAIS);

  const professionals = data.profissionals;

  return {
    props: {
      professionals,
    },
  };
};

export default function ListaProfissional({ professionals }) {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>Olha quem encontramos!</h1>
        <p>{professionals.length} profissionais encontrados</p>
        <div className={styles.container}>
          <ul className={styles.ulList}>
            {professionals.map((item) => (
              <li className={styles.liList} key={item.id}>
                <button
                  className={styles.buttonId}
                  // onClick={() => Router.push(`/${item.id}`)}
                >
                  <div className={styles.imagem}>
                    <img
                      src={item.imagem.url}
                      alt=""
                      className={styles.imagem}
                    />
                  </div>
                </button>
                <strong>{item.nome}</strong>
                <div className={styles.props}>
                  <p
                    className={styles.namePeca}
                  >{`Local: ${item.cidade} - ${item.estado}`}</p>
                  <p className={styles.ptext}>
                    Valor: A partir de R$ {item.valor},00
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
