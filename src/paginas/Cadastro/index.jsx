
import { useState } from 'react'
import http from '../../http'
import './estilo.css'

const Cadastro = () => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const efetuarCadastro = (evento) => {
        evento.preventDefault()
        const usuario = {
            nome: nome,
            email: email,
            senha: senha
        }

        http.post('auth/register', usuario)
            .then(response => console.log(response.data))
            .catch(erro => {
                console.log('Algo deu errado')
                console.log(erro)
            })
    }

    const manipuladorNome = (evento) => {
        setNome(evento.target.value)
    }
    const manipuladorEmail = (evento) => {
        setEmail(evento.target.value)
    }
    const manipuladorSenha = (evento) => {
        setSenha(evento.target.value)
    }


    return (

        <div className="geral">
            <form onSubmit={efetuarCadastro}>
                <section  className="subtitulo">
                    <h2>Cadastro</h2>
                </section>
                <section className="contato">
                   
                        <input className="form-control" value={nome} onChange={manipuladorNome} type="text" placeholder="Nome" />
                        <input className="form-control" value={email} onChange={manipuladorEmail} type="email" placeholder="E-mail" />
                        <input className="form-control" value={senha} onChange={manipuladorSenha} type="password" placeholder="Senha" />
                        <button>Cadastrar</button>
                    
                </section>
            </form>
        </div>

    )
}
export default Cadastro