import { ContainerUser } from "./styles";
import Link from "next/link";

const DropdownUser = () => {
  return (
    <ContainerUser>
      <ul>
        <li>
          <Link href="/perfil" passHref>
            <a>Meu cadastro</a>
          </Link>
        </li>
        <li>
          <Link href="/" passHref>
            <a>Sair</a>
          </Link>
        </li>
      </ul>
    </ContainerUser>
  );
};

export default DropdownUser;
