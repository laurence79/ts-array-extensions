import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import ttypescript from 'ttypescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';

import pkg from './package.json';

export default {
  input: 'src/index.ts',
  external: [
    ...Object.keys(pkg.dependencies ?? {}),
    ...Object.keys(pkg.peerDependencies ?? {})
  ],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named'
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named'
    }
  ],
  plugins: [
    json(),
    nodeResolve({
      preferBuiltins: true
    }),
    typescript({
      tsconfig: './tsconfig.rollup.json',
      typescript: ttypescript
    })
  ]
};
