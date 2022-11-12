'use strict';

const Router = require('koa-router');
const router = new Router();

const { getGraph, postGraph } = require('./controllers/line-chart.js');

router.get('/graph', getGraph);
router.post('/graph', postGraph);


module.exports = router;