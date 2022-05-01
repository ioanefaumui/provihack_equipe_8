import { useState } from "react";
import Router from "next/router";
import styles from "../styles/pages/ListaPecas.module.css";

export default function ListaPecas() {
  const [cidade, setCidade] = useState([
    "arroz",
    "feijao",
    "commida",
    "lazanha",
    "pimenta",
    "galinha",
  ]);

  return (
    <>
      <h1 className={styles.h1}>Olha o que encontramos!</h1>
      <p className={styles.p}>{cidade.length} itens encontrados</p>
      <div className={styles.container}>
        <ul className={styles.ulList}>
          {cidade.map((item, index) => (
            <li className={styles.liList} key={index}>
              <button
                className={styles.buttonId}
                onClick={() => Router.push(`/item-${item}`)}
              >
                <div className={styles.imagem}>
                  {item} {/* <Imagem src={item.img}alt={item.img}/> */}
                </div>
              </button>
              <div className={styles.props}>
                <strong className={styles.namePeca}>{item}-nome</strong>
                <p className={styles.ptext}>Numeração: {item}-tamanho</p>
                <p className={styles.ptext}>Local: {item}-cidade-UF</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
