import React from 'react'
import Grid from 'material-ui/Grid'
import Seller from './seller'
import Tabs, { Tab } from 'material-ui/Tabs'
import Fetch from '../../model/fetch'
import Comment from '../../components/product/comment'

let pattern = new RegExp(/\[(.*)\]/,'ig')

class Index extends React.Component {
  state = {
    amount: 0,
    content: '',
    id: 0,
    name: '',
    price: 0,
    user_id: 0,
    user: {},
    select: 1,
    img: [],
    tabShow: 0,
    mainImg: null
  }

  getImgUrl(str = '') {
    return str.replace('[','').replace(']','')
  }

  componentDidMount() {
    new Fetch(`/product/id/${this.props.id}`)
      .then((data) => {
        data.product.img = []
        if (data.product.content.match(pattern))
        data.product.content.match(pattern).forEach((val) => {
          data.product.img.push(this.getImgUrl(val))
        })
        this.setState(data.product)
        new Fetch(`/user/${data.product.user_id}`)
          .then((data) => {
            this.setState({
              user: data
            })
          })
      })
  }

  add = () => {
    let select = this.state.select
    this.setState({
      select: select < this.state.amount? select+1: select
    })
  }

  cut = () => {
    let select = this.state.select
    this.setState({
      select: select > 1? select-1: select
    })
  }

  addCart() {
    let user = JSON.parse(localStorage.getItem('user'))
    if (user.id && this.state.id)
      new Fetch(`/shopping_cart`, 'POST', {
        user_id: user.id,
        product_id: this.state.id,
        price: this.state.price,
        amount: this.state.select
      })
      .then((data) => {
        console.log(data)
      })
  }

  handleTab = (eve, val) => {
    this.setState({
      tabShow: val
    })
  }

  showComments = () => {
    return (<Comment id={this.state.id} user_id={this.state.user_id}/>)
  }

  changeViewImage = (val) => {
    this.setState({
      mainImg: val
    })
  }

  render() {
    return (
      <div className="max_size">
        <Grid container>
          <Grid item xs={12} sm={4}>
            <div className="image-container">
              <img src={this.state.mainImg||this.state.img[0]} alt=""/>
            </div>
            <div className="image-list">
              {
                this.state.img.map((val) => {
                  return (
                    <img key={val} src={val} alt="" onMouseOver={this.changeViewImage.bind(this, val)}/>
                  )
                })
              }
            </div>
          </Grid>
          <Grid item xs={12} sm={8}>
            <div className="product-info">
              <h1 className="title">{this.state.name}</h1>
              <div className="price">${this.state.price}</div>
              <div className="rating">尚未有評價</div>
              <div className="product-selecter">
                <div className="num-info">數量：</div>
                <div className="selecter">
                  <button onClick={this.cut} className="shopee-button-outline"><svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0"><polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon></svg></button>
                  <input type="text" className="shopee-button-outline shopee-button-outline-mid" value={this.state.select} readOnly />
                  <button onClick={this.add} className="shopee-button-outline"><svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0"><polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon></svg></button>
                </div>
                <span className="num-info">還剩{this.state.amount}件</span>
              </div>
              <button className="shopee-button-solid shopee-button-solid--complement btn-add-to-cart">
                <i className="material-icons icon">add_shopping_cart</i>
                <span onClick={this.addCart.bind(this)} className="shopee-product-info__footer__button-text">加入購物車</span>
              </button>
            </div>
            <div className="shopee-guarantee">
              <span className="guard">熊讚承諾</span>
              <span className="">蝦皮購物保障你的交易安全：我們只會在買家確認收到商品後，才會撥款給賣家！</span>
            </div>
          </Grid>
        </Grid>
        <div className="product-info user-block">
          <Seller user={this.state.user} />
        </div>
        <br />
        <div className="product-info user-block">
          <Tabs
            indicatorColor="#ff5722"
            textColor="#ff5722"
            value={this.state.tabShow}
            onChange={this.handleTab}
          >
            <Tab label="商品詳情"></Tab>
            <Tab label="商品評價"></Tab>
            <Tab label="商品留言"></Tab>
          </Tabs>
          <div className="product-info">
            {this.state.tabShow == 0&& <div>{this.state.content.replace(pattern, '')}</div>}
            {this.state.tabShow == 1&& <div>評分</div>}
            {this.state.tabShow == 2&& <div>{this.showComments()}</div>}
          </div>
        </div>
        <style jsx>{`
        .btn-add-to-cart {
          margin: 10px;
        }
        .shopee-button-solid:hover {
          background: #00a08a;
        }
        .shopee-button-solid {
            padding: 0 12px;
            padding: 0 1.2rem;
            height: 44px;
            height: 4.4rem;
            font-weight: 400;
            text-transform: capitalize;
            font-size: 14px;
            font-size: 1.4rem;
            color: #fff;
            margin-right: 10px;
            margin-right: 1rem;
            box-sizing: border-box;
        }
        .shopee-product-info__footer__button-text {
          vertical-align: top;
          padding: 15px;
          line-height: 30px;
        }
        .shopee-button-solid {
            padding: 0 12px;
            padding: 0 1.2rem;
            height: 44px;
            height: 3.4rem;
            font-weight: 400;
            text-transform: capitalize;
            font-size: 14px;
            font-size: 0.8rem;
            color: #fff;
            margin-right: 10px;
            margin-right: 1rem;
            box-sizing: border-box;
            background: #00bfa5;
            border: none;
            cursor: pointer;
        }
          .product-info {
            padding: 10px;
          }
          .user-block {
            min-height: 100px !important;
          }
          .shopee-button-outline-mid {
              display: inline-block;
              width: 50px;
              width: 5rem !important;
              text-align: center;
              height: 32px;
              height: 2.2rem !important;
              box-sizing: border-box;
              vertical-align: top;
              border-left: none;
              border-right: none;
              font-size: 16px;
              font-size: 1rem;
              font-weight: 400;
              color: #ff5722 !important;
          }
          .shopee-button-outline {
              display: inline-block;
              font-size: 0.8rem;
              width: 32px;
              width: 2.2rem;
              height: 32px;
              height: 2.2rem;
              background: #fff;
              border: #ccc solid 1px;
              color: rgba(0,0,0,.8);
          }
          .selecter {
            display: inline-block;
          }
          .product-selecter {
            margin-top: 4rem;
          }
          .num-info {
            width: 32px;
            margin-right: 1rem;
            margin-left: 1rem;
            white-space: nowrap;
            color: rgba(0,0,0,.54);
            font-size: 14px;
            display: inline-block;
          }
          .rating {
            font-size: 0.8rem;
            margin-top: 10px;
            color: rgba(0,0,0,.54);
          }
          .guard {
            color: #00bfa5;
            text-transform: capitalize;
            font-size: 16px;
            font-size: 1.0rem;
            margin-right: 10px;
          }
          .shopee-guarantee {
            box-shadow: 0 1px 1px 0 rgba(0,0,0,.05);
            border-radius: 2px;
            box-sizing: border-box;
            margin-top: 10px;
            margin-top: 1rem;
            padding: 10px;
            background-color: #fffbf2;
            border: 1px solid #ffedb3;
            padding-left: 20px;
            padding-left: 2rem;
            color: rgba(0,0,0,.54);
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          .image-container {
            width: 100%;
            height: 332px;
            position: relative;
          }
          .image-container img {
            vertical-align: center;
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: 100%;
          }
          .image-list {
          }
          .image-list img {
            width: 70px;
            margin: 10px;
          }
          .price {
            color: #ff5722;
            font-size: 1.4rem;
            font-weight: 700;
          }
          .title {
            font-size: 1.3rem;
            font-weight: 400;
          }
          .product-info {
            width: 100%;
            box-shadow: 0 1px 1px 0 rgba(0,0,0,.05);
            background-color: #fff;
            padding: 20px;
            padding: 1rem;
            border-radius: 2px;
            box-sizing: border-box;
            min-height: 405px;
            min-height: 20.5rem;
          }
        `}</style>
      </div>
    )
  }
}

export default Index
