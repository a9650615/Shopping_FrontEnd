import React from 'react'
import { connect } from 'react-redux'
import Head from './head'
import Header from './header'
import Footer from './footer'

class Wrapper extends React.Component {
  render() {
    return (
      <div className="header-top">
        <Head />
        <Header />
        <div className="product_page">
          {this.props.children}
        </div>
        <Footer />
        <style jsx>{`
          .header-top {
            background: #f74d18;
            color: #fff;
          }
          .product_page {
            color: black;
          }
        `}</style>
      </div>
    )
  }
}

export default connect(state => state)(Wrapper)
