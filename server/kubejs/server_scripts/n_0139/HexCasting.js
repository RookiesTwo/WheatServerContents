onEvent('recipes', event => {
    event.remove({input: Item.of('hexcasting:akashic_log'), output:'minecraft:charcoal'})
    event.remove({input: Item.of('hexcasting:akashic_log_stripped'), output:'minecraft:charcoal'})
    event.remove({input: Item.of('hexcasting:akashic_wood'), output:'minecraft:charcoal'})
    event.remove({input: Item.of('hexcasting:akashic_wood_stripped'), output:'minecraft:charcoal'})
    event.remove({output: Item.of('hexcasting:charged_amethyst')})
    event.smelting('kubejs:akashic_dust', 'hexcasting:akashic_log')
    event.smelting('kubejs:akashic_dust', 'hexcasting:akashic_log_stripped')
    event.smelting('kubejs:akashic_dust', 'hexcasting:akashic_wood')
    event.smelting('kubejs:akashic_dust', 'hexcasting:akashic_wood_stripped')
    event.custom(
        {
            "type": "create:splashing",
            "ingredients": [
                {
                    "item": "kubejs:akashic_dust"
                }
            ],
            "results": [
                {
                    "item": "hexcasting:charged_amethyst",
                    "chance": 0.05
                }
            ]
        }
    )
    event.custom(
        {
            "type": "create:filling",
            "ingredients": [
                {
                    "item": "minecraft:popped_chorus_fruit"
                },
                {
                    "fluid": "create_enchantment_industry:experience",
                    "nbt": {},
                    "amount": 500
                }
            ],
            "results": [
                {
                    "item": "hexcasting:charged_amethyst"
                }
            ]
        }
    )
})