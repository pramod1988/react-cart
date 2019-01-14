import React, { Component } from 'react'

export default class product extends Component {

    totalcost = (price,qty) =>
    {
        return price*qty;
    }
  render() {
    return (
        <div>
            <div className="row" style={{ borderBottom:'1px solid #ccc', padding:'20px', margin:'0' }}>
                <div className="col-md-2">
                    <img src={ this.props.product.productimageurl } className="img-fluid" alt={ this.props.product.productname } />
                </div>
                <div class="col-md-3" style={{ alignSelf: 'center' }}>
                    <h2 style={{ fontSize:'18px' }}>{ this.props.product.productname }</h2>
                </div>
                <div class="col-md-2" style={{ alignSelf: 'center' }}>Rs. { this.props.product.price }  </div>
                <div className="col-md-5 float-right text-right" style={{ alignSelf: 'center' }}>
                    <span style={{ padding: '9px 9px 8px' }} className={ this.props.qty===0 ? "badge m-2 badge-warning" : "badge m-2 badge-primary"}>{ this.props.qty }</span>
                    <button type="button" className="btn btn-primary btn-sm m-2" onClick={ () => this.props.onIncrement(this.props.product) }> + </button>
                    <button type="button" className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDecrement(this.props.product)}  disabled={ this.props.qty === 0} > - </button>
                    <span>{ this.totalcost(this.props.product.price,this.props.qty) }</span>
                    <button type="button" className="btn btn-danger btn-sm m-2" onClick={ () => this.props.onDelete(this.props.id) }> Delete </button>
                </div>
            </div>
        </div>
    )
  }
}
