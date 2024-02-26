onEvent('item.tooltip', tooltip => {
  tooltip.addAdvanced('kubejs:ars_star', (item, advanced, text) => {
    text.add(1, Text.of('天赐坠星'))
  })
  tooltip.addAdvanced('kubejs:nightmare_carrot',(item, advanced, text) => {
    text.add(1, Text.of('§8§l吞噬你的恐惧')),
    text.add(2, Text.of('神奇的是，它会自动再生'))
  })
  tooltip.addAdvanced('kubejs:nightmare_salad',(item, advanced, text) => {
    text.add(1, Text.of('§8§l吞噬你的恐惧')),
    text.add(2, Text.of('可能会引起一些不适'))
  })
  tooltip.addAdvanced('kubejs:spectrum_fmn', (item, advanced, text) => {
    text.add(1, Text.of('大地的信使'))
  })
  tooltip.addAdvanced('kubejs:dragons_soul', (item, advanced, text) => {
    text.add(1, Text.of('暴政之终'))
  })
  tooltip.addAdvanced('kubejs:sacabambaspis', (item, advanced, text) => {
    text.add(1, Text.of('它真的是海洋的代言人？'))
  })
  tooltip.addAdvanced('kubejs:perfection', (item, advanced, text) => {
    text.add(1, Text.of('运气罢了'))
  })
  tooltip.addAdvanced('kubejs:wheat_nugget', (item, advanced, text) => {
    text.add(1, Text.of('年年不变'))
    text.add(2, Text.of('§o服务器通用货币'))
  })
  tooltip.addAdvanced('kubejs:wheat_ingot', (item, advanced, text) => {
    text.add(1, Text.of('也算是一种储存方法 §m神奇的双关'))
    text.add(2, Text.of('§o服务器通用货币'))
  })
  tooltip.addAdvanced('kubejs:wheat_block', (item, advanced, text) => {
    text.add(1, Text.of('你现在拥有整个游戏了 §m神奇的双关'))
    text.add(2, Text.of('§o服务器通用货币'))
  })
  tooltip.addAdvanced('kubejs:53', (item, advanced, text) => {
    text.add(1, Text.of('§1调试物品'))
  })
  tooltip.addAdvanced('kubejs:hunger_food', (item, advanced, text) => {
    text.add(1, Text.of('§1调试物品'))
  })
  tooltip.addAdvanced('kubejs:error_item', (item, advanced, text) => {
    text.add(1, Text.of('§1调试物品'))
  })
  tooltip.addAdvanced('kubejs:pink_kitsune', (item, advanced, text) => {
    text.add(1, Text.of('§7§o“很遗憾，我不会跟着你的脑袋”'))
  })
})