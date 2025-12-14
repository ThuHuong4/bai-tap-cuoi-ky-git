const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('<h1>Hello Huong - Project 1 Success</h1>'));
app.listen(3000);
