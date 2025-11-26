
//Opciones posibles
const choises = ["piedra", "papel", "tijeras", "lagarto", "spock"]

//Reglas
const rules = {
  // Piedra gana a tijeras y a lagartija
  piedra: ['tijeras', "lagarto"],
  // Papel gana a piedra y a Spock
  papel: ["piedra", "spock"],
  // Tijeras gana a papel y a lagartija
  tijeras: ["papel", "lagarto"],
  // Lagartija gana a Spock y a papel
  lagarto: ["spock", "papel"],
  // Spock gana a tijeras y a pieda
  spock: ["tijeras", "piedra"]
}
let computerChoise

//Elige aleatoriamente una opción para el ordenador
function randomChoise() {
  computerChoise = choises[Math.floor(Math.random() * choises.length)]
  console.log(`El ordenador ha elegido: ${computerChoise}`);
}

//Realiza comparación de elecciones entre usuario y ordenador
const play = (userChoise) => {
  if (userChoise === computerChoise) {
    document.getElementById("result").innerHTML = "¡¡Empate!!  Pulsa otro botón para jugar la revancha";
  }
  if (rules[userChoise].includes(computerChoise)) {
    document.getElementById("result").innerHTML = "🎉¡¡Ganastes!! 🎉";
  }
  else {
    document.getElementById("result").innerHTML = "💀¡¡Perdistes!!💀";
  }
}

//Añades el eventlistener para cuando haces click en 
document.getElementById("rock").addEventListener("click", function () {
  //Esribe piedra en la elección de usuario si pulsas piedra
  document.getElementById("userChoise").innerHTML = "piedra";
  //Ejecuta la elección del ordenador random
  randomChoise()
  //Escribe la elección de ordenador en pantralla
  document.getElementById("computerChoise").innerHTML = computerChoise;
  //Ejecuta la comparación de elección de ordenador y usuario
  play("piedra")
  //Oculta el parrafo de solución hasta que se pulsa el boton por primera vez
  document.getElementById("resultDiv").classList.remove("d-none")
});

document.getElementById("paper").addEventListener("click", function () {
  document.getElementById("userChoise").innerHTML = "papel";
  randomChoise()
  play("papel")
  document.getElementById("computerChoise").innerHTML = computerChoise;
  document.getElementById("resultDiv").classList.remove("d-none")
});

document.getElementById("scissors").addEventListener("click", function () {
  document.getElementById("userChoise").innerHTML = "tijeras";
  randomChoise()
  play("tijeras")
  document.getElementById("computerChoise").innerHTML = computerChoise;
  document.getElementById("resultDiv").classList.remove("d-none")
});

document.getElementById("lizard").addEventListener("click", function () {
  document.getElementById("userChoise").innerHTML = "lagarto";
  randomChoise()
  play("lagarto")
  document.getElementById("computerChoise").innerHTML = computerChoise;
  document.getElementById("resultDiv").classList.remove("d-none")
});

document.getElementById("spock").addEventListener("click", function () {
  document.getElementById("userChoise").innerHTML = "spock";
  randomChoise()
  play("spock")
  document.getElementById("computerChoise").innerHTML = computerChoise;
  document.getElementById("resultDiv").classList.remove("d-none")
});


