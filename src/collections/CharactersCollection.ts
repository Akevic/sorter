export class CharactersCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length
  }

  compare(leftSide: number, rightSide: number): boolean {
    // * compare charCode value of a lowercase character
    return (
      this.data[leftSide].toLowerCase() > this.data[rightSide].toLowerCase()
    )
  }

  swap(leftSide: number, rightSide: number): void {
    // * split string into array of characters
    const chars = this.data.split('')

    // * same swap as for array of numbers
    const leftHand = chars[leftSide]
    chars[leftSide] = chars[rightSide]
    chars[rightSide] = leftHand

    // * push new string to data
    this.data = chars.join('')
  }
}
