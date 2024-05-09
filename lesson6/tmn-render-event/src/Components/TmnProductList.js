import React, { Component } from 'react'

export default class TMNProductList extends Component {
  render() {
    let {renderProducts} = this.props;
    console.log("Products:",renderProducts);
    let elementProduct = renderProducts.map((item,index)=>{
      return(
          <>
            <tr key={index}>
              <td>1</td>
              <td>{item.title}</td>
            </tr>
          </>
      )
    })
    return (
      <div>
        <h2>Danh sach san pham</h2>
        <table className='table table-bordered'>
          <thead>
            <th>ID</th>
            <th>Title</th>
          </thead>
          <tbody>
              {elementProduct}
          </tbody>

        </table>
      </div>
    );
  }
}
