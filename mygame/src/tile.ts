// A tile is a 100x100px square with contents

import { Map } from "./map";

export class Tile {
  get _element() : HTMLElement{
    const tile = document.getElementById(this._id) as HTMLElement;
    if (!tile) throw new Error("map div not found");
    return tile;
  }
  get _x() {
    return this.x;
  }
  get _y() {
    return this.y;
  }
  get _id() : string {
    return `(${this.x},${this.y})`
  }

  constructor(private map : Map, private x : number, private y : number) {
    // use strings to add it to the html
    map._element.insertAdjacentHTML(
        `beforeend`,
        `
        <div class="tile", id="(${x},${y})">
        </div>
        `
    )
    this._element.addEventListener("click", (e) => {
      this.map.handleTileClick(this);
    })
  }
}