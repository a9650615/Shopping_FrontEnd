import Typography from 'material-ui/Typography'
import {Link} from  '../../router'

export default () => (
  <div className="max_size info">
    <div className="ct">
      <Typography type="display1" gutterBottom>
        歡迎使用熊讚賣家中心
      </Typography>
      <div className="info">
        <Typography type="subtitle" gutterBottom style={{color: '#666'}}>
          管理賣場超簡單！替你量身打造，可以輕鬆編輯商品、追蹤訂單、管理顧客，就是一次搞定啦！
        </Typography>
        <Link route="/seller/addproduct" href="/seller/addproduct">
          <a>
            <div className="buttons">
              <div className="home-big-button">
                <div className="home-big-button-icon iconAddProduct">
                  <div>
                  <svg className="home-big-button__svg" viewBox="0 0 32 32"><path d="M17.5 2.5h-3v12h-12v3h12v12h3v-12h12v-3h-12v-12z"></path></svg>
                </div>
              </div>
              <div className="home-big-button__title">新增商品</div></div>
            </div>
          </a>
        </Link>
        <Link route="/seller/product">
          <a>
            <div className="buttons">
              <div className="home-big-button">
                <div className="home-big-button-icon iconProduct">
                  <div>
                  <svg className="home-big-button__svg" viewBox="0 0 32 32"><path d="M29.5 12.4h-1.8v18H4.3v-18H2.5V7h7.8c-.4-.6-.6-1.2-.6-1.8 0-2 1.6-3.6 3.6-3.6 1.1 0 2.1.5 2.7 1.3.6-.8 1.6-1.3 2.7-1.3 2 0 3.6 1.6 3.6 3.6 0 .6-.2 1.3-.5 1.8h7.8v5.4zM16.9 28.6h9v-7.2h-9v7.2zm0-9h9v-7.2h-9v7.2zm-10.8 9h9v-7.2h-9v7.2zm0-9h9v-7.2h-9v7.2zm7.2-16.2c-1 0-1.8.8-1.8 1.8S12.3 7 13.3 7s1.8-.8 1.8-1.8-.8-1.8-1.8-1.8zm5.4 0c-1 0-1.8.8-1.8 1.8S17.7 7 18.7 7s1.8-.8 1.8-1.8-.8-1.8-1.8-1.8zm9 5.4H4.3v1.8h23.5V8.8z"></path></svg>
                </div>
              </div>
              <div className="home-big-button__title">我的商品</div></div>
            </div>
          </a>
        </Link>
        {/* <Link route="/seller/mySelling">
          <a>
            <div className="buttons">
              <div className="home-big-button">
                <div className="home-big-button-icon iconMyProfit">
                  <div>
                  <svg className="home-big-button__svg" viewBox="0 0 32 32"><path d="M28 16.9v12.8H4V16.6c-1-.9-1.7-2.6-1.7-4.1L5.7 2.2h20.6l3.4 10.3c.1 1.8-.4 3.5-1.7 4.4zM5.7 28h20.6v-3.4H5.7V28zm0-5.1h20.6v-5.2c-.3 0-.5.1-.9.1-1.3 0-2.7-.7-3.4-1.7-.7 1-1.6 1.7-3 1.7-1.2 0-2.3-.9-3-1.7-.7.9-1.8 1.7-3 1.7-1.4 0-2.3-.7-3-1.7-.8 1-2.2 1.7-3.5 1.7-.3 0-.5 0-.8-.1v5.2zM25.2 4H6.8l-2.3 6.9h22.9L25.2 4zM4 12.6C4.2 14 5.3 16 6.5 16s2.7 0 2.7-1.7h1.7s0 1.7 2.1 1.7 2.1-1.7 2.1-1.7h1.8S16.8 16 19 16c2.1 0 2.1-1.7 2.1-1.7H23s0 1.7 2.7 1.7c2.5 0 2.5-3.4 2.5-3.4H4z"></path></svg>
                </div>
              </div>
              <div className="home-big-button__title">我的銷售</div></div>
            </div>
          </a>
        </Link> */}
      </div>
    </div>
    <style jsx>{`
      .info {
        margin: 50px auto 0;
      }
      
      .iconProduct {
        background-image:url('/static/image/bg-product.png') !important; 
        background-size: cover;
      }
      .iconAddProduct {
        background-image:url('/static/image/bg-sales.png') !important; 
        background-size: cover;
      }
      .iconMyProfit {
        background-image: url('/static/image/bg-income.png') !important;
        background-size: cover;
      }
      .home-big-button {
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        margin: 56px 24px;
        flex-direction: column;
      }
      .home-big-button__title {
          font-size: 18px;
          color: #666;
          margin-top: 20px;
          text-align: center;
      }
      .home-big-button__svg {
            display: block;
            fill: #fff;
            width: 48px;
            height: 48px;
      }
      .home-big-button-icon:hover {
        top: -10px;
      }
      .home-big-button-icon {
          width: 120px;
          height: 120px;
          border-radius: 100%;
          box-shadow: 0 0.5rem 1rem rgba(0,0,0,.05);
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-justify-content: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-align-items: center;
          -ms-flex-align: center;
          align-items: center;
          transition: all .3s ease;
          top: 0;
          position: relative;
      }
      .buttons {
        margin: 32px auto 0;
        text-align: center;
        display: inline-block;
      }
    `}</style>
  </div>
)
