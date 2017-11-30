import Typography from 'material-ui/Typography'

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
      </div>
    </div>
    <style jsx>{`
      .info {
        margin: 50px auto 0;
      }
    `}</style>
  </div>
)
