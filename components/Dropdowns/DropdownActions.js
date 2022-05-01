import { Container } from "./styles";
import Link from "next/link";

const DropdownActions = () => {
    return(
        <Container>
            <ul>
                <li>
                    <Link href="/tenho_uma_roupa" passHref>
                        <a>Tenho uma roupa</a>
                    </Link>
                </li>
                <li>
                    <Link href="/preciso_de_uma_roupa" passHref>
                        <a>Preciso de uma roupa</a>
                    </Link>
                </li>
                <li>
                    <Link href="/ofereco_um_servico" passHref>
                        <a>Ofereço um serviço</a>
                    </Link>
                </li>
            </ul>
        </Container>
    )
}

export default DropdownActions;
