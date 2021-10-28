import React from 'react';
import axios from 'commons/axios';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ToolBox from 'components/ToolBox';
import Product from 'components/Product';
import Panel from 'components/Panel';
import AddInvertory from 'components/AddInvertory';

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

  toAdd = () => {
    Panel.open({
      component: AddInvertory,
      callback: data => {
        if (data) {
          this.add(data)
        }
      }
    });
  }

  add = product => {
    // Both should be updated
    const _products = [...this.state.products]
    _products.push(product)
    const _dProducts = [...this.state.defaultProducts]
    _dProducts.push(product)

    this.setState({
      products: _products,
      defaultProducts: _dProducts
    })
  }

  render() {
    return (
      <div>
        <ToolBox search={this.search} />
        <div className="products">
          <div className="columns is-multiline is-desktop">
            {/* TransitionGroup will automatically generate a <div>, set component null*/}
            <TransitionGroup component={null}>
              {
                this.state.products.map(p => {
                  return (
                    <CSSTransition classNames="product-fade" timeout={500} key={p.id}>
                      <div className="column is-3" key={p.id}>

                        <Product product={p} />
                      </div>
                    </CSSTransition>
                  )
                })
              }
            </TransitionGroup>
          </div>
          <button className="button is-primary add-btn" onClick={this.toAdd}>add</button>
        </div>
      </div>
    );
  }
}

export default Products;
