let player;

function setup() {
  new Canvas(1920, 1080);
  player = new Player(0,0)
  inventory = new Inventory(1,0,1016);
  inventory = new Inventory(2,63,1016);
  inventory = new Inventory(3,126,1016);
  inventory = new Inventory(4,189,1016);
  inventory = new Inventory(5,252,1016);
  inventory = new Inventory(6,315,1016);
  inventory = new Inventory(7,378,1016);
  inventory = new Inventory(8,441,1016);
}

function draw() {
  background(0);
  player.Move();
  player.UpdateSprite();
}
