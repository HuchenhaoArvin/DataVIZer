'use strict'
export const DataProcessor = {

    lineChart: function (lineChartData, chartId) {
        console.log(lineChartData)
        chartId = 11111
        const processedData = []
        lineChartData.data.forEach((symbolEntry) => {
            console.log(symbolEntry, "symbolEntry")
            const entries = Object.entries(symbolEntry)
            console.log(entries, "entries")
            for (let [series, value] of entries) {
                const markObj = {
                    symbol: symbolEntry["Country Name"],
                    series: series,
                    value: value
                }
                console.log(markObj, "markObj")
                // console.log(typeof yearObj["Life Exp"])
                if (typeof markObj.value === "number") { processedData.push(markObj) }


            }

        }
        )


        const finalData = { chartId: chartId, data: processedData }
        console.log(processedData, "processedData")
        console.log(finalData, "finalData")
        return finalData
    },
}



// export const DataProcessor = {

//     lineChart: function (lineChartData) {
//         console.log(lineChartData)
//         lineChartData.data.forEach((country) => {
//             const entries = Object.entries(country)
//             for (let [time, value] of entries) {
//                 const yearObj = {
//                     Country: country["Country Name"],
//                     Year: new Date(time),
//                     "Life Exp": value
//                 }
//                 // console.log(yearObj, "yearObj")
//                 // console.log(typeof yearObj["Life Exp"])
//                 if (yearObj.Country && typeof yearObj["Life Exp"] === "number") setFinalData(prev => prev.concat(yearObj))

//             }
//         })
//     },
// }