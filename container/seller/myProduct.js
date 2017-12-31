import {Component} from 'react'
import {connect} from 'react-redux'
import Fetch from '../../model/fetch'
import Product from "../../components/index/product"
import {Link} from '../../router'
let pattern = new RegExp(/\[(.*)\]/,'ig');

class MyProduct extends Component {
  state = {
    product: []
  }

  componentDidMount() {
    new Fetch(`/product/user/${this.props.user.id}`, 'GET')
      .then((val) => {
        console.log(val)
        this.setState({
          product: val.product
        })
      })
  }

  render() {
    return (
      <div>
        {
          this.state.product.map((val) => {
            let image = val.content.match(pattern) || ['']
            return (
              <Link route={`/seller/editproduct/${val.id}`} key={val.name+val.id}>
                <a><Product name={val.name} price={val.price} image={image[0].replace(`[`, ``).replace(`]`,``)}/></a>
              </Link>
            )
          })
        }
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

let mapActionToProps = () => {
  return {};
}

export default connect(mapStateToProps, mapActionToProps)(MyProduct);