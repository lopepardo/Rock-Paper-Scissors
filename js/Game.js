//  Clase juega, retorna el ganador de cada partida
export class Game {
  checkWinner(player, machine) {
    if (
      (player.move === "rock" && machine.move === "scissors") ||
      (player.move === "paper" && machine.move === "rock") ||
      (player.move === "scissors" && machine.move === "paper")
    ) {
      return player.name;
    } else if (player.move === machine.move) {
      return "draw";
    } else {
      return machine.name;
    }
  }
}
