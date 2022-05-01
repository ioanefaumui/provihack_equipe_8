import { useState } from "react";
import Router from "next/router";
import styles from "../styles/pages/ListaProfissional.module.css";

export default function ListaProfissional(){
    const [profissional, setProfissional] = useState([
        {
            id:1,
            img:"imagem",
            cidade:"mococa",
            estado:"SP",
            servico:30
        },
        {
            id:2,
            img:"imagem",
            cidade:"sao paulo",
            estado:"SP",
            servico:20
        },
        {
            id:3,
            img:"imagem",
            cidade:"Campinas",
            estado:"SP",
            servico:60
        },
        {
            id:4,
            img:"imagem",
            cidade:"rio de janeiro",
            estado:"RJ",
            servico:100
        },
        {
            id:5,
            img:"imagem",
            cidade:"ribeirao preto",
            estado:"SP",
            servico:20
        },
        {
            id:6,
            img:"imagem",
            cidade:"natal",
            estado:"RN",
            servico:30
        },
    ])

    return(
        <main className={styles.main}>
        <h1>Olha quem encontramos!</h1>
        <p>{profissional.length} profissionais encontrados</p>
        <div className={styles.container}>
            <ul  className={styles.ulList}>
                {profissional.map((item) =>(<li className={styles.liList}key={item.id}>
                    <button className={styles.buttonId} onClick={() => Router.push(`/${item.id}`)}>
                            <div className={styles.imagem}>
                            {item.img} {/* <Imagem src={item.img}alt={item.img}/> */}
                            </div>  
                        </button>
                        <div className={styles.props}>
                            <p className={styles.namePeca}>{`Local: ${item.cidade} - ${item.estado}`}</p> 
                            <p className={styles.ptext}>Valor: {item.servico}</p>
                        </div>
                </li>))}
            </ul>
        </div>
        </main>
    )
}