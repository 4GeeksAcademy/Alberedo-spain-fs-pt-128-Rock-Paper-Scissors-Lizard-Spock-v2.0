
const choises = ["piedra", "papel", "tijeras", "lagarto", "spock"]
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

function randomChoise() {
  computerChoise = choises[Math.floor(Math.random() * choises.length)]
  console.log(`El ordenador ha elegido: ${computerChoise}`);
}

const play = (userChoise) => {
  if (userChoise === computerChoise) {
    console.log("Habeis tenido un empate! Vuelve a intentarlo");
    document.getElementById("result").innerHTML = "¡¡Empate!!  Pulsa otro botón para jugar la revancha";
  }
  else if (rules[userChoise].includes(computerChoise)) {
    console.log("Enhorabuena! Ganastes!")
    document.getElementById("result").innerHTML = "🎉¡¡Ganastes!! 🎉";
  }
  else {
    console.log("Lo siento, has perdido...");
    document.getElementById("result").innerHTML = "💀¡¡Perdistes!!💀";
  }
}

document.getElementById("rock").addEventListener("click", function () {
  document.getElementById("userChoise").innerHTML = "piedra";
  randomChoise()
  document.getElementById("computerChoise").innerHTML = computerChoise;
  play("piedra")
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


