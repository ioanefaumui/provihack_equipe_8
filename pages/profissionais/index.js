import { Container } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function ListPecas() {
  return (
    <Container>
      <Header />

      <main>
        <h1>Olha o que encontramos!</h1>

        <ul className="tipsList">
          <li>
            <Link href="/" passHref>
              <a>
                <div className="imgCover">
                  <Image src="/profissional1.png" alt="" layout="fill" />
                </div>
                <p className="titlePeca">Rosália Menezes</p>
                <div className="infosProfissa">
                  <p>Local: Campinas-SP</p>
                  <p>Valor: a partir de R$10,00</p>
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a>
                <div className="imgCover">
                  <Image src="/profissional2.png" alt="" layout="fill" />
                </div>
                <p className="titlePeca">Maria Gonçalves</p>
                <div className="infosProfissa">
                  <p>Local: São Paulo-SP</p>
                  <p>Valor: a partir de R$20,00</p>
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a>
                <div className="imgCover">
                  <Image src="/profissional3.png" alt="" layout="fill" />
                </div>
                <p className="titlePeca">Ateliê Art e Costura</p>
                <div className="infosProfissa">
                  <p>Local: Curitiba-PR</p>
                  <p>Valor: a partir de R$15,00</p>
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a>
                <div className="imgCover">
                  <Image src="/profissional4.png" alt="" layout="fill" />
                </div>
                <p className="titlePeca">Cristina Silva</p>
                <div className="infosProfissa">
                  <p>Local: Rio de Janeiro-RJ</p>
                  <p>Valor: a partir de R$25,00</p>
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a>
                <div className="imgCover">
                  <Image src="/profissional5.png" alt="" layout="fill" />
                </div>
                <p className="titlePeca">Luiza Oliveira</p>
                <div className="infosProfissa">
                  <p>Local: Salvador-BA</p>
                  <p>Valor: a partir de R$20,00</p>
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a>
                <div className="imgCover">
                  <Image src="/profissional6.png" alt="" layout="fill" />
                </div>
                <p className="titlePeca">Luciana Gomes</p>
                <div className="infosProfissa">
                  <p>Local: São Paulo-SP</p>
                  <p>Valor: a partir de R$25,00</p>
                </div>
              </a>
            </Link>
          </li>
        </ul>
      </main>

      <Footer />
    </Container>
  );
}
