let puntajeTotal = 0;
let preguntaActual = 0;

/*hago un array con las preguntas*/
const preguntas = [
  {
    texto: "¿SOLES GUARDARTE LO QUE SENTIS?",
    opciones: [
      { texto: "SI, SIEMPRE", valor: 1 },
      { texto: "A VECES", valor: 2 },
      { texto: "NO, LO COMPARTO", valor: 0 }
    ]
  },
  {
    texto: "¿TE CUESTA IDENTIFICAR CÓMO TE SENTIS?",
    opciones: [
      { texto: "MUCHO", valor: 2 },
      { texto: "DEPENDE", valor: 1 },
      { texto: "NO", valor: 0 }
    ]
  },{
    texto: "¿SENTIS QUE TUS EMOCIONES TE DOMINAN A VECES?",
    opciones: [
      { texto: "SI, TODO EL TIEMPO", valor: 2 },
      { texto: "A VECES", valor: 1 },
      { texto: "NO, CASI NUNCA", valor: 0 }
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
    mensaje.innerText = "¡Bien! Sabés manejar tus emociones con conciencia.";
    recomendacion.innerText=" Nuestra recomendacion: Seguí prestándote atención";
  } else if (puntajeTotal <= 4) {
    titulo1.innerText = "RESULTADO"
    mensaje.innerText = "Tus emociones tal vez necesitan más espacio.";
    recomendacion.innerText=" Nuestra recomendacion: Tal vez te ayudaría escribir lo que sentís o compartirlo con alguien";
  } else {
    titulo1.innerText = "RESULTADO"
    mensaje.innerText = "Tus emociones podrían estar sobrecargándote.";
    recomendacion.innerText = "Nuestra recomendacion: No estás solx. Hablar con alguien o pedir ayuda puede hacer una gran diferencia";
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








