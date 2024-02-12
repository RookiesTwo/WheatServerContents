onEvent('recipes', event => {
    //麦粒
    event.shapeless('kubejs:wheat_nugget', ['8x minecraft:wheat']);
    event.shapeless('kubejs:wheat_ingot', ['9x kubejs:wheat_nugget']);
    event.shapeless('kubejs:wheat_block', ['9x kubejs:wheat_ingot']);
    event.shapeless('9x kubejs:wheat_nugget', ['kubejs:wheat_ingot']);
    event.shapeless('9x kubejs:wheat_ingot', ['kubejs:wheat_block']);

    //梦穹金
    event.shapeless('kubejs:drome_ingot', ['9x kubejs:drome_nugget']);
    event.shapeless('kubejs:drome_block', ['9x kubejs:drome_ingot']);
    event.shapeless('9x kubejs:drome_nugget', ['kubejs:drome_ingot']);
    event.shapeless('9x kubejs:drome_ingot', ['kubejs:drome_block']);
    event.shapeless('kubejs:raw_drome_block', ['9x kubejs:raw_drome']);
    event.smelting('kubejs:drome_ingot', 'kubejs:raw_drome');
    event.blasting('kubejs:drome_ingot', 'kubejs:raw_drome')

    //ars
    event.shapeless('2x kubejs:ars_star', ['yuushya:the_encyclopedia', 'kubejs:ars_star']);
    event.shapeless('ars_nouveau:archmage_spell_book', ['ars_nouveau:apprentice_spell_book', 'enigmaticlegacy:etherium_block', 'botania:terrasteel_block', 'botania:dice', 'botania:dice', 'enigmaticlegacy:earth_heart', 'enigmaticlegacy:cosmic_heart', 'irons_spellbooks:legendary_ink', 'kubejs:ars_star']);
    event.shapeless('ars_nouveau:apprentice_spell_book', ['ars_nouveau:novice_spell_book', '2x minecraft:emerald_block', '2x minecraft:diamond_block', '2x minecraft:netherite_ingot', 'minecraft:experience_bottle', 'kubejs:ars_star']);
    event.shapeless('ars_nouveau:novice_spell_book', ['irons_spellbooks:gold_spell_book', 'minecraft:diamond_axe', 'minecraft:diamond_sword', 'minecraft:diamond_pickaxe', 'minecraft:diamond_shovel', 'kubejs:ars_star']);
    event.shaped('ars_nouveau:scribes_table', [
        'AAA',
        'BCB',
        'BSB'
    ], {
        A: 'ars_nouveau:archwood_slab',
        B: 'minecraft:stick',
        C: '#forge:logs/archwood',
        S: 'kubejs:ars_star'
    })
    event.shaped('ars_nouveau:enchanting_apparatus', [
        'BAB',
        'BSB',
        'CCC'
    ], {
        A: 'minecraft:diamond',
        B: 'minecraft:iron_ingot',
        C: 'ars_nouveau:arcane_stone',
        S: 'kubejs:ars_star'
    })
    event.shaped('ars_nouveau:imbuement_chamber', [
        'BAB',
        'BSB',
        'BAB'
    ], {
        A: 'minecraft:gold_ingot',
        B: 'ars_nouveau:archwood_planks',
        S: 'kubejs:ars_star'
    })

    //梦魇食品
    event.shapeless('kubejs:nightmare_salad', ['#caupona:vegetables', '#caupona:vegetables', '3x kubejs:dread_ascarid', 'minecraft:flower_pot'])

    //汽水
    /*event.shaped('2x kubejs:soda_can', [
        'A',
        'A'
    ],{
        A:'createaddition:zinc_sheet'
    })
    event.shapeless('kubejs:health_juice', ['3x minecraft:sweet_berries','kubejs:soda_can'])
    event.shapeless('kubejs:blueberry_soda', ['3x byg:blueberries','kubejs:soda_can'])*/

    //裁决剑
    event.shaped(Item.of('tetra:scroll_rolled', '{BlockEntityTag:{data:[{details:"art_of_forging",glyphs:[8,7,9,2],intricate:0b,key:"tetra/crucible_blade",material:2,ribbon:"ff1e00",schematics:["tetra:sword/crucible_blade"]}]}}'),[
        ' A ',
        ' B ',
        'CDC'
    ], {
        A:'kubejs:dragons_soul',
        B:'minecraft:beacon',
        C:'minecraft:netherite_ingot',
        D:'minecraft:book'
    })

    //卡牌
    event.shapeless(Item.of('playingcards:card_deck', '{SkinID:0b}'), ['3x minecraft:paper','minecraft:blue_dye'])
    event.shapeless(Item.of('playingcards:card_deck', '{SkinID:1b}'), ['3x minecraft:paper','minecraft:red_dye'])
    event.shapeless(Item.of('playingcards:card_deck', '{SkinID:2b}'), ['3x minecraft:paper','minecraft:black_dye'])
    event.shapeless(Item.of('playingcards:card_deck', '{SkinID:3b}'), ['3x minecraft:paper','butchercraft:pig_carcass'])

    //龙魂和勿忘草
    event.shapeless("kubejs:dragons_soul", ['tetra:dragon_sinew', 'minecraft:dragon_breath', 'irons_spellbooks:dragonskin', 'quark:dragon_scale', 'ends_delight:dragon_tooth', 'minecraft:dragon_head'])
    event.shapeless('kubejs:spectrum_fmn', ['enigmaticlegacy:earth_heart', 'hexerei:yellow_dock_flowers', 'hexerei:yellow_dock_leaves', 'hexerei:belladonna_berries', 'hexerei:mugwort_leaves', 'hexerei:mugwort_flowers', 'hexerei:mandrake_root', 'hexerei:mandrake_flowers', 'hexerei:belladonna_flowers'])
})