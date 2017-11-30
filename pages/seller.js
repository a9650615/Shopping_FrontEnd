import React from 'react'
import { bindActionCreators } from 'redux'
import { initStore, startClock, addCount, serverRenderClock } from '../store'
import withRedux from 'next-redux-wrapper'
import Wrapper from '../components/seller/wrapper'
import Index from '../container/seller'

class Counter extends React.Component {
  static getInitialProps ({ store, isServer }) {
    
    return { }
  }

  componentDidMount () {
  }

  componentWillUnmount () {
  }

  render () {
    return (
      <Wrapper>
        <Index />
      </Wrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default withRedux(initStore, null, mapDispatchToProps)(Counter)
