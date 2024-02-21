onEvent('item.tags', event => {
    event.add('kubejs:dice', '@dice'),
    event.add('kubejs:poker_chip', 'playingcards:poker_chip_blue'),
    event.add('kubejs:poker_chip', 'playingcards:poker_chip_red'),
    event.add('kubejs:poker_chip', 'playingcards:poker_chip_white'),
    event.add('kubejs:poker_chip', 'playingcards:poker_chip_green'),
    event.add('kubejs:poker_chip', 'playingcards:poker_chip_black')
    event.add('forge:raw_materials', 'kubejs:raw_drome')
    event.add('forge:ingots', 'kubejs:drome_ingot')
    event.add('forge:storage_blocks', 'kubejs:drome_block')
    event.add('forge:storage_blocks', 'kubejs:wheat_block')
    event.add('kubejs:nightmare_food', 'kubejs:nightmare_carrot')
    event.add('kubejs:nightmare_food', 'kubejs:nightmare_salad')
    event.add('kubejs:fox_tail', 'kubejs:red_fox_tail')
    event.add('kubejs:fox_tail', 'kubejs:snow_fox_tail')
})