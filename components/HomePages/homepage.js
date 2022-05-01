import styles from "../../styles/pages/HomePage.module.css";
import Header from "../Header";
import Footer from "../Footer"
import { useState } from "react";
export default function HomePage(){

  const [ user , setUser] = useState("Yasmin")
  const [blog, setBlog] = useState([
    {id:1,imagem:"img", description:"aconteu isso e aqui"},
    {id:2,imagem:"img2", description:"aconteu isso e aqui"},
    {id:3,imagem:"img3", description:"aconteu isso e aqui"}
  ])
return (
    <>
      <Header/>
      
      <main className={styles.main}>
        <h1>Olá {user}</h1>
        <h3>O que te traz aqui hoje?</h3>

      <div className={styles.blogPage}>
        <ul className={styles.ulList}>
          <li >
            <button className={styles.liList}type="button" onClick={() => router.push('/doar')}>Tenho uma Roupa</button>
          </li>
          <li>
            <button className={styles.liList}type="button" onClick={() => router.push('/doacoes')}>Preciso de uma Roupa</button>
          </li>
          <li >
            <button className={styles.liList} type="button" onClick={() => router.push('/servicos')}>Ofereço um serviço</button>
        </li>
        </ul>
      </div>

      <div className={styles.blogName}>
        <h3>Últimas do Blog</h3>  
        <div> {/* fazer um map de fotos do blog */}
          <ul  className={styles.ulList}>
            {blog.map((item, index) => (
               <li className={styles.listButton}key={index}> 
               <button className={styles.button}onClick={() => router.push(`/blog ${item.id}`)}>
               <div>{item.imagem}{/*//  <Image src="imagem"/>*/} </div>
               </button>
               <p className={styles.liText}>{item.description}</p>
               </li>
              
            ))}
           
          
          </ul>
        </div>
        <p className={styles.text}>
        <button className={styles.veja}type="button" onClick={() => router.push('/blog')}>Veja Mais</button>
        </p>
      
      </div>
        </main>
      
      <Footer/>
    </>
)
}