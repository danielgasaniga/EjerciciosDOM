const DATA = [
  { name: "Juan", lastname: "Perez" },
  { name: "Roberto", lastname: "Carlos" },
  { name: "Fulano", lastname: "Detal" },
  { name: "Gian", lastname: "Laic" },
  { name: "Fernando", lastname: "Saavedra" },
];

// Escribe el código necesario aquí
function createParagraph (text){
let container = document.getElementById("container");
container.innerHTML += "<p>" + text + "</p>"
}
for (let person of DATA){
 createParagraph(person.name + " " + person.lastname);
}
//
