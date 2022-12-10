
export const DataProcessor = {

    lineChart: function (lineChartData, chartId) {
        chartId = 11111
        const processedData = []
        lineChartData.data.forEach((symbolEntry) => {
            const entries = Object.entries(symbolEntry)
            for (let [series, value] of entries) {
                const markObj = {
                    symbol: symbolEntry["Country Name"],
                    series: Number(series),
                    value: value
                }
                if (typeof markObj.value === "number") { processedData.push(markObj) }


            }

        }
        )


        const finalData = { data: processedData }
        return finalData
    },
}

