import {Component} from 'react'
import Grid from 'material-ui/Grid'
import {connect} from 'react-redux'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import {Link, Router} from '../../router'

class SearchBar extends Component {
  state = {
    keyword: ''
  }

  componentDidMount() {
    this.setState({
      keyword: this.props.keyword
    })
  }

  searchResult = () => {
    if (this.state.keyword)
      Router.pushRoute(`/search/${this.state.keyword}`);
    else 
      Router.pushRoute(`/`);
  }

  inputAny = (e) => {
    if (e.key == 'Enter') {
      if (this.state.keyword)
        this.searchResult()
    }
  }

  changeSearch = (val) => {
    this.setState({keyword: val.target.value})
  }

  render() {
    return (
      <div className="header_search">
        <Grid container spacing={12} className="max_size">
          <Grid item sm={2}>
            <Typography type="display1" gutterBottom className="wt">
              <Link route="/"><a>熊讚購物</a></Link>
            </Typography>
          </Grid>
          <Grid item sm={8}>
            <div className="searchbar-space">
              <div className="searchbar-input">
                <input className="search_bar" maxLength="128" value={this.state.keyword} onChange={this.changeSearch} onKeyPress={this.inputAny} placeholder="搜尋商品，品牌以及賣場" autoComplete="off"/>
              </div>
              <button className="search-btn" onClick={this.searchResult}>
                <i className="material-icons">search</i>
              </button>
            </div>
          </Grid>
          <Grid item sm={2}>
            <div className="shopping_cart-wrapper">
              <span className="flex">
                <Link href="/cart">
                  <IconButton style={{
                      width: 45,
                      height: 45
                    }}>
                      <span className="material-icons icon">shopping_cart</span>
                  </IconButton>
                </Link>
              </span>
            </div>
          </Grid>
        </Grid>
        <style jsx>{`
          .header_search {
            padding: 1.6rem 0 1rem;
          }

          .search_bar {
            outline: none;
            border: none;
            padding: 10px;
            margin: 0;
            width: 100%;
            font-size: 0.9rem;
          }

          .searchbar-space {
            padding: 3px 5px;
            display: flex;
            width: 100%;
            box-shadow: 0 0.2rem 0.4rem rgba(0,0,0,.09);
            background: white;
            box-sizing: border-box;
          }

          .searchbar-input {
            display: flex;
            height: 2.5rem;
            flex: 5;
          }

          .search-btn {
            margin-top: 1px;
            background: #ff5722;
            border-radius: 2px;
            border: none;
            height: 100%;
            max-width: 77px;
            padding: 6px 12px;
            flex: 1;
            color: white;
            outline:0;
            cursor: pointer;
          }

          .search-btn:hover {
            background: #ff6736;
          }

          .search-btn:active {
            background: #f25220;
          }

          .icon {
            color: white;
            font-size: 30px;
          }

          .shopping_cart-wrapper {
            display: flex;
            align-items: center;
          }

          .flex {
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: center;
          }
        `}</style>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    keyword: state.search.keyword
  }
}

export default connect(mapStateToProps, null)(SearchBar)
