// El principal objetivo de este desafío es fortalecer tus
//  habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Primer paso: Declarar array vacío para agregar y alamcenar participates
let amigos = [];

// Segundo paso: Función de agregar amigos
function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  amigos.push(nombre);
  input.value = "";
  actualizarLista();
}

//Tercer paso: Función para mostrar la lista de amigos
function actualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

// Cuanrto paso : Función para sortear un amigo secreto
function sortearAmigo() {
  if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear.");
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceAleatorio];

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "El amigo secreto es: <strong>" + amigoSorteado + "</strong>";
}
