import fs from 'node:fs'
import a from '@/a'

console.log(a)
console.log(fs.readFileSync('README.md', 'utf-8'))