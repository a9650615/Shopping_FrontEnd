const routes = module.exports = require('next-routes')()

routes
.add('index')
.add('/search/:keyword', 'index')
.add('seller')
.add('product')
.add('/seller/:type', 'seller')
.add('/seller/:type/:id', 'seller')
.add('/product/:id', 'product')
.add('user', '/user/:id', 'user')
// .add('blog', '/blog/:slug')
// .add('user', '/user/:id', 'profile')