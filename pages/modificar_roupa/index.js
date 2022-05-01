import BtnOptions from "../../components/BtnOptions";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { Container, Main } from "./styles";

export default function ModificarRoupa() {
  return (
    <Container>
      <Header />

      <Main>
        <h2>Como quer modificar?</h2>
        <p>
          Você pode escolher o destino da sua peça, pra quem você deseja doar.
          Pode também se inpirar em muitos dos nossos tutorias de customização,
          ou contratar um profissional!
        </p>

        <div className="btns">
          <BtnOptions
            background="btnoption3.png"
            text="Quero fazer eu mesmo"
            pathLink={"/"}
          />
          <BtnOptions
            background="btnoption4.png"
            text="Quero ajuda profissional"
            pathLink={"/"}
          />
        </div>

        <Link href="/" passHref>
          <a className="backLink">Voltar</a>
        </Link>
      </Main>

      <div>
        <h4>Últimas do blog</h4>
      </div>

      <Footer />
    </Container>
  );
}
