input.onButtonPressed(Button.A, function () {
    basic.showString("эмир")
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("C - G E F - B D ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Ben❤️Emir")
})
