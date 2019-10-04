const express = require('express');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/', (req, res) => res.json({ message: "It's work!" }));

routes.post('/sessions', SessionController.store);

module.exports = routes;
