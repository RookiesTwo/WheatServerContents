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
    })//一壶好茶~

    event.recipes.createCrushing([
        'enigmaticlegacy:cursed_ring',
        Item.of('ae2:sky_dust').withChance(0.25), 
        Item.of('enigmaticlegacy:astral_dust').withChance(0.1), 
        Item.of('enigmaticlegacy:etherium_nugget').withChance(0.01)
    ],'enigmaticlegacy:cursed_ring')//更好的七咒

  event.recipes.createMixing(['ae2:sky_stone_block',Item.of('ae2:sky_dust').withChance(0.5)
  ],['create:cinder_flour',
     'create:powdered_obsidian',
     'ae2:fluix_dust',
     Fluid.of('create:chocolate', 250)
      ]).heated()//陨石的神奇生成
  
  event.recipes.createCompacting([
    'create:bar_of_chocolate'
  ],[
    Fluid.of('create:chocolate', 250)
  ])
  event.recipes.createCompacting([
    'neapolitan:chocolate_bar' 
  ],[
    Fluid.of('create:chocolate', 250),
    Fluid.of('minecraft:water',100)
  ])

  event.campfireCooking('butchercraft:cooked_tongue', 'butchercraft:tongue')
  event.smoking('butchercraft:cooked_tongue', 'butchercraft:tongue')
  event.campfireCooking('butchercraft:cooked_oxtail','butchercraft:oxtail')
  event.smoking('butchercraft:cooked_oxtail', 'butchercraft:oxtail')
  event.shapeless('sakura:onigiri_fish',['sakura:rice_cooked','#forge:fishes','minecraft:dried_kelp'])
  event.shapeless('sakura:ohagi',['minecraft:peony','sakura:mochi'])
  event.shapeless('sakura:satsumaage',['#forge:salt','sakura:surimi'])
   
  event.custom(
  {
    "type": "sakura:stone_mortar",
    "ingredients": [
        {
          "item": "minecraft:potato"
        },
    ],
    "results":[
      {
        "item": "sakura:mashed_potato",
        "count": 2
      }
    ],
    "experience":0.0,
    "recipeTime":200
  })
})