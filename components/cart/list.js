import {Component} from 'react'
import Table, { TableBody, TableCell, TableRow } from 'material-ui/Table'
import Button from 'material-ui/Button'
import Fetch from '../../model/fetch'

let pattern = new RegExp(/\[(.*)\]/,'ig')

class List extends Component {
  deleteOrder = () => {
    new Fetch(`/shopping_cart/id/${this.props.order.id}`, 'DELETE')
      .then((data) => {
        this.props.onDelete()
      })
  }

  render() {
    let image = this.props.product.content.match(pattern) || ['']
    return (
      <TableRow>
        <TableCell><img src={image[0].replace(`[`, ``).replace(`]`,``)} height={72} /></TableCell>
        <TableCell>{this.props.product.name}</TableCell>
        <TableCell numeric>{this.props.product.price * this.props.order.amount}</TableCell>
        <TableCell numeric>{this.props.order.amount}</TableCell>
        <TableCell>
          <Button onClick={this.deleteOrder}>移除</Button>
        </TableCell>
      </TableRow>
    )
  }
}

export default List
