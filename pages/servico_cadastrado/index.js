import { Container } from "./styles";
import Image from "next/image";
import BtnPages from "../../components/BtnPages";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function ServicoCadastrado() {
  return (
    <Container>
      <Header />   

      <div className="imgCongrats">
        <Image
          src="/imgCongrats.png"
          alt="Um planeta Terra com olhos e uma boca sorridente, dois braços e dois braços dançantes e dois coraçãozinhos na parte superior direita e esquerda da Terra"
          layout="fill"
        />
      </div>

      <h2>Cadastro efetuado com sucesso!</h2>
      <p>Obrigada pelos seus serviços e se engajar por um planeta mais sustentável!</p>

      <Link href="/" passHref>
        <a className="linkToPage">Ir para a página do serviço</a>
      </Link>
      <Footer />
    </Container>
  );
}
