
import { defineConfig } from 'rollup'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import esbuild from 'rollup-plugin-esbuild'
import alias from '@rollup/plugin-alias'
import UnpluginExternalizeDeps from 'unplugin-externalize-deps/rollup'
import UnpluginDetectDuplicatedDeps from 'unplugin-detect-duplicated-deps/rollup'
import test from './src/plugin'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const commonPlugins = [
  alias({
    entries: {
      '@': path.resolve(__dirname, 'src'),
    },
  }),
  // nodeResolve({
  //   exportConditions: ['node'],
  //   preferBuiltins: true,
  //   extensions: ['.js', '.ts', '.json'],
  // }),
]

const normalConfig = defineConfig({
  plugins: [
    test(),
    ...commonPlugins,
    // commonjs({
    //   defaultIsModuleExports: 'auto',
    // }),
    // esbuild 和 typescript2 插件同时使用时, typescript2 执行检查和声明文件生成, esbuild 进行编译.
    // https://www.npmjs.com/package/rollup-plugin-typescript2
    // ts检查/声明文件生成
    // typescript({
    //   tsconfigOverride: {
    //     compilerOptions: {
    //       declaration: false,
    //       declarationDir: null,
    //     },
    //   },
    //   useTsconfigDeclarationDir: true,
    //   clean: true,
    // }),
    // ts构建
    esbuild(),
    UnpluginDetectDuplicatedDeps(),
    UnpluginExternalizeDeps(),
  ],
  input: {
    index: './src/index.ts',
  },
  output: [
    {
      dir: 'dist',
      format: 'es',
      entryFileNames: '[name].mjs',
    },
    {
      dir: 'dist',
      format: 'cjs',
      entryFileNames: '[name].cjs',
    },
  ],
})

export default defineConfig([
  normalConfig,
])
