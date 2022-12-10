export const randomNumbers = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max  - min - 1) + min)
}

export const generateArray = (array: number[], size: number, min: number = 5, max: number = 1000): void => {
    for (let i = 0; i < size; i++) {
        array.push(randomNumbers(min, max))
    }
}

export const roundNumber = (number: number, decimal: number = 3): number => {
    const toRound = number.toString()
    const nbrs = toRound.split('.')
    const newArray: number[] = []
    var additional = 0
    if (nbrs.length < 1) return parseInt(nbrs[0])
    // if (decimal > nbrs[1].length) decimal = nbrs[1].length
    for (let i = nbrs[1].length - 1; i >= 0; i--) {
        var currentNumber = parseInt(nbrs[1][i])
        if (additional === 1) {
            additional = 0
            currentNumber += 1
        }
        if (currentNumber > 4) {
            newArray.unshift(0)
            additional += 1
        } else newArray.unshift(currentNumber)
    }
    console.log(number, newArray.reverse())
    return 0
    // return parseInt(nbrs[0] + parseInt(newArray.split('').reverse()))
}