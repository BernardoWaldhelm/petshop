import { useEffect, useState } from "react";
import http from "../../http";
import Cabecalho from "../Cabecalho";
import CardProduto from "../Card/CardProduto";
import './estilo.css'


const Produtos = () => {

    const [produtos, setProdutos] = useState([])

    const mostrarProdutos = () => {
        http.get('produtos').then(response => {
           
            setProdutos(response.data)
        })
            .catch(erro => {
                console.log(erro)
            })
    }
    useEffect(() => {
        mostrarProdutos()
    }, [])

    return (
        <div className='tabela'>
            <Cabecalho />

            <div>
                
                    
                    {produtos.map((item) => <CardProduto key={item.id} nome={item.nome} preco={item.preco} id={item.id}/>)}

             


            </div>
        </div>
    )
}
export default Produtos