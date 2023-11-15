import { Logic } from "./logic";
import { Tile } from "./tile";

export class Map {
  private tile : Tile[]

  get _element() : HTMLElement {
    const map = document.getElementById("map") as HTMLElement;
    if (!map) throw new Error("map div not found");
    return map;
  }
  
  getTile(x : number, y : number) {
    if (x >= this.width ||
      y >= this.width ||
      x < 0 ||
      y < 0) throw new Error("tried to get out of bounds tile")
    return this.tile[this.width * (y) + (x)];
  }

  getDirection(src : Tile, des : Tile) : "UP" | "DOWN" | "LEFT" | "RIGHT" | "NONE" {
    const deltax = des._x - src._x;
    const deltay = des._y - src._y;
    if (deltax == 0 && deltay == 0) return "NONE"
    if (Math.abs(deltax) >= Math.abs(deltay)) { // horizontal
      if (deltax > 0) return "RIGHT"
      if (deltax < 0) return "LEFT"
    } else if (Math.abs(deltax) < Math.abs(deltay)){ // vertical
      if (deltay > 0) return "DOWN"
      if (deltay < 0) return "UP"
    }
    return "NONE"
  }

  handleTileClick(tile : Tile) {
    switch(this.logic._mode) {
      case "MOVE":
        const direction = this.getDirection(this.logic._character._tile, tile)
        if (direction == "NONE") return;
        this.logic.handleMove(direction)
        break;
    }
  }
  
  constructor(parent : HTMLElement, private width : number, private logic : Logic) {
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
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < width; j++) {
        this.tile.push(new Tile(this, j, i))
      }
    }
  }
}