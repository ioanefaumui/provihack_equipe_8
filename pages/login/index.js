import { Container } from "../../styles/login";
import BtnPages from "../../components/BtnPages";
import Image from "next/image";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <div className="content">
        <div className="logo">
          <Image
            src="/logo.png"
            alt="Imagem do usuário em forma circular"
            layout="fill"
          />
        </div>
        <form method="post" action="/api/auth/signin">
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              onChance={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <div className="divPassword">
              <label htmlFor="password">Senha</label>
              <span>Esqueceu a senha?</span>
            </div>

            <input
              type="password"
              id="password"
              name="password"
              onChance={(e) => setPassword(e.target.value)}
            />
          </div>

          <BtnPages
            text="Entrar"
            backgroundColor="#157D7E"
            color="#DCF0E2"
            width="100%"
            // onClick={() => handleClick(email, password)}
          />
        </form>
      </div>
    </Container>
  );
}
