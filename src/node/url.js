import url,  {URL, pathToFileURL,urlToHttpOptions} from "node:url"
import {Blob, resolveObjectURL} from 'node:buffer'
import {cwd} from 'node:process'
import fs from 'node:fs'
import fsp from 'node:fs/promises'
import { promisify } from 'node:util'
import path from 'node:path'

const str = path.resolve(import.meta.dirname, './module.js')
console.log(123, cwd(), str)
fs.realpath(str, (err, realPath) => {
  console.log('realpath callback', realPath)
})

const realpath = promisify(fs.realpath)

async function test() {
 const path = await realpath(str)
 console.log('end', path)
 
  const url = await fsp.realpath(str)
  console.log('end-fsp', url)
}

test()