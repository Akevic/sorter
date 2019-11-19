export class NumbersCollection {
  constructor(public data: number[]) {}

  get length(): number {
    return this.data.length
  }

  compare(leftSide: number, rightSide: number): boolean {
    // * check to see if left side number is bigger then right side number
    return this.data[leftSide] > this.data[rightSide]
  }

  swap(leftSide: number, rightSide: number): void {
    const leftHand = this.data[leftSide]
    this.data[leftSide] = this.data[rightSide]
    this.data[rightSide] = leftHand
  }
}
