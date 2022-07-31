import {defineConfig} from 'vite';
import path from "path";

export default defineConfig({
  base:'./',
  server:{
    port:3000
  },
  build:{
    lib:{
      entry: path.resolve(__dirname,'./src/index.js'),
      name:'flint',
      fileName:'flint',
      formats:["es","umd"]
    },
    rollupOptions:{

    }
  }
});