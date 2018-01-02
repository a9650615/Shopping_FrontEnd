import {Component} from 'react'
import {connect} from 'react-redux'
import Fetch from '../../model/fetch'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
import List from '../../components/cart/list'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'

class Cart extends Component {
  state = {
    total: 0,
    list: [],
    orders: []
  }

  componentDidMount = () => {
    let total = 0
    new Fetch(`/shopping_cart/${this.props.user_id}`, 'GET')
      .then((val) => {
        val.msg.forEach(element => {
          total += element.productList.price * element.amount
        });
        this.setState({
          list: val.msg,
          total
        })
      })
    let allOrders = []
    new Fetch(`/order/user/${this.props.user_id}`, 'GET')
      .then(async (val) => {
        allOrders = val.data
        await allOrders.forEach(async (val, i) => {
          await new Fetch(`/order/${val.id}`)
            .then((val) => {
              allOrders[i].detail = val.data
              if (i == allOrders.length-1){
                this.setState({
                  orders: allOrders
                })
              }
            })
        })
      })
  }

  sendToOrder = () => {
    let product = this.state.list.map(val => {
      return `product[]={"amount": ${val.amount}, "product_id": ${val.productList.id}}`
    })
    product.push(`price=${this.state.total}`)
    product.push(`state=0`)
    product.push(`user_id=${this.props.user_id}`)
    if (this.state.list.length)
    new Fetch(`/order`, 'POST', product.join('&'))
      .then(() => {
        new Fetch(`/shopping_cart/${this.props.user_id}`,'DELETE')
          .then(() => {
            this.componentDidMount()
          })
      })
  }

  render() {
    return (
      <div className="max_size">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>圖片</TableCell>
              <TableCell>商品名稱</TableCell>
              <TableCell numeric>價格</TableCell>
              <TableCell numeric>數量</TableCell>
              <TableCell>刪除</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              this.state.list.map((val, i) => {
                return (
                  <List key={val.id+''+i} order={{
                    amount: val.amount,
                    id: val.id
                  }} product={val.productList} onDelete={this.componentDidMount} />
                )
              })
            }
          </TableBody>
        </Table>
        <div>
          {
            this.state.list.length > 0&&
            <button className="button-solid solid--primary" onClick={this.sendToOrder}>結帳</button>
          }
        </div>
        <h3>
          已定訂單
        </h3>
        {
          this.state.orders.map((val) => {
            console.log(val)
            return (
              <Paper key={val.id} style={{marginBottom: 30}}>
                <Table>
                <TableHead>
                  <TableRow>
                    <TableCell numeric>名稱</TableCell>
                    <TableCell numeric>價格</TableCell>
                    <TableCell numeric>數量</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    val.detail&&
                    val.detail.map((val, i) => {
                      return (
                        <TableRow key={val.id}>
                          <TableCell>{val.name}</TableCell>
                          <TableCell>{val.price}</TableCell>
                          <TableCell>{val.buy_amount}</TableCell>
                        </TableRow>
                      )
                    })
                  }
                </TableBody>
              </Table>
              </Paper>
            )
          })
        }
        <style>{`
          .right {
            text-align: right;
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
              float: right;
              margin-top: 20px;
          }
        `}
        </style>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    user_id: state.user.id
  }
}

export default connect(mapStateToProps)(Cart)
