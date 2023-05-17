let adimSayisi = 0
input.onGesture(Gesture.Shake, function () {
    adimSayisi += 0 - 3
    basic.showNumber(adimSayisi)
})
