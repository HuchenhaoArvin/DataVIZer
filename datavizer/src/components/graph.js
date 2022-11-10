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
                        Year: new Date(time),
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
                x: {
                    label: "Birth year"//Let user decide
                },
                y: {
                    domain: [70, 85],//Let user decide
                    grid: true,//Let user decide
                    label: "Life Expectancy (years)"//Let user decide


                },
                color: {
                    legend: true//Let user decide
                },
                title: {
                    title: "sdfasf"
                },

                marks: [
                    Plot.ruleY([0], { y: 70 }),
                    // Plot.ruleX([0], { x: 1995 }),
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
                    // Plot.text(finalData, Plot.selectLast({
                    //     x: "Year",
                    //     y: "Life Exp",
                    //     z: "Country",
                    //     text: "Country",
                    //     textAnchor: "start",//can be toggled
                    //     dx: 10,
                    //     dy: 10
                    // })),

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
            <div ref={plotRef}></div>
        </div>

    );
}

