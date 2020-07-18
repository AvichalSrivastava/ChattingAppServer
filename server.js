const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//------------APIs Starts-------------------------------
app.get('/',(req,res)=>
{
  res.json("[]successfully connected to the server");
});


//-----------APIs End-----------------------------------
app.listen(PORT,()=>console.log(`Server is running on ${PORT} port`));
