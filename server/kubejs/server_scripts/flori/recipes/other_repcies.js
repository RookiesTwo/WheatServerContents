onEvent('recipes', event => {
  //萨卡班甲鱼
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
  //魔艺之星
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
  //粗梦穹金
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
  //龙魂合成龙包
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
  //蛔虫线
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
  //梦魇胡萝卜
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
  //萤石与红石
  event.custom({
    "type": "psi:dimension_trick_crafting",
    "input": {
      "item": "minecraft:redstone"
    },
    "output": {
      "item": "minecraft:glowstone_dust"
    },
    "cad": {
      "item": "psi:cad_assembly_psimetal"
    },
    "trick": "psi:trick_ebony_ivory",
    "dimension": "minecraft:overworld"
  })
  event.custom({
    "type": "psi:dimension_trick_crafting",
    "input": {
      "item": "minecraft:glowstone_dust"
    },
    "output": {
      "item": "minecraft:redstone"
    },
    "cad": {
      "item": "psi:cad_assembly_psimetal"
    },
    "trick": "psi:trick_ebony_ivory",
    "dimension": "minecraft:overworld"
  })
})
