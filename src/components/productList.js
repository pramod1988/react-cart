import React, { Component } from 'react';
import Product from './product';

export default class productList extends Component {
  totalProductCost = products => {
    let productCount = products.length;
    let prodTotal = 0;
    let total = products.map(product => prodTotal += product.qty*product.price);
    return prodTotal;
  }
  render() {
    return (
      <div className="container">
        <div className="col-md-8 mx-auto">
          <div className="list-inline">
              { this.props.productlist.map(product =>
                <Product product={ product } id={ product.id } key={product.id} qty={product.qty} onDelete={ this.props.onDelete } onDecrement={ this.props.onDecrement } onIncrement={ this.props.onIncrement }/>
              )}
          </div>
          <div className="row" style={{ padding:'20px' }}>
              <div className="col-md-8">
                <strong>Total Cost</strong>
              </div>
              <div className="col-md-4 text-center">
                { this.totalProductCost(this.props.productlist) }
              </div>
          </div>
        </div>
      </div>
    )
  }
}
