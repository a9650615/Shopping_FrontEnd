import React from 'react'
import { bindActionCreators } from 'redux'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'
import Wrapper from '../components/wrapper'
import Index from '../container/index'

class Counter extends React.Component {
  static getInitialProps ({ store, isServer }) {
    // store.dispatch(serverRenderClock(isServer))

    return { }
  }

  componentDidMount () {
  }

  componentWillUnmount () {
  }

  render () {
    return (
      <Wrapper><Index /></Wrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // startClock: bindActionCreators(startClock, dispatch)
  }
}

export default withRedux(initStore, null, mapDispatchToProps)(Counter)
