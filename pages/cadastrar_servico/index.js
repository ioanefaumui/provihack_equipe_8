import { Container, Main } from "./styles";
import { useState } from "react";
import BtnPages from "../../components/BtnPages";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function CadastrarServico() {
  const [nome, setNome] = useState("");
  const [horarioAtendimento, setHorarioAtendimento] = useState("");
  const [contato, setContato] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valores, setValores] = useState("");

  return (
    <>
      <Header />

      <Main>
        <h1>Cadastre o seu serviço!</h1>

        <span>Os itens marcados com * são obrigatórios</span>

        <form action="/cadastrar_servico" method="post">
          <div>
            <input
              type="text"
              placeholder="Nome*"
              onChange={(e) => setNome(e.target.value)}
              aria-label="Digite seu nome"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Horário de Atendimento*"
              onChange={(e) => setHorarioAtendimento(e.target.value)}
              aria-label="Digite seu horário de atendimento"
            />
          </div>
          <div className="divSmallInput">
            <input
              type="text"
              placeholder="Contato*"
              onChange={(e) => setContato(e.target.value)}
              aria-label="Digite seu contato"
              className="smallInput"
            />
          </div>
          <div>
            <textarea
              type="text"
              placeholder="Descrição"
              onChange={(e) => setDescricao(e.target.value)}
              aria-label="Escreva uma descrição do seu serviço"
            />
          </div>
          <div className="divSmallInput">
            <input
              type="text"
              placeholder="Valores a partir de*"
              onChange={(e) => setValores(e.target.value)}
              aria-label="Digite qual o valor mínimo do seu serviço"
              className="smallInput"
            />
          </div>

          <BtnPages
            text="Salvar informações"
            backgroundColor="#157D7E"
            color="#DCF0E2"
            width="300px"
          />
        </form>
      </Main>
      <Footer />
    </>
  );
}
