import * as Plot from "@observablehq/plot";
import { useRef, useEffect, useState } from "react";
import Settings from "./settings";
// import { data } from "../utils/data";
// import { tidiedUpData } from "../utils/mockdata";


export default function Graph({ chartData }) {
    const [finalData, setFinalData] = useState([]);
    const [labelNameX, setLabelNameX] = useState("");
    const [legend, toggleLegend] = useState(false);
    const [labelNameY, setLabelNameY] = useState("");
    const [domainYStart, setDomainYStart] = useState(0);
    // const [domainYEnd, setDomainYEnd] = useState(85);
    // const [domainY, setDomainY] = useState([70, 85])
    const [height, setHeight] = useState(396);
    const [width, setWidth] = useState(524);
    const [linelabel, toggleLineLabel] = useState(false);
    const [gridX, toggleGridX] = useState(false);
    const [gridY, toggleGridY] = useState(false);



    useEffect(() => {
        //turn data into usable form for Plot
        if (Object.keys(chartData).length > 0) {
            console.log(chartData)
            chartData.data.forEach((country) => {
                const entries = Object.entries(country)
                for (let [time, value] of entries) {
                    const yearObj = {
                        Country: country["Country Name"],
                        Year: new Date(time),
                        "Life Exp": value
                    }
                    console.log(yearObj, "yearObj")
                    console.log(typeof yearObj["Life Exp"])
                    if (yearObj.Country && typeof yearObj["Life Exp"] === "number") setFinalData(prev => prev.concat(yearObj))

                }
            })
        }
    }, [chartData])

    console.log(finalData, "finaldata")
    console.log(domainYStart, "domainYStart")

    const plotRef = useRef();

    useEffect(() => {
        if (Object.keys(finalData).length > 0) {
            const lineChart = Plot.plot({
                style: "overflow:visible;",
                x: {
                    grid: gridX,
                    label: labelNameX
                },
                y: {

                    // domain: domainY,//Let user decide
                    grid: gridY,//Let user decide
                    label: labelNameY,


                },
                color: {
                    legend: legend//Let user decide
                },
                title: {
                    title: "sdfasf"
                },

                marks: [
                    Plot.ruleY([0], { y: domainYStart }),
                    // Plot.ruleX([1], { stroke: "red" }),
                    // Plot.ruleX({ x: 1995 }, { stroke: "red" }),
                    Plot.line(finalData, {
                        x: "Year",
                        y: "Life Exp",
                        stroke: "Country",
                        strokeWidth: 3.1,

                    }),
                    Plot.dot(finalData, {
                        x: "Year",
                        y: "Life Exp",
                        fill: "Country",
                        // stroke: "Country",
                        // strokeWidth: 1,
                        // marker: "dot",
                        title: d => `Birth Year: ${d.Year.getFullYear()} \nLife Expectancy: ${d["Life Exp"]}`,

                    }),
                    Plot.text(finalData, Plot.selectLast({
                        x: "Year",
                        y: "Life Exp",
                        z: "Country",
                        text: linelabel ? "Country" : "",
                        textAnchor: "start",//can be toggled
                        dx: 10,
                        dy: 10
                    })),

                ],
                height: height,//Let user decide
                width: width,//Let user decide
                marginTop: 50,
                marginBottom: 50,
                marginLeft: 50
            });
            plotRef.current.append(lineChart);
            return () => lineChart.remove();
        }
    }, [finalData, legend, labelNameX, labelNameY, domainYStart, height, width, linelabel, gridX, gridY]);





    // console.log(chartData, 'chartData from Graph')
    return (
        <div className="graph">
            <Settings
                gridX={gridX}
                gridY={gridY}
                legend={legend}
                linelabel={linelabel}
                setLabelNameX={setLabelNameX}
                toggleLegend={toggleLegend}
                setLabelNameY={setLabelNameY}
                setDomainYStart={setDomainYStart}
                setHeight={setHeight}
                setWidth={setWidth}
                toggleLineLabel={toggleLineLabel}
                toggleGridX={toggleGridX}
                toggleGridY={toggleGridY} />
            <div ref={plotRef} className="plot"></div>

        </div>

    );
}

// Plot.plot({
//     marks: [
//       Plot.rectY(data, Plot.binX({ y: "sum" }, { x: "date", y: "value" })),
//       Plot.frame({ stroke: "#d3d3d3" })
//     ],
//     height: 396,
//       width: 524,
//       marginLeft: 33,
//       marginRight: 54,
//       marginTop: 52,
//       marginBottom: 72,
//       insetTop: 0,
//       insetBottom: 0,
//       insetLeft: 0,
//       insetRight: 0
//   })