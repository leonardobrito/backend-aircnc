require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

const express = require('express');
const mongoose = require('mongoose');

const morgan = require('morgan');
const routes = require('./routes');

const app = express();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-wgkm2.mongodb.net/omnistack-9?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json());
app.use(morgan('dev'));
app.use(routes);
app.listen(process.env.PORT || 3333);
