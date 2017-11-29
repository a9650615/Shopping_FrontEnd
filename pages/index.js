import React from 'react'
import { bindActionCreators } from 'redux'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'

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
      <div>index</div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // startClock: bindActionCreators(startClock, dispatch)
  }
}

export default withRedux(initStore, null, mapDispatchToProps)(Counter)
