// Saves the processed uploaded data and returns the user an embed url
import { ApiService } from "../utils/apiService";

export default function Publish({ chartData }) {

    async function publishhandler(chartData) {
        await ApiService.postLineGraph(chartData);
    }



    return (
        <>
            <button onClick={() => publishhandler(chartData)}>Publish</button>
            <h2>{`http://127.0.0.1:3000/embed/${chartData.ID}`}</h2>
        </>
    );
}