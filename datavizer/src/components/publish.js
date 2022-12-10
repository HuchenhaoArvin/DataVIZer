// Saves the processed uploaded data and returns the user an embed url
import { ApiService } from "../utils/apiService";
import { useState, useEffect } from "react";


export default function Publish({ chartData, chartSetting }) {
    const [chartId, setChartId] = useState(0)
    const [clicked, toggleClicked] = useState(false)
    const [hasdata, toggleHasdata] = useState(false)

    useEffect(() => {
        if (Object.values(chartData).length > 0) {
            toggleHasdata((prev) => !prev)
        }

    }, [chartData])


    async function publishhandler(chartData, chartSetting) {
        const chartWithSetting = {
            ...chartData,
            ...chartSetting,
        }
        const ID = await ApiService.postLineGraph(chartWithSetting);
        setChartId(ID);

        toggleClicked((prev) => !prev)

    }
    return (
        <>
            {hasdata ? <button className="publishbutton" onClick={() => publishhandler(chartData, chartSetting)}>Publish</button> : <></>}
            {clicked ? <div className="publishdropdown">{`Embed on your website:<iframe src="http://127.0.0.1:3000/embed/${chartId.id}" frameborder='0' scrolling='no' style='width:100%;height:560px;'
                sandbox='allow-same-origin allow-forms allow-scripts'></iframe>`}
            </div> : <></>}
        </>
    );
}


<iframe src="http://localhost:3000/embed" frameborder='0' scrolling='no' style='width:100%;height:600px;'
    sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>

