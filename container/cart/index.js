import {Component} from 'react'
import {connect} from 'react-redux'
import Fetch from '../../model/fetch'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
import List from '../../components/cart/list'

class Cart extends Component {
  state = {
    list: []
  }

  componentDidMount = () => {
    new Fetch(`/shopping_cart/${this.props.user_id}`, 'GET')
      .then((val) => {
        this.setState({
          list: val.msg
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
