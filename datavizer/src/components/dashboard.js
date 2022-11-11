import Graph from "./graph";
import Navbar from "./navbar";
import Upload from "./upload";
import { useState } from "react";
import Settings from "./settings";

export default function Dashboard() {
    const [chartData, setChartData] = useState({})

    return (
        <div className="dashboard">
            <Navbar />
            <Settings />
            <Graph chartData={chartData} />
            <Upload setChartData={setChartData} />

        </div>
    );
}