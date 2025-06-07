import { Card } from "./Card.jsx";
import becas from '../assets/becas.svg'
import feriaLaboral from '../assets/feria-laboral.svg'
import conferencia from '../assets/conferencia.svg'
import linksInteres from '../assets/links-interes.svg'

import "./MainContent.css";

export const MainContent = () => {
  return (
    <div className="maincontent-container">
      <h2>Hecha un vistazo a las novedades de este mes</h2>
      <div className="card-container">
        <Card urlImagen={becas} alt="Foto de beca" texto="Revisa aquí las becas disponibles" />
        <Card urlImagen={feriaLaboral} alt="Foto de feria laboral" texto="Revisa aquí las ferias laborales de este mes" />
        <Card urlImagen={conferencia} alt="Foto de conferencia" texto="Revisa aquí las conferencias de este mes" />
        <Card urlImagen={linksInteres} alt="Foto de worldwide web" texto="Revisa aquí los links de interés" />
      </div>
    </div>
  );
};
