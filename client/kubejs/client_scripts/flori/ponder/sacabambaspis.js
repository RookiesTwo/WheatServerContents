onEvent("ponder.registry", event => {
    event.create('kubejs:sacabambaspis').scene("123", "\u8428\u5361\u8428\u5361\u73ed\u73ed\u73ed\u73ed\u7532\u9c7c\u7532\u9c7c\u7532", (scene, util) => {
        scene.showStructure();
        scene.world.setBlock([2, 2, 2], "hexerei:mixing_cauldron", true);
        scene.world.setBlock([2,1,2], "minecraft:fire", true);
        scene.idle(20);
        scene
            .showControls(20, [2, 4, 2], "down")
            .rightClick()
            .withItem('minecraft:water_bucket')
        scene.idle(40);
        scene.world.modifyTileNBT([2, 2, 2], (nbt) => {

            nbt.Items = [];
            nbt.fluid = {
                FluidName:"minecraft:water",
                Amount:1000
            };
        });
        scene.idle(20);
        scene.world.modifyTileNBT([2, 2, 2], (nbt) => {

            nbt.Items = [];
            nbt.fluid = {
                FluidName:"minecraft:water",
                Amount:2000
            };
        });
        scene.idle(40);
        scene.world.createItemEntity([2.5,5,2.5], [0,0,0], "minecraft:trident");
        scene.idle(20)
        scene.world.createItemEntity([2.5,5,2.5], (0, 0, 0), "minecraft:prismarine_shard");
        scene.idle(20)
        scene.world.createItemEntity([2.5,5,2.5], (0, 0, 0), "minecraft:conduit");
        scene.idle(20)
        scene.world.createItemEntity([2.5,5,2.5], (0, 0, 0), "minecraft:kelp");
        scene.idle(20)
        scene.world.createItemEntity([2.5,5,2.5], (0, 0, 0), "minecraft:sea_pickle");
        scene.idle(20)
        scene.world.createItemEntity([2.5,5,2.5], (0, 0, 0), "minecraft:dropper");
        scene.idle(20)
        scene.world.createItemEntity([2.5,5,2.5], (0, 0, 0), "minecraft:prismarine_crystals");
        scene.idle(20)
        scene.world.createItemEntity([2.5,5,2.5], (0, 0, 0), 'minecraft:tube_coral');
        scene.idle(40)
        scene.world.modifyTileNBT([2, 2, 2], (nbt) => {

            nbt.Items = [];
            nbt.fluid = {
                FluidName:"minecraft:empty",
                Amount:0
            };
        });
        scene.idle(40)
        scene
            .showControls(100, [2, 4, 2], "down")
            .withItem('kubejs:sacabambaspis')
    });
})