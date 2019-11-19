import { Sorter } from './Sorter'
import { NumbersCollection } from './collections/NumbersCollection'
import { CharactersCollection } from './collections/CharactersCollection'

const numbersCollection = new NumbersCollection([2, 3, 7, 13, 2784, 9547])
const numberSorter = new Sorter(numbersCollection)
numberSorter.sort()
console.log(numbersCollection.data)

const charactersCollection = new CharactersCollection('XaaByhKL')
const characterSorter = new Sorter(charactersCollection)
characterSorter.sort()
console.log(charactersCollection.data)
