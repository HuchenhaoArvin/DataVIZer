import * as Plot from "@observablehq/plot";
import { useRef, useEffect, useState } from "react";
import { data } from "../utils/data";
import { tidiedUpData } from "../utils/mockdata";


export default function Graph({ chartData }) {


    const plotRef = useRef();

    // useEffect(() => {
    //     const lineChart = Plot.plot({
    //         style: "overflow:visible;",
    //         y: {
    //             grid: true,
    //             lable: "Life exp if born on that year (years)"

    //         },
    //         marks: [
    //             // Plot.ruleY([0]),
    //             Plot.line(tidiedUpData.data, {
    //                 x: "Year",
    //                 y: "Life Exp",
    //                 stroke: "Country",
    //                 strokeWidth: 3.1,
    //             }),
    //             Plot.line(tidiedUpData.data, {
    //                 x: "Year",
    //                 y: "Life Exp",
    //                 stroke: "Country",
    //                 strokeWidth: 2,
    //                 marker: "dot",
    //             }),
    //             Plot.text(tidiedUpData.data, Plot.selectLast({
    //                 x: "Year",
    //                 y: "Life Exp",
    //                 z: "Country",
    //                 text: "Country",
    //                 textAnchor: "start",
    //                 dx: 3
    //             }))
    //         ],
    //         marginTop: 50,
    //         marginBottom: 50,
    //         marginLeft: 50
    //     });
    //     plotRef.current.append(lineChart);
    //     return () => lineChart.remove();
    // }, [data]);

    console.log(chartData, 'chartData from Graph')
    return (
        <div className="graph">
            Graph works!
            {/* <div ref={plotRef}></div> */}
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