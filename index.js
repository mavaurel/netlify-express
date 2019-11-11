const port = process.env.PORT || 3000;
const express = require("express");
const app = express();

app.use(express.static('admin'));

console.log("Server starting on port " + port);
app.listen(port);