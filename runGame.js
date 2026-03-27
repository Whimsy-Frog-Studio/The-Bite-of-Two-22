let player;
let inventory_slot1;
let inventory_slot2;
let inventory_slot3;
let inventory_slot4;
let inventory_slot5;
let inventory_slot6;
let inventory_slot7;
let inventory_slot8;

function setup() {
  new Canvas(1920, 1080);
  player = new Player(0,0)
  inventory_slot1 = new Inventory(1,0,1016);
  inventory_slot2 = new Inventory(2,63,1016);
  inventory_slot3 = new Inventory(3,126,1016);
  inventory_slot4 = new Inventory(4,189,1016);
  inventory_slot5 = new Inventory(5,252,1016);
  inventory_slot6 = new Inventory(6,315,1016);
  inventory_slot7 = new Inventory(7,378,1016);
  inventory_slot8 = new Inventory(8,441,1016);
}

function draw() {
  background(0);
  player.Move();
  player.UpdateSprite();
}
