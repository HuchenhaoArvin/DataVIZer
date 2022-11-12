'use strict';
require('dotenv').config()
const Koa = require('koa');
const cors = require('@koa/cors');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const router = require('./router');
const PORT = 4000;

app.use(cors());
app.use(bodyParser());
app.use(router.routes(router.allowedMethods()));


app.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}`);
});
