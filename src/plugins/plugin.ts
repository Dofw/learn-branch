import chalk from 'chalk'
import type { Plugin } from 'rollup'

export default function plugin(): Plugin {
  return {
    name: 'test',
    resolveId: {
      async handler(importee, importer, resolveOptions) {
        console.log(chalk.green('importee'), importee)
        if(importee === './b') {
          return {
            id: './src/c.ts'
          }
        }
      },
    },
    moduleParsed (info) {
      console.log(chalk.yellow("⭐️ -- moduleParsed:"), info.code)
    },
  } 
}
