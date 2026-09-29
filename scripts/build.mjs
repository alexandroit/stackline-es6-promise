import {rollup} from 'rollup';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import {babel} from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import {readFile,mkdir,rename,writeFile} from 'node:fs/promises';
const metadata=JSON.parse(await readFile('package.json','utf8'));
const banner=(await readFile('config/versionTemplate.txt','utf8')).replace('VERSION_PLACEHOLDER_STRING',metadata.version);
await mkdir('dist',{recursive:true});
for(const entry of ['es6-promise','es6-promise.auto']){
 const bundle=await rollup({input:'lib/'+entry+'.js',plugins:[nodeResolve(),babel({babelHelpers:'bundled',babelrc:false,configFile:false,assumptions:{noClassCalls:true,setClassMethods:true},presets:[['@babel/preset-env',{targets:{ie:'9'},modules:false}]]})]});
 for(const min of [false,true]){await bundle.write({file:'dist/'+entry+(min?'.min':'')+'.js',format:'umd',name:'ES6Promise',exports:'default',sourcemap:true,banner,generatedCode:'es5',plugins:min?[terser({ecma:5,format:{comments:/^!|@license|@preserve/}})]:[]});
 const file='dist/'+entry+(min?'.min':'')+'.js';await rename(file+'.map',file.replace(/\.js$/,'.map'));await writeFile(file,(await readFile(file,'utf8')).replace('sourceMappingURL='+entry+(min?'.min':'')+'.js.map','sourceMappingURL='+entry+(min?'.min':'')+'.map'));
 }
 await bundle.close();
}
