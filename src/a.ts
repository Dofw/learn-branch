import('./b').then((b) => {
  console.log('b module loaded', b)
})

const a: string = 'a module'

export default a