import Typography from 'material-ui/Typography'
import Link from  'next/link'

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
        <Link href="/seller/addproduct">
          <a href="/seller/addproduct">
            <div className="buttons">
              <div className="home-big-button">
                <div className="home-big-button-icon iconProduct">
                  <div>
                  <svg className="home-big-button__svg" viewBox="0 0 32 32"><path d="M29.5 12.4h-1.8v18H4.3v-18H2.5V7h7.8c-.4-.6-.6-1.2-.6-1.8 0-2 1.6-3.6 3.6-3.6 1.1 0 2.1.5 2.7 1.3.6-.8 1.6-1.3 2.7-1.3 2 0 3.6 1.6 3.6 3.6 0 .6-.2 1.3-.5 1.8h7.8v5.4zM16.9 28.6h9v-7.2h-9v7.2zm0-9h9v-7.2h-9v7.2zm-10.8 9h9v-7.2h-9v7.2zm0-9h9v-7.2h-9v7.2zm7.2-16.2c-1 0-1.8.8-1.8 1.8S12.3 7 13.3 7s1.8-.8 1.8-1.8-.8-1.8-1.8-1.8zm5.4 0c-1 0-1.8.8-1.8 1.8S17.7 7 18.7 7s1.8-.8 1.8-1.8-.8-1.8-1.8-1.8zm9 5.4H4.3v1.8h23.5V8.8z"></path></svg>
                </div>
              </div>
              <div className="home-big-button__title">新增商品</div></div>
            </div>
          </a>
        </Link>
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
      }
    `}</style>
  </div>
)
