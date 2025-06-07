import "./Header.css";

export const Header = () => {
  return (
    <div className="container">
      <h1>¡Bienvenido/a!</h1>
      <h1>¿Qué aprenderás el día de hoy?</h1>
      <div className="button-container">
        <button className="boton-personalizado">
          <p>Autoconocimiento</p>
        </button>
        <button className="boton-personalizado">
          <p>Inserción Laboral</p>
        </button>
        <button className="boton-personalizado">
          <p>Educación Continua</p>
        </button>
        <button className="boton-personalizado">
          <p>Educación Financiera</p>
        </button>
      </div>
    </div>
  );
};
