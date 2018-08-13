var express = require('express');
var config = require('./config/index');

var port = process.env.PORT || config.build.port;

var app = express();

var router = express.Router();

router.get('/', function (req, res, next) {
  req.url = '/index.html';
  next();
});

app.use(router);

// var seller = require('./static/seller.json');
// var goods = require('./static/goods.json');
// var ratings = require('./static/ratings.json');
//
// var apiRoutes = express.Router();

const appData = require('./data.json')
const seller = appData.seller
const goods = appData.goods
const ratings = appData.ratings
const apiRouter = express.Router()
// apiRouter.get('/seller', function (req, res) {
//   // 服务端收到请求后返回给客户端一个json数据
//   res.json({
//     // 当我们数据正常时，我们通过传递errno字符为0表示数据正常
//     errno: 0,
//     // 返回json中的卖家数据
//     data: seller
//   })
// })
// apiRouter.get('/goods', function (req, res) {
//   res.json({
//     errno: 0,
//     data: goods
//   })
// })
// apiRouter.get('/ratings', function (rea, res) {
//   res.json({
//     errno: 0,
//     data: ratings
//   })
// })
app.use('/api', apiRouter)

app.get('/api/seller', function (req, res) {
  // 服务端收到请求后返回给客户端一个json数据
  res.json({
    // 当我们数据正常时，我们通过传递errno字符为0表示数据正常
    errno: 0,
    // 返回json中的卖家数据
    data: seller
  })
})
app.get('/api/goods', function (req, res) {
  res.json({
    errno: 0,
    data: goods
  })
})
app.get('/api/ratings', function (rea, res) {
  res.json({
    errno: 0,
    data: ratings
  })
})

app.use(express.static('./dist'));

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:' + port + '\n');
});
