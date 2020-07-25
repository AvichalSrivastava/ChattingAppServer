const express = require('express');
const http = require('http');
const jwt = require('jsonwebtoken');
const app = express();
var server = http.createServer(app);
var io = require("socket.io").listen(server);
var PORT = process.env.PORT || 3001;

io.on("connection", socket => {
  console.log("a user connected");
  socket.on("chat message", msg => {
    console.log(msg);
    io.emit("chat message", msg);
  });
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//------------APIs Starts-------------------------------
app.get('/port',(req,res)=>
{
  var token = jwt.sign({port:PORT}, 'shhhhh');
  console.log({token});
  res.json({token});
});


//-----------APIs End-----------------------------------
server.listen(PORT,()=>console.log(`Server is running on ${PORT} port`));
