require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.static('public'));

const port = process.env.UI_SERVER_PORT;

app.listen(port, function () {
   console.log(`UI started on port ${port}`);
});