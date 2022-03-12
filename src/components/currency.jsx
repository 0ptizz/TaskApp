import React from 'react';

import '../assets/style/currency.css';

export default class Currency extends React.Component {
    constructor(props) {
        super(props);
      }
    
      render() {
          const data = this.props.monnaie.map (monnaie => <div class="currency" key ={monnaie.symbol}>
                                                            {Math.round(this.props.euro*monnaie.rate*100)/100}
                                                            {monnaie.symbol}
                                                        </div>)
        return (
            <div>
                {data}
            </div>
        )
      }
}