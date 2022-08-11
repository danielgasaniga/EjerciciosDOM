const buttonAdd = document.getElementById("buttonAdd");
const container = document.getElementById("container");
const inputParagraph = document.getElementById("inputParagraph");

buttonAdd.addEventListener("click", () => {
  // Escribe el código necesario aquí
  const texto = inputParagraph.value;
  const parrafo = "<p>" +texto+ "</p>";
  container.innerHTML += parrafo
  //
});
