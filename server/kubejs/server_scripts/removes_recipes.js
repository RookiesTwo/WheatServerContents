onEvent('recipes', event => {
  event.remove({ output: 'littlelogistics:chunk_loader_barge' })
  event.remove({ output: 'littlelogistics:chunk_loader_car' })
})