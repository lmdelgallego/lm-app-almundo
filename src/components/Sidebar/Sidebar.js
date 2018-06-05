import React, { Component } from 'react';

import './Sidebar.css';
import Icon from '../Icons/Icons';

class Sidebar extends Component {

  constructor(props){
    super(props);
  }

  isActive(){
    return 'Sidebar '+((this.props.show) ? 'show' : '');
  }

  render() {

    const numberStars = (num) => {
      const starts = [];
      for (let index = 0; index < num; index++) {
        starts.push(<Icon key={index} icon="star"/>)
      }
      return starts;
    }


    return (
      <div className={this.isActive()}>
        <div className="box">
          <h3>Filtros</h3>
        </div>
        <div className="box">
          <h4><span className="icon"><Icon icon="search"/></span> Nombre de hotel</h4>
          <div className="search-box">
            
              <input type="text" name="hotelname" id="hotelname" placeholder="Ingrese el nombre del hotel" ref={this.props.searchRef}/>
              <button onClick={this.props.handleSearch}>Aceptar</button>
            
          </div >
        </div>
        <div className="box">
          <h4><span className="icon"><Icon icon="star"/></span> Estrellas</h4>
          <ul className="filter-starts">
            <li>
              <input type="checkbox" onClick={ () => {this.props.handleStars(0)} } name="allstars" id="allstars"/>
              <label htmlFor="allstars">Toda las estrellas</label>
            </li>
            <li>
              <input type="checkbox" onClick={ () => {this.props.handleStars(5)} } name="fivestars" id="fivestars"/>
              <label htmlFor="fivestars">
                {numberStars(5)}
              </label>
            </li>
            <li>
              <input type="checkbox" onClick={ () => {this.props.handleStars(4)} } name="fourstars" id="fourstars"/>
              <label htmlFor="fourstars">
                {numberStars(4)}
              </label>
            </li>

            <li>
              <input type="checkbox" onClick={ () => {this.props.handleStars(3)} } name="threestars" id="threestars"/>
              <label htmlFor="threestars">
                {numberStars(3)}
              </label>
            </li>
            <li>
              <input type="checkbox" onClick={ () => {this.props.handleStars(2)} } name="twostars" id="twostars"/>
              <label htmlFor="twostars">
                {numberStars(2)}
              </label>
            </li>
            <li>
              <input type="checkbox" onClick={ () => {this.props.handleStars(1)} } name="onestars" id="onestars"/>
              <label htmlFor="onestars">
                {numberStars(1)}
              </label>
            </li>
            
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;