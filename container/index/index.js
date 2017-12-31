import React from 'react'
import {connect} from 'react-redux'
import {Link} from '../../router'
import Product from '../../components/index/product'
import Fetch from '../../model/fetch'
var pattern = new RegExp(/\[(.*)\]/,'ig'); // fragment locater

class Index extends React.Component {
  state = {
    product: []
  }

  componentDidMount() {
    this.componentWillReceiveProps(this.props)
  }

  componentWillReceiveProps(props) {
    let url = '/product/all';
    if (props.keyword) {
      url = `/product/search/${props.keyword}`
    }
    new Fetch(url, 'GET', {})
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
            let image = value.content.match(pattern) || ['']
            return <Link key={value.name+value.id} route={`/product/${value.id}`}><a><Product name={value.name} price={value.price} image={image[0].replace(`[`, ``).replace(`]`,``)} /></a></Link>
          })
        }
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    keyword: state.search.keyword
  }
}

export default connect(mapStateToProps)(Index)
