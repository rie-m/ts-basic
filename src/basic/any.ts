export default function anySample() {
  let name: unknown = 'りえ'
  console.log('any sample 1:', typeof name, name)
  // any型なので、stringのあとにnumberも代入できちゃう
  name = 27
  console.log('any sample 2:', typeof name, name)
}
