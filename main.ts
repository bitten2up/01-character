controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`arrow`, mySprite, 0, 50)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite.destroy()
})
let enemysprite: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(15)
mySprite = sprites.create(assets.image`player`, SpriteKind.Player)
controller.moveSprite(mySprite)
music.playMelody("B A A C5 E A B C ", 120)
game.onUpdateInterval(500, function () {
    enemysprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . 2 2 . . 2 . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    enemysprite.setPosition(randint(0, 10), randint(0, 10))
})
