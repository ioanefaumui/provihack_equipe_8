import { Container } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function QueroFazerEuMesmo() {
  return (
    <Container>
      <Header />

      <main>
        <h1>
          Dicas de customização e tutoriais pra você repaginar suas peças!
        </h1>

        <ul className="tipsList">
          <li>
            <Link href="/" passHref>
              <a>
                <div className="imgCover">
                  <Image src="/custom1.png" alt="" layout="fill" />
                </div>
                <p>Como fazer aplicação de pérolas em seus jeans</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a>
                <div className="imgCover">
                  <Image src="/custom2.png" alt="" layout="fill" />
                </div>
                <p>Idéias de como usar tinta de tecido em suas roupas</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a>
                <div className="imgCover">
                  <Image src="/custom3.png" alt="" layout="fill" />
                </div>
                <p>Recicle suas roupas sem máquina de costura</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a>
                <div className="imgCover">
                  <Image src="/custom4.png" alt="" layout="fill" />
                </div>
                <p>Transforme sua t-shirt em um cropped</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a>
                <div className="imgCover">
                  <Image src="/custom5.png" alt="" layout="fill" />
                </div>
                <p>Como fazer uma bolsa com aquele jeans velho</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a>
                <div className="imgCover">
                  <Image src="/custom6.png" alt="" layout="fill" />
                </div>
                <p>Borde sua peça de roupa e veja a transformação</p>
              </a>
            </Link>
          </li>
        </ul>
      </main>

      <Footer />
    </Container>
  );
}
