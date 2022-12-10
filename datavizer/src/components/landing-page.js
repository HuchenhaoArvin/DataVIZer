import Navbar from "./navbar";
import landingimg from '../utils/landing-page.jpg'



export default function LandingPage() {

    return (
        <div className="landingpage">
            <Navbar />
            <div className="landingcontent">
                <img className='landingimg' src={landingimg} alt='Landingpage' />
                <div className="landingtextwapper">
                    <div className="landingtitle">Make DataVIZ At Ease</div>
                    <div className="landingintro">Login to make your own data visualization</div>
                </div>
            </div>


        </div>
    );
}