import Image from "next/image";
import Container from "../components/Container";
import styles from "../styles/pages/LandingPage.module.css";
import logo from "../public/logo.svg";
import { signIn } from "next-auth/react";

const LandingPage = () => {
  return (
    <div className={styles.wrapper}>
      <Container size={1080}>
        <Image src={logo} alt="" height="80px" width="233px" />
        <p className={styles.paragraph}>
          Você sabia que o equivalente a um caminhão de roupas descartadas é
          enviado para o aterro ou à incineração a cada segundo?
        </p>

        <a
          className={`${styles.btn} ${styles.login}`}
          onClick={() => signIn(null, { callbackUrl: "/home" })}
        >
          Faça Login
        </a>

        <a
          className={`${styles.btn} ${styles.cadastrar}`}
          onClick={() => signIn(null, { callbackUrl: "/home" })}
        >
          Me cadastrar
        </a>
      </Container>
    </div>
  );
};

export default LandingPage;
