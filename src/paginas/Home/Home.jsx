import imagem from './petsmart.jpg'
import './Home.css'
import img2 from './pets2.jpg'

const Home = (props) => {
    return ( 
        <section className="principal fundo-escuro ">
        <div>
            <h1> Bem-Vindo(a) ao </h1>
            <img src={imagem} alt="" />
            <p>
            Quer adotar, cachorros e gatos, para que estes animais abandonados tenham uma vida melhor? Encontrar os melhores produtos para seu animalzinho quer seja ele um cachorro, um gato, um pássaro, um peixe, uma cobra ou até mesmo uma iguana? Quer adestrá-lo ou simplesmente deixá-lo em um lugar onde ele será tratado como um rei enquanto você trabalha? Precisa fazer tosa, dar banho, tomar vacinar e até mesmo higiene bucal em seu querido animal? A resposta para tudo isso está em uma das enormes lojas da rede americana PetSmart, onde o animal de estimação é a estrela central. 
            </p>
            <img src={img2} alt="" />
        </div>
      </section>
    )
}
export default Home