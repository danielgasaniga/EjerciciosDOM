document.addEventListener("DOMContentLoaded", function () {
  // Escribe el código necesario aquí
  const highlight = document.getElementById("highlight")

  highlight.addEventListener("click", () => {
    document.getElementById("lorem").className = "highlight";
  });
  //
});
