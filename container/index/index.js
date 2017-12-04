import React from 'react'
import Product from '../../components/index/product'
import Fetch from '../../model/fetch'
var pattern = new RegExp(/\[(.*)\]/,'ig'); // fragment locater

export default class Index extends React.Component {
  state = {
    product: []
  }

  componentDidMount() {
    new Fetch('/product/all', 'GET', {})
      .then((data) => {
        this.setState({
          product: data.product
        })
      })  
  }
  render() {
    return (
      <div className="max_size">
        {
          this.state.product.map((value) => {
            let image = value.content.match(pattern)
            return <Product key={value.name} name={value.name} price={value.price} image={image[0].replace(`[`, ``).replace(`]`,``)} />
          })
        }
      </div>
    )
  }
}