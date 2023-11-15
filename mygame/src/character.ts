import { Tile } from "./tile";

const CHARACTER_STRING = `
  <img id="character" src="src/character.png"/>
  `
// this is a class for the character sprite
export class Character {
  constructor(private tile : Tile) {
    // get parent html element
    const parent = document.getElementById(this.tile._id)
    if (!parent) throw new Error("parent div of character not found")
    // use strings to add it to the html
    parent.insertAdjacentHTML(`beforeend`, CHARACTER_STRING)
  }

  get _tile() {
    return this.tile;
  }

  transport(tile : Tile) {
    // deleting current character location
    const element = document.getElementById("character") as HTMLElement;
    if (!element) throw new Error("character div not found")
    element.remove();

    // adding character back in
    const parent = document.getElementById(tile._id)
    if (!parent) throw new Error("parent div of character not found")
    parent.insertAdjacentHTML(`beforeend`, CHARACTER_STRING)

    // updating tile variable
    this.tile = tile;
  }
}