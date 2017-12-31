import React from 'react'
import { bindActionCreators } from 'redux'
import { initStore, startClock, addCount, serverRenderClock } from '../store'
import withRedux from 'next-redux-wrapper'
import Wrapper from '../components/seller/wrapper'
import Index from '../container/seller'
import AddProduct from '../container/seller/addProduct'
import MyProduct from '../container/seller/myProduct'

class Counter extends React.Component {
  static getInitialProps ({ query, store, isServer }) {
    
    return { }
  }

  componentDidMount () {
  }

  componentWillUnmount () {
  }

  render () {
    let page
    switch(this.props.url.query.type) {
      case 'addproduct': 
        page = <AddProduct />;
        break;
      case 'product':
        page = <MyProduct />;
        break;
      case 'editproduct':
        page = <AddProduct prod_id={this.props.url.query.id} />;
        break;
      default:
        page = (<Index />)
    }
    return (
      <Wrapper>
        {page}
      </Wrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default withRedux(initStore, null, mapDispatchToProps)(Counter)
