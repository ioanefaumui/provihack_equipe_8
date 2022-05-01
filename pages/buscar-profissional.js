import { useState } from "react"
import styles from "../styles/pages/BuscarProfissional.module.css";
export default function BuscarProfissional(){

    const [servicos, setServicos] = useState("")
    const [cidade, setCidade] = useState("")
    const [estado,setEstado] = useState("")

    return(
        <main className={styles.main}>
        <h1>Busque um profissional!</h1>

        <form className={styles.form} action='buscar-profissional' method='get'>
        <input className={styles.inputName}name='servico'
            placeholder="Digite o profissional"required
            onChange={(event) => setServicos(event.target.value)}/>

        <input  className={styles.inputCidade}name='cidade'
            placeholder="Digite a cidade"required
            onChange={(event) => setCidade(event.target.value)}/>

        <input className={styles.inputEstado} name='estado'
            placeholder="UF"required
            onChange={(event) => setEstado(event.target.value)}/>
        <button className={styles.button} type="submit" >Buscar</button>
        </form>
        </main>
    )
}