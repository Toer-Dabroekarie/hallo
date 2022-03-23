input.onButtonPressed(Button.A, function () {
    sprite.turn(Direction.Right, -90)
})
input.onButtonPressed(Button.B, function () {
    sprite.turn(Direction.Right, 90)
})
let y = 0
let x = 0
let sprite_2: game.LedSprite = null
let sprite: game.LedSprite = null
let bezig = true
basic.clearScreen()
sprite = game.createSprite(2, 2)
basic.forever(function () {
    sprite_2 = game.createSprite(x, y)
})
basic.forever(function () {
    while (bezig) {
        basic.pause(500)
        x = sprite.get(LedSpriteProperty.X)
        y = sprite.get(LedSpriteProperty.Y)
        sprite.move(1)
        if (x == sprite.get(LedSpriteProperty.X) && y == sprite.get(LedSpriteProperty.Y)) {
            bezig = false
            while (true) {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
            }
        }
    }
})
