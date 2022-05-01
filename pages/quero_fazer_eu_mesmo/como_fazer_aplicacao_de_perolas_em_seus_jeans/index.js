import { Container, Content } from "./styles";
import Image from "next/image";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function QueroFazerEuMesmo1() {
  return (
    <Container>
      <Header />

      <Content>
        <h1>Como fazer aplicaçao de pérolas em seus jeans</h1>

        <div className="infosPost">
          <p>29/04/2022</p>
          <p className="referencePost">Post original: www.taofeminino.com</p>
        </div>

        <div className="imgsJeans">
          <Image src="/custom1.png" alt="" layout="fill" />
        </div>

        <p>
          Jeans bordados são tendência absoluta, e nós já havíamos dado a letra
          sobre isso há algum tempinho, lembra? Acontece que não são apenas os
          bordados clássicos, em forma de patches ou aplicações, que se tornaram
          objeto de desejo por aí, não.
        </p>
        <p>
          Se o quente da estação é usar jeans nada convencionais - quanto mais
          detalhes, melhor - já podemos abrir espaço para que as pérolas, das
          discretas às mais chamativas, também decorem seu denim. O resultado
          fica incrível. E não, você não precisa gastar muito para que a mágica
          aconteça.
        </p>

        <div className="imgsJeans">
          <Image src="/img2jeans.png" alt="" layout="fill" />
        </div>

        <p>
          👉 Jeans com pérolas: o must have da temporada Foi lá no Pinterest, é
          claro, que descobrimos a maneira mais simples de aplicar as pérolas
          nos jeans - que não se resume somente à calça, viu? A jaqueta jeans
          também aceita muito bem qualquer tipo de customização. Pronta?
        </p>
        <p>👉 Jeans com pérolas DIY - você vai precisar de:</p>

        <ul>
          <li>Jeans (calça, camisa, saia, shorts, jaqueta...)</li>
          <li>Pedra-sabão</li>
          <li>Pérolas (de diferentes ou do mesmo tamanho, você escolhe)</li>
          <li>Agulha de costura</li>
          <li>Linha de costura ou fios de náilon</li>
          <li>Tesoura</li>
        </ul>

        <div className="imgsJeans">
          <Image src="/img3jeans.png" alt="" layout="fill" />
        </div>

        <p>👉 Iniciando os trabalhos:</p>
        <p>
          1. Antes de começar a costurar, distribua as pérolas ao longo do jeans
          de sua preferência para ter uma noção de como você quer que fique seu
          resultado final. Se quiser deixar tudo mais uniforme e preciso, faça
          marcações no jeans usando a pedra-sabão e um esquadro.
        </p>
        <p>
          2. Corte um pedaço longo de linha - ou fio de náilon - e coloque na
          agulha. Para que as contas não escapem e a agulha permaneça firme, dê
          um nó bem apertado nas extremidades do fio.
        </p>

        <div className="imgsJeans img4jeans">
          <Image src="/img4jeans.png" alt="" layout="fill" />
        </div>

        <p>
          3. Fure o tecido com a agulha, já com a linha posicionada, de dentro
          para fora do jeans. Em seguida, coloque a pérola dentro da agulha e
          comece a costurar. Vá fazendo o mesmo procedimento com todas as
          pérolas e, para que fiquem presas ao tecido, dê pequenos nós na linha
          ao terminar de costurar.
        </p>
        <p>
          4. Em seguida, mova a agulha para a próxima marca e repita o processo.
          Se o seu pedaço de linha chegar ao fim, faça um nó e continue com uma
          nova, até que você tenha fixado todas as contas.
        </p>

        <p id="voila">Voilá!</p>

        <div className="imgsJeans">
          <Image src="/img5jeans.png" alt="" layout="fill" />
        </div>
      </Content>

      <Footer />
    </Container>
  );
}
