// rollup.config.js
import postcss from 'rollup-plugin-postcss';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const fs = require('fs');
const pkJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

export default {
    input: 'lib',
    output: {
      file: 'dist/index.js',
      format: 'es',
      name: 'index'
      // name: pkJson._globalName
    },
    plugins: [
        nodeResolve(),
        postcss(),
        commonjs(),
    ]
}