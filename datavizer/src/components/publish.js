// Saves the processed uploaded data and returns the user an embed url
import { ApiService } from "../utils/apiService";
import { useState, useEffect } from "react";


export default function Publish({ chartData, chartSetting }) {
    const [chartId, setChartId] = useState(0)
    const [clicked, toggleClicked] = useState(false)
    const [hasdata, toggleHasdata] = useState(false)
    // const [chartWithSetting, setChartWithSetting] = useState({})

    // const final = {}

    useEffect(() => {
        if (Object.values(chartData).length > 0) {
            toggleHasdata((prev) => !prev)
        }

    }, [chartData])


    async function publishhandler(chartData, chartSetting) {
        console.log(chartData, "chartData")
        console.log(chartSetting, "chartSetting")
        const chartWithSetting = {
            ...chartData,
            ...chartSetting,
        }



        // setChartWithSetting({
        // ...chartData,
        // ...chartSetting,

        // })
        console.log(chartWithSetting, "ChartWithSetting")
        const ID = await ApiService.postLineGraph(chartWithSetting);
        setChartId(ID);

        toggleClicked((prev) => !prev)

    }
    console.log(chartData, "chartData")
    // console.log(chartSetting, "chartSetting")
    // console.log(chartWithSetting, "chartWithSetting2")

    return (
        <>
            {hasdata ? <button className="publishbutton" onClick={() => publishhandler(chartData, chartSetting)}>Publish</button> : <></>}
            {clicked ? <div className="publishdropdown">{`Embed on your website:<iframe src="http://127.0.0.1:3000/embed/${chartId.id}" frameborder='0' scrolling='no' style='width:100%;height:600px;'
                sandbox='allow-same-origin allow-forms allow-scripts'></iframe>`}
            </div> : <></>}
        </>
    );
}


<iframe src="http://localhost:3000/embed" frameborder='0' scrolling='no' style='width:100%;height:600px;'
    sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>


// const lineChartSchema = new mongoose.Schema({
//     data: [{ symbol: String, series: Number, value: Number }],
//     settings: {
//         legend: Boolean,
//         labelNameX: String,
//         labelNameY: String,
//         domainYStart: Number,
//         height: String,
//         width: String,
//         linelabel: Boolean,
//         gridX: Boolean,
//         gridY: Boolean
//     }
// });