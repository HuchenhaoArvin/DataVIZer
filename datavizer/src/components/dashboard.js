import Graph from "./graph";
import Navbar from "./navbar";
import Upload from "./upload";
import { useState } from "react";
import AuthenticationButton from "./auth-button"
import Profile from "./profile";
import { withAuthenticationRequired } from '@auth0/auth0-react';
import AuthLoading from "./auth-loading"
import Publish from "./publish";


function Dashboard() {
    const [chartData, setChartData] = useState({})
    const [chartSetting, setChartSetting] = useState({})


    return (
        <div className="dashboard">
            <Navbar />
            <div className="dashboardcontent">
                <Upload setChartData={setChartData} />
                <Publish chartData={chartData} chartSetting={chartSetting} />
                <Graph chartData={chartData} chartSetting={chartSetting} setChartSetting={setChartSetting} />
            </div>

        </div>
    );
}


export default withAuthenticationRequired(Dashboard, {
    onRedirecting: () => <AuthLoading />,
});