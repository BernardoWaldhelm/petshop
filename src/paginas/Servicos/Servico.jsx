import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './estilo.css'

const Servico = ( ) => {
    const {id} = useParams()
    const [servico, setServico] = useState({})
        
        useEffect(() => {
            axios.get('http://localhost:8000/Servicos/'+id)
            .then(response  => { setServico(response.data)
            console.log(response.data);
            })
        }, [id])
        return (
            <div className='tabela'> 
                <h1> {servico.nome}</h1>
                <h1>{servico.preco}</h1>
            </div>
        )
} 
export default Servico