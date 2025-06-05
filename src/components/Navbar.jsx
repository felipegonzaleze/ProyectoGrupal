import forgeLogo from '../assets/Fundacion-Forge-Logo-sinfrase.svg';
import './Navbar.css';

export const Navbar = () => {
    return (
        <div className="nav-container">
            <img id="forgeLogo" src={forgeLogo} alt="Logo Fundación Forge" />
            <h1>Bienvenido a la adultez</h1>
            <div className="botones">
                <a href="#Registrarse">Registrarse</a>
                <a href="#Login">Login</a>
            </div>
        </div>
    );
};
