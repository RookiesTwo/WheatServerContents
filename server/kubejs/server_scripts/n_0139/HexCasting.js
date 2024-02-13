onEvent('recipes', event => {
    event.remove({output: Item.of('hexcasting:charged_amethyst')})
    event.smoking('kubejs:akashic_dust','hexcasting:akashic_log')
    event.smoking('kubejs:akashic_dust','hexcasting:akashic_log_stripped')
    event.smoking('kubejs:akashic_dust','hexcasting:akashic_wood')
    event.smoking('kubejs:akashic_dust','hexcasting:akashic_wood_stripped')
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