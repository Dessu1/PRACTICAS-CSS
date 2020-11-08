function cambiarColor(event) {
  /**
   *  Reseteamos y removemos la clase active
   */

  document.querySelectorAll("span.active").forEach((item) => {
    item.classList.remove("active");
  });

  /**
   *  Activamos la clase active segun el target
   */
  event.target.classList.add("active");
}
