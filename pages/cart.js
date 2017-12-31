import React from 'react'
import { bindActionCreators } from 'redux'
import { initStore, startClock, addCount, serverRenderClock } from '../store'
import withRedux from 'next-redux-wrapper'
import Wrapper from '../components/wrapper'
import Cart from '../container/cart'

class ShoppingCart extends React.Component {
  static getInitialProps ({ query, store, isServer }) {
    
    return { }
  }

  componentDidMount () {
  }

  componentWillUnmount () {
  }

  render () {
    let user = this.props.url.query.id || this.props.user.id
    
    return (
      <Wrapper>
        <Cart />
      </Wrapper>
    )
  }
}

const mapUserToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default withRedux(initStore, mapUserToProps, mapDispatchToProps)(ShoppingCart)
