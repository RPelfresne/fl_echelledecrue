input.onGesture(Gesture.LogoUp, function () {
    basic.pause(delaiAvtMontee)
    for (let index = 0; index < nbLeds; index++) {
        strip.shift(1)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        basic.pause(pauseMonteeEntreLed)
    }
    basic.pause(2000)
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(5000)
})
let pauseMonteeEntreLed = 0
let delaiAvtMontee = 0
let nbLeds = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, nbLeds, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
strip.show()
nbLeds = 115
delaiAvtMontee = 5000
let dureeMontee = 30000
pauseMonteeEntreLed = dureeMontee / nbLeds
basic.forever(function () {
	
})
