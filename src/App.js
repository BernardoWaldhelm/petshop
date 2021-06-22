import Home from './paginas/Home/Home';
import Produtos from './paginas/Produtos/Produtos';
import Servicos from './paginas/Servicos/Servicos';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cabecalho from './paginas/Cabecalho';
import PaginaErro from './paginas/Pagina404';
import Produto from './paginas/Produtos/Produto';
import Servico from './paginas/Servicos/Servico';
import Cadastro from './paginas/Cadastro';
import Login from './paginas/Login';

function App() {
  return (

    <BrowserRouter>
    <Cabecalho />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/produtos">
          <Produtos />
        </Route>
        <Route path="/produtos/:id">
          <Produto/>
        </Route>  
        <Route exact path="/servicos">
          <Servicos />
        </Route>
        <Route path="/servicos/:id">
          <Servico />
        </Route>  
        <Route exact path="/cadastro">
          <Cadastro />
        </Route>
        <Route exact path="/Login">
          <Login />
        </Route>
        <Route>
          <PaginaErro />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
