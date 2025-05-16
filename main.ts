input.onGesture(Gesture.LogoUp, function () {
    basic.pause(delaiAvtMontee)
    for (let index = 0; index < nbLeds; index++) {
        strip.shift(1)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        basic.pause(pauseMonteeEntreLed)
    }
    basic.pause(2000)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(5000)
    for (let index = 0; index < nbRepetStrobo; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip.show()
        basic.pause(100)
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        strip.show()
        basic.pause(100)
    }
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    strip.show()
})
let nbRepetStrobo = 0
let pauseMonteeEntreLed = 0
let delaiAvtMontee = 0
let strip: neopixel.Strip = null
let nbLeds = 0
basic.showIcon(IconNames.Sword)
nbLeds = 115
strip = neopixel.create(DigitalPin.P0, nbLeds, NeoPixelMode.RGB)
basic.pause(100)
strip.setBrightness(10)
basic.pause(100)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
basic.pause(100)
strip.show()
delaiAvtMontee = 5000
let dureeMontee = 20000
pauseMonteeEntreLed = dureeMontee / nbLeds
let dureeStrobo = 2000
nbRepetStrobo = dureeStrobo / 100
