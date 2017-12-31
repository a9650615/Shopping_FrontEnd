import {Link} from  '../../router'
import Grid from 'material-ui/Grid'
import LoginRegister from '../../container/header/LoginRegister'

export default () => (
  <Grid container spacing={12} className="max_size">
    <Grid item sm={6}>
      <Link route="/seller">
        <a className="topbar_nav_a">賣家中心</a>
      </Link>
      <span className="splits_separator"></span>
      <a href="https://www.facebook.com/BGshopping2017/" className="topbar_nav_a">追蹤我們</a>
    </Grid>
    {/* ---- Right Side ---- */}
    <Grid item sm={6}>
      <div className="right-side">
        <a className="topbar_nav_a">通知總覽</a>
        <Link href="#">
          <a className="topbar_nav_a">幫助中心</a>
        </Link>
        <LoginRegister />
      </div>
    </Grid>
    <style jsx>{`
      .topbar_nav_a {
        font-weight: 500!important;
        font-size: 0.8rem;
        line-height: 2.8rem;
        display: inline-block;
        padding: 0 1rem;
        vertical-align: top;
      }

      .topbar_nav_a:first-child {
        padding-left: 0;
      }

      .right-side {
        text-align: right;
      }
    `}</style>
  </Grid>
)