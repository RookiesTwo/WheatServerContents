onEvent('recipes', event => {
    event.custom(
        {
            "type": "create:splashing",
            "ingredients": [
                {
                    "tag": "quark:runes_lootable"
                }
            ],
            "results": [
                {
                    "item": "quark:blank_rune"
                }
            ]
        }
    )
    event.smelting('irons_spellbooks:blank_rune','quark:blank_rune')
    event.custom(
        {
            "type": "create:filling",
            "ingredients": [
                {
                    "item": "irons_spellbooks:common_ink"
                },
                {
                    "fluid": "create_enchantment_industry:ink",
                    "nbt": {},
                    "amount": 2000
                }
            ],
            "results": [
                {
                    "item": "irons_spellbooks:uncommon_ink"
                }
            ]
        }
    )
    event.custom(
        {
            "type": "create:filling",
            "ingredients": [
                {
                    "item": "irons_spellbooks:uncommon_ink"
                },
                {
                    "fluid": "create_enchantment_industry:experience",
                    "nbt": {},
                    "amount": 1000
                }
            ],
            "results": [
                {
                    "item": "irons_spellbooks:rare_ink"
                }
            ]
        }
    )
    event.custom(
        {
            "type": "create:filling",
            "ingredients": [
                {
                    "item": "irons_spellbooks:rare_ink"
                },
                {
                    "fluid": "create_enchantment_industry:hyper_experience",
                    "nbt": {},
                    "amount": 500
                }
            ],
            "results": [
                {
                    "item": "irons_spellbooks:epic_ink"
                }
            ]
        }
    )
    event.custom(
        {
            "type": "create:filling",
            "ingredients": [
                {
                    "item": "irons_spellbooks:epic_ink"
                },
                {
                    "fluid": "create_central_kitchen:dragon_breath",
                    "nbt": {},
                    "amount": 250
                }
            ],
            "results": [
                {
                    "item": "irons_spellbooks:legendary_ink"
                }
            ]
        }
    )
})
onEvent('block.right_click', event => {
    if (event.block == 'malum:block_of_hallowed_gold' && event.player.getHeldItem(event.hand) == 'create:blaze_cake')
    {
        event.item.count--
        event.server.runCommandSilent(`setblock ${event.block.x} ${event.block.y} ${event.block.z} minecraft:air`)
        event.server.runCommandSilent(`summon minecraft:lightning_bolt ${event.block.x} ${event.block.y} ${event.block.z}`)
        event.server.runCommandSilent(`summon irons_spellbooks:pyromancer ${event.block.x} ${event.block.y} ${event.block.z} {ActiveEffects:[{Id:12,Duration:9999999,Amplifier:0,Ambient:1},{Id:11,Duration:9999999,Amplifier:1,Ambient:1},{Id:10,Duration:9999999,Amplifier:2,Ambient:1}]}`)
    }
})
onEvent('block.right_click', event => {
    if (event.block == 'supplementaries:soap_block' && event.player.getHeldItem(event.hand) == 'minecraft:glow_ink_sac')
    {
        event.item.count--
        event.server.runCommandSilent(`setblock ${event.block.x} ${event.block.y} ${event.block.z} minecraft:air`)
        event.server.runCommandSilent(`summon minecraft:lightning_bolt ${event.block.x} ${event.block.y} ${event.block.z}`)
        event.server.runCommandSilent(`summon irons_spellbooks:cryomancer ${event.block.x} ${event.block.y} ${event.block.z} {ActiveEffects:[{Id:12,Duration:9999999,Amplifier:0,Ambient:1},{Id:11,Duration:9999999,Amplifier:1,Ambient:1},{Id:10,Duration:9999999,Amplifier:2,Ambient:1}]}`)
    }
})
onEvent('block.right_click', event => {
    if (event.block == 'minecraft:netherite_block' && event.player.getHeldItem(event.hand) == 'enigmaticlegacy:withered_tome')
    {
        event.item.count--
        event.server.runCommandSilent(`setblock ${event.block.x} ${event.block.y} ${event.block.z} minecraft:air`)
        event.server.runCommandSilent(`summon minecraft:lightning_bolt ${event.block.x} ${event.block.y} ${event.block.z}`)
        event.server.runCommandSilent(`summon irons_spellbooks:dead_king ${event.block.x} ${event.block.y} ${event.block.z} {ActiveEffects:[{Id:12,Duration:9999999,Amplifier:0,Ambient:1},{Id:11,Duration:9999999,Amplifier:1,Ambient:1},{Id:10,Duration:9999999,Amplifier:2,Ambient:1}]}`)
    }
})