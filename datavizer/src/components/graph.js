import * as Plot from "@observablehq/plot";
import { useRef, useEffect, useState } from "react";
import { data } from "../utils/data";


export default function Graph({ chartData }) {
    const plotRef = useRef();

    useEffect(() => {
        const barChart = Plot.plot({
            marks: [
                Plot.ruleY([1 / 26], { stroke: "orange", strokeWidth: 3 }),
                Plot.barY(data, {
                    x: "letter",
                    y: "frequency",
                    // sort:
                    //     sort === "Alphabetical"
                    //         ? null
                    //         : { x: "y", reverse: sort === "Descending" }
                })
            ],
            y: { grid: true },
            marginTop: 50,
            marginBottom: 50,
            marginLeft: 50
        });
        plotRef.current.append(barChart);
        return () => barChart.remove();
    }, [data]);

    console.log(chartData, 'chartData from Graph')
    return (
        <div className="graph">
            Graph works!
            <div ref={plotRef}></div>
        </div>

    );
}