import React from 'react'
import Header from './header'

class Wrapper extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="cell">
          {this.props.children}
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

export default Wrapper
