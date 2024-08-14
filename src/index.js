console.log(Object.keys(import.meta))
const { dirname, filename, resolve, url} = import.meta

console.log(`
${dirname}, 
${filename}, 
${url}
`)

// console.log(resolve('a', 'b', 'c'))
// console.log(resolve('a', 'b', '/c'))