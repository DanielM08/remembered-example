import { ExternalApiClient } from './src/externalApiClient.js';
import { MyClass } from './src/myClass.js';

const externalAPIClient = new ExternalApiClient();
const myClassObj = new MyClass(externalAPIClient);

console.time('First call')
await myClassObj.myMethod();
console.timeEnd('First call')

console.time('Second call')
await myClassObj.myMethod();
console.timeEnd('Second call')

console.time('Third call')
await myClassObj.myMethod();
console.timeEnd('Third call')

console.time('Forth call')
await myClassObj.myMethod();
console.timeEnd('Forth call')

//Only one request is executed in this promise list thanks to the batching strategy used by the lib
await Promise.all([
  myClassObj.myMethod(),
  myClassObj.myMethod(),
  myClassObj.myMethod(),
  myClassObj.myMethod(),
])
