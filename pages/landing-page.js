import Container from "../components/Container";
import styles from "../styles/pages/LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.wrapper}>
      <Container size={1080}>
        <h1>Logo Projeto</h1>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec enim
          diam vulputate ut pharetra. Egestas fringilla phasellus faucibus
          scelerisque eleifend.
        </p>
        <button className={`${styles.btn} ${styles.login}`}>Faça Login</button>
        <button className={`${styles.btn} ${styles.cadastrar}`}>
          Me cadastrar
        </button>
      </Container>
    </div>
  );
};

export default LandingPage;
