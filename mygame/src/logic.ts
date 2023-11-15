import { Character } from "./character";
import { Map } from "./map";
import { Subject } from "./observer";
import { Tile } from "./tile";

export const ARENA_WIDTH = 16;
const CHARACTER_START_X = 4
const CHARACTER_START_Y = 6

export class Logic extends Subject {
  public mode : "MOVE" | "TARGET";
  public turn : number;
  public map : Map;

  move(e : MouseEvent) {
    // need coordinates of character rn
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
    this.map = new Map(app, this)
    const sampleTile = document.getElementById("(0,0)") as HTMLElement;
    if (!sampleTile) throw new Error("sampleTile not found");

    console.log(sampleTile.offsetWidth)

    this.map._element.style.width = `${ARENA_WIDTH * sampleTile.offsetWidth}px`;
    this.map._element.style.height = `${ARENA_WIDTH * sampleTile.offsetHeight}px`;

    // making character
    const character = new Character(this.map.getTile(CHARACTER_START_X, CHARACTER_START_Y))
  }
}