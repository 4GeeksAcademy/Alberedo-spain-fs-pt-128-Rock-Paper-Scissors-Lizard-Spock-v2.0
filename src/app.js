import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



const choises = ["rock", "paper", "scissors", "lizard", "spock"]
const rules = {
  // Piedra gana a tijeras y a lagartija
  rock: ['scissors', "lizard"],
  // Papel gana a piedra y a Spock
  paper: ["rock", "spock"],
  // Tijeras gana a papel y a lagartija
  scissors: ["paper", "lizard"],
  // Lagartija gana a Spock y a papel
  lizard: ["spock", "paper"],
  // Spock gana a tijeras y a pieda
  spock: ["scissors", "rock"]
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
  document.getElementById("userChoise").innerHTML = "rock";
  randomChoise()
  document.getElementById("computerChoise").innerHTML = computerChoise;
  play("rock")
  document.getElementById("resultDiv").classList.remove("d-none")
});

document.getElementById("paper").addEventListener("click", function () {
  document.getElementById("userChoise").innerHTML = "paper";
  randomChoise()
  play("paper")
  document.getElementById("computerChoise").innerHTML = computerChoise;
  document.getElementById("resultDiv").classList.remove("d-none")
});

document.getElementById("scissors").addEventListener("click", function () {
  document.getElementById("userChoise").innerHTML = "scissors";
  randomChoise()
  play("scissors")
  document.getElementById("computerChoise").innerHTML = computerChoise;
  document.getElementById("resultDiv").classList.remove("d-none")
});

document.getElementById("lizard").addEventListener("click", function () {
  document.getElementById("userChoise").innerHTML = "lizard";
  randomChoise()
  play("lizard")
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


