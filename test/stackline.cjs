const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=process.env.STACKLINE_TEST_PACKAGE || path.resolve(__dirname,'..'),PromiseImpl=require(root);
assert.equal(PromiseImpl.Promise,PromiseImpl);assert.equal(typeof PromiseImpl.polyfill,'function');
assert.throws(()=>PromiseImpl(),TypeError);assert.throws(()=>new PromiseImpl(),TypeError);
(async()=>{
 assert.deepEqual(await PromiseImpl.all([PromiseImpl.resolve(20),22]),[20,22]);
 assert.equal(await PromiseImpl.resolve({then(resolve){resolve(42);resolve(0);}}),42);
 assert.equal(await PromiseImpl.reject(new Error('expected')).catch(e=>e.message),'expected');
 assert.equal(await PromiseImpl.race([PromiseImpl.resolve('first'),new PromiseImpl(r=>setTimeout(()=>r('late'),10))]),'first');
 for(const name of ['es6-promise.js','es6-promise.min.js','es6-promise.auto.js','es6-promise.auto.min.js']){
  const text=fs.readFileSync(path.join(root,'dist',name),'utf8');require('acorn').parse(text,{ecmaVersion:5});
  const context={setTimeout,clearTimeout,Promise:undefined};vm.runInNewContext(text,context);assert.equal(typeof context.ES6Promise,'function');if(name.includes('.auto.'))assert.equal(context.Promise,context.ES6Promise);
  assert.equal(await context.ES6Promise.resolve(42),42);assert(fs.existsSync(path.join(root,'dist',name.replace(/\.js$/,'.map'))));
 }
 console.log('Packed Promise settlement/thenables/rejection/race and ES5 UMD+auto/minified formats passed');
})().catch(e=>{console.error(e);process.exitCode=1;});
