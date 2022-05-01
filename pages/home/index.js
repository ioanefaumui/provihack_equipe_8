import Header from "../../components/Header";
import { Container, ContentBlog, Main } from "./styles";
import Footer from "../../components/Footer";
import BtnOptions from "../../components/BtnOptions";
import ChamadaBlog from "../../components/ChamadaBlog";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Router from "next/router";

export default function HomePage() {
  const [user, setUser] = useState("Ayana");
  const [blog, setBlog] = useState([
    { id: 1, imagem: "img", description: "aconteu isso e aqui" },
    { id: 2, imagem: "img2", description: "aconteu isso e aqui" },
    { id: 3, imagem: "img3", description: "aconteu isso e aqui" },
  ]);

  const { data: status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      Router.push("/");
    }
  }, [status]);

  return (
    <Container>
      <Header />

      <Main>
        <h1>Olá, {user}!</h1>
        <p>
            O que te traz aqui hoje?
        </p>

        <div className="btns">
          <BtnOptions
            background="/btnoption1.png"
            text="Tenho uma roupa"
            pathLink="/"
          />
          <BtnOptions
            background="/btnoption2.png"
            text="Preciso de uma roupa"
            pathLink="/buscar-peca"
          />
          <BtnOptions
            background="/btnoption5.png"
            text="Ofereço um serviço"
            pathLink="/cadastrar_servico"
          />
        </div>

        <Link href="/" passHref>
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
          <Link href="/" passHref>
            <a className="seeMorelink">Veja mais</a>
          </Link>
        </div>
      </ContentBlog>
      <Footer />
    </Container>
  );
}
