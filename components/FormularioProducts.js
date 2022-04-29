export default function FormularioProducts() {

    const [descricao, setDescricao] = useState("")
    const [estadoDeUso, setEstadoDeUso] = useState("")
    const [tamanho, setTamanho] = useState("")
    const [imagem, setImagem] = useState("")
    const [cor, setCor] = useState("")
    const [disponivel, setDisponivel] = useState("")
  
      
    
  
    if(descricao.value == ""){
      return "Por favor, digite a descrição do produto"
    }
    if(tamanho.value == ""){
      return "Está faltando o tamanho do Item"
    }
    if(cor.value == ""){
      return "Está faltando a cor"
    }
  
    
      
    return (
     <>
     <form action="/send-data-here" method='post' >
       <label>Descrição: </label>
        <input name="descricao" type="text" maxLength="60"  required
        onChange={(event) => setDescricao(event.target.value)}/>
  <br/>
        <label>Estado de uso: </label>
        <select name="estado_de_uso" required
         onChange={(event) => setEstadoDeUso(event.target.value)}>
          <option value="bom">Bom</option>
          <option value="regular">Regular</option>
          <option value="otimo">Otimo</option>
        </select>
  <br/>
        <label>Tamanho: </label>
        <input name="tamanho" type="text" maxLength="40" required
         onChange={(event) => setTamanho(event.target.value)}/>
  <br/>
        {/* <Image name="img"src={img} alt="imagem"/> */}
        <label>Cor: </label>
        <input name="cor" type="text" maxLength="60" required
         onChange={(event) => setCor(event.target.value)}/>
  <br/>a
      <label>Disponivel: </label>
        <select name="disponivel" required
         onChange={(event) => setDescricao(event.target.value)}>
          <option value="True">Vendido</option>
          <option value="False">Disponivel</option>
        </select>
        <button type="submit">Enviar</button>
     </form>
     <ul>
     </ul>
     <p>
      {Date.now()}
     </p>
     </>
    )
  }
  