onEvent('item.registry', event => {
	event.create('ars_star').displayName('§d§l魔艺之星').maxStackSize(16);
	event.create('nightmare_carrot').maxStackSize(1).displayName('梦魇胡萝卜').food(food => {
		food
			.hunger(0)
			.saturation(0)
			.alwaysEdible()
			.eaten(eat => {
				eat.player.give('kubejs:nightmare_carrot')
			})
	});
	event.create('nightmare_salad').maxStackSize(1).displayName('梦魇沙拉').food(food => {
		food
			.hunger(5)
			.saturation(0.8)
			.alwaysEdible()
			.effect('minecraft:blindness', 100, 0, 1)
			.effect('minecraft:slowness', 100, 255, 1)
			.effect('minecraft:nausea', 100, 3, 1)
			.eaten(eat1 => {
				eat1.player.give('flower_pot')
			})
	});
	event.create('error_item').displayName('item.kubejs.mogaigaoshou');
	event.create('hunger_food').displayName('高中必刷题').food(food => {
		food
			.hunger(0)
			.saturation(0)
			.alwaysEdible()
			.effect('minecraft:hunger', 60, 255, 1)
	});
	/*event.create('health_juice').displayName('生命果汁').tooltip('不是苍蝇汁！').useAnimation('drink').maxDamage(60).food(food => {
		food
			.hunger(0)
			.saturation(0)
			.fastToEat()
			.alwaysEdible()
			.effect('regeneration', 80,1,1)
			.eaten(eat1 => {
				eat1.player.give('kubejs:soda_can')
			})
	});
	event.create('blueberry_soda').displayName('蓝莓气泡水').tooltip('§4贡献者物品 |SteveDreemurr').useAnimation('drink').maxDamage(10).food(food => {
		food
			.hunger(0)
			.saturation(0)
			.alwaysEdible()
			.effect('luck', 600, 0, 1)
			.eaten(eat1 => {
				eat1.player.give('kubejs:soda_can')
			})
	});*/
	event.create('53', 'sword').displayName('五年高考三年模拟').attackDamageBonus(99993);
	event.create('dread_ascarid').displayName('§7惊惧蛔虫');
	event.create('spectrum_fmn').displayName('光谱勿忘草');
	event.create('dragons_soul').displayName('龙魂');
	event.create('raw_drome').displayName('粗梦穹金');
	event.create('drome_ingot').displayName('梦穹金锭');
	event.create('drome_nugget').displayName('梦穹金粒');
	event.create('sacabambaspis').fireResistant(true).displayName('萨卡班甲鱼');
	/*event.create('soda_can').displayName('汽水罐');*/
	event.create('perfection').displayName('满分考卷');
	event.create('wheat_nugget').displayName('§e麦粒');
	event.create('wheat_ingot').displayName('§e麦锭');
	event.create('dread_string').displayName('§7蛔虫线');
})