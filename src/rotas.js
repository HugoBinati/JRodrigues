import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/home/home';
import Produtos from './views/produtos/produtos';
import CadastroProduto from './views/cadastroproduto/cadastroproduto';

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/produtos" component={Produtos} />
                <Route exact path="/cadastroproduto" component={CadastroProduto}/>
            </Switch>
        </BrowserRouter>
    )
}