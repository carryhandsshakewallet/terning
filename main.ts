let tall = 0
input.onButtonPressed(Button.B, function () {
    tall = randint(1, 6)
    if (tall == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else {
        if (tall == 2) {
            basic.showLeds(`
                . . . . #
                . . . . .
                . . . . .
                . . . . .
                # . . . .
                `)
        } else {
            if (tall == 3) {
                basic.showLeds(`
                    . . . . #
                    . . . . .
                    . . # . .
                    . . . . .
                    # . . . .
                    `)
            } else {
                if (tall == 4) {
                    basic.showLeds(`
                        # . . . #
                        . . . . .
                        . . . . .
                        . . . . .
                        # . . . #
                        `)
                } else {
                    if (tall == 5) {
                        basic.showLeds(`
                            # . . . #
                            . . . . .
                            . . # . .
                            . . . . .
                            # . . . #
                            `)
                    } else {
                        if (tall == 6) {
                            basic.showLeds(`
                                # . . . #
                                . . . . .
                                # . . . #
                                . . . . .
                                # . . . #
                                `)
                        } else {
                        	
                        }
                    }
                }
            }
        }
    }
})
basic.forever(function () {
	
})
