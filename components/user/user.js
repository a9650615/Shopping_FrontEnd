import React from 'react'
import Avatar from 'material-ui/Avatar'
import Fetch from '../../model/fetch'

export default class User extends React.Component {
  state = {
    name: '',
    text: ''
  }

  componentDidMount() {
    new Fetch(`/user/id/${this.props.id}`)
      .then((data) => {
        this.setState(data)
      })
  }
  render() {
    return (
      <div className="product-info">
        <div className="flex">
          <Avatar style={{width: 60, height: 60}} src="/static/image/default-avatar.png" />
          <div className="info">
            <div>{this.state.name}</div>
          </div>
          <div className="info">{this.state.text}</div>
        </div>
        <style>{`
          .flex {
            display: flex;
          }
          .info {
            padding: 20px;
          }
          .product-info {
            width: 100%;
            box-shadow: 0 1px 1px 0 rgba(0,0,0,.05);
            background-color: #fff;
            padding: 20px;
            padding: 1rem;
            border-radius: 2px;
            box-sizing: border-box;
            min-height: 5.5rem;
          }
        `}
        </style>
      </div>
    )
  }
}