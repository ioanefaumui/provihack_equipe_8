import Image from "next/image";
import Container from "../components/Container";
import styles from "../styles/pages/LandingPage.module.css";
import logo from "../public/logo.svg";
<<<<<<< Updated upstream
import Link from "next/link";
=======
import { signIn } from "next-auth/react";
>>>>>>> Stashed changes

const LandingPage = () => {
  return (
    <div className={styles.wrapper}>
      <Container size={1080}>
        <Image src={logo} alt="" height="80px" width="233px" />
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec enim
          diam vulputate ut pharetra. Egestas fringilla phasellus faucibus
          scelerisque eleifend.
        </p>
<<<<<<< Updated upstream
        <Link href="/login">
          <a className={`${styles.btn} ${styles.login}`}>Faça Login</a>
        </Link>
=======

        <a
          className={`${styles.btn} ${styles.login}`}
          onClick={() => signIn(null, { callbackUrl: "/" })}
        >
          Faça Login
        </a>

>>>>>>> Stashed changes
        <a className={`${styles.btn} ${styles.cadastrar}`}>Me cadastrar</a>
      </Container>
    </div>
  );
};

export default LandingPage;
