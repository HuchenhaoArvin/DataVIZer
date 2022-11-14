// Saves the processed uploaded data and returns the user an embed url
import { ApiService } from "../utils/apiService";
import { useEffect, useState } from "react";


export default function Publish({ chartData }) {
    const [chartId, setChartId] = useState(0)

    async function publishhandler(chartData) {
        const ID = await ApiService.postLineGraph(chartData);
        setChartId(ID)
    }



    return (
        <>
            <button onClick={() => publishhandler(chartData)}>Publish</button>
            <h2>{`http://127.0.0.1:3000/embed/${chartId.id}`}</h2>
        </>
    );
}