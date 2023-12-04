export default function genericAdvancedSample() {

    // map関数のシグネチャ

    // Map: T型の配列とfnを受け取って、U型を返す
    // fn: T型のitemを受け取って、U型にして返す
    type Map<T, U> = (array: T[], fn: (item: T) => U) => U[]

    const mapStringsToNumbers: Map<string, number> = (array, fn) => {
        let result = []
        for (let i = 0; i < array.length; i++) {
            const item = array[i]
            result[i] = fn(item)
        }
        return result

    }
    const numbers = mapStringsToNumbers(['123', '456', '789'], item => Number(item))
    console.log('Generics advanced sample 1:', numbers)


    const mapNumbersToStrings: Map<number, string> = (array, fn) => {
        let result = []
        for (let i = 0; i < array.length; i++) {
            const item = array[i]
            result[i] = fn(item)
        }
        return result

    }
    const strings = mapNumbersToStrings([123, 456, 789], item => String(item))
    console.log('Generics advanced sample 2:', strings)
}