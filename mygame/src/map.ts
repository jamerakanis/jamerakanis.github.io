import { Logic } from "./logic";
import { Tile } from "./tile";
import { ARENA_WIDTH } from "./logic";

export class Map {
  private tile : Tile[]

  get _element() : HTMLElement {
    const map = document.getElementById("map") as HTMLElement;
    if (!map) throw new Error("map div not found");
    return map;
  }
  
  getTile(x : number, y : number) {
    if (x >= ARENA_WIDTH ||
      y >= ARENA_WIDTH ||
      x < 0 ||
      y < 0) throw new Error("tried to get out of bounds tile")
    return this.tile[ARENA_WIDTH * (y) + (x)];
  }

  handleTileClick(tile : Tile) {
    console.log(tile._id)
  }
  
  constructor(parent : HTMLElement, private logic : Logic) {
    // Adding element to HTML
    parent.insertAdjacentHTML(
      `beforeend`,
      `
      <div id="map">
      </div>
      `
    )

    // making tiles
    this.tile = new Array()
    for (let i = 0; i < ARENA_WIDTH; i++) {
      for (let j = 0; j < ARENA_WIDTH; j++) {
        this.tile.push(new Tile(this, j, i))
      }
    }
  }
}