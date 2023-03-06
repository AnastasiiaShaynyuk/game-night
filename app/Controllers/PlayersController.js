import { appState } from "../AppState.js";
import { playersService } from "../Services/PlayersService.js";




export class PlayersController {
  constructor(){
    console.log('players controller', appState.players)
    this.drawPlayers()

  }

  drawPlayers() {
  let players = appState.players
  let template = ''
  players.forEach(player => template += player.PlayerTemplate)
  document.getElementById('players').innerHTML = template
  }

  addScore(name) {
    playersService.addScore(name)
    this.drawPlayers()
  }

  subtractScore(name) {
    playersService.subtractScore(name)
    this.drawPlayers()
  }
}