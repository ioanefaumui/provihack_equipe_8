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
    <Container>
      <Header />

      <Main>
        <h1>Cadastre a sua roupa!</h1>

        <span>Os itens marcados com * são obrigatórios</span>

        <form action="/cadastrar_servico" method="post">
          <div className="duplaInputs">
            <div>
              <input
                type="text"
                placeholder="Tipo de peça*"
                onChange={(e) => setNome(e.target.value)}
                aria-label="Digite o tipo da sua roupa"
                id="inputType"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Tam.*"
                onChange={(e) => setHorarioAtendimento(e.target.value)}
                aria-label="Digite o tamanho da sua roupa"
                id="inputTam"
              />
            </div>
          </div>

          <div className="inputsRadio">
            <p>Condição:</p>

            <input
              type="radio"
              id="novo"
              name="condicao"
              value="novo"
              className="inputRadio"
            />
            <label htmlFor="novo">Novo</label>

            <input
              type="radio"
              id="usado"
              name="condicao"
              value="usado"
              className="inputRadio"
            />
            <label htmlFor="usado">Usado</label>
          </div>

          <div className="inputsRadio">
            <p>Gênero:</p>

            <input
              type="radio"
              id="masculino"
              name="genero"
              value="masculino"
              className="inputRadio"
            />
            <label htmlFor="masculino">Masculino</label>

            <input
              type="radio"
              id="feminino"
              name="genero"
              value="feminino"
              className="inputRadio"
            />
            <label htmlFor="feminino">Feminino</label>

            <input
              type="radio"
              id="unissex"
              name="genero"
              value="unissex"
              className="inputRadio"
            />
            <label htmlFor="unissex">Unissex</label>
          </div>

          <div className="duplaInputs">
            <div>
              <input
                type="text"
                placeholder="Cor*"
                onChange={(e) => setNome(e.target.value)}
                aria-label="Digite a cor da sua roupa"
                id="inputColor"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Marca"
                onChange={(e) => setHorarioAtendimento(e.target.value)}
                aria-label="Digite a marca da sua roupa"
                id="inputMarca"
              />
            </div>
          </div>

          <div className="duplaInputs">
            <div>
              <input
                type="text"
                placeholder="Localização*"
                onChange={(e) => setNome(e.target.value)}
                aria-label="Digite sua localização"
                id="inputLocal"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="UF*"
                onChange={(e) => setHorarioAtendimento(e.target.value)}
                aria-label="Digite o estado onde você mora"
                id="inputTam"
              />
            </div>
          </div>

          <div>
            <textarea
              type="text"
              placeholder="Descrição"
              onChange={(e) => setDescricao(e.target.value)}
              aria-label="Escreva uma descrição do seu serviço"
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
    </Container>
  );
}
