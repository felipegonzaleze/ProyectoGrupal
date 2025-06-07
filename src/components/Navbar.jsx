import forgeLogo from '../assets/Fundacion-Forge-Logo.svg';
import './Navbar.css';

export const Navbar = () => {
    return (
        <div className="nav-container">
            <img id="forgeLogo" src={forgeLogo} alt="Logo Fundación Forge" />
            <div className="botones">
                <a href="#about-us">Sobre nosotros</a>
                <a href="#contactanos">Contáctanos</a>
                <a href="mapa">Mapa</a>
            </div>
        </div>
    );
};
