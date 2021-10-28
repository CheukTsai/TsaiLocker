import React from 'react';
import axios from 'commons/axios';
import ToolBox from 'components/ToolBox';
import Product from 'components/Product';

class Products extends React.Component {
  state = {
    products: [],
    defaultProducts: []  // for search engine reboot
  }

  componentDidMount() {
    // fetch('http://localhost:3300/products').then(response => response.json()).then(
    //   data => {
    //     console.log(data);
    //     this.setState({
    //       products: data
    //     })

    //   })
    // use AXIOS instead of built-in fetch
    axios.get('/products').then(response => {
      this.setState({
        products: response.data,
        defaultProducts: response.data
      })
    })
  }

  search = text => {
    console.log(text);

    // 1. Get a new Array of products
    let _products = [...this.state.defaultProducts]

    // 2. Filter new array
    _products = _products.filter(p => {
      const matchArray = p.name.match(new RegExp(text, 'gi'))
      return !!matchArray
    })

    // 3. setstate with filtered array
    this.setState({
      products: _products
    })
  }

  render() {
    return (
      <div>
        <ToolBox search={this.search} />
        <div className="products">
          <div className="columns is-multiline is-desktop">
            {
              this.state.products.map(p => {
                return (
                  <div className="column is-3" key={p.id}>
                    <Product product={p} />
                  </div>)
              })
            }
            {/* <div className="column is-3">
              <Product product={this.product} />
            </div> */}
            {/* <div className="column is-3">
              <Product />
            </div>
            <div className="column is-3">
              <Product />
            </div>
            <div className="column is-3">
              <Product />
            </div>
            <div className="column is-3">
              <Product />
            </div> */}
          </div>
        </div>
      </div>


    );
  }
}

export default Products;
