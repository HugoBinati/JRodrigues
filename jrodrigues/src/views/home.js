import React from 'react';

function Home() {
    return (
        <div className="jumbotron" id="mudarcor">
            <h1 className="display-1" >Seja Bem vindo a JRodrigues</h1>
            <p className="lead"
            >Aqui temos tudo que você precisa pelo melhor preço
            </p>
            <hr className="my-4" />
            <p>Veja todos nosso produtos</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">Produtos</a>
            </p>
        </div>
    )
}

export default Home;