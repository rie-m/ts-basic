// このファイルでは、primitiveSample関数のみがexportされる
export default function primitiveSample() {
    const name: string = 'りえ'
    console.log("primitive sample 1:", typeof name, name)

    const age: number = 27
    console.log("primitive sample 2:", typeof age, age)

    const isSingle: boolean = false
    console.log("primitive sample 3:", typeof isSingle, isSingle)

    const isOver20: boolean = age>=20
    console.log("primitive sample 4:", typeof isOver20, isOver20)



}