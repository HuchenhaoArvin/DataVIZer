'use strict';

const Router = require('koa-router');
const router = new Router();

const { getGraph, postGraph, getGraphById } = require('./controllers/line-chart.js');

router.get('/graph', getGraph);
router.post('/graph', postGraph);
router.get('/graph/:id', getGraphById);



module.exports = router;