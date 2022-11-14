import Navbar from "./navbar";
import AuthenticationButton from "./auth-button"



export default function LandingPage() {

    return (
        <div className="Landingpage">
            <Navbar />
            <h1>Login to Use DataVIZer</h1>
            <AuthenticationButton />

        </div>
    );
}