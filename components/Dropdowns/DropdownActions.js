import { Container } from "./styles";
import Link from "next/link";

const DropdownActions = () => {
    return(
        <Container>
            <ul>
                <li>
                    <Link href="/tenho_roupa" passHref>
                        <a>Tenho uma roupa</a>
                    </Link>
                </li>
                <li>
                    <Link href="/lista_pecas" passHref>
                        <a>Preciso de uma roupa</a>
                    </Link>
                </li>
                <li>
                    <Link href="/cadastrar_servico" passHref>
                        <a>Ofereço um serviço</a>
                    </Link>
                </li>
            </ul>
        </Container>
    )
}

export default DropdownActions;
