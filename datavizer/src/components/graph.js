import * as Plot from "@observablehq/plot";
import { useRef, useEffect, useState } from "react";
// import { data } from "../utils/data";
// import { tidiedUpData } from "../utils/mockdata";


export default function Graph({ chartData }) {
    const [finalData, setFinalData] = useState([]);
    const [labelNameX, setLabelNameX] = useState("");
    const [legend, toggleLegend] = useState(false);
    const [labelNameY, setLabelNameY] = useState("");
    const [domainYStart, setDomainYStart] = useState(70);
    // const [domainYEnd, setDomainYEnd] = useState(85);
    // const [domainY, setDomainY] = useState([70, 85])
    const [height, setHeight] = useState(396);
    const [width, setWidth] = useState(524);
    const [linelabel, toggleLineLabel] = useState(false);


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
                    // console.log(yearObj, "yearObj")
                    // console.log(typeof yearObj["Life Exp"])
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
                    grid: true,
                    label: labelNameX
                },
                y: {

                    // domain: domainY,//Let user decide
                    grid: true,//Let user decide
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
    }, [finalData, legend, labelNameX, labelNameY, domainYStart, height, width, linelabel]);



    function labelNameXChangeHandler(event) {
        setLabelNameX(event.target.value)

    }

    function labelNameYChangeHandler(event) {
        setLabelNameY(event.target.value)

    }
    function domainYStartChangeHandler(event) {
        setDomainYStart(Number(event.target.value))
    }

    // function domainYEndChangeHandler(event) {
    //     setDomainY(prev => prev[1] = Number(event.target.value))
    // }

    function heightChangeHandler(event) {
        setHeight(event.target.value)

    }

    function widthChangeHandler(event) {
        setWidth(event.target.value)

    }

    // console.log(chartData, 'chartData from Graph')
    return (
        <div className="graph">
            <div ref={plotRef}></div>
            <div className="controls">
                <input type="checkbox" checked={legend} onChange={() => toggleLegend((prev) => !prev)} /><span>legend</span>
                <input type="checkbox" checked={linelabel} onChange={() => toggleLineLabel((prev) => !prev)} /><span>Line Label</span>
                <form>
                    <div className="label name">
                        <label>
                            Label name of X axis:
                        </label>
                        <input type="text" name="labelNameX" onChange={labelNameXChangeHandler} />
                        <label>
                            Label name of Y axis:
                        </label>
                        <input type="text" name="labelNameY" onChange={labelNameYChangeHandler} />

                    </div>
                    <div className="domain">
                        <label>
                            Y axis starts at:
                        </label>
                        <input type="number" name="domainYStart" onChange={domainYStartChangeHandler} />
                        {/* <label>
                            Start at:
                        </label>
                        <input type="number" name="domainYEnd" onChange={domainYEndChangeHandler} /> */}
                    </div>
                    <div className="heightandwidth">
                        <label>
                            Height:
                        </label>
                        <input type="range" name="height" min="0" max="1500" defaultValue={396} onChange={heightChangeHandler} />
                        <label>
                            Width:
                        </label>
                        <input type="range" name="width" min="0" max="1500" defaultValue={534} onChange={widthChangeHandler} />
                    </div>
                </form>
            </div>
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