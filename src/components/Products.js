import React from 'react';
import axios from 'commons/axios';
import ToolBox from 'components/ToolBox';
import Product from 'components/Product';

class Products extends React.Component {
  state = {
    products: []
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
        products: response.data
      })
    })
  }

  render() {
    return (
      <div>
        <ToolBox />
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
