onEvent("recipes", event => {
    event.remove({ output: 'neapolitan:chocolate_bar'})
    event.remove({ output: 'create:bar_of_chocolate'})
    event.remove({ output: 'ae2:item_cell_housing'})
    event.remove({ output: 'ae2:blank_pattern'})
    event.remove({ output: 'ae2:view_cell'})
    event.remove({ input:'minecraft:redstone', output:'ae2:item_storage_cell_1k'})
    event.remove({ input:'minecraft:redstone', output:'ae2:item_storage_cell_4k'})
    event.remove({ input:'minecraft:redstone', output:'ae2:item_storage_cell_16k'})
    event.remove({ input:'minecraft:redstone', output:'ae2:item_storage_cell_64k'})
    event.remove({ input:'minecraft:redstone', output:'ae2:item_storage_cell_256k'})
    event.remove({ input:'minecraft:redstone', output:'ae2:spatial_storage_cell_2'})
    event.remove({ input:'minecraft:redstone', output:'ae2:spatial_storage_cell_16'})
    event.remove({ input:'minecraft:redstone', output:'ae2:s[atial_storage_cell_128'})
})
onEvent("item.tags", event=> {
    event.remove('caupona:vegetables', 'minecraft:fern')
    event.remove('caupona:vegetables', 'minecraft:large_fern')
})