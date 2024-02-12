onEvent('recipes', event => {
  event.custom({
    "type": "hexerei:mixingcauldron",
    "liquid": {
      "fluid": "minecraft:water"
    },
    "ingredients": [
      {
        "item": "minecraft:trident"
      },
      {
        "item": "minecraft:prismarine_shard"
      },
      {
        "item": "minecraft:conduit"
      },
      {
        "item": "minecraft:kelp"
      },
      {
        "item": "minecraft:sea_pickle"
      },
      {
        "item": "minecraft:dropper"
      },
      {
        "item": "minecraft:prismarine_crystals"
      },
      {
        "tag": "kitchenkarrot:corals"
      }
    ],
    "output": {
      "item": "kubejs:sacabambaspis"
    },

    "liquidOutput": {
      "fluid": "minecraft:water"
    },
    "fluidLevelsConsumed": 2000
  })
  event.custom({
    "type": "malum:spirit_infusion",
    "input": {
      "item": "minecraft:nether_star",
      "count": 1
    },
    "output": {
      "item": "kubejs:ars_star"
    },
    "extra_items": [
      {
        "item": "kubejs:spectrum_fmn",
        "count": 1
      },
      {
        "item": "kubejs:sacabambaspis",
        "count": 1
      },
      {
        "item": "kubejs:dragons_soul",
        "count": 1
      },
      {
        "item": "kubejs:perfection",
        "count": 1
      },
      {
        "item": "kubejs:drome_block",
        "count": 1
      },
      {
        "item": "kubejs:drome_block",
        "count": 1
      },
      {
        "item": "yuushya:the_encyclopedia",
        "count": 1
      },
      {
        "item": "yuushya:the_encyclopedia",
        "count": 1
      }
    ],
    "spirits": [
      {
        "type": "earthen",
        "count": 8
      },
      {
        "type": "infernal",
        "count": 8
      },
      {
        "type": "aqueous",
        "count": 8
      },
      {
        "type": "aerial",
        "count": 8
      },
      {
        "type": "eldritch",
        "count": 8
      },
      {
        "type": "sacred",
        "count": 8
      },
      {
        "type": "arcane",
        "count": 8
      },
      {
        "type": "wicked",
        "count": 8
      }
    ]
  })
  event.custom({
    "type": "malum:spirit_infusion",
    "input": {
      "item": "malum:cthonic_gold",
      "count": 1
    },
    "output": {
      "item": "kubejs:raw_drome"
    },
    "extra_items": [
      {
        "item": "minecraft:amethyst_shard",
        "count": 3
      },
      {
        "item": "minecraft:chorus_flower",
        "count": 1
      }
    ],
    "spirits": [
      {
        "type": "aerial",
        "count": 4
      },
      {
        "type": "sacred",
        "count": 4
      },
      {
        "type": "arcane",
        "count": 4
      }
    ]
  })
  event.custom({
    "type": "travelersbackpack:backpack_shaped",
  
    "pattern":
    [
      "BAB",
      "CDC",
      "ECE"
    ],
  
    "key":
    {
      "A":
      {
        "item": "kubejs:dragons_soul"
      },
  
      "B":
      {
        "item": "minecraft:dragon_breath"
      },
  
      "C":
      {
        "tag": "forge:end_stones"
      },
  
      "D":
      {
        "item": "travelersbackpack:standard"
      },
  
      "E":
      {
        "tag": "forge:ender_pearls"
      }
    },
  
    "result":
    {
      "item": "travelersbackpack:dragon",
      "count": 1
    }
  })
  event.custom({
    "type": "psi:trick_crafting",
    "input": {
      "item": "kubejs:dread_ascarid"
    },
    "output": {
      "item": "kubejs:dread_string"
    },
    "cad": {
      "item": "psi:cad_assembly_psimetal"
    },
    "trick": "psi:trick_greater_infusion"
  })
  event.custom({
    "type": "farmersdelight:cooking",
    "recipe_book_tab": "meals",
    "ingredients": [
      {
        "item": "kubejs:dread_ascarid"
      },
      {
        "item": "kubejs:drome_nugget"
      },
      {
        "item": "kubejs:drome_nugget"
      },
      {
        "item": "kubejs:drome_nugget"
      },
      {
        "item": "minecraft:phantom_membrane"
      },
      {
        "item": "minecraft:golden_carrot"
      }
    ],
    "result": {
      "item": "kubejs:nightmare_carrot"
    },
    "experience": 10.0,
    "cookingtime": 1000
  })
})
