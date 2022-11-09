import Graph from "./graph";
import Navbar from "./navbar";
import Upload from "./upload";
import { useState } from "react";

export default function Dashboard() {
    const [chartData, setChartData] = useState({})

    return (
        <div className="dashboard">
            <Navbar />
            <Graph chartData={chartData} />
            <Upload setChartData={setChartData} />

        </div>
    );
}