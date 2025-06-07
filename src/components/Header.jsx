import { Boton } from "./Boton";
import "./Header.css";

export const Header = () => {
  return (
    <div className="container">
      <h1>¡Bienvenido/a!</h1>
      <h1>¿Qué aprenderás el día de hoy?</h1>
      <div className="button-container">
        <Boton nombre="Autoconocimiento" />
        <Boton nombre="Inserción Laboral" />
        <Boton nombre="Educación continua" />
      </div>
    </div>
  );
};
