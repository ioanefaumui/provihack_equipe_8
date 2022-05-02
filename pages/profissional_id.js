import Router from "next/router";
import { useState } from "react";
import Header from "../components/Header";
import styles from "../styles/pages/ProfissionalId.module.css";

export default function ProfissionalId() {
  const [profissional, setProfissional] = useState([
    {
      name: "Rosália Menezes",
      img: "imagem",
      endereco: "Avenida anchieta,199 -centro",
      horario: "Segunda à Sexta, das 8:00 as às 18:00",
      contato: 19999459566,
      descricao:
        "Sou costureira há mais de 10 anos, faço barra, ajustes de tamanho e aplicações. Customização de peças de acordo com o desejo do cliente.",
      valores: 30,
    },
  ]);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <ul className={styles.list}>
          {profissional.map((item, index) => (
            <li className={styles.list} key={index}>
              <div className={styles.containerImg}>
                <div className={styles.imagem}>imagem</div>
                <div className={styles.imagembottom}>
                  <div className={styles.imagem2}> imagem1</div>
                  <div className={styles.imagem2}> imagem2</div>
                  <div className={styles.imagem2}> imagem3</div>
                </div>
              </div>

              <div className={styles.profissionalList}>
                <h1 className={styles.title}>{profissional[0].name}</h1>
                <p>
                  <strong> endereco: </strong> {item.endereco}
                </p>
                <p>
                  <strong> Horario de atendimento: </strong>
                  {item.horario}
                </p>
                <p>
                  <strong> Contato: </strong>
                  {item.contato}
                </p>
                <p>
                  <strong> Descrição: </strong>
                  {item.descricao}
                </p>
                <p>
                  <strong> Valores: </strong>A partir de{" "}
                  {item.valores.toFixed(2)}
                </p>

                <button
                  className={styles.button}
                  onClick={() => Router.push("/chat")}
                >
                  Quero contratar!
                </button>
                <p className={styles.chat}>Combine o serviço pelo chat</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
