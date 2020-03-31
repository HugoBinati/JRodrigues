import React from 'react';
import './home.css';

function Home() {
  return (
    <div className="jumbotron">
      <h1 className="display-1">Seja bem vindo a JRodrigues</h1>
      <p className="lead">Tudo que você precisa pelo melhor preço</p>
      <hr className="my-4" />
      <p>Veja nossos produtos</p>
      <p className="lead">
      <a className="btn btn-primary btn-lg" href="#" role="button">Ver mais</a>
      </p>
    </div>
  )
}
export default Home;