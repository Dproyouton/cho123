const express = require("express");
const app = express();
const { exec, execSync } = require('child_process');
const port = process.env.SERVER_PORT || process.env.PORT || 3000;        

app.get("/", function(req, res) {
  res.send("Hello world!");
});


app.listen(port, () => console.log(`Port ${port}!`));
