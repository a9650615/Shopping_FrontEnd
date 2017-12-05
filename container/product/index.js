import React from 'react'
import Grid from 'material-ui/Grid'
import Seller from './seller'
import Tabs, { Tab } from 'material-ui/Tabs'

class Index extends React.Component {
  render() {
    return (
      <div className="max_size">
        <Grid container>
          <Grid item xs={12} sm={4}>
            <div className="image-container">
              <img src={`https://cfshopeetw-a.akamaihd.net/file/6f4b0ac9489b4e75c4c948052bcfcc6a_tn`} alt=""/>
            </div>
            <div className="image-list">
              <img src={`https://cfshopeetw-a.akamaihd.net/file/6f4b0ac9489b4e75c4c948052bcfcc6a_tn`} alt=""/>
              <img src={`https://cfshopeetw-a.akamaihd.net/file/6f4b0ac9489b4e75c4c948052bcfcc6a_tn`} alt=""/>
              <img src={`https://cfshopeetw-a.akamaihd.net/file/6f4b0ac9489b4e75c4c948052bcfcc6a_tn`} alt=""/>
            </div>
          </Grid>
          <Grid item xs={12} sm={8}>
            <div className="product-info">
              <h1 className="title">技嘉Gigabyte RX480 4gb 顯示卡 遊戲卡 吃雞參考</h1>
              <div className="price">${123}</div>
              <div className="rating">尚未有評價</div>
              <div className="product-selecter">
                <div className="num-info">數量：</div>
                <div class="selecter">
                  <button className="shopee-button-outline"><svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0"><polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon></svg></button>
                  <input type="text" className="shopee-button-outline shopee-button-outline-mid" value="1" readOnly />
                  <button className="shopee-button-outline"><svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0"><polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon></svg></button>
                </div>
                <span className="num-info">還剩{0}件</span>
              </div>
            </div>
            <div className="shopee-guarantee">
              <span className="guard">蝦皮承諾</span>
              <span className="">蝦皮購物保障你的交易安全：我們只會在買家確認收到商品後，才會撥款給賣家！</span>
            </div>
          </Grid>
        </Grid>
        <div className="product-info user-block">
          <Seller />
        </div>
        <br />
        <div className="product-info user-block">
          <Tabs
            indicatorColor="#ff5722"
            textColor="#ff5722"
            value={0}
          >
            <Tab label="商品詳情"></Tab>
            <Tab label="商品評價"></Tab>
            <Tab label="商品留言"></Tab>
          </Tabs>
          <div className="product-info">
            這是一個商品說明
          </div>
        </div>
        <style>{`
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
            width: auto;
            height: auto;
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
