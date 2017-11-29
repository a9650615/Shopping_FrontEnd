import { connect } from 'react-redux'
import Head from './head'
import Header from './header'

export default connect(state => state)(({}) => {
  return (
    <div className="header-top">
      <Head />
      <Header />
      <style jsx>{`
        .header-top {
          background: #f74d18;
          color: #fff;
        }
      `}</style>
    </div>
  )
})
