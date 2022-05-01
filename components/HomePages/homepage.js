import Header from "../Header";
import Footer from "../Footer"

export default function HomePage(){
return (
    <>
      <Header/>
      
      <main>
        <h1>Olá nome-usuario</h1>
        <h3>O que te traz aqui hoje</h3>

      <div>
        <ul>
          <li>
            <button type="button" onClick={() => router.push('/doar')}>Tenho uma Roupa</button>
          </li>
          <li>
            <button type="button" onClick={() => router.push('/doacoes')}>Preciso de uma Roupa</button>
          </li>
          <li>
            <button type="button" onClick={() => router.push('/servicos')}>Ofereço um serviço</button>
        </li>
        </ul>
      </div>

        <h3>Últimas do Blog</h3>  
        <div> {/* fazer um map de fotos do blog */}
          <ul>
            <li> {/* <Image>Blog</Image>*/}Imagem</li>
            <li>{/*<Image>Blog</Image>*/}Imagem</li>
            <li>  {/* <Image>Blog</Image> */}Imagem</li>
          </ul>
        </div>
        <button type="button" onClick={() => router.push('/blog')}>Veja Mais</button>
      </main>
      
      <Footer/>
    </>
)
}