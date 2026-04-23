class StageController 
{
    constructor(initialStage, canvasWidth, canvasHeight) 
    {
        this.stage = initialStage;
        this.stageSprite = new Sprite(canvasWidth / 2, canvasHeight / 2, 192000, 108000);
        this.stageSprite.image = `Sprites/Map/${initialStage}.png`;     
        this.stageSprite.collider = 'none';
        this.stageSprite.layer = 0;
    }
    
    UpdateStage(newStage) 
    {
        this.stage = newStage;
    }

    MoveStageSprite(velX, velY) 
    {
        this.stageSprite.vel.x = -velX;
        this.stageSprite.vel.y = -velY;
    }

}