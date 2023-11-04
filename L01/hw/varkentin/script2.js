// раздел 2.1.

function findFirstZero(str) {
    return str.search('0')
}
// console.log(findFirstZero('dgwliu0hhjkehve0'))
function getNumberSumFiveOneToOneHungreed() {
    console.log(5)
    for (i = 14; i < 51; i++) {
        i += ""
        if (parseInt(i.slice(0, 1)) + parseInt(i.slice(1, 2)) == 5) console.log(+i)
    }
}
// getNumberSumFiveOneToOneHungreed()
function deleteValueInArray(arr, item) {
    arr.splice(arr.indexOf(item), 1);
    return arr
}
const numbers = [1, 2, 3, 4, 5, 6, 7]
const seven = 7
// console.log(deleteValueInArray(numbers, seven))
function findSumHalfArray(arr) {
    const halfArray = arr.slice(0, Math.round(arr.length / 2))
    return halfArray.reduce((acc, i) => (acc += i), 0)
}
// console.log(findSumHalfArray([1, 2, 3, 4, 5, 6]))

// раздел 2.2.

function getSumNegativeNumbersInArray(arr) {
    return arr.reduce((acc, i) => (i < 0 ? acc+1 : acc ), 0)
}
// console.log(getSumNegativeNumbersInArray([-1, 0, -2, 4, 6]))
function leavePositiveNumbers(arr) {
    pozitivArr = []
    for (i of arr) {
        if (i < 0) pozitivArr.push(i)
    }
    return pozitivArr
}
// console.log(leavePositiveNumbers([-1, 0, -2, 4, 6]))
function deletePenultimateSymbol(str){
    return newStr = str.slice(0,-2) + str.slice(-1)
}
// console.log(deletePenultimateSymbol('fffffufof'))
function divideSumFirstAndSecondPartArray(arr) {
    const sum1 = arr.slice(0, arr.length / 2).reduce((acc, i) => (acc+i), 0)
    const sum2 = arr.slice(arr.length / 2).reduce((acc, i) => (acc+i), 0)
    return sum1 / sum2
}
// console.log(divideSumFirstAndSecondPartArray([1, 2, 3, 4, 5, 6]))

// раздел 2.3.

function getLastFerstSymbolEcuviv (str1, str2) {
str1.slice(-1) == str2.slice(0, 1) ? console.log('посл бсл совп с 1б сл.') : console.log('посл бсл НЕ совп с 1б сл.')
}
// getLastFerstSymbolEcuviv ('шлакоб', 'блокунь')
// getLastFerstSymbolEcuviv ('блокунь', 'шлакоб')
function findThreeZeroInStr(str) {
    let countZero = 0
    let countIndex = 0
    for (item of str) {
        if (item == 0) countZero++
        if (countZero == 3) break;
        countIndex++
    }
    return countIndex
}
function getSumArrayWithComma(str) {
for (i of str) str = str.replace(',',' + ')
return eval(str)
}
// console.log(getSumArrayWithComma('12,34,56'))
function doDateInArray(date) {
    return  objDate = {
            year: date.getFullYear(),
            month: date.getMonth(),
            day: date.getDate(),
        }
}
const a = new Date()
// console.log(doDateInArray(a))

// раздел 2.4

function findNumberInStr(str) {
        const numbers = '123456789'
        let index
    for (i of str) {
        if (numbers.search(i) >= 0) {
            index = (str.indexOf(i))
            break;
        }
    }
    return index
}
// console.log(findNumberInStr('cahfbeasku7hsudchuc90r8'))
function doArrKeysAndArrValue(obj) {
    const keyArr = []
    const valueArr = []
    for (key in obj) {
        keyArr.push(key)
        valueArr.push(obj[key])
    }
    return {keyArr , valueArr}
}
const book = {
    title: 'Война и мир',
    author: 'Лев Толстой',
    pages: 1274,
    isFinished: true
  }
// console.log(doArrKeysAndArrValue(book))
function findEvenDigitsInNumber(num) {
    num += ""
    count = 0
    for (i of Array.from(num)){
        i % 2 == 0 ? count++ : i
    }
    console.log(count)
}
// findEvenDigitsInNumber(123456789)
function makeUpperCaseNegativIndex(str) {
const arrStr = Array.from(str)
let newStr = ""
console.log(arrStr)
for (i of arrStr) {
    if (arrStr.indexOf(i) % 2 == 0) i = i.toUpperCase();
    newStr = newStr + i
 }
return newStr
}
// console.log(makeUpperCaseNegativIndex('abcde'))
function makeUpperCaseFirstLetterInWord(str) {
    const arrStr = Array.from(str)
    let newStr = ""
    newStr += arrStr[0].toUpperCase()
    for (i = 0; i < arrStr.length; i++) {
        if (arrStr[i] == " ") {
            arrStr[i+1] =  arrStr[i+1].toUpperCase()
        }
        newStr += arrStr[i]
    }
    return newStr
}
// console.log(makeUpperCaseFirstLetterInWord('aaa bbb ccc'))

// раздел 2.5

function doArrayZero(str) {
    arrZero = []
    for (i = 0; i < str.length; i++) {
        if (str.at(i) == "0") arrZero.push(i)
    }
    return arrZero
}
// console.log(doArrayZero('023m0df0dfg0'))
function delThirdSymbol(str) {
    newStr = ""
    for (i = 0; i < str.length; i++) {
        let count = i+1
        count % 3 != 0 ?  newStr += str.at(i) : i
    }
    return newStr
}
// console.log(delThirdSymbol('abcdefg'))
function divSumPozitivSymbolAtSumNegativ(arr) {
    let negativSum = 0
    let pozitivSum = 0
    for (i of arr) {
       if (arr.indexOf(i) % 2 == 0) {
        negativSum += i
        } else {
            pozitivSum += 1
        }
    }
    return pozitivSum / negativSum
}
// console.log(divSumPozitivSymbolAtSumNegativ([1, 2, 3, 4, 5, 6]))

// раздел 2.6

function getArrayIndexNumber(str) {
    const arr = []
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let m = 0
    for (i of str) {
        for (j of numbers) {
            if (i == j) arr.push(m)
        }
        m++
    }
    return arr
}
// console.log(getArrayIndexNumber('1bk2bk3bkb45bkb5'))  
function getReverseWordInArr(arr) {
    newArr = []
    for (i of arr) {
        i += ""
        i = Array.from(i)
        i =   i.reverse
       
    }
    return newArr
}
// console.log(getReverseWordInArr([123, 456, 789]))

// <!-- раздел 2.6. -->

// '1234567'
// Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее:

// '1 234 567'

function letSpaseInThreePosInLost(str) {
    let count = 0 
    const arr = []
    s = " "
    for (i = str.length - 1; i >= 0 ; i -= 1) {
        if (count == 3) {
            arr.push(s)
            count = 0
        }
        arr.push(str.at(i))
        count++
    }
    arr.reverse()
    return arr.join('')
}
// console.log(letSpaseInThreePosInLost('1234567'))
function changeCase(str) {
    newStr = ""
    for (i of str) {
        i === i.toUpperCase(i) ? newStr += i.toLowerCase(i) : newStr += i.toUpperCase()
    }
    return newStr
}
// console.log(changeCase('AbCdE'))
function getTwoElem(arr) {
    twiseArr = []
    for (i = 0; i < arr.length; i+=2) {
        twiseArr.push((arr[i]+"")+(arr[i+1]+""))
    }
    return twiseArr
}
// console.log(getTwoElem([1, 2, 3, 4, 5, 6]))
function toLowerCaseFirstSumbolFirctWord(str) {
    const arr = []
    let item = ""
    str += " "
    for (i of str) {
        if (i != " ") {
          item += i 
        } else {
            arr.push(item)
            item = ""
        }
    }
    const newArr = []
   for (i of arr) {
        if ((arr.indexOf(i) + 1) % 2 == 0) {
            i = Array.from(i) 
            i[0] = i[0].toUpperCase()
            i = i.join("")
            console.log(i)
        }
        newArr.push(i)
    } 
    return  newArr
}
// console.log(toLowerCaseFirstSumbolFirctWord('aaa bbb ccc eee fff'))

// <!-- раздел 2.8. -->\

function getMaxTwoUpperCase(str) {
    count = 0 
    for (i of str) {
        if (i != " ") i === i.toUpperCase() ? count++ : i
    }
    count > 2 ? console.log('Строка содержит больше двух заглавных букв') : console.log('Строка не содержит больше двух заглавных букв')
}
// getMaxTwoUpperCase('Dgsuf Madhjasb Gnisfn j')
// getMaxTwoUpperCase('Fndvsn jidohv isodhj')
function getElemToThreeLetter(str) {
    const words = str.split(' ')
    sliceWords = []
    for (i of words) {
        i = i.slice(0, 3)
        sliceWords.push(i)
    }
    return sliceWords.join(" ")
}
// console.log( getElemToThreeLetter('1 22 333 4444 22 5555 1')) 
function concatArrInTwoSymbol(arr1, arr2) {
    arr3 =  arr1.slice( 1, arr1.length) 
    const conctArr = [arr1[0], ...arr2, ...arr3]
    console.log( conctArr)
}
// let arr1 = [1, 2, 3];
// let arr2 = ['a', 'b', 'c'];
// concatArrInTwoSymbol(arr1, arr2)

// <!-- раздел 2.9. -->\

function getSumCouple(num) {
    let strNum = "" + num
    let exp = ""
    for (i = 0; i < strNum.length; i+=2) {
       exp += strNum[i]+ strNum[i+1] + " + "
    }
    exp = exp.slice(0, exp.length - 3)
    let sumCouple = parseInt(exp)
    console.log(sumCouple)
}
// getSumCouple(123456)
function getSumbolreturn(arr) {
    for (i = arr.length - 1; i >= 0; i -= 1) {
        console.log(arr[i])
    }
}
// getSumbolreturn([1, 2, 3, 4, 5])

// <!-- раздел 2.10. -->\

function checkTreeLetterinStr(str) {
    count = 0
    for (i of str) {
        if (!parseInt(i)) count++
        if (count == 3) return console.log('больше трёх букв')
    }
    if (count < 3) return console.log('три или менее буквы')  
}
// checkTreeLetterinStr('4as4564fa657325789723')
// checkTreeLetterinStr('4a678683')
function getFirctEvenNumInLost(num) {
    let arr = Array.from(num += " ")
    arr = arr.reverse()
    for (i of arr) {
        if (parseInt(i) % 2 == 0) return i
    }
}
// getFirctEvenNumInLost(3279563749)
function doFirstSymbolPoint(str) {
    let arr = str.split(" ")
    const newArr = []
    console.log(arr)
    for (i of arr) {
        newArr.push(i.replace(i[0], '!'))
    }
    return newArr.join(" ")
}
// console.log(doFirstSymbolPoint('abcde abcde abcde'))
function findCoupleEcvivElem(arr) {
    let message = 'нет пары'
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i+1]) message = 'есть пара'
    }
return message
}
// console.log(findCoupleEcvivElem([1, 2, 3, 3, 4, 5]))
// console.log(findCoupleEcvivElem([1, 2, 3, 4, 5]))