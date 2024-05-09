import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products : [
        { title: 'Tran Minh Nam', id: 2210900049},
        { title: 'Cabbage', id: 1},
        { title: 'Garlic', id: 2},
        { title: 'Apple', id: 3},
        { title: 'Protocol', id: 4},
      ]
    }
  }
  render() {
    return (
      <div className='container border mt-5'>
      <h1>Tran Minh Nam - Render Data - Event Form</h1>
      <hr />
      <TmnProductList renderProducts={this.state.products}/>
      </div>
    );
  }
}