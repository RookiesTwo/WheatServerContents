//云朵工艺
onEvent('block.right_click', event => {
    if (event.block != 'minecraft:magma_block' || event.player.getHeldItem(event.hand) != 'minecraft:potion' || event.item.getNbt() != '{Potion:"minecraft:water"}') return
    if (event.server.runCommandSilent(`setblock ${event.block.x} ${event.block.y+1} ${event.block.z} quark:cloud keep`)){
        event.item.count--
        event.player.give('minecraft:glass_bottle')
        event.player.playSound('block.lava.extinguish')
    }
})
onEvent('recipes', event => {
    event.shapeless("kubejs:cotton_candy", ["quark:bottled_cloud", "minecraft:milk_bucket", "minecraft:sugar"])
    event.shaped('kubejs:cloud_helmet', [
        'CFC',
        'C C',
        '   '
    ],{
        C: 'quark:bottled_cloud',
        F: 'locusazzurro_icaruswings:feather_helmet'
    })
    event.shaped('kubejs:cloud_chestplate', [
        'C C',
        'CZC',
        'CSC'
    ],{
        C: 'quark:bottled_cloud',
        S: 'kubejs:snow_fox_tail',
        Z: 'locusazzurro_icaruswings:zephir_essence'
    })
    event.shaped('kubejs:cloud_leggings', [
        'CCC',
        'C C',
        'A A'
    ],{
        C: 'quark:bottled_cloud',
        A: 'malum:aerial_spirit'
    })
    event.shaped('kubejs:cloud_boots', [
        '   ',
        'C C',
        'E E'
    ],{
        C: 'quark:bottled_cloud',
        E: 'irons_spellbooks:ice_upgrade_orb'
    })
    event.shaped('kubejs:sunset_helmet', [
        'CMC',
        'CHC',
        '   '
    ],{
        C: 'quark:bottled_cloud',
        M: 'locusazzurro_icaruswings:magical_anemone',
        H: 'kubejs:cloud_helmet'
    })
    event.shaped('kubejs:sunset_chestplate', [
        'CWC',
        'UPU',
        'CFC'
    ],{
        C: 'quark:bottled_cloud',
        W: 'locusazzurro_icaruswings:flandre_magic_wings',
        U: 'bsf:unstable_core',
        P: 'kubejs:cloud_chestplate',
        F: 'kubejs:flori_fox_tail'
    })
    event.shaped('kubejs:sunset_leggings', [
        'ZBZ',
        'ZCZ',
        'Z Z'
    ],{
        Z: 'locusazzurro_icaruswings:zephir_essence',
        B: 'ars_nouveau:belt_of_levitation',
        C: 'kubejs:cloud_leggings'
    })
    event.shaped('kubejs:sunset_boots', [
        'ARA',
        'ACA',
        'ARA'
    ],{
        A: 'enigmaticlegacy:astral_dust',
        R: 'bsf:repulsion_core',
        C: 'kubejs:cloud_boots'
    })
})
onEvent('entity.hurt', event => {
    var player = event.entity
    var source = event.source
    var damage = event.damage
    if ((player.headArmorItem && player.headArmorItem.id === 'kubejs:cloud_helmet') &&
        (player.chestArmorItem && player.chestArmorItem.id === 'kubejs:cloud_chestplate') &&
        (player.legsArmorItem && player.legsArmorItem.id === 'kubejs:cloud_leggings') &&
        (player.feetArmorItem && player.feetArmorItem.id === 'kubejs:cloud_boots') && source.type == 'fall') {
        event.cancel()
    }
    if ((player.headArmorItem && player.headArmorItem.id === 'kubejs:sunset_helmet') &&
        (player.chestArmorItem && player.chestArmorItem.id === 'kubejs:sunset_chestplate') &&
        (player.legsArmorItem && player.legsArmorItem.id === 'kubejs:sunset_leggings') &&
        (player.feetArmorItem && player.feetArmorItem.id === 'kubejs:sunset_boots') && damage <= 10) {
        event.cancel()
    }

})
onEvent('player.tick', event => {
    var player = event.player
    if ((player.headArmorItem && player.headArmorItem.id === 'kubejs:sunset_helmet') &&
        (player.chestArmorItem && player.chestArmorItem.id === 'kubejs:sunset_chestplate') &&
        (player.legsArmorItem && player.legsArmorItem.id === 'kubejs:sunset_leggings') &&
        (player.feetArmorItem && player.feetArmorItem.id === 'kubejs:sunset_boots') && !player.potionEffects.isActive('ars_nouveau:flight')){
        player.potionEffects.add('ars_nouveau:flight', 20 * 9999999 , 0)
    }

    if (!((player.headArmorItem && player.headArmorItem.id === 'kubejs:sunset_helmet') &&
        (player.chestArmorItem && player.chestArmorItem.id === 'kubejs:sunset_chestplate') &&
        (player.legsArmorItem && player.legsArmorItem.id === 'kubejs:sunset_leggings') &&
        (player.feetArmorItem && player.feetArmorItem.id === 'kubejs:sunset_boots')) && player.potionEffects.isActive('ars_nouveau:flight')) {
        player.minecraftEntity.removeEffect('regeneration')
        player.minecraftEntity.removeEffect('ars_nouveau:flight')
    }
})
