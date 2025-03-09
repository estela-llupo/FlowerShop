const express = require('express');
const cors = require('cors');
const mongoose = require('./config/mongoose.config');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/user.routes')(app);
require('./routes/product.routes')(app);

app.listen(port, () => console.log(`Listening on port ${port}`));