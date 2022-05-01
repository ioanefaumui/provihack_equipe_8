import Router from "next/router";
import { useState } from "react"
import styles from "../styles/pages/PecasId.module.css";

export default function PecasId(){

    const [ product,setProduct] = useState([
        {
            tipo: 'Calça',
            num: 44,
            condicao:  'Usada',
            genero:  'Feminino',
            material: 'Jeans',
            cor: 'Azul',
            marca: 'Blue Steel',
            local: 'Campinas-SP',
            descricao: 'Calça jeans em ótimo estado! Estou doando pois não me serve mais!',
        
        }
          
    ])

    return(
        <div className={styles.container}>
        <ul className={styles.list}>
            {product.map((item,index) =>(<li className={styles.list} key={index}>
       <div className={styles.containerImg}>
           <div className={styles.imagem}>
                imagem
        </div>
        <div className={styles.imagembottom}>
            <div className={styles.imagem2}> imagem1</div>
            <div className={styles.imagem2}> imagem2</div>
            <div className={styles.imagem2}> imagem3</div>
        </div>
       </div>
        
         <div className={styles.productList}>
          <h1 className={styles.title}>{product[0].tipo} {product[0].genero}</h1>
                <span><strong> Tipo: </strong> {item.tipo}</span>
                <span><strong>  Numeração:  </strong>{item.num}</span>
                <span><strong> Condição: </strong>{item.condicao}</span>
                <span><strong> Gênero: </strong> {item.genero}</span>
                <span><strong> Material:  </strong>{item.material}</span>
                <span><strong> Marca:  </strong>{item.marca}</span>
                <span><strong> Cor: </strong> {item.cor}</span>
                <span><strong> Local:  </strong>{item.local}</span>
                <span><strong> Descrição:  </strong>{item.descricao}</span>
        
                <button className={styles.button} onClick={() => Router.push('/chat')}>Quero pra min</button>
            </div>
            </li>) ) }
            </ul>
            </div>
    )
}