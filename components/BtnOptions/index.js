import { Content } from "./styles";
import Link from "next/link";
import { useRouter } from "next/router";

const BtnOptions = ({ background, text, pathLink }) => {
  const router = useRouter();

  return (
    <Content background={background} onClick={() => router.push(pathLink)}>
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
