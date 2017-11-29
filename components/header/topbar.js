import Link from  'next/link'
import Grid from 'material-ui/Grid'

export default () => (
  <Grid container spacing={12} className="max_size">
    <Grid item sm={6}>
      <Link href="/seller">
        <a className="topbar_nav_a">賣家中心</a>
      </Link>
      <span className="splits_separator"></span>
      <Link href="#">
        <a className="topbar_nav_a">追蹤我們</a>
      </Link>
    </Grid>
    {/* ---- Right Side ---- */}
    <Grid item sm={6}>
      <div className="right-side">
        <a className="topbar_nav_a">通知總覽</a>
        <Link href="#">
          <a className="topbar_nav_a">幫助中心</a>
        </Link>
        <a className="topbar_nav_a">註冊</a>
        <span className="splits_separator"></span>
        <a className="topbar_nav_a">登入</a>
      </div>
    </Grid>
    <style jsx>{`
      .topbar_nav_a {
        font-weight: 500!important;
        font-size: 0.8rem;
        line-height: 2.8rem;
        display: inline-block;
        padding: 0 1rem;
      }

      .splits_separator {
        padding: 0;
        height: 1.3rem;
        border-right: 1px solid hsla(0,0%,100%,.4);
      }

      .right-side {
        text-align: right;
      }
    `}</style>
  </Grid>
)