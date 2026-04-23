class StageController 
{
    constructor(initialStage, canvasWidth, canvasHeight) 
    {
        this.stage = initialStage;
        this.stageSprite = new Sprite(canvasWidth / 2, canvasHeight / 2);
        this.stageSprite.image = `Sprites/Map/${this.stage}.png`;
        this.stageSprite.collider = 'none';
        this.stageSprite.layer = 1;

        this.collisionSprite = new Sprite(canvasWidth / 2, canvasHeight / 2);
        this.collisionSprite.collider = 'kinematic';
        this.collisionSprite.image = `Sprites/Map/Collision/${this.stage}.png`;
        this.collisionSprite.layer = 0;
    }
    
    UpdateStage(stage) 
    {
        this.stage = stage;
    }

    MoveStageSprite(velX, velY) 
    {
        this.stageSprite.vel.x = -velX;
        this.stageSprite.vel.y = -velY;
        this.collisionSprite.vel.x = -velX;
        this.collisionSprite.vel.y = -velY;
    }

}