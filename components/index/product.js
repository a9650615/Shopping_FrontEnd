import React from 'react'

export default class Product extends React.Component {
  render() {
    return (
      <div className="item">
        <div className="image-wrapper">
          <div className="image" style={{backgroundImage: `url(${this.props.image})`}}></div>
        </div>
        <div className="item-info">
          <div className="name">{this.props.name}</div>
          <div className="price">${this.props.price}</div>
          <div className="action">

          </div>
        </div>
        <style jsx>
        {`
          .item {
            box-shadow: 0 0.1rem 0.2rem 0 rgba(0,0,0,.1);
            border-radius: 2px;
            overflow: hidden;
            overflow: visible;
            width: 200px;
            height: auto;
            min-height: 300px;
            position: relative;
            background: #fff;
            display: inline-block;
            margin: 10px;
          }
          .price {
            color: #ff5722;
            font-size: .8rem;
          }
          .name {
            overflow: hidden;
            word-wrap: break-word;
            line-height: 18px;
            line-height: 1.8rem;
            height: 35px;
            height: 3.5rem;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
          .item-info {
            padding: 0 1rem 1rem;
            z-index: 2;
            background: #fff;
            position: relative;
            color: black;
          }
          .image-wrapper {
            background-position: 50%;
            background-size: cover;
            background-repeat: no-repeat;
            padding-top: 100%;
            height: 50%;
            width: 100%;
            display: block;
            position: relative;
          }
          .image {
            background-position: 50%;
            background-size: cover;
            background-repeat: no-repeat;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
          }
        `}
        </style>
      </div>
    )
  }
}
