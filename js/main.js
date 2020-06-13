// Importación de modulos
import { Player } from "./Player.js";
import { Interfaz } from "./Interfaz.js";
import { Game } from "./Game.js";

// Instancias
const UI = new Interfaz();
const player = new Player("player");
const machine = new Player("machine");
const game = new Game("machine");

// Varibles
const btns = document.querySelectorAll(".btn");

// Funciones
// Genera aleatoreamente la jugada de la máquina
const generateMove = () => {
  const arrayPos = ["rock", "paper", "scissors"];
  const ramdonMove = Math.floor(Math.random() * 3);
  return arrayPos[ramdonMove];
};

// Eventlisteners
// Evento en cada botón, simula la elección del jugador
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Almacena y muestra la elección del jugador
    player.move = btn.id;
    UI.displayMove(player);
    UI.block(btns);
    // Genera y almacena la elección de la máquina
    setTimeout(() => {
      const machineMove = generateMove();
      machine.move = machineMove;
      UI.randomClear();
      UI.displayMove(machine);
      // Determina que jugador gana, para mostrar una animación
      const win = game.checkWinner(player, machine);
      UI.winner(win);
    }, 2000);
    // Reinicia todo para volver a jugar
    setTimeout(() => {
      UI.enable(btns);
      UI.displayClean();
      UI.random();
    }, 6000);
  });
});

// Inicia con animación de la máquina
document.addEventListener("DOMContentLoaded", () => {
  UI.random();
});
