import React from 'react'
import Avatar from 'material-ui/Avatar'
import Fetch from '../../model/fetch'
import Product from "../../components/index/product"
import {Link} from '../../router'
let pattern = new RegExp(/\[(.*)\]/,'ig')

export default class User extends React.Component {
  state = {
    name: '',
    text: '',
    product: []
  }

  componentDidMount() {
    new Fetch(`/user/${this.props.id}`)
      .then((data) => {
        this.setState(data)
      })
    new Fetch(`/product/user/${this.props.id}`)
      .then((data) => {
        this.setState({
          product: data.product
        })
      })
  }
  render() {
    return (
      <div className="max_size">
        <div className="flex product-info">
          <Avatar style={{width: 60, height: 60}} src="/static/image/default-avatar.png" />
          <div className="info">
            <div>{this.state.name}</div>
          </div>
          <div className="info">{this.state.text}</div>
        </div>
        <div>
        {
          this.state.product.map((value) => {
            let image = value.content.match(pattern) || ['']
            return <Link key={value.name+value.id} route={`/product/${value.id}`}><a><Product name={value.name} price={value.price} image={image[0].replace(`[`, ``).replace(`]`,``)} /></a></Link>
          })
        }
        </div>
        <style>{`
          .flex {
            display: flex;
          }
          .info {
            padding: 20px;
          }
          .product-info {
            width: 100%;
            box-shadow: 0 1px 1px 0 rgba(0,0,0,.05);
            background-color: #fff;
            padding: 20px;
            padding: 1rem;
            border-radius: 2px;
            box-sizing: border-box;
            min-height: 5.5rem;
          }
        `}
        </style>
      </div>
    )
  }
}