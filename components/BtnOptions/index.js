import Image from "next/image";
import { Button } from "./styles";

const BtnOptions = ({ icon, altImg, text, backgroundColor }) => {
  return (
    <Button backgroundColor={backgroundColor}>
      <div>
        <Image src={icon} alt={altImg} layout="fill" />
      </div>
      {text}
    </Button>
  );
};

export default BtnOptions;
