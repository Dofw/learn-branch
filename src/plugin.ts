import chalk from 'chalk'

export default function plugin() {
  return {
    name: 'test',
    options (options) {
      // console.log(options.plugins)
    },
    buildStart (options) {
      console.log(options)
    },
    resolveId: {
      async handler(importee, importer, resolveOptions) {
        // console.log(chalk.green('importee'), importee)
        // console.log(chalk.yellow('resolveOptions'), resolveOptions)
      },
    },
  }
}
