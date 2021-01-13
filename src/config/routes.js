const express = require('express');
const routes = express.Router();
const Tasks = require('../controllers/tasks')
const Albums =require('../controllers/albums');
const { getAll } = require('../controllers/tasks');

routes.get('/task', Tasks.getAll)
routes.get('/task/:id', Tasks.get)
routes.put('/task', Tasks.create)
routes.delete('/task/:id', Tasks.delete);

routes.put('/album',Albums.create)
routes.get('/album',Albums.getAll)
routes.get('/album/:id',Albums.get)
routes.post('/album/:id',Albums.update)
routes.delete('/album/:id',Albums.delete)


module.exports = routes;
