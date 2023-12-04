export default function tupleSample() {
  // 一般的なタプルの型定義
  const response: [number, string] = [200, 'OK']
  // response = [400, 'NG', 'too much']
  // response = ['not number', 'NG']
  console.log('Array tuple sample 1:', response)

  // 可変長引数を使ったタプル
  const girlfriends: [string, ...string[]] = ['Kana', 'Miku']
  girlfriends.push('Misa')
  console.log('Array tuple sample 2:', girlfriends)
}
