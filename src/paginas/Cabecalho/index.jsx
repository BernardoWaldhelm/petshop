import './estilo.css'
import { Link } from 'react-router-dom'

const Cabecalho = () => {

    const menu = [
        {
            titulo:'Home',
            link:'/'
        },
        {
            titulo:'Produtos',
            link:'/produtos'
        },
        {
            titulo:'Serviços',
            link:'/servicos'
        },
        {
            titulo:'Cadastro',
            link: '/cadastro'
        },
        {
            titulo:'Login',
            link: '/login'
        }
    ]
    

    return (
        <header>
            <nav className='cabecalho'>
                <ul>
                {menu.map(item => <li key={item.titulo}>
                    <Link to={item.link}>{item.titulo}</Link>
                   </li>
                   )}
                </ul> 
            </nav>
        </header>
    )
}

export default Cabecalho