radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        kitronik_servo_lite.driveForwards(1)
    } else if (receivedNumber == 2) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        kitronik_servo_lite.driveBackwards(1)
    } else if (receivedNumber == 3) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        kitronik_servo_lite.turnLeft(90)
    } else if (receivedNumber == 4) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        kitronik_servo_lite.turnRight(90)
    } else {
        basic.showIcon(IconNames.No)
        kitronik_servo_lite.stop()
    }
})
radio.setGroup(1)
