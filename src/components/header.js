import React, { Component } from 'react'
export default class header extends Component {
  render() {
    return (
        <div className="container">
          <div className = "col-md-8 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <h1 className="navbar-brand">Cart <span className="badge badge-primary badge-pill">{ this.props.totalProduct }</span></h1>
              <button style={ { margin: 'auto 0 auto auto' }} type="button" className="btn btn-primary float-right" onClick={ this.props.onReset }>Reset</button>
            </nav>
          </div>
        </div>
    )
  }
}
