/* eslint-disable import/extensions */
/* eslint-disable import/no-default-export */

import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import pkg from './package.json' assert { type: 'json' };

const name = pkg.main.replace(/\.js$/, '');

const bundle = (config) => ({
  ...config,
  input: 'src/index.ts',
  external: ['nanoid', 'nanoid/non-secure'],
});

export default [
  bundle({
    plugins: [esbuild({
      minify: process.env.NODE_ENV === 'production',
    })],
    output: [{
      file: `${name}.js`,
      format: 'es',
      sourcemap: true,
    }],
  }),
  bundle({
    plugins: [dts()],
    output: {
      file: `${name}.d.ts`,
      format: 'es',
    },
  }),
];
