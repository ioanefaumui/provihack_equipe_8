import { useEffect } from "react";
import Router from "next/router";
import styles from "../styles/pages/ListaPecas.module.css";
import { GraphQLClient } from "graphql-request";
import { LISTA_ROUPAS } from "../graphql/queries";
import Image from "next/image";
import Header from "../components/Header";
import { useSession } from "next-auth/react";

export const getStaticProps = async () => {
  const client = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });

  const data = await client.request(LISTA_ROUPAS);

  const roupas = data.roupas;

  return {
    props: {
      roupas,
    },
  };
};

export default function ListaPecas({ roupas }) {
  const { data: status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      Router.push("/");
    }
  }, [status]);

  return (
    <>
      <Header />
      <h1 className={styles.h1}>Olha o que encontramos!</h1>
      <p className={styles.p}>{roupas.length} itens encontrados</p>
      <div className={styles.container}>
        <ul className={styles.ulList}>
          {roupas.map((item, index) => (
            <li className={styles.liList} key={index}>
              <button
                className={styles.buttonId}
                onClick={() => Router.push(`/*item-${item.descricao}`)}
                style={{ background: `url(${item.descricao})` }}
              >
                <div className={styles.imagem}>
                  <img
                    src={item.imagem[0].url}
                    alt=""
                    height="100px"
                    width="100px"
                    className={styles.imagem}
                  />
                </div>
              </button>
              <div className={styles.props}>
                <strong className={styles.namePeca}>{item.descricao}</strong>
                <p className={styles.ptext}>Numeração: {item.tamanho}</p>
                <p className={styles.ptext}>
                  Estado: {item.estado} - Cidade: {item.cidade}
                </p>
                <p className={styles.ptext}>
                  Disponivel: {item.disponivel ? "Sim" : "Não"}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
