onEvent("item.food_eaten",eaten => {
    if (eaten.item.id == 'kubejs:nightmare_salad' || eaten.item.id == 'kubejs:nightmare_carrot'){
        eaten.server.runCommandSilent("execute as @p run kill @e[distance=..32,type=minecraft:phantom]")
    }
}) 