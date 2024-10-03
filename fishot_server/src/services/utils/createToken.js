async function Token(length) {

    const numbers = '0123456789'
    const arrayNum = []

    while(arrayNum.length < length) {
        arrayNum.push(numbers[Math.floor(Math.random() * numbers.length)])
    }

    for(i = 0; i < arrayNum.length; i++) {
        const tempIndex = Math.floor(Math.random() * arrayNum.length)
        const tempNum = arrayNum[Math.floor(Math.random() * arrayNum.length)]
        arrayNum[i] = arrayNum[tempIndex]
        arrayNum[tempIndex] = tempNum

    }

    return arrayNum.reverse().join('')
}


module.exports = async function createToken(length) {
    return await Token(length)
}
