import { Container } from "./styles";
import Image from "next/image";
import Link from "next/link";

const ChamadaBlog = ({ text, img, altImg, pathLink }) => {
  return (
    <Container>
      <Link href={pathLink} passHref>
        <a>
          <div className="imgChamada" id="hoverImg">
            <Image src={img} alt={altImg} layout="fill" />
          </div>
          <p>{text}</p>
        </a>
      </Link>
    </Container>
  );
};

export default ChamadaBlog;
