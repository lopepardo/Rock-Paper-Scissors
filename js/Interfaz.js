// Clase Interfaz muestra todo en pantalla
export class Interfaz {
  // Función para mostrar la animación de aleatoriedad
  random() {
    const machineMove = document.querySelector(".machine-move");
    machineMove.classList.add("random");

    const arrayPos = ["rock", "paper", "scissors"];
    const frag = document.createDocumentFragment();
    arrayPos.forEach((pos) => {
      const img = document.createElement("img");
      img.classList.add(`img-${pos}`);
      img.src = `img/${pos}.png`;
      frag.appendChild(img);
    });
    machineMove.appendChild(frag);
  }

  // Función para quitar la animación de aleatoriedad
  randomClear() {
    const machineMove = document.querySelector(".machine-move");
    machineMove.classList.remove("random");
    while (machineMove.hasChildNodes()) {
      machineMove.removeChild(machineMove.firstElementChild);
    }
  }

  // Función para desabilitar todos los botones
  block(btns) {
    btns.forEach((btn) => {
      btn.setAttribute("disabled", true);
    });
  }

  // Función para habilitar todos los botones
  enable(btns) {
    btns.forEach((btn) => {
      btn.removeAttribute("disabled");
    });
  }

  // Función para mostrar las imagenes en el display de la jugada
  displayMove(player) {
    const display = document.querySelector(`.${player.name}-move`);
    const img = document.createElement("img");
    img.src = `img/${player.move}.png`;
    display.appendChild(img);
  }

  // Función para eliminar las imagenes en el display de la jugada
  displayClean() {
    const display = document.querySelectorAll(".display-move img");
    [...display].forEach((d) => {
      d.remove();
    });
  }

  // Animación para el ganador
  winner(win) {
    const playerMove = document.querySelector(".player-move img");
    const playerMachine = document.querySelector(".machine-move img");
    if (win === "player") {
      playerMove.classList.add("win");
    } else if (win === "machine") {
      playerMachine.classList.add("win");
    } else if (win === "draw") {
      playerMove.classList.add("win");
      playerMachine.classList.add("win");
    }
  }
}
