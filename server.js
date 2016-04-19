var express = require('express'),
  app = express(),
  os = require('os');

//enables and instantiates express-toobusy, which keeps it from melting under HIGH pressure
app.use(require('express-toobusy')());

require("./routes")(app);

//Error 404
app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});

//establish simple text catch for Error 500
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send("<h1>Error 500</h1>\nSomething broke! The error has been logged to the server console.");
});

//set to listen on environment port or port 3333, if no detected environment port
var portToListenOn = process.env.PORT || 3333;
app.listen(portToListenOn, function(){
  console.log("NodeJS serving content from "+__dirname+" on "+os.hostname()+":"+portToListenOn);
});
