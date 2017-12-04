const routes = module.exports = require('next-routes')()

routes
.add('index')
.add('seller')
.add('/seller/:page', 'seller')
// .add('blog', '/blog/:slug')
// .add('user', '/user/:id', 'profile')