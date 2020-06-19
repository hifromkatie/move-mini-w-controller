radio.onReceivedValue(function (name, value) {
    if (name == "forwards") {
        if (value == 1) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
            kitronik_servo_lite.forward()
        } else {
            basic.showIcon(IconNames.Happy)
            kitronik_servo_lite.stop()
        }
    } else if (name == "backwards") {
        if (value == 1) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
            kitronik_servo_lite.backward()
        } else {
            basic.showIcon(IconNames.Happy)
            kitronik_servo_lite.stop()
        }
    } else if (name == "left") {
        if (value == 1) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
            kitronik_servo_lite.left()
        } else {
            basic.showIcon(IconNames.Happy)
            kitronik_servo_lite.stop()
        }
    } else if (name == "right") {
        if (value == 1) {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
            kitronik_servo_lite.right()
        } else {
            basic.showIcon(IconNames.Happy)
            kitronik_servo_lite.stop()
        }
    } else {
        basic.showIcon(IconNames.Happy)
        kitronik_servo_lite.stop()
    }
})
radio.setGroup(1)
