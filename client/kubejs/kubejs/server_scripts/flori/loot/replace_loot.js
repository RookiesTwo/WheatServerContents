onEvent('entity.loot_tables', event => {
    event.modifyEntity('minecraft:phantom', table => {
        table.addPool(pool => {
          pool.addItem('kubejs:dread_ascarid', 3.5)
          pool.addItem('kubejs:dread_ascarid', 1)
        })
      })
});