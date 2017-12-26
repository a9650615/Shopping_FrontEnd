import {Component} from 'react'
import Grid from 'material-ui/Grid'
import Avatar from 'material-ui/Avatar'
import Fetch from '../../model/fetch'

class Comment extends Component {
  state = { 
    comment: '',
    clear: false,
    commentList: []
  }

  handleCommentChange = (eve) => {
    this.setState({
      comment: eve.target.innerHTML
    })
  }

  handleCommentFocus = () => {
    this.setState({
      clear: true,
      comment: ''
    })
  }

  componentWillMount() {
    new Fetch(`/comment/product/${this.props.id}`, 'GET')
      .then((val) => {
        this.setState({
          commentList: val.msg
        })
      })
  }

  render() {
    return (
      <div className="comment-item">
        <Grid container>
          <Grid item xs={1}>
          <Avatar
            alt=""
            src="/static/image/default-avatar.png"
          />
          </Grid>
          <Grid item xs={11}>
          {
            this.state.commentList.map((val) => {
              return (
                <div className="comment-item">
                  <a className="comment-user">{val.userList.name}</a>
                  <div className="comment-content">
                    <span>{val.content}</span>
                  </div>
                  <div className="comment-time">{new Date(val.updatedAt).toLocaleDateString()}</div>
                </div>
              )
            })
          }
          </Grid>
        </Grid>
        <div className="comment-box__edit" suppressContentEditableWarning contentEditable onFocus={this.handleCommentFocus} onInput={this.handleCommentChange}>
          {
            this.state.clear == false &&
            <span className="comment-box__placeholder">請留下評論...</span>
          }
        </div>
        <div>
          <button className="button-solid solid--primary">送出</button>
        </div>
        <style jsx>{`
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
              margin-top: 10px;
          }

          .comment-box__edit {
            margin-top: 2rem;
            margin-left: 2rem;
            margin-right: 2rem;
            width: calc(100% - 4rem);
            height: 10rem;
            padding: 1rem;
            border: 1px solid rgba(0,0,0,.26);
            overflow-y: scroll;
            color: rgba(0,0,0,.8);
            outline: none;
          }

          .comment-box__placeholder {
            color: rgba(0,0,0,.8);
          }

          .comment-item{
            display: flex;
            flex-direction: column;
          }

          .comment-item > .comment-user {
            font-size: 0.7rem;
            text-dceoraiton: none;
            color: rgba(0,0,0,.8);
          }

          .comment-content {
            margin-top: 0.4rem;
            color: rgba(0,0,0,.8);
          }

          .comment-time{
            margin-top: 0.4rem;
            font-size: 0.8rem;
            color: rgba(0,0,0,.54);
          }
        `}</style>
      </div>
    )
  }
}

export default Comment