import React from 'react'
import Header from './header'
import {connect} from 'react-redux'
import {Router} from '../../router'

class Wrapper extends React.Component {
  componentWillMount() {
    if (!this.props.user.id) {
      Router.push('/')
    }
  }

  render() {
    return (
      <div className="container">
        <Header />
        <div className="cell">
          {this.props.user.id && this.props.children}
        </div>
        <style jsx>{`
          .container {
            width: 100%;
            height: 100%;
            min-height: 100%;
            display: table;
            overflow: hidden;
            position: relative;
            z-index: 0;
          }
          .cell {
            display: table-cell;
            vertical-align: middle;
            text-align: center;
          }
        `}</style>
      </div>
    )
  }
} 

let mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Wrapper)
