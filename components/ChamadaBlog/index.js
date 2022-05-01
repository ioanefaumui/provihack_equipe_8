import { Container } from "./styles";
import Image from "next/image";

const ChamadaBlog = ({ text, img, altImg }) => {
  return (
    <Container>
      <div className="imgChamada">
        <Image
          src={img}
          alt={altImg}
          layout="fill"
        />
      </div>
      <p>{text}</p>
    </Container>
  );
};

export default ChamadaBlog;
