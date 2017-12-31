import React from 'react'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import Fetch from '../../model/fetch'
// import Router from 'next/router'
import {Router} from '../../router'

let formData = {
  price: 0,
  amount: 0,
  name: '',
  content: '',
  is_discount: 0,
  user_id: 0
}

class AddProduct extends React.Component {

  componentDidMount() {
    if (this.props.prod_id) {
      new Fetch(`/product/id/${this.props.prod_id}`)
        .then((val) => {
          console.log(val)
          let product = val.product
          for (let i in formData) {
            if (this[i])
              this[i].value = product[i]
          }
        })
    }
  }

  sendData() {
    for (let i in formData) {
      formData[i] = this[i]? this[i].value: formData[i]
    }
    formData.user_id = JSON.parse(localStorage.getItem('user')).id
    if (!this.props.prod_id) {
      new Fetch('/product', 'POST', formData)
        .then((data) => {
          console.log(data)
        })
    } else {
      new Fetch(`/product/${this.props.prod_id}`, 'PUT', formData)
        .then((data) => {
          console.log(data)
        })
    }
  }

  cancel() {
    if (!this.props.prod_id)
      Router.pushRoute('/seller')
    else
      Router.pushRoute('/seller/product')
  }
  render() {
    return (
      <div className="max_size">
        <Paper>
          <div className="wrapper">
            <Typography type="title" gutterBottom>基本資訊</Typography>
            <Grid container>
              <Grid xs={12} sm={4} item>
                <div className="label">商品名稱</div>
              </Grid>
              <Grid xs={12} sm={8} item>
                <input type="text" placeholder="" ref={(input) => this.name = input} className="ember-text-field" />
              </Grid>
            </Grid>
            <Grid container>
              <Grid xs={12} sm={4} item>
                <div className="label">商品描述</div>
              </Grid>
              <Grid xs={12} sm={8} item>
                <textarea type="text" placeholder="" ref={(input) => this.content = input} className="ember-text-field" />
              </Grid>
            </Grid>
            <Typography type="title" gutterBottom>價格和庫存</Typography>
            <Grid container>
              <Grid xs={12} sm={4} item>
                <div className="label">價格</div>
              </Grid>
              <Grid xs={12} sm={8} item>
                <input type="number" min="0" placeholder="" ref={(input) => this.price = input} className="ember-text-field" />
              </Grid>
            </Grid>
            <Grid container>
              <Grid xs={12} sm={4} item>
                <div className="label">商品數量</div>
              </Grid>
              <Grid xs={12} sm={8} item>
                <input type="number" min="0" placeholder="" ref={(input) => this.amount = input} className="ember-text-field" />
              </Grid>
            </Grid>
            <Grid container>
              <Grid xs={12} sm={4} item>
                <div style={{display: 'flex'}}>
                  <button className="button-solid solid--primary" onClick={this.sendData.bind(this)}>{this.props.prod_id?'更新':'新增'}</button>
                  <button className="cancel-btn" style={{border: 'solid #ccc 1px', margin: '0 0 0 5px'}} onClick={this.cancel.bind(this)}>取消</button>
                </div>
              </Grid>
              <Grid xs={12} sm={8} item>
                <div className="label">
                  <button className="cancel-btn" style={{border: 'solid #ccc 1px', margin: '0 0 0 5px'}}>刪除</button>
                </div>
              </Grid>
            </Grid>
          </div>
        </Paper>
        <style>{`
          .label {
            text-align: right;
            color: #888;
            padding: 6px;
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
          .wrapper {
            position: relative;
            width: 80%;
            margin: auto;
            text-align: left;
            padding: 50px 10px;
          }
          textarea.ember-text-field {
            height: 120px;
          }
          .ember-text-field {
            height: 38px;
            box-sizing: border-box;
            width: 95%;
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
        `}
        </style>
      </div>
    )
  }
}

export default AddProduct
