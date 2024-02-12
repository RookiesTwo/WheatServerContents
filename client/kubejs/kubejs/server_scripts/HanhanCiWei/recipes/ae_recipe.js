onEvent("recipes", event => {
    event.shaped('ae2:item_cell_housing', [
        'AXA',
        'X X',
        'YYY'
    ],{
        'A':'ae2:quartz_glass',
        'X':'minecraft:redstone',
        'Y':'create:andesite_alloy'
    })
    event.shaped('ae2:blank_pattern', [
        'AXA',
        'XZX',
        'YYY'
    ],{
        'A':'ae2:quartz_glass',
        'X':'minecraft:glowstone_dust',
        'Y':'create:andesite_alloy',
        'Z':'#ae2:all_certus_quartz'
    })
})