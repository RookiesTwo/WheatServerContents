onEvent('item.registry.armor_tiers', event => {
    // Slot indicies are [FEET, LEGS, BODY, HEAD]
    event.add('cloud', tier => {
        tier.durabilityMultiplier = 33 // Each slot will be multiplied with [13, 15, 16, 11]
        tier.slotProtections = [2, 5, 6, 2]
        tier.enchantmentValue = 9
        tier.equipSound = 'minecraft:block.cloth.place'
        tier.repairIngredient = 'quark:bottled_cloud'
        tier.toughness = 0.0 // diamond has 2.0, netherite 3.0
        tier.knockbackResistance = 0.0
    })
    event.add('sunset', tier => {
        tier.durabilityMultiplier = 39 // Each slot will be multiplied with [13, 15, 16, 11]
        tier.slotProtections = [3, 6, 8, 3]
        tier.enchantmentValue = 15
        tier.equipSound = 'minecraft:block.cloth.place'
        tier.repairIngredient = 'quark:bottled_cloud'
        tier.toughness = 3.0 // diamond has 2.0, netherite 3.0
        tier.knockbackResistance = 0.0
    })
})

onEvent('item.registry', event => {
    event.create('cloud_helmet', 'helmet').tier('cloud').displayName('云朵头盔').tooltip(Component.string('套装效果: 免疫摔落伤害').italic().white())
    event.create('cloud_chestplate', 'chestplate').tier('cloud').displayName('云朵胸甲').tooltip(Component.string('套装效果: 免疫摔落伤害').italic().white())
    event.create('cloud_leggings', 'leggings').tier('cloud').displayName('云朵护腿').tooltip(Component.string('套装效果: 免疫摔落伤害').italic().white())
    event.create('cloud_boots', 'boots').tier('cloud').displayName('云朵靴子').tooltip(Component.string('套装效果: 免疫摔落伤害').italic().white())
    event.create('sunset_helmet', 'helmet').tier('sunset').displayName('霞').tooltip(Component.string('套装效果: 免疫初始伤害低于13点的伤害并赋予飞行能力').italic().lightPurple()).rarity('Epic')
    event.create('sunset_chestplate', 'chestplate').tier('sunset').displayName('霞').tooltip(Component.string('套装效果: 免疫初始伤害低于13点的伤害并赋予飞行能力').italic().lightPurple()).rarity('Epic')
    event.create('sunset_leggings', 'leggings').tier('sunset').displayName('霞').tooltip(Component.string('套装效果: 免疫初始伤害低于13点的伤害并赋予飞行能力').italic().lightPurple()).rarity('Epic')
    event.create('sunset_boots', 'boots').tier('sunset').displayName('霞').tooltip(Component.string('套装效果: 免疫初始伤害低于13点的伤害并赋予飞行能力').italic().lightPurple()).rarity('Epic')
})

onEvent('item.modification', event => {
    let boostgravity = -0.25
    let boostspeed = 0.15
    let gravityoperation = 'multiply_total'
    let speedoperation = 'multiply_total' //'addition', 'multiply_total''
    event.modify('kubejs:cloud_helmet', item => {
        let attribute = item.getAttributes('minecraft:generic.armor').get(0)
        item.removeAttribute('forge:entity_gravity', attribute.id)
        item.addAttribute('forge:entity_gravity', attribute.id, 'Sus gravity', boostgravity, gravityoperation)
        item.removeAttribute('minecraft:generic.movement_speed', attribute.id)
        item.addAttribute('minecraft:generic.movement_speed', attribute.id, 'Sus spoostspeed',boostspeed , speedoperation)
    })
    event.modify('kubejs:cloud_chestplate', item => {
        let attribute = item.getAttributes('minecraft:generic.armor').get(0)
        item.removeAttribute('forge:entity_gravity', attribute.id)
        item.addAttribute('forge:entity_gravity', attribute.id, 'Sus gravity', boostgravity, gravityoperation)
        item.removeAttribute('minecraft:generic.movement_speed', attribute.id)
        item.addAttribute('minecraft:generic.movement_speed', attribute.id, 'Sus spoostspeed',boostspeed , speedoperation)
    })
    event.modify('kubejs:cloud_leggings', item => {
        let attribute = item.getAttributes('minecraft:generic.armor').get(0)
        item.removeAttribute('forge:entity_gravity', attribute.id)
        item.addAttribute('forge:entity_gravity', attribute.id, 'Sus gravity', boostgravity, gravityoperation)
        item.removeAttribute('minecraft:generic.movement_speed', attribute.id)
        item.addAttribute('minecraft:generic.movement_speed', attribute.id, 'Sus spoostspeed',boostspeed , speedoperation)
    })
    event.modify('kubejs:cloud_boots', item => {
        let attribute = item.getAttributes('minecraft:generic.armor').get(0)
        item.removeAttribute('forge:entity_gravity', attribute.id)
        item.addAttribute('forge:entity_gravity', attribute.id, 'Sus gravity', boostgravity, gravityoperation)
        item.removeAttribute('minecraft:generic.movement_speed', attribute.id)
        item.addAttribute('minecraft:generic.movement_speed', attribute.id, 'Sus spoostspeed',boostspeed , speedoperation)
    })

})
