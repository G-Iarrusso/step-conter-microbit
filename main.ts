input.onButtonPressed(Button.A, function () {
    basic.showString("Steps Total: " + steps)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    steps = 0
    basic.showNumber(steps)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Goal Steps: " + goal)
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
    basic.showNumber(steps)
})
let steps = 0
let goal = 0
goal = 3000
