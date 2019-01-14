import React, { Component } from 'react';
import Header from './header';
import ProductList from './productList';

export default class main extends Component {
  constructor(props) {
    super(props)
    this.state = {
       productlist :[
         {
           productname: "MEN'S BETTER THAN NAKED&trade; JACKET",
           productimageurl: "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png",
           id: 1, 
           qty: 1,
           price: 500
           
         }, {
           productname: "WOMEN'S BETTER THAN NAKED&trade; JACKET",
           productimageurl: "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-better-than-naked-jacket-AVKL_NN4_hero.png",
           id: 2, 
           qty: 1,
           price: 599
         }, 
         {
           productname: "WOMEN'S SINGLE-TRACK SHOE",
           productimageurl: "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-single-track-shoe-ALQF_JM3_hero.png",
           id: 3, 
           qty: 1,
           price: 799
         }, 
         {
           productname: "Enduro Boa&reg; Hydration Pack",
           productimageurl: "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/enduro-boa-hydration-pack-AJQZ_JK3_hero.png",
           id: 4, 
           qty: 1,
           price: 999
         }
       ]
    };
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
    this.resetProduct     = this.resetProduct.bind(this);
  }
  incrementCounter = product => {
    const productlist = [...this.state.productlist];
    const index = productlist.indexOf(product);
    productlist[index] = { ...product
    };
    productlist[index].qty++;
    this.setState({
      productlist
    });
  }

  decrementCounter = product => {
    const productlist = [...this.state.productlist];
    const index = productlist.indexOf(product);
    productlist[index] = { ...product};
    if (productlist[index].qty>0)
    {
      productlist[index].qty--;
      this.setState({ productlist });
    }
  }

  deleteCounter = productId => {
    const productlist = this.state.productlist.filter(c => c.id !== productId);
    this.setState({
      productlist: productlist
    });
  }

  resetProduct = () => {
    const productlist = this.state.productlist.map(c => {
      c.qty = 0;
      return c;
    });
    this.setState({
      productlist
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header totalProduct={ this.state.productlist.filter(c => c.qty > 0).length } onReset={ this.resetProduct } />
        <ProductList productlist={ this.state.productlist } onDelete={ this.deleteCounter } onDecrement={ this.decrementCounter } onIncrement={ this.incrementCounter }  />
      </React.Fragment>
    )
    }
}
