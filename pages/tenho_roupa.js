import { useState } from "react";
import styles from "../styles/pages/TenhoRoupa.module.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
export default function TenhoRoupa() {
  const [blog, setBlog] = useState([
    { id: 1, imagem: "img", description: "aconteu isso e aqui" },
    { id: 2, imagem: "img2", description: "aconteu isso e aqui" },
    { id: 3, imagem: "img3", description: "aconteu isso e aqui" },
  ]);
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>O que deseja fazer com a sua roupa?</h1>
        <p className={styles.descricao}>
          Você pode escolher o destino da sua peça, pra quem você deseja doar.
          Pode também se inpirar em muitos dos nossos tutorias de customização,
          ou contratar um profissional!
        </p>

        <div className={styles.blogPage}>
          <ul className={styles.ulList}>
            <li className={styles.list}>
              <button
                className={styles.liList}
                type="button"
                onClick={() => router.push("/doar")}
              >
                Tenho uma Roupa
              </button>
            </li>
            <li>
              <button
                className={styles.liList}
                type="button"
                onClick={() => router.push("/doacoes")}
              >
                Preciso de uma Roupa
              </button>
            </li>
          </ul>
        </div>
        <button
          className={styles.veja}
          type="button"
          onClick={() => router.push("/blog")}
        >
          Voltar
        </button>
        <div className={styles.blogName}>
          <h3>Últimas do Blog</h3>
          <div>
            {" "}
            {/* fazer um map de fotos do blog */}
            <ul className={styles.ulList}>
              {blog.map((item, index) => (
                <li className={styles.listButton} key={index}>
                  <button
                    className={styles.button}
                    onClick={() => router.push(`/blog ${item.id}`)}
                  >
                    <div>
                      {item.imagem}
                      {/*//  <Image src="imagem"/>*/}{" "}
                    </div>
                  </button>
                  <p className={styles.liText}>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <p className={styles.text}>
            <button
              className={styles.veja}
              type="button"
              onClick={() => router.push("/blog")}
            >
              Veja Mais
            </button>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
