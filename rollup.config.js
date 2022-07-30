import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';

export default {
  input:'src/index.js',
  output:[
    {
      strict:true,
      name:'flint',
      format:'es',
      file:'./dist/flint.esm.js',
    }
  ],
  plugins:[
    resolve(),
    postcss({
      plugins:[],
      extract: 'flint.css'
    }),
  ]
}