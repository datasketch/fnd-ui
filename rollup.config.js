import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import packageJSON from './package.json'

export default [
  {
    input: './src/index.js',
    output: [
      {
        file: packageJSON.main,
        format: 'cjs'
      },
      {
        file: packageJSON.module,
        format: 'es',
        exports: 'named'
      }
    ],
    plugins: [
      peerDepsExternal(),
      postcss(),
      resolve(),
      commonjs(),
      babel({
        exclude: '/node_modules/',
        presets: ['@babel/preset-react'],
        babelHelpers: 'bundled'
      }),
      terser()
    ]
  }
]
