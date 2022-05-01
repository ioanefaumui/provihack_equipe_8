import { ContainerUser } from "./styles";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

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
            <a onClick={() => signOut}>Sair</a>
          </Link>
        </li>
      </ul>
    </ContainerUser>
  );
};

export default DropdownUser;
