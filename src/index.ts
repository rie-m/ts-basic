// import World from './world'

// const root = document.getElementById('root')
// const world = new World('Hello World!')
// world.sayHello(root)

// 03. 基本の型定義
// https://www.youtube.com/watch?v=KQhyHHQrcic&list=PLX8Rsrpnn3IW0REXnTWQp79mxCvHkIrad&index=5

// import { primitiveSample, notExistSample, anySample, unknownSample } from './basic'

// unknownSample()
// anySample()
// notExistSample()
// primitiveSample()

// 04. 関数の型定義
// https://www.youtube.com/watch?v=obdbskaarVQ&list=PLX8Rsrpnn3IW0REXnTWQp79mxCvHkIrad&index=5
import {logMessage} from './function/basic'
import {isUserSignedIn, isUserSignedIn2, sumProductsPrice} from './function/parameters';

logMessage("Hello TypeScript!")
isUserSignedIn("ABC", "RIE")
isUserSignedIn("DEF")
isUserSignedIn2("ABC")
const sum = sumProductsPrice(1, 2, 3, 4, 5)
console.log('Function parameters sample 5:', sum)