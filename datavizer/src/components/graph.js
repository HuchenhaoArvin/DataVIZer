import * as Plot from "@observablehq/plot";
import { useRef, useEffect, useState } from "react";
import Settings from "./settings";
// import { data } from "../utils/data";
// import { tidiedUpData } from "../utils/mockdata";
// import { ApiService } from "../utils/apiService";


export default function Graph({ chartData, chartSetting, setChartSetting }) {
    // const [finalData, setFinalData] = useState([]);
    const [labelNameX, setLabelNameX] = useState("X axis");
    const [legend, toggleLegend] = useState(false);
    const [labelNameY, setLabelNameY] = useState("Y axis");
    const [domainYStart, setDomainYStart] = useState(0);
    // const [domainYEnd, setDomainYEnd] = useState(85);
    // const [domainY, setDomainY] = useState([70, 85])
    const [height, setHeight] = useState(396);
    const [width, setWidth] = useState(524);
    const [linelabel, toggleLineLabel] = useState(false);
    const [gridX, toggleGridX] = useState(false);
    const [gridY, toggleGridY] = useState(false);



    // useEffect(() => {
    //     //turn data into usable form for Plot

    //     ApiService.getLineGraph().then(data => (setFinalData(data)))

    //     // if (Object.keys(finalData).length > 0) {
    //     //     setFinalData(ApiService.getLineGraph())
    //     // }
    // }, [])

    // useEffect(() => {
    //     setChartSetting({
    //         ...chartSetting,
    //         legend: legend,
    //         labelNameX: labelNameX,
    //         labelNameY: labelNameY,
    //         domainYStart: domainYStart,
    //         height: height,
    //         width: width,
    //         linelabel: linelabel,
    //         gridX: gridX,
    //         gridY: gridY,

    //     })
    // }, [])

    // console.log(chartData, "chartdata")
    // console.log(chartSetting, "chartSetting")


    const plotRef = useRef();

    useEffect(() => {
        if (Object.keys(chartData).length > 0) {
            console.log(chartData.data)
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
                    title: "theLineChart"
                },

                marks: [
                    Plot.ruleY([0], { y: domainYStart }),
                    // Plot.ruleX([1], { stroke: "red" }),
                    // Plot.ruleX({ x: 1995 }, { stroke: "red" }),
                    Plot.line(chartData.data, {
                        x: "series",
                        y: "value",
                        stroke: "symbol",
                        strokeWidth: 3.1,

                    }),
                    Plot.dot(chartData.data, {
                        x: "series",
                        y: "value",
                        fill: "symbol",
                        // stroke: "Country",
                        // strokeWidth: 1,
                        // marker: "dot",
                        // title: d => `Birth Year: ${d.Year.getFullYear()} \nLife Expectancy: ${d["Life Exp"]}`,

                    }),
                    Plot.text(chartData.data, Plot.selectLast({
                        x: "series",
                        y: "value",
                        z: "symbol",
                        text: linelabel ? "symbol" : "",
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


    }, [chartData, legend, labelNameX, labelNameY, domainYStart, height, width, linelabel, gridX, gridY]);


    function saveSettingsHandler() {
        setChartSetting({
            settings: {
                legend: legend,
                labelNameX: labelNameX,
                labelNameY: labelNameY,
                domainYStart: domainYStart,
                height: height,
                width: width,
                linelabel: linelabel,
                gridX: gridX,
                gridY: gridY,

            }
        })
    }


    // console.log(chartData, 'chartData from Graph')
    return (
        <div className="graph">
            <Settings
                setChartSetting={setChartSetting}
                gridX={gridX}
                gridY={gridY}
                legend={legend}
                linelabel={linelabel}
                labelNameX={labelNameX}
                labelNameY={labelNameY}
                domainYStart={domainYStart}
                height={height}
                width={width}
                setLabelNameX={setLabelNameX}
                toggleLegend={toggleLegend}
                setLabelNameY={setLabelNameY}
                setDomainYStart={setDomainYStart}
                setHeight={setHeight}
                setWidth={setWidth}
                toggleLineLabel={toggleLineLabel}
                toggleGridX={toggleGridX}
                toggleGridY={toggleGridY} />
            <div className="savesettings">
                <button onClick={() => saveSettingsHandler()}>Save Your Settings</button>
            </div>
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