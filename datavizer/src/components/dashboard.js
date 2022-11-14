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

    return (
        <div className="dashboard">
            <Navbar />
            <AuthenticationButton />
            <Profile />
            <Graph chartData={chartData} />
            <Upload setChartData={setChartData} />
            <Publish chartData={chartData} />
        </div>
    );
}


export default withAuthenticationRequired(Dashboard, {
    onRedirecting: () => <AuthLoading />,
});