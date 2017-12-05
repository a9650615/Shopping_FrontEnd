import React from 'react'
import { bindActionCreators } from 'redux'
import { initStore, startClock, addCount, serverRenderClock } from '../store'
import withRedux from 'next-redux-wrapper'
import Wrapper from '../components/wrapper'
import User from '../components/user/user'

class UserPage extends React.Component {
  static getInitialProps ({ query, store, isServer }) {
    
    return { }
  }

  componentDidMount () {
  }

  componentWillUnmount () {
  }

  render () {
    let page
    
    return (
      <Wrapper>
        <User />
      </Wrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default withRedux(initStore, null, mapDispatchToProps)(UserPage)
