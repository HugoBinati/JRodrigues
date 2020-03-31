import React from 'react';
import Cimento from '../../assets/img/Cimento.png'
import './produtos.css';


class Produtos extends React.Component {
  render (){
      return(
        <div>
            <div className="jumbotron">
            <h3 className="display-1">Produtos</h3>
            </div>
            <grid className="cards">
                <div className="card mb-3 tamanhocard" align="center" >
                    <h3 className="card-header"></h3>
                    <img alt="Cimento" src={Cimento} />
                    <div className="card-body">
                        <a href="#" className="card-link" >product</a>
                        <br/>
                        <a href="#" className="card-link">price</a>
                    </div>
                </div>     
            </grid>
        </div>  
      )
  }
}
export default Produtos;