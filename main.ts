let roofLayers = 0
player.onChat("house", function (width, height) {
    builder.teleportTo(pos(0, -1, -5))
    for (let i = 0; i <= height - 1; i++) {
        builder.move(UP, 1)
        builder.mark()
        for (let j = 0; j <= 3; j++) {
            builder.move(FORWARD, width - 1)
            builder.turn(LEFT_TURN)
        }
        builder.tracePath(STONE)
    }
    builder.shift(-1, 1, -1)
    if (width % 2 == 0) {
        roofLayers = width / 2 - 1
    } else {
        roofLayers = width / 2
    }
    for (let layer = 0; layer <= roofLayers + 1; layer++) {
        builder.mark()
        for (let k = 0; k <= 3; k++) {
            builder.move(FORWARD, width + 1 - layer * 2)
            builder.turn(LEFT_TURN)
        }
        builder.tracePath(PLANKS_OAK)
        builder.shift(1, 1, 1)
    }
    builder.move(DOWN, roofLayers + height + 2)
    builder.mark()
    builder.move(FORWARD, width / 2 + 1)
    builder.move(UP, 1)
    builder.fill(AIR)
    builder.shift(width * -1 + 1, 0, width / 2 - 1)
    builder.place(GLASS)
    builder.move(RIGHT, width - 1)
    builder.place(GLASS)
})
