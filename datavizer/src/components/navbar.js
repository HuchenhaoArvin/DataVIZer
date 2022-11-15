import AuthenticationButton from './auth-button';
import Profile from './profile';
export default function Navbar() {
    return (
        <div className="navbar">
            <AuthenticationButton />
            <Profile />
            <img className='navlogo' src={require('../utils/lowres-transparent-background.svg').default} alt='mySvgImage' width="auto" height="55" />
        </div>
    );
}

