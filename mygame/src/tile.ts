// A tile is a 100x100px square with contents

export class Tile {
  get _x() {
    return this.x;
  }
  get _y() {
    return this.y;
  }
  get _id() {
    return `(${this.x},${this.y})`
  }

  constructor(parent : HTMLElement, private x : number, private y : number) {
    // use strings to add it to the html
    parent.insertAdjacentHTML(
        `beforeend`,
        `
        <div class="tile", id="(${x},${y})">
        </div>
        `
    )
  }
}