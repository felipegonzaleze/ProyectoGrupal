import forgeLogo from '../assets/Fundacion-Forge-Logo.svg';
import './Navbar.css';

export const Navbar = () => {
    return (
        <div className="nav-container">
            <img id="forgeLogo" src={forgeLogo} alt="Logo Fundación Forge" />
            <div className="botones">
                <a href="">About us</a>
                <a href="">Contáctanos</a>
                <a href="">Mapa</a>
            </div>
        </div>
    );
};
