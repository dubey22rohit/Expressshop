const express = require('express');
const path = require('path');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/api', require('./routes/api').route)
app.listen(4444, () => console.log("Server started at port http://localhost:4444"));