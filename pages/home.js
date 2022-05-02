import styles from "../styles/pages/HomePage.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import Router from "next/router";

export default function HomePage() {
  const [user, setUser] = useState("");
  const [blog, setBlog] = useState([
    { id: 1, imagem: "img", description: "aconteu isso e aqui" },
    { id: 2, imagem: "img2", description: "aconteu isso e aqui" },
    { id: 3, imagem: "img3", description: "aconteu isso e aqui" },
  ]);

  const router = useRouter();

  const { data: status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      Router.push("/");
    }
  }, [status]);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>Olá {user}</h1>
        <h3>O que te traz aqui hoje?</h3>

        <div className={styles.blogPage}>
          <ul className={styles.ulList}>
            <li>
              <button
                className={styles.liList}
                type="button"
                onClick={() => router.push("/tenho_roupa")}
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
            <li>
              <button
                className={styles.liList}
                type="button"
                onClick={() => router.push("/servicos")}
              >
                Ofereço um serviço
              </button>
            </li>
          </ul>
        </div>

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
