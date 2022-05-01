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
        <h1>
          Olha o que encontramos!
        </h1>

        <ul className="tipsList">
          <li>
            <Link href="/quero_fazer_eu_mesmo/como_fazer_aplicacao_de_perolas_em_seus_jeans" passHref>
              <a>
                <div className="imgCover">
                  <Image src="/roupa1.png" alt="" layout="fill" />
                </div>
                <p className="titlePeca">Calça Feminina</p>
                <p>Tamanho: 44</p>
                <p>Local: Campinas-SP</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/quero_fazer_eu_mesmo/2" passHref>
              <a>
                <div className="imgCover">
                  <Image src="/roupa2.png" alt="" layout="fill" />
                </div>
                <p className="titlePeca">Calça Feminina</p>
                <p>Tamanho: 38</p>
                <p>Local: São Paulo-SP</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/quero_fazer_eu_mesmo/3" passHref>
              <a>
                <div className="imgCover">
                  <Image src="/roupa3.png" alt="" layout="fill" />
                </div>
                <p className="titlePeca">Calça Feminina</p>
                <p>Tamanho: 38</p>
                <p>Local: Curitiba-PR</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/quero_fazer_eu_mesmo/4" passHref>
              <a>
                <div className="imgCover">
                  <Image src="/roupa4.jpg" alt="" layout="fill" />
                </div>
                <p className="titlePeca">Cropped</p>
                <p>Tamanho: P</p>
                <p>Local: Rio de Janeiro-RJ</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/quero_fazer_eu_mesmo/5" passHref>
              <a>
                <div className="imgCover">
                  <Image src="/roupa5.jpg" alt="" layout="fill" />
                </div>
                <p className="titlePeca">Camisa preta</p>
                <p>Tamanho: M</p>
                <p>Local: Salvador-BA</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/quero_fazer_eu_mesmo/6" passHref>
              <a>
                <div className="imgCover">
                  <Image src="/roupa6.png" alt="" layout="fill" />
                </div>
                <p className="titlePeca">Calça feminina</p>
                <p>Tamanho: 40</p>
                <p>Local: São Paulo-SP</p>
              </a>
            </Link>
          </li>
        </ul>
      </main>

      <Footer />
    </Container>
  );
}