/**
 *  Movimientos de la animacion que vamos a hacer
 */
const card = document.querySelector(".card");
const container = document.querySelector(".container");

/**
 *  Items
 */
const sneaker = document.querySelector(".sneaker img");
const title = document.querySelector(".title");
const subtitle = document.querySelector(".info h3");
const description = document.querySelector(".info p");
const years = document.querySelector(".years");
const comprar = document.querySelector(".comprar button");

/**
 *  Eventos de la animacion
 */
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;

  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

/**
 *  Animacion fuera del contenedor
 */
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";

  /**
   *  Texto afuera
   */
  sneaker.style.transform = "translateZ(100px)";
  title.style.transform = "translateZ(100px)";
  subtitle.style.transform = "translateZ(100px)";
  description.style.transform = "translateZ(100px)";
  years.style.transform = "translateZ(100px)";
  comprar.style.transform = "translateZ(100px)";
});

/**
 *  Animacion dentro del contenedor
 */
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  /**
   *  Texto adentro
   */
  sneaker.style.transform = "translateZ(0px)";
  title.style.transform = "translateZ(0px)";
  subtitle.style.transform = "translateZ(0px)";
  description.style.transform = "translateZ(0px)";
  years.style.transform = "translateZ(0ox)";
  comprar.style.transform = "translateZ(0px)";
});
