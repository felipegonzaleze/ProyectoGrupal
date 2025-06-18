    document.getElementById("quiz-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const preguntas = document.querySelectorAll(".pregunta");
    let correctas = 0;

    preguntas.forEach((pregunta, index) => {
        const correcta = pregunta.getAttribute("data-correcta");
        const nombrePregunta = "q" + (index + 1);
        const seleccion = document.querySelector(`input[name="${nombrePregunta}"]:checked`);

        // Quitar clases anteriores
        pregunta.classList.remove("correcta", "incorrecta");

        if (seleccion) {
        if (seleccion.value === correcta) {
            pregunta.classList.add("correcta");
            correctas++;
        } else {
            pregunta.classList.add("incorrecta");
        }
        } else {
        pregunta.classList.add("incorrecta");
        }
    });

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Obtuviste <strong>${correctas}</strong> de <strong>${preguntas.length}</strong> respuestas correctas.`;
    });
