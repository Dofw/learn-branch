import path from 'node:path'
import Module from 'node:module'


const filename = import.meta.filename
console.log(path.basename(filename))

const mod = new Module(filename)

console.log(mod)

console.log(filename,Module._nodeModulePaths(filename))