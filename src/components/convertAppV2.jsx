import React from 'react';

import Currency from './currency.jsx';

import '../assets/style/app.css';

import dataMonnaies from '../data/currencies.js';

export default class convertAppV2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {euro : "1", currencies : []};
        this.handleChangePrice = this.handleChangePrice.bind(this);
      }
    async componentDidMount() {
      const data = await simulateFetch('http://source.of.data/currencies'); // requête simulée
      this.setState({ currencies : data });
    }

    handleChangePrice(event) {
      this.setState({ euro : event.target.value})
    }
    
    render() {
      return (
        <div class="app" >
          <input type = "text" value={this.state.euro} onChange={this.handleChangePrice}/>
          €
          <Currency
          monnaie = {dataMonnaies}
          euro = {parseFloat(this.state.euro)}
          /> 

        </div>
      );
    }
}