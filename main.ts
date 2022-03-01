input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    servos.P0.setAngle(180)
    servos.P1.setAngle(180)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    servos.P0.stop()
    servos.P1.stop()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    servos.P0.setAngle(-180)
    servos.P0.setAngle(-180)
})
