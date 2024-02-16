// priority: 0
//狐狸工艺
onEvent('item.entity_interact', event => {
    if (event.target.type != "minecraft:fox" || event.target.getHealth() == 0 || event.item.id != "minecraft:shears") return
    if(event.target.fullNBT.Type == 'red') event.player.giveInHand('kubejs:red_fox_tail')
    else event.player.giveInHand('kubejs:snow_fox_tail')
    event.target.playSound('entity.sheep.shear')
    event.target.health -= 20
})
onEvent('item.entity_interact', event => {
    if (event.target.type != "minecraft:player" || event.target.getHealth() == 0 || event.item.id != "minecraft:shears" || event.target != "n_0139") return
    event.player.giveInHand('kubejs:n_0139_fox_tail')
    event.target.playSound('entity.sheep.shear')
    event.player.playSound('entity.item.break')
    event.item.count --
})
onEvent('item.entity_interact', event => {
    if (event.target.type != "minecraft:player" || event.target.getHealth() == 0 || event.item.id != "minecraft:shears" || event.target != "FloriLilio") return
    event.player.giveInHand('kubejs:flori_fox_tail')
    event.target.playSound('entity.sheep.shear')
    event.player.playSound('entity.item.break')
    event.item.count --
})
onEvent('recipes', event => {
    event.shaped('kubejs:flori_fox_tail', [
        'ZBC',
        'DFD',
        'DDD'
    ],{
        Z: 'zetter:palette',
        B: 'kubejs:perfection',
        C: '#forge:bars/chocolate',
        D: 'kubejs:drome_nugget',
        F: '#kubejs:fox_tail'
    })
})

