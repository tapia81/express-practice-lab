require('dotenv').config();
const express = require('express');
const fruits = require('./fruits');
const app = express();
const PORT = process.env.PORT || 3000;

//Divider
app.get('/', (req, res) => {
	res.json('pong');
});

app.listen(PORT, () => {
	console.log(`running on port ${PORT}`);
});
