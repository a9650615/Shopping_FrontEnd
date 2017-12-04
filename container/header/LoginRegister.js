import React from 'react'
import Dialog, { DialogTitle, DialogContent, DialogActions } from 'material-ui/Dialog'
import Fetch from '../../model/fetch'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import User from '../../reducer/User'

let text = [
  {},
  {title: '註冊', url: '/user/', data: {
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
    type: 0
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
        console.log(this.props)
        if (data.status) {
          this.props.user.SaveUser(data)
        } else {

        }
      }).bind(this))
  }
  
  render() {
    return (
      <div className="wrapper">
        <a className="topbar_nav_a" onClick={this.openDialog.bind(this, 1)}>註冊</a>
        <span className="splits_separator"></span>
        <a className="topbar_nav_a" onClick={this.openDialog.bind(this, 2)}>登入</a>
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

export default connect(state => state, mapActionToProp)(LoginRegister)
