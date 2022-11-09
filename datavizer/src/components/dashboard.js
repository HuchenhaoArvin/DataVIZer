import Graph from "./graph";
import Navbar from "./navbar";
import Upload from "./upload";

export default function Dashboard() {
    return (
        <div className="dashboard">
            <Navbar />
            <Graph />
            <Upload />

        </div>
    );
}