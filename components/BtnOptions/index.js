import { Content } from "./styles";
import Link from "next/link";

const BtnOptions = ({ background, text, pathLink }) => {
  return (
    <Content background={background}>
      <Link href={pathLink} passHref>
        <a>
          <div>
            <p>{text}</p>
          </div>
        </a>
      </Link>
    </Content>
  );
};

export default BtnOptions;
