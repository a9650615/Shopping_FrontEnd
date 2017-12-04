export default `
  html, body, body>div:first-child, #__next, div[data-reactroot], .fullheight {
    min-height: 100% !important;
    height: 100%;
  }

  body {
    margin: 0;
    height: 100%;
    min-height: 100%;
  }

  a {
    color: white;
    text-decoration: none;
    cursor: pointer;
  }

  .max_size {
    max-width: 1024px;
    margin: auto;
  }

  .ct {
    text-align: center;
  }

  .wt {
    color: white !important;
  }

  .product_page {
    padding: 10px 10px;
    background: #f5f5f5;
    min-height: 500px;
  }

  .solid--primary {
    background: #ff5722;
  }

  button {
    outline: none;
  }
`
