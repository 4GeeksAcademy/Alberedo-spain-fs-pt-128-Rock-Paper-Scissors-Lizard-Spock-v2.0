

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

const computerChoise = choises[Math.floor(Math.random()*choises.length)]
console.log(`El ordenador ha elegido: ${computerChoise}`);

const play=(userChoise)=>{
    if(userChoise === computerChoise){
      console.log("Habeis tenido un empate! Vuelve a intentarlo");
    }
    else if(rules[userChoise].includes(computerChoise)){
      console.log("Enhorabuena! Ganastes!")
    }
    else{
      console.log("Lo siento, has perdido...");
      
    }
}

play("lizard")
