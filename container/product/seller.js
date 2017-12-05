import React from 'react'
import Avatar from 'material-ui/Avatar'
import Link from 'next/link'

export default class Seller extends React.Component {
  render() {
    return (
      <div>
        <Link href={`/user/${1}`}>
          <a href={`/user/${1}`}>
            <div className="flex">
              <Avatar style={{width: 60, height: 60}} src="/static/image/default-avatar.png" />
              <div className="info">
                <div>UserName</div>
                <Link href={`/user/${1}`}><a href={`/user/${1}`}><button className="shopee-button-outline ">查看賣場</button></a></Link>
              </div>
            </div>
          </a>
        </Link>
        <style jsx>{`
          .flex {
            display: flex;
          }
          .info {
            color: black;
          }
          .shopee-button-outline:hover {
              color: #ff5722;
              border-color: #ff5722;
          }
          .shopee-button-outline {
            color: rgba(0,0,0,.87);
            font-size: 14px;
            font-size: 0.8rem;
            font-weight: 400;
            text-transform: capitalize;
            height: 32px;
            height: 2.2rem;
            min-width: 100px;
            min-width: 7rem;
            border: 1px solid rgba(0,0,0,.09);
            margin-right: 10px;
            margin-right: 1rem;
            cursor: pointer;
          }
          .info {
            display: inline-block;
            margin-left: 1rem;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
          }
        `}</style>
      </div>
    )
  }
}
