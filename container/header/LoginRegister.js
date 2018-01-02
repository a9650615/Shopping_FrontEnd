import React from 'react'
import Dialog, { DialogTitle, DialogContent, DialogActions } from 'material-ui/Dialog'
import Fetch from '../../model/fetch'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import User from '../../reducer/User'
import { Avatar } from 'material-ui'
import Modal from 'material-ui/Modal'
import Menu, { MenuItem, MenuList } from 'material-ui/Menu'
import {Router} from '../../router'
import Popover from 'material-ui/Popover'

let text = [
  {},
  {title: '註冊', url: '/user/register', data: {
    name: '',
    account: '',
    password: '',
    info: ''
  }},
  {title: '登入', url: '/user/login', data: {
    account: '',
    password: ''
  }}
]
class LoginRegister extends React.Component {
  state = {
    type: 0,
    menuOpen: false
  }

  componentWillMount() {
    if (typeof localStorage != 'undefined') {
      let user = JSON.parse(localStorage.getItem('user'))
      if (user)
        this.props.user.SaveUser(user)
    }
  }

  openDialog(type) {
    this.setState({
      type
    })
  }

  getData() {
    for(let key in text[this.state.type].data){
      text[this.state.type].data[key] = this[key].value
    }

    new Fetch(text[this.state.type].url, 'POST', text[this.state.type].data)
      .then(((data) => {
        if (data.status) {
          this.props.user.SaveUser(data)
          localStorage.setItem('user', JSON.stringify(data))
          this.setState({
            type: 0
          })
        } else {

        }
      }).bind(this))
  }

  hover(state) {
    console.log(state)
    this.setState({
      menuOpen: state
    })
  }

  goTo(page) {
    if (page != 'logout')
      Router.push(page)
    else
    {
      localStorage.setItem('user', JSON.stringify({}))
      this.props.user.SaveUser({id: null})
    }
    this.setState({
      menuOpen: false
    })
  }
  
  render() {
    console.log(this.props)
    return (
      <div className="wrapper">
        {
          this.props.state.user.id &&
          <div className="topbar_nav_a" style={{display: 'inline-block', marginTop: 0}}
            onMouseOver={this.hover.bind(this, true)}
            ref={(inp) => this.over = inp}
          >
            <div style={{justifyContent: 'center', display: 'flex', padding: '0.7rem'}}>
              <span><Avatar style={{width: 20, height: 20}} src="/static/image/default-avatar.png"/></span>
              <a className="topbar_nav_a" style={{padding: '0 2px'}}>{this.props.state.user.name}</a>
            </div>
            <Popover
              open={this.state.menuOpen}
              anchorEl={this.over}
              onRequestClose={this.hover.bind(this, false)}
              onClose={this.hover.bind(this, false)}
            >
              <MenuList open={this.state.menuOpen} onClose={this.hover.bind(this, false)}>
                <MenuItem onClick={this.goTo.bind(this, '/cart')}>購買清單</MenuItem>
                <MenuItem onClick={this.goTo.bind(this, '/user')}>我的帳號</MenuItem>
                <MenuItem onClick={this.goTo.bind(this, 'logout')}>登出</MenuItem>
              </MenuList>
            </Popover>
          </div>
        }
        {
          !this.props.state.user.id &&
          <div style={{marginTop: '10px'}}>
            <a className="topbar_nav_a" onClick={this.openDialog.bind(this, 1)}>註冊</a>
            <span className="splits_separator"></span>
            <a className="topbar_nav_a" onClick={this.openDialog.bind(this, 2)}>登入</a>
          </div>
        }
        <Dialog
          open={this.state.type>0}
        >
          <DialogTitle>{text[this.state.type].title}</DialogTitle>
          <DialogContent>
            <div className="authen-modal">
              {
                this.state.type == 1 &&
                <div>
                  <input type="text" className="input-with-status__input" placeholder="使用者帳號" ref={(input) => this.account = input}  autoComplete="off" />
                  <input type="text" className="input-with-status__input" placeholder="密碼" type="password" ref={(input) => this.password = input} autoComplete="off" />
                  <input type="text" className="input-with-status__input" placeholder="使用者名稱" ref={(input) => this.name = input} autoComplete="off" />
                  <input type="text" className="input-with-status__input" placeholder="簡短介紹" ref={(input) => this.info = input} autoComplete="off" />
                </div>
              }
              {
                this.state.type == 2 &&
                <div>
                  <input type="text" className="input-with-status__input" placeholder="Email/ 手機號碼/ 使用者帳號" ref={(input) => this.account = input}  autoComplete="off" />
                  <input type="text" className="input-with-status__input" placeholder="密碼" type="password" ref={(input) => this.password = input} autoComplete="off" />
                </div>
              }
              <DialogActions>
                <button className="cancel-btn" onClick={this.openDialog.bind(this, 0)}>取消</button>
                <button className="button-solid solid--primary" onClick={this.getData.bind(this)}>{text[this.state.type].title}</button>
              </DialogActions>
            </div>
          </DialogContent>
        </Dialog>
        <style jsx>{`
          .authen-modal {
            width: 500px;
            position: relative;
            background-color: #fff;
            border-radius: 3px;
          }
          .input-with-status__input {
              height: 38px;
              box-sizing: border-box;
              width: 100%;
              padding: 10px;
              background-color: transparent;
              -webkit-box-flex: 1;
              -ms-flex: 1;
              flex: 1;
              outline: none;
              font-size: 0.8rem;
              min-width: 0;
              color: #222;
              border: 1px solid rgba(0,0,0,.14);
              margin-bottom: 15px;
          }
          .button-solid {
              width: 140px;
              text-transform: uppercase;
              font-size: 22.4px;
              font-size: 0.8rem;
              font-weight: 500;
              padding: 12px 0;
              cursor: pointer;
              color: #fff;
              transition: opacity .2s ease;
              border-radius: 2px;
              border: none;
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
              box-shadow: 0 1px 1px 0 rgba(0,0,0,.09);
          }
          .cancel-btn {
              padding: 12px 0;
              box-sizing: border-box;
              width: 140px;
              text-transform: uppercase;
              font-size: 22.4px;
              font-size: 0.8rem;
              font-weight: 400;
              cursor: pointer;
              color: #555;
              margin-right: 6px;
              line-height: 1;
              background: none;
              border: none;
              transition: background-color .1s cubic-bezier(.4,0,.6,1);
          }
          .cancel-btn:hover {
              background: #f8f8f8;
          }
          .auth-form-submit-cancel>.shopee-button-solid {
              width: 140px;
              text-transform: uppercase;
              font-size: 0.8rem;
              font-weight: 500;
              padding: 12px 0;
              cursor: pointer;
          }
          .topbar_nav_a, span {
            font-size: 0.8rem;
          }

          .splits_separator {
            padding: 0;
            height: 1.3rem;
            border-right: 1px solid hsla(0,0%,100%,.4);
            margin: 0px 10px;
          }

          .wrapper {
            display: inline-block;
          }
        `}</style>
      </div>
    )
  }
}

let mapActionToProp = (dispatch) => {
  return {
    user: bindActionCreators(User, dispatch)
  }
}

let mapStateToProp = (state) => {
  return {
    state: state
  }
}

export default connect(mapStateToProp, mapActionToProp)(LoginRegister)
