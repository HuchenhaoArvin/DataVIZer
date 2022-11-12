'use strict';

const models = require('../models/line-chart');

exports.getGraph = async (ctx) => {
    try {
        ctx.body = await models.getAll();
        ctx.status = 200;
    } catch (err) {
        ctx.body = err;
        ctx.status = 500;
    }
};

exports.postGraph = ctx => {
    try {
        models.postOne(ctx.request.body);
        ctx.body = ctx.request.body
        ctx.status = 201;
    } catch (err) {
        ctx.body = err;
        ctx.status = 500;
    }
};