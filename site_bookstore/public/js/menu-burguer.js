const button = document.querySelector(".menu-button");
const nav = document.getElementById("nav");

/* 
  cada ves que se haga click en el botón 
  agrega y quita las clases necesarias 
  para que el menú se muestre.
*/
button.addEventListener("click", () => {
  button.classList.toggle("close");
  nav.classList.toggle("show");
});

/* 
  Cuándo se haga click fuera del contenedor de enlaces 
  el menú debe esconderse.
*/

nav.addEventListener("click", e => {
  if (e.target.id === "nav") {
    nav.classList.remove("show");
    button.classList.remove("close");
  }
});