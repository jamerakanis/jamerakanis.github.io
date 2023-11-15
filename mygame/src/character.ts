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
    this.facing = "RIGHT";
  }
  private facing : "LEFT" | "RIGHT"
  get _facing() {
    return this.facing;
  }

  get _tile() {
    return this.tile;
  }

  get _element() {
    const character = document.getElementById("character") as HTMLElement;
    if (!character) throw new Error("map div not found");
    return character;

  }

  face(facing : string = this.facing) {
    if (facing && facing == "LEFT" || facing == "RIGHT") this.facing = facing;
    if (this.facing == "LEFT") this._element.style.transform = `scaleX(-1)`
    if (this.facing == "RIGHT") this._element.style.transform = `scaleX(1)`
  }

  transport(tile : Tile) {
    // transport should keep it's facing


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