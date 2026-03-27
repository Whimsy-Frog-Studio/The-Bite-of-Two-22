let player;
let inventorySlots = [];

function setup() {
  new Canvas(1920, 1080);
  player = new Player(0,0)
  for (let i = 0; i < 8; i++)
  {
    let slotNum = i + 1;
    let slotX = i * 63;

    inventorySlots.push(new Inventory(slotNum, slotX, 1016))
  }
}

function draw() {
  background(0);
  player.Move();
  player.UpdateSprite();
}
