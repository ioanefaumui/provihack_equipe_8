import BtnOptions from "../../components/BtnOptions";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { Container, Main, ContentBlog } from "../../styles/tenhoRoupa";
import ChamadaBlog from "../../components/ChamadaBlog";

export default function ModificarRoupa() {
  return (
    <Container>
      <Header />

      <Main>
        <h1>O que deseja fazer com a sua roupa?</h1>
        <p>
          Você pode escolher o destino da sua peça, pra quem você deseja doar.
          Pode também se inpirar em muitos dos nossos tutorias de customização,
          ou contratar um profissional!
        </p>

        <div className="btns">
          <BtnOptions
            background="btnoption6.png"
            text="Quero desapegar"
            pathLink={"/cadastrar_roupa"}
          />
          <BtnOptions
            background="btnoption7.png"
            text="Quero reformar"
            pathLink={"/quero_reformar"}
          />
        </div>

        <Link href="/home" passHref>
          <a className="backLink">Voltar</a>
        </Link>
      </Main>

      <ContentBlog>
        <h4>Últimas do blog</h4>

        <div className="chamadasBlog">
          <ChamadaBlog
            img="/chamadablog4.png"
            text="Saiba tudo sobre a reciclagem de resíduos têxteis no Brasil."
            altImg="Local de reciclagem em que aparecem alguns objetos espalhados e amontoados em processo de reciclagem"
            pathLink={"/"}
          />

          <ChamadaBlog
            img="/chamadablog5.png"
            text="Os impactos da indústria têxtil e da moda no meio ambiente."
            altImg="Uma placa composta por uma cartolina de cor verde escura e um pedaço de madeira. Na cartolina, há o desenho do planeta Terra e as palavras 'One' na parte superior esquerda e 'World' na parte inferior direita."
            pathLink={"/"}
          />

          <ChamadaBlog
            img="/chamadablog6.png"
            text="Entenda a importância dos brechós e da sustentabilidade dentro da moda."
            altImg="Diversas roupas penduradas em um cabideiro de madeira"
            pathLink={"/"}
          />
        </div>

        <div className="divLink">
          <Link href="/quero_fazer_eu_mesmo" passHref>
            <a className="seeMorelink">Veja mais</a>
          </Link>
        </div>
      </ContentBlog>
      <Footer />
    </Container>
  );
}
