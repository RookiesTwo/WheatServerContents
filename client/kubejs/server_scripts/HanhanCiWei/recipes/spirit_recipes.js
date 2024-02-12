onEvent("recipes", event => {
  event.custom({
        "type": "spirit:soul_transmutation",
        "entityInput": "minecraft:blaze",
        "consumesActivator": false,
        "itemInputs":[
          {
            "item": "minecraft:ancient_debris"
          },
          {
            "item": "farmersrespite:blazing_chili"
          },
          {
            "item": "malum:poppet"
          },
          {
            "item": "tetra:geode"
          },
          {
            "item": "spirit:soul_powder_block"
          },
          {
            "item": "kubejs:wheat_block"
          },
          {
            "item": "paraglider:heart_container"
          },
          {
            "item": "kitchenkarrot:lava_brulee"
          }
        ],
        "entityOutput":"cataclysm:ignited_revenant",
        "duration": 30,
        "shouldSummonMob": true
      })
})