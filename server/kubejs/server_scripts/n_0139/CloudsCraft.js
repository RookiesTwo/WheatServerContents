//云朵工艺
onEvent('block.right_click', event => {
    if (event.block != 'minecraft:magma_block' && event.player.getHeldItem(event.hand) != 'minecraft:potion' && event.item.getNbt() != '{Potion:"minecraft:water"}') return
    if (event.server.runCommandSilent(`setblock ${event.block.x} ${event.block.y+1} ${event.block.z} quark:cloud keep`)){
        event.item.count--
        event.player.give('minecraft:glass_bottle')
        event.player.playSound('block.lava.extinguish')
    }
})
onEvent('recipes', event => {
    event.shapeless("kubejs:cotton_candy", ["quark:bottled_cloud", "minecraft:milk_bucket", "minecraft:sugar"])
})
