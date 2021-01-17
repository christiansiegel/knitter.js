console.log("hello world!");

const worker = new Worker('worker.ts')
worker.postMessage({})