import { Character } from "./character";
import { Tile } from "./tile";

const ARENA_WIDTH = 16;

// get reference to app
const app = document.getElementById("app") as HTMLElement;
if (!app) throw new Error("app div not found");

// clear the panel of any content DO NOT PUT ANY HTML ABOVE THIS
app.innerHTML = "";


// get reference to map
app.insertAdjacentHTML(
  `beforeend`,
  `
  <div id="map">
  </div>
  `
)
const map = document.getElementById("map") as HTMLElement;
if (!map) throw new Error("map div not found");

let tile : Tile[] = new Array();

for (let i = 0; i < ARENA_WIDTH; i++) {
  for (let j = 0; j < ARENA_WIDTH; j++) {
    tile.push(new Tile(map, j, i))
  }
}

function getTile(x : number, y : number) {
  if (x >= ARENA_WIDTH ||
    y >= ARENA_WIDTH ||
    x < 0 ||
    y < 0) throw new Error("tried to get out of bounds tile")
  return tile[ARENA_WIDTH * (y) + (x)];
}

const sampleTile = document.getElementById("(0,0)") as HTMLElement;
if (!sampleTile) throw new Error("sampleTile not found");

console.log(sampleTile.offsetWidth)

map.style.width = `${ARENA_WIDTH * sampleTile.offsetWidth}px`;
map.style.height = `${ARENA_WIDTH * sampleTile.offsetHeight}px`;

const CHARACTER_START_X = 4
const CHARACTER_START_Y = 6

const character = new Character(getTile(CHARACTER_START_X, CHARACTER_START_Y))

character.transport(getTile(6,9))