import * as Plot from "@observablehq/plot";
import { useRef, useEffect, useState } from "react";
import Settings from "./settings";
import { useParams } from "react-router-dom";
import { ApiService } from "../utils/apiService";


export default function Graph() {
    const [finalData, setFinalData] = useState([]);
    const [labelNameX, setLabelNameX] = useState("X axis");
    const [legend, toggleLegend] = useState(false);
    const [labelNameY, setLabelNameY] = useState("Y axis");
    const [domainYStart, setDomainYStart] = useState(0);
    const [height, setHeight] = useState(396);
    const [width, setWidth] = useState(524);
    const [linelabel, toggleLineLabel] = useState(false);
    const [gridX, toggleGridX] = useState(false);
    const [gridY, toggleGridY] = useState(false);
    const { graphId } = useParams();



    useEffect(() => {
        ApiService.getLineGraphById(graphId).then(data => (setFinalData(data))).catch(error => console.log(error))
    }, [graphId])


    useEffect(() => {
        if (Object.keys(finalData).length > 0) {
            toggleLegend(finalData.settings.legend);
            setLabelNameX(finalData.settings.labelNameX);
            setLabelNameY(finalData.settings.labelNameY);
            setDomainYStart(finalData.settings.domainYStart);
            setHeight(finalData.settings.height)
            setWidth(finalData.settings.width)
            toggleLineLabel(finalData.settings.linelabel)
            toggleGridX(finalData.settings.gridX)
            toggleGridY(finalData.settings.gridY)
        }
    }, [finalData])

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

                    grid: gridY,
                    label: labelNameY,


                },
                color: {
                    legend: legend
                },

                marks: [
                    Plot.ruleY([0], { y: domainYStart }),
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
                        title: d => `${d.symbol}\n${labelNameX}: ${d.series} \n${labelNameY}: ${d.value}`,

                    }),
                    Plot.text(finalData.data, Plot.selectLast({
                        x: "series",
                        y: "value",
                        z: "symbol",
                        text: linelabel ? "symbol" : "",
                        textAnchor: "start",
                        dx: 10,
                        dy: 10
                    })),

                ],
                height: height,
                width: width,
                marginTop: 50,
                marginBottom: 50,
                marginLeft: 50
            });
            plotRef.current.append(lineChart);
            return () => lineChart.remove();
        }
    }, [finalData, legend, labelNameX, labelNameY, domainYStart, height, width, linelabel, gridX, gridY]);


    return (
        <div className="graphembed">
            <div className="settingsleft">
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
            </div>
            <div ref={plotRef} className="plot"></div>

        </div>

    );
}

