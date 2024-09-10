import chalk from 'chalk'

export default function plugin() {
  return {
    name: 'test',
    resolveId: {
      async handler(importee, importer, resolveOptions) {
        console.log(chalk.green('importee'), importee)
        console.log(chalk.red('importer'),  importer)
        console.log(chalk.yellow('resolveOptions'), resolveOptions)
      },
    },
  }
}
