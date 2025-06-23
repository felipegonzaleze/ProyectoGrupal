let puntajeTotal = 0;
let preguntaActual = 0;

/*hago un array con las preguntas*/
const preguntas = [
  {
    texto: "¿CÓMO TE SENTÍS DESPUES DE HACER ESTE HABITO?",
    opciones: [
      { texto: "MAL", valor: 2 },
      { texto: "NEUTRO", valor: 1 },
      { texto: "BIEN", valor: 0 }
    ]
  },
  {
    texto: "¿CUÁNTO CONTROL TENÉS SOBRE CUANDO LO HACES?",
    opciones: [
      { texto: "NADA", valor: 2 },
      { texto: "POCO", valor: 1 },
      { texto: "TOTAL", valor: 0 }
    ]
  },{
    texto: "¿LO HACÉS AUNQUE SABÉS QUE NO ES BUENO?",
    opciones: [
      { texto: "SI", valor: 2 },
      { texto: "A VECES", valor: 1 },
      { texto: "NO", valor: 0 }
    ]
  }
];

function cambiarCartel() {
  const container = document.querySelector(".container-interior");

  const titulo = document.getElementById("titulo");
  titulo.innerText = preguntas[preguntaActual].texto;
  titulo.classList.add("titulo");

const dentroDeLaCaja = document.getElementById("dentroDeLaCaja");
dentroDeLaCaja.innerText = "";

const noRespCorrect = document.getElementById("respuestaCorrecta");
noRespCorrect.innerText = "NO HAY RESPUESTAS CORRECTAS NI INCORRECTAS.";

  const boton = document.querySelector(".btn-siguiente");
  if (boton) boton.style.display = "none";
  
  // Borrar opciones anteriores si existen
  const opcionesViejas = document.querySelector(".opciones");
  if (opcionesViejas) opcionesViejas.remove();
  
  // Crear nuevo contenedor
  const opciones = document.createElement("div");
  opciones.className = "opciones";
  
  preguntas[preguntaActual].opciones.forEach((opcion) => {
    const btn = document.createElement("button");
    btn.innerText = opcion.texto;
    btn.classList.add("btn-respuestas");
    btn.onclick = () => {
      puntajeTotal += opcion.valor;
      preguntaActual++;
      if (preguntaActual < preguntas.length) {
        cambiarCartel(); 
      } else {
        mostrarResultado();
      }
    };
    opciones.appendChild(btn);
  });

  container.appendChild(opciones);
}

function mostrarResultado() {
  const container = document.querySelector(".container-interior");
  container.innerHTML = "";

  const mensaje = document.createElement("p");
  const recomendacion = document.createElement("h4");
  const titulo1 = document.createElement("h1");
  
  if (puntajeTotal <= 1) {
    titulo1.innerText = "RESULTADO"
    mensaje.innerText = "¡Bien! Este hábito es saludable y te ayuda.";
  } else if (puntajeTotal <= 4) {
    titulo1.innerText = "RESULTADO"
    mensaje.innerText = "Este hábito puede mejorar, prestá atención.";
  } else {
    titulo1.innerText = "RESULTADO"
    mensaje.innerText = "Este hábito probablemente es negativo, pensá en cambiarlo.";
    recomendacion.innerText = "Nuestra recomendacion: Leer algunos de los tips que damos en la seccion de debajo";
  }
  mensaje.classList.add("resultado");
  
  const btnvolver = document.createElement("button");
  btnvolver.innerText ="Volver al inicio";
  btnvolver.classList.add("buttonreiniciar");
  btnvolver.onclick = () => {
  location.reload();
  }


  container.appendChild(titulo1);
  container.appendChild(mensaje);
  container.appendChild(recomendacion);
  container.appendChild(btnvolver);

}