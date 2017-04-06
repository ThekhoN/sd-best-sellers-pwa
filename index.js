var express  = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, './build')));
app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, './build/index.html'));
});
app.listen(port, function (err) {
  if(err){
    console.log('err in server: ', err);
    return ;
  }
  else {
    console.log('app listening on port: ', port);
  }
});
