function irACurso(ruta) {
    window.location.href = ruta;
}
const posiciones = {
  carruselTrack: 0,
  carruselTrack2: 0
};
// let posicion = 0;
// const track = document.getElementById('carruselTrack');
// const track2 = document.getElementById('carruselTrack2');
// const totalItems = track.children.length;
// const itemWidth = 270; // ancho + gap estimado
// const itemsVisibles = 3; // cuántos se ven a la vez

// function moverCarrusel(direccion) {
//     const maxPos = totalItems - itemsVisibles;
//     posicion += direccion;

//     if (posicion < 0) posicion = 0;
//     if (posicion > maxPos) posicion = maxPos;

//   track.style.transform = `translateX(-${posicion * itemWidth}px)`;
//   track2.style.transform = `translateX(-${posicion * itemWidth}px)`;
// }


function moverCarrusel(idTrack, direccion) {
  const track = document.getElementById(idTrack);
  const totalItems = track.children.length;
  const itemWidth = 270;
  const itemsVisibles = 3;
  const maxPos = totalItems - itemsVisibles;

  // Asegurarse de que esté inicializado
  if (!(idTrack in posiciones)) {
    posiciones[idTrack] = 0;
  }

  // Actualizar posición
  posiciones[idTrack] += direccion;

  if (posiciones[idTrack] < 0) posiciones[idTrack] = 0;
  if (posiciones[idTrack] > maxPos) posiciones[idTrack] = maxPos;

  const desplazamiento = posiciones[idTrack] * itemWidth;
  track.style.transform = `translateX(-${desplazamiento}px)`;
}