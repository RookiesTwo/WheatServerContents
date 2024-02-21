onEvent('item.registry', event => {
    event.create('akashic_dust').displayName('启迪木尘')
    event.create('red_fox_tail').displayName('狐狸尾巴')
    event.create('snow_fox_tail').displayName('雪狐尾巴')
    event.create('n_0139_fox_tail').displayName('§f§on_0139的尾巴').food(food=>{
        food
            .hunger(0)
            .saturation(0)
            .fastToEat()
            .alwaysEdible()
            .effect('regeneration', 100,3,1)
        })
    event.create('flori_fox_tail').displayName('§d§oFloriLilio的尾巴').food(food=>{
        food
            .hunger(0)
            .saturation(0)
            .fastToEat()
            .alwaysEdible()
            .effect('luck', 6000,0,1)
    })
})