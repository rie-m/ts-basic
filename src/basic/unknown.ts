export default function unknownSample() {
  const maybeNumber: unknown = 10
  console.log('unknown sample 1:', typeof maybeNumber, maybeNumber)

  const isFoo = maybeNumber === 'foo'
  console.log('unknown sample 2:', typeof isFoo, isFoo)

  // maybeNumberには数値が入っているが、unknown型なので足し算できない
  // const sum = maybeNumber +10;
  // if文で、型の条件を指定すると足し算可能
  if (typeof maybeNumber === 'number') {
    const sum = maybeNumber + 10
    console.log('unknown sample 3:', typeof sum, sum)
  }
}
