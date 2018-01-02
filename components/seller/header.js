import React from 'react'
import {Link} from '../../router'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import Avatar from 'material-ui/Avatar'
import { withStyles } from 'material-ui/styles'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import User from '../../reducer/User'

class Header extends React.Component {
    componentWillMount() {
      if(typeof localStorage!='undefined')
        this.props.userAction.SaveUser(JSON.parse(localStorage.getItem('user')))
    }
  render() {
    return (
      <div className="main-header">
        <div className="max_size">
          <Grid container>
            <Grid item sm={7}>
              <div className="title">
                <Typography type="title" style={{color: 'white', fontWeight: '100'}}>
                  <Link route="/seller">
                    <a href="/seller">熊讚賣家中心</a>
                  </Link>
                </Typography>
              </div>
            </Grid>
            <Grid item sm={5}>
              <Grid container justify="flex-end">
                <Grid item style={{padding: 0}}>
                  <div className="select-item">
                    <Link route="/">
                      <div className="account">
                        <Avatar src="/static/image/default-avatar.png" style={{width: 25, height: 25, display: 'inline-block'}}/>
                        <span className="account-name">{this.props.user.name}</span>
                      </div>
                    </Link>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <style jsx>{`
          .main-header {
            background: #ff5722;
            padding: 10px 0;
            color: white;
            position: fixed;
            width: 100%;
          }
  
          .account {
            display: flex;
            align-items: center;
          }
  
          .account-name {
            padding-left: 10px;
          }
  
          .select-item {
            height: 100%;
            padding: 4px 10px;
            display: flex;
            cursor: pointer;
          }
  
          .select-item:hover {
            background: #e84f1e;
          }
        `}</style>
      </div>
    )
  }
}

let mapStateToProp = (state) => {
  return {
    user: state.user
  }
}

let mapActionToProps = (dispatch) => {
  return {
    userAction: bindActionCreators(User, dispatch)
  }
}

export default connect(mapStateToProp, mapActionToProps)(Header)
