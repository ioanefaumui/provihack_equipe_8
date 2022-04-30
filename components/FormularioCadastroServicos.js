import { useEffect, useState } from "react";

export default function FormularioCadastroServicos() {
  const [descricao, setDescricao] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [endereco, setEndereco] = useState("");

  if (descricao.value == "") {
    return "Por favor, digite a descrição do seu serviço";
  }
  if (cidade.value == "") {
    return "Está faltando preencher o campo";
  }
  if (estado.value == "") {
    return "Está faltando preencher o campo";
  }
  if(endereco.value == ""){
    return "Está faltando preencher o campo";
  }

  useEffect(() => {
    console.log(estado);
  }, [estado]);

  return (
    <>
      <form action="/cadastro_servicos" method="post">
        <label>Descrição: </label>
        <input
          placeholder="Digite quais são os tipos de serviços"
          name="descricao"
          type="text"
          maxLength="1000"
          required
          onChange={(event) => setDescricao(event.target.value)}
        />
        <br />
        <label>Cidade: </label>
        <input
          name="cidade"
          type="text"
          maxLength="80"
          required
          onChange={(event) => setCidade(event.target.value)}
        />
        <br />
        
        <label>Estado: </label>
      <select name="estados-brasil"
     onChange={(event) => setEstado(event.target.value)}
     >
       <option value="">Select...</option>
      <option value="AC">Acre</option>
      <option value="AL">Alagoas</option>
      <option value="AP">Amapá</option>
      <option value="AM">Amazonas</option>
      <option value="BA">Bahia</option>
      <option value="CE">Ceará</option>
      <option value="DF">Distrito Federal</option>
      <option value="ES">Espírito Santo</option>
      <option value="GO">Goiás</option>
      <option value="MA">Maranhão</option>
      <option value="MT">Mato Grosso</option>
      <option value="MS">Mato Grosso do Sul</option>
      <option value="MG">Minas Gerais</option>
      <option value="PA">Pará</option>
      <option value="PB">Paraíba</option>
      <option value="PR">Paraná</option>
      <option value="PE">Pernambuco</option>
      <option value="PI">Piauí</option>
      <option value="RJ">Rio de Janeiro</option>
      <option value="RN">Rio Grande do Norte</option>
      <option value="RS">Rio Grande do Sul</option>
      <option value="RO">Rondônia</option>
      <option value="RR">Roraima</option>
      <option value="SC">Santa Catarina</option>
      <option value="SP">São Paulo</option>
      <option value="SE">Sergipe</option>
      <option value="TO">Tocantins</option>
      </select>
        <br />

        <label>endereço: </label>
        <input
          name="endereco"
          required
          onChange={(event) => setEndereco(event.target.value)}
        >
        </input>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

