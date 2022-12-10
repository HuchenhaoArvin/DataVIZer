import * as Plot from "@observablehq/plot";
import { useRef, useEffect, useState } from "react";
import Settings from "./settings";


export default function Graph({ chartData, chartSetting, setChartSetting }) {
    const [labelNameX, setLabelNameX] = useState("X axis");
    const [legend, toggleLegend] = useState(false);
    const [labelNameY, setLabelNameY] = useState("Y axis");
    const [domainYStart, setDomainYStart] = useState(0);
    const [height, setHeight] = useState(487);
    const [width, setWidth] = useState(524);
    const [linelabel, toggleLineLabel] = useState(false);
    const [gridX, toggleGridX] = useState(false);
    const [gridY, toggleGridY] = useState(false);
    const [settingsaved, toggleSettingSaved] = useState(false)


    const plotRef = useRef();

    useEffect(() => {
        toggleSettingSaved(false)
        if (Object.keys(chartData).length > 0) {
            const lineChart = Plot.plot({
                style: "overflow:visible;",
                x: {
                    grid: gridX,
                    label: labelNameX,
                    transform: d => new Date(String(d))
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
                        title: d => `${d.symbol}\n${labelNameX}: ${d.series} \n${labelNameY}: ${d.value}`,

                    }),
                    Plot.text(chartData.data, Plot.selectLast({
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
        };





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
        toggleSettingSaved((prev) => !prev)
    }
    return (
        <div className="graph">
            <div className="settingsleft">
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

                <button className="savesettings" onClick={() => saveSettingsHandler()}>Save Your Settings</button>
                {settingsaved ? <div>Settings Saved</div> : <></>}

            </div>
            <div ref={plotRef} className="plot"></div>



        </div>

    );
}
