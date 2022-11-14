import * as Plot from "@observablehq/plot";
import { useRef, useEffect, useState } from "react";
import Settings from "./settings";
import { useParams } from "react-router-dom";
// import { data } from "../utils/data";
// import { tidiedUpData } from "../utils/mockdata";
import { ApiService } from "../utils/apiService";


export default function Graph() {
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
    const { graphId } = useParams();



    useEffect(() => {
        //turn data into usable form for Plot

        ApiService.getLineGraphById(graphId).then(data => (setFinalData(data))).catch(error => console.log(error))

        // if (Object.keys(finalData).length > 0) {
        //     setFinalData(ApiService.getLineGraph())
        // }
    }, [])

    console.log(finalData, "finaldata")


    const plotRef = useRef();

    useEffect(() => {
        if (Object.keys(finalData).length > 0) {
            console.log(finalData.data)
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
                // title: {
                //     title: "theLineChart"
                // },

                marks: [
                    Plot.ruleY([0], { y: domainYStart }),
                    // Plot.ruleX([1], { stroke: "red" }),
                    // Plot.ruleX({ x: 1995 }, { stroke: "red" }),
                    Plot.line(finalData.data, {
                        x: "series",
                        y: "value",
                        stroke: "symbol",
                        strokeWidth: 3.1,

                    }),
                    Plot.dot(finalData.data, {
                        x: "series",
                        y: "value",
                        fill: "symbol",
                        // stroke: "Country",
                        // strokeWidth: 1,
                        // marker: "dot",
                        title: d => `X: ${d.series} \nY: ${d.value}`,

                    }),
                    Plot.text(finalData.data, Plot.selectLast({
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

