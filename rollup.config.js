import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import { terser } from 'rollup-plugin-terser'
import packageJSON from './package.json'
import images from 'rollup-plugin-image-files'

export default [
  {
    input: './src/index.ts',
    output: [
      {
        file: packageJSON.main,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: packageJSON.module,
        format: 'es',
        exports: 'named',
        sourcemap: true
      }
    ],
    plugins: [
      typescript({
        tsconfig: './tsconfig.json'
      }),
      peerDepsExternal(),
      images(),
      postcss({
        extract: 'css/style.min.css'
      }),
      resolve(),
      commonjs(),
      babel({
        exclude: '/node_modules/',
        presets: ['@babel/preset-react'],
        babelHelpers: 'bundled'
      }),
      terser()
    ]
  },
  {
    input: 'dist/types/index.d.ts',
    output: [
      {
        file: 'dist/index.d.ts',
        format: 'es'
      }
    ],
    plugins: [dts()],
    external: [/\.s?css$/]
  }
]
