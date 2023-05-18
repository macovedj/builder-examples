// import {bigGreet} from "./big-greet/big_greet.js"
import {graph} from "./graph-bindings/graph.js"
import { readFileSync, writeFileSync } from "node:fs"

const hello = readFileSync("./hello/target/wasm32-wasi/debug/hello.wasm")
const big = readFileSync("./big/target/wasm32-wasi/debug/big.wasm")

// console.log({hello})
const helloComponent = graph.addComponent("hello", hello)
const bigComponent = graph.addComponent("big", big)
// console.log({helloId, bigId})
const helloInstance = graph.instantiateComponent(helloComponent.id)
const bigInstance = graph.instantiateComponent(bigComponent.id)
console.log({helloInstance, bigInstance})
const bigHello = graph.connectInstances(helloInstance, 0, bigInstance, 5)
console.log({bigHello})
const bytes = graph.encodeGraph(true, 1, true)
writeFileSync("./big-greet.wasm", bytes)
// console.log(bigGreet("Danny"))