import React from 'react';

import Currency from './currency.jsx';

import '../assets/style/app.css';

import dataMonnaies from '../data/currencies.js';

export default class convertAppV1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {euro : "1", currencies : []};
        this.handleCLick = this.handleCLick.bind(this);
      }
    async componentDidMount() {
      const data = await simulateFetch('http://source.of.data/currencies'); // requête simulée
      this.setState({ currencies : data });
    }

    handleCLick() {
      const prix = this.refs.prix.value
      this.setState({ euro : prix})
    }
    
    render() {
      return (
        <div class="app" >
          <input type = "text" ref="prix"/>
          €
          <button onClick ={this.handleCLick}>OK</button>
          <Currency
          monnaie = {dataMonnaies}
          euro = {parseFloat(this.state.euro)}
          /> 

        </div>
      );
    }
}