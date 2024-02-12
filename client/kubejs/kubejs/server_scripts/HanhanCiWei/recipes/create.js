onEvent("recipes", event => {
    event.custom(
    {
        "type": "farmersrespite:brewing",
        "ingredients": [
          {
            "item": "malum:blazing_quartz"
          },
          {
            "item": "minecraft:redstone"
          }
        ],
        "result": {
          "item": "create:rose_quartz"
        },
        "experience": 0.35,
        "brewingtime": 20,
        "needwater": true
      })
      event.recipes.createCrushing([
        'enigmaticlegacy:cursed_ring',
        Item.of('ae2:sky_dust').withChance(0.25), 
        Item.of('enigmaticlegacy:astral_dust').withChance(0.1), 
        Item.of('enigmaticlegacy:etherium_nugget').withChance(0.01)
    ],'enigmaticlegacy:cursed_ring')
})