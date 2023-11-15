import { Character } from "./character";
import { Map } from "./map";
import { Subject } from "./observer";
import { Tile } from "./tile";

export const ARENA_WIDTH = 16;
const CHARACTER_START_X = 4
const CHARACTER_START_Y = 6

export class Logic extends Subject {
  private mode : "MOVE" | "TARGET";
  private turn : number;
  private map : Map;
  private character : Character

  get _mode() {
    return this.mode;
  }
  get _turn() : number {
    return this.turn;
  }
  get _map() : Map {
    return this.map
  }
  get _character() : Character {
    return this.character
  }
  

  handleMove(direction : "UP" | "DOWN" | "LEFT" | "RIGHT") {
    let deltax = 0;
    let deltay = 0;
    if (direction == "UP") deltay = -1;
    if (direction == "DOWN") deltay = 1;
    if (direction == "LEFT") deltax = -1;
    if (direction == "RIGHT") deltax = 1;
    const destination = this.map.getTile(
      this.character._tile._x + deltax,
      this.character._tile._y + deltay
    )
    this._character.transport(destination)

    // set facing
    this.character.face(direction)
  }

  teleport(tile : Tile) {
  }

  constructor() {
    super()
    this.mode = "MOVE";
    this.turn = 0;

    // getting app to place everything
    const app = document.getElementById("app") as HTMLElement;
    if (!app) throw new Error("app div not found");
    
    // making map
    this.map = new Map(app, ARENA_WIDTH, this)
    const sampleTile = document.getElementById("(0,0)") as HTMLElement;
    if (!sampleTile) throw new Error("sampleTile not found");

    console.log(sampleTile.offsetWidth)

    this.map._element.style.width = `${ARENA_WIDTH * sampleTile.offsetWidth}px`;
    this.map._element.style.height = `${ARENA_WIDTH * sampleTile.offsetHeight}px`;

    // making character
    this.character = new Character(this.map.getTile(CHARACTER_START_X, CHARACTER_START_Y))
  }
}