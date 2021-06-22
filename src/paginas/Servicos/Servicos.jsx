import { useEffect, useState } from "react";
import http from "../../http";
import Cabecalho from "../Cabecalho";
import CardServicos from '../Card/CardServicos'
import './estilo.css'


const Servicos = () => {

    const [servicos, setServicos] = useState([])

    const mostrarServicos = () => {
        http.get('servicos').then(response => {
            
            setServicos(response.data)
        })
            .catch(erro => {
                console.log(erro)
            })
    }
    useEffect(() => {
        mostrarServicos()
    }, [])

    return (
        <div className='tabela'>
            <Cabecalho />

            <div>
                
                    {servicos.map((item) => <CardServicos key={item.id} nome={item.nome} preco={item.preco} id={item.id}/>)}
                        


            </div>
        </div>
    )
}
export default Servicos