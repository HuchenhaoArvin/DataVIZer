'use strict';

const mongoose = require('./index');
const lineChartSchema = new mongoose.Schema({
    chartId: Number,
    data: [{ symbol: String, series: Number, value: Number }]
});

// [
//     {
//         "Country": "China",
//         "Year": "2000-01-01T00:00:00.000Z",
//         "Life Exp": 71.397
//     },
//     {
//         "Country": "China",
//         "Year": "2001-01-01T00:00:00.000Z",
//         "Life Exp": 71.732
//     },
//     {
//         "Country": "China",
//         "Year": "2002-01-01T00:00:00.000Z",
//         "Life Exp": 72.061
//     },
//     {
//         "Country": "China",
//         "Year": "2003-01-01T00:00:00.000Z",
//         "Life Exp": 72.381
//     },
//     {
//         "Country": "China",
//         "Year": "2004-01-01T00:00:00.000Z",
//         "Life Exp": 72.689
//     },
// ]
const LineChart = mongoose.model('line-chart', lineChartSchema);


exports.getAll = async () => {
    try {
        let res = await LineChart.find();
        console.log(res, 'res')
        return res;
    } catch (error) {
        console.log(error);
    }
};

exports.postOne = async (data) => {
    try {
        const lineChart = new LineChart(data);
        const res = await lineChart.save();
        const resfinal = { id: res._id.toString() }
        return resfinal
        // console.log(res, "res")
        // console.log(res._id.toString())
        // lineChart.save(function (err, lineChart) {
        //     let newChartId = lineChart.id
        //     console.log(newChartId, "id")
        // }
        // );

    } catch (error) {
        console.log(error);
    }
};

exports.getById = async (id) => {
    try {
        const res = await LineChart.findById(id)
        return res
        // console.log(res, "res")
        // console.log(res._id.toString())
        // lineChart.save(function (err, lineChart) {
        //     let newChartId = lineChart.id
        //     console.log(newChartId, "id")
        // }
        // );

    } catch (error) {
        console.log(error);
    }
};

// n.save(function (err, room) {
//     var newRoomId = room._id;
// });