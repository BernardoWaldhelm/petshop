import "./estilo.css"
import { useState } from "react"

import http from "../../http"

const Login = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const efetuarLogin = (evento) => {
        evento.preventDefault()
        const usuario = {

            email: email,
            senha: senha
        }
        http.post('auth/login', usuario)
            .then(response => {
                console.log(response.data)
                localStorage.setItem('token', response.data.access_token)
            })
            
            .catch(erro => {
                console.log('Algo deu errado')
                console.log(erro)
            })
    }


    const manipuladorEmail = (evento) => {
        setEmail(evento.target.value)
    }
    const manipuladorSenha = (evento) => {
        setSenha(evento.target.value)
    }


    return (
        <div className="geral">
            <form onSubmit={efetuarLogin}>
                <section id="contato" className="subtitulo">
                    <h2>Login</h2>
                </section>
                <section className="contato">
                   
                        <input className="form-control" required value={email} onChange={manipuladorEmail} type="email" placeholder="E-mail" />
                        <input className="form-control" required value={senha} onChange={manipuladorSenha} type="password" placeholder="Senha" />
                        <button>Entrar</button>                                   
                   
                </section>
            </form>

        </div>

    )
}
export default Login