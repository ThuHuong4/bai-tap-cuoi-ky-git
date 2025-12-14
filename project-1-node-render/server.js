const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Project 1 Ready!'));
app.listen(3000);