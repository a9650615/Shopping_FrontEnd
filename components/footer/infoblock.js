import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'

export default () => (
  <div className="footer-info">
    <div className="max_size container grid">
      <Grid container justify="center" spacing={50}>
        <Grid item sm={4}>
          <div className="grid">
            <Typography type="title" align="left">熊讚承諾</Typography>
            <Typography type="caption" gutterBottom>
              熊讚購物保障你的交易安全：我們只會在買家確認收到商品後，才會撥款給賣家！
            </Typography>
          </div>
        </Grid>
        <Grid item sm={4}>
          <div className="grid">
            <Typography type="title" align="left">值得信賴的強大賣家團隊</Typography>
            <Typography type="caption" gutterBottom>
            公開透明的評價系統，即時聊天功能，讓你隨時發問，談出好價格！
            </Typography>
          </div>
        </Grid>
        <Grid item sm={4}>
          <div className="grid">
            <Typography type="title" align="left">免上架費</Typography>
            <Typography type="caption" gutterBottom>
              快速成交好方便，輕鬆上手做頭家!
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
    <style jsx>{`
      .footer-info {
        border-top: 4px solid #ff5722;
        background-color: #fff;
        margin-top: 3px;
      }

      .container {
        padding: 20px 0;
      }

      .grid {
        padding: 15px 30px;
      }
    `}</style>
  </div>
)