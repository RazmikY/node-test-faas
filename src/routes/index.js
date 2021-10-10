const express = require('express');
const { getData, modifyData } = require('../controllers/index');
const routes = express.Router();

routes.get('/', getData);
routes.post('/', modifyData);

module.exports = routes;