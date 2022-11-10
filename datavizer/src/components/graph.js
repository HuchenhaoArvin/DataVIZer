import * as Plot from "@observablehq/plot";
import { useRef, useEffect, useState } from "react";
// import { data } from "../utils/data";
// import { tidiedUpData } from "../utils/mockdata";


export default function Graph({ chartData }) {
    const [finalData, setFinalData] = useState([]);

    useEffect(() => {
        if (Object.keys(chartData).length > 0) {
            console.log(chartData)
            chartData.data.forEach((country) => {
                const entries = Object.entries(country)
                for (let [time, value] of entries) {
                    const yearObj = {
                        Country: country["Country Name"],
                        Year: Number(time),
                        "Life Exp": value
                    }
                    // console.log(yearObj, "yearObj")
                    // console.log(typeof yearObj["Life Exp"])
                    if (yearObj.Country && typeof yearObj["Life Exp"] === "number") setFinalData(prev => prev.concat(yearObj))

                }
            })
        }
    }, [chartData])

    console.log(finalData, "finaldata")

    const plotRef = useRef();

    useEffect(() => {
        if (Object.keys(finalData).length > 0) {
            const lineChart = Plot.plot({
                style: "overflow:visible;",
                y: {
                    grid: true,
                    lable: "Life exp if born on that year (years)"

                },
                marks: [
                    // Plot.ruleY([0]),
                    Plot.line(finalData, {
                        x: "Year",
                        y: "Life Exp",
                        stroke: "Country",
                        strokeWidth: 3.1,
                    }),
                    Plot.line(finalData, {
                        x: "Year",
                        y: "Life Exp",
                        stroke: "Country",
                        strokeWidth: 1.5,
                        marker: "dot",
                    }),
                    Plot.text(finalData, Plot.selectLast({
                        x: "Year",
                        y: "Life Exp",
                        z: "Country",
                        text: "Country",
                        textAnchor: "start",
                        dx: 3
                    }))
                ],
                marginTop: 50,
                marginBottom: 50,
                marginLeft: 50
            });
            plotRef.current.append(lineChart);
            return () => lineChart.remove();
        }
    }, [finalData]);

    // console.log(chartData, 'chartData from Graph')
    return (
        <div className="graph">
            Graph works!
            <div ref={plotRef}></div>
        </div>

    );
}

// Plot.plot({
//     style: "overflow: visible;",
//     y: {
//       type: "log",
//       grid: true,
//       label: "↑ Change in price (%)",
//       tickFormat: formatChange
//     },
//     marks: [
//       Plot.ruleY([1]),
//       Plot.line(stocks, Plot.normalizeY({
//         x: "Date",
//         y: "Close",
//         stroke: "Symbol"
//       })),
//       Plot.text(stocks, Plot.selectLast(Plot.normalizeY({
//         x: "Date",
//         y: "Close",
//         z: "Symbol",
//         text: "Symbol",
//         textAnchor: "start",
//         dx: 3
//       })))
//     ]
//   })



// useEffect(() => {
//     const barChart = Plot.plot({
//         marks: [
//             Plot.ruleY([1 / 26], { stroke: "orange", strokeWidth: 3 }),
//             Plot.barY(data, {
//                 x: "letter",
//                 y: "frequency",
//                 // sort:
//                 //     sort === "Alphabetical"
//                 //         ? null
//                 //         : { x: "y", reverse: sort === "Descending" }
//             })
//         ],
//         y: { grid: true },
//         marginTop: 50,
//         marginBottom: 50,
//         marginLeft: 50
//     });
//     plotRef.current.append(barChart);
//     return () => barChart.remove();
// }, [data]);