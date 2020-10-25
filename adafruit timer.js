let time = 0
input.onGesture(Gesture.Shake, function () {
    console.logValue("x", time)
    time = 0
    music.stopAllSounds()
    light.stopAllAnimations()
})
forever(function () {
    if (time >= 1) {
        light.setPixelColor(0, 0xff0000)
    }
    if (time >= 2) {
        light.setPixelColor(1, 0xff8000)
    }
    if (time >= 3) {
        light.setPixelColor(2, 0xffff00)
    }
    if (time >= 4) {
        light.setPixelColor(3, 0x00ff00)
    }
    if (time >= 5) {
        light.setPixelColor(4, 0x00ffff)
    }
    if (time >= 6) {
        light.setPixelColor(5, 0x007fff)
    }
    if (time >= 7) {
        light.setPixelColor(6, 0x0000ff)
    }
    if (time >= 8) {
        light.setPixelColor(7, 0x7f00ff)
    }
    if (time >= 9) {
        light.setPixelColor(8, 0xff00ff)
    }
    if (time >= 10) {
        light.setPixelColor(9, 0xff9da5)
    }
    if (time >= 11) {
        light.setPixelColor(10, 0xb09eff)
    }
})
forever(function () {
    if (time >= 11) {
        music.baDing.play()
        console.logValue("x", time)
        light.showAnimation(light.rainbowAnimation, 100)
        control.waitMicros(1000000)
        light.setAll(0x000000)
        music.stopAllSounds()
        time = 0
        if (input.buttonA.isPressed()) {
            light.setAll(0x000000)
            light.setBrightness(0)
            music.stopAllSounds()
            control.waitMicros(240000000000)
        }
    } else {
        time += 1
        control.waitMicros(1000000)
    }
})
