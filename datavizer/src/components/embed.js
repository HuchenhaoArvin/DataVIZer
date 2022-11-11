import Graph from "./graph";
// import Navbar from "./navbar";
// import Upload from "./upload";
import { useState } from "react";
import { origindata2 } from "../utils/mockdata"
import { useEffect } from "react";


export default function Embed() {
    const [embedChartData, setembedChartData] = useState([])
    useEffect(() => {
        setembedChartData(origindata2)
    }, [])


    return (
        <div className="embed">
            <Graph chartData={embedChartData} />

        </div>
    );
}