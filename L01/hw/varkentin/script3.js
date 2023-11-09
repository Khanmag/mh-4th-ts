// раздел 3.1.

function checkNumber(num) {
    num += ""
    const numStrArr = Array.from(num)
    function compareNumbers(a, b) {
        return a - b;
      }
    numStrArr.sort(compareNumbers)
    numStrArr.join("") == num ? console.log('цифры числа идут по возрастанию') : console.log('цифры числа не идут по возрастанию')
}
// checkNumber(123456)
// checkNumber(850245)
function delNullSystax(arr) {
    newArr = []
    for (i of arr) if (i) newArr.push(i)
    return newArr
}
// console.log(delNullSystax([1, '', 2, 3, '', 5]))
function sortArrInArr(arr) {
    const newArr = []
    const compareNumbers =  (a, b) => a - b
    for (i of arr) {
        i.sort(compareNumbers)
        newArr.push(i)
    }
    return newArr
}
const arr =  [
    	[2, 1, 4, 3, 5],
    	[3, 5, 2, 4, 1],
    	[4, 3, 1, 5, 2],
    ]
// console.log(sortArrInArr(arr))
function doEqualArr(arr1, arr2) {
    smallArr = []
    bigArr = []
    newbigArr = []
    if (arr1.length > arr2.length) {
        bigArr = arr1
        smallArr = arr2
    } else {
        bigArr = arr2
        smallArr = arr1
    }
    for (i = 0; i < smallArr.length; i++)  {
        newbigArr.push(bigArr[i])
    }
    return [smallArr,newbigArr]
}
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 4, 5];
// console.log(doEqualArr(arr1, arr2))

// раздел 3.2.

function getNumPenultimateDigitEvenFromTenToThousand() {
    for (i = 10; i < 1001; i++) {
        let str = i + ""
        n = str.slice(-2, -1)
        if (+n % 2 == 0) console.log(i)
    }
}
// getNumPenultimateDigitEvenFromTenToThousand()
function delEveryFiveElem(arr) {
    newArr = []
    for (i = 0; i < arr.length; i++) if ((i + 1) % 5 != 0) newArr.push(arr[i])
    return newArr
}
// console.log(delEveryFiveElem([1,2,3,4,'sddfae',6,7,4,6,'aafafa',1,3,5]))
function getZeroLengthNum(num) {
    let strZero = '0'
    for (i = 0; i < num-1; i++) {
        strZero +='0'
    }
    return strZero
}
// console.log(getZeroLengthNum(5))
// console.log(getZeroLengthNum(1))
function delEverySecondElem(str) {
    const arr = str.split(' ')
    const newArr = []
    for (i = 0; i < arr.length; i += 2) {
        newArr.push(arr[i])
    }
    return newArr.join(" ")
}
// console.log(delEverySecondElem('aaa bbb ccc eee fff'))
 function SumArraysArray(arrsarr) {
    let s = 0
    for (i of arrsarr) {
        s += i.reduce((acc, j) => (acc + j), 0)
    }
    return s
 }
//  console.log(SumArraysArray([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))

// раздел 3.3.

function getArrayofElemInThreeSymbol(arr) {
    const newArr = []
    for (i of arr) {
        if (i.length <= 3) newArr.push(i) 
    }
    return newArr
}
// console.log(getArrayofElemInThreeSymbol(['fgfgf', 'sss', 'ddsdasca', '111', '233', 'fas', 'wfc','fgdfhfd']))
function sheckOddNumInNumber(num) {
    num += ""
    for (i of num) {
        let n = +i
        if (n % 2 == 0) return  console.log('Все чётные') 
    }

    return  console.log('Все нечётные') 
}
// sheckOddNumInNumber(123456)
// sheckOddNumInNumber(135)
function checkPalindrome(str) {
    const arrRevers = Array.from(str).reverse()
    const strReverse = arrRevers.join("")
    str == strReverse ? console.log('палиндром') : console.log('не палиндром')
}
// checkPalindrome('abcba')
// checkPalindrome('abпыукцпцcba')
function getSummElemBigArr(arr) {
    let s = 0
    for (i of arr) {
        for (j of i) {
            s += j.reduce((acc, e) => (acc + e), 0)
        }
    }
    return s
}

bigArr = [
	[
		[11, 12, 13],
		[14, 15, 16],
		[17, 17, 19],
	],
	[
		[21, 22, 23],
		[24, 25, 26],
		[27, 27, 29],
	],
	[
		[31, 32, 33],
		[34, 35, 36],
		[37, 37, 39],
	],
]
// console.log(getSummElemBigArr(bigArr))

// раздел 3.4.

function doNumberTenToThousandAndFirstDigitEven() {
    for (i = 20; i < 900; i++) {
        let s = i+""
        if (parseInt(s.slice(0,1)) % 2 == 0) console.log(i)
    }
}
// doNumberTenToThousandAndFirstDigitEven()
function swapPairsOfElements(arr) {
    const newArr = []

    for (i = 0; i < arr.length; i+=2) [
        newArr.push(arr[i+1], arr[i])
    ]

    return(newArr)
}
// console.log(swapPairsOfElements([1, 2, 3, 4, 5, 6]))
function findSumElemInObj(obj) {
    let s = 0 
    let l = 0
    for (i in obj) {
        s+= parseInt(i)
        for (j in obj[i]) {
            l+= parseInt(j) + parseInt(obj[i][j])
        }

    }
 return  l + s
}
let obj2 = {
    	1: {
    		1: 11,
    		2: 12,
    		3: 13,
    	},
    	2: {
    		1: 21,
    		2: 22,
    		3: 23,
    	},
    	3: {
    		1: 24,
    		2: 25,
    		3: 26,
    	},
    }
// console.log(findSumElemInObj(obj2))

// раздел 3.5.

function doArrElenFirstLetterA(str) {
    let arr = str.split(" ")
    const newArr = []
    for (i of arr) {
        if (i.slice(0,1) == 'a') newArr.push(i)
    }
    return newArr
}
// console.log(doArrElenFirstLetterA('adfbs vfnbjd avdg hfdkfbu fgdvs'))
function getArrThisNumberDivFive(arr) {
    const newArr = []
    for (i of arr) {
        if (i % 5 == 0) newArr.push(i)
    }
    return (newArr)
}
// console.log(getArrThisNumberDivFive([1, 2, 3, 4, 5, 10, 3, 15]))
function doArrThisElemСontainsZero(arr) {
    const newArr = []
    for (i of arr) {
        let str = i+""
        let count = 0
        for (j of str) {
            if (j == '0') count++
        }
        if (count > 0) {
            newArr.push(i)
        }
    }
    return(newArr)
}
// console.log(doArrThisElemСontainsZero([1034347, 4563, 34, 1010]))
function checkElemInArrContainThree(arr) {
    let count = 0
    for (i of arr) {
        str = i + ''
        for (j of str) {
           if (j == '3') {
               return 'В элементе есть число три'
                count++
            } 
        }
    }

    if (count == 0) return 'В элементах нет числа три'
}
// console.log(checkElemInArrContainThree([1034347, 4563, 34, 1010]))
// console.log(checkElemInArrContainThree([10447, 456, 4, 1010]))
function sortNumber(num) {
    num +=""
    const arr = Array.from(num) 
    const sorted = (a,b) => a - b
    let sortArr = arr.sort(sorted)
    return sortArr.join("")
}
// console.log(sortNumber(35142))
function DoStrHyphenNum() {
    str = "-"
    for (i = 1; i < 6; i++){
        str+= i + '-'
    }
    console.log(str)
}
// DoStrHyphenNum()
function SumElenVeryBigObj(obj) {
   let  s = 0
   let  su = 0
   let  sum = 0
   for (i in obj) {
    s+= parseInt(i)
    for (j in obj[i]) {
        su+=  parseInt(j)
        for (f in obj[i][j]) {
            sum+=  parseInt(f) +  parseInt(obj[i][j][f])
        }
    }
   }
   return  s + su + sum
}
let obj3 = {
1: {
 	1: {
    		1: 111,
    			2: 112,
    			3: 113,
     		},
     		2: {
    			1: 121,
    			2: 122,
 			3: 123,
 		},
     	},
     	2: {
    		1: {
    			1: 211,
    			2: 212,
     			3: 213,
     		},
    		2: {
     			1: 221,
    		2: 222,
    			3: 223,
    		},
 	},
 	3: {
    		1: {
     			1: 311,
     			2: 312,
     			3: 313,
     		},
     		2: {
     			1: 321,
     			2: 322,
     			3: 323,
     		},
    	},
    }

    // раздел 3.6

// console.log(SumElenVeryBigObj(obj3))
function delElemThisThreeNumbers(arr) {
    const newArr = []
    for (i of arr) {
        let count = 0
        for (j of i) {
            let num = +j
            if (num) count++
        }
        if (count <= 3) newArr.push(i)
    }
    return newArr
}
// console.log(delElemThisThreeNumbers(['fgs', 'sagf32waiu', 'sdfga12345', 'cgasycg1234','vdsvs123']))
function checkNumbersInNumberMoreZero(num) {
    num+= ""
    let count = 0
    for (i of num) {
        n = +i 
        if (n == 0) count++ 
    }
count == 0 ? console.log('нет нулей') : console.log('есть нули')
}
// checkNumbersInNumberMoreZero(12345);
// checkNumbersInNumberMoreZero(12045);
function doArrayForOneSymbol(arr) {
    let str = arr.join("") 
    newArr = []
    for (i of str) {
        newArr.push(i)
    }
    return newArr
}
// console.log(doArrayForOneSymbol([123, 456, 789]))
function sumElemArrObj(arrobj) {
    let s = 0 
    for (let obj of arrobj) {
        for (let key in obj) {
            s+= parseInt(key)+parseInt(obj[key])
        }
    }
    return s
}
let data = [
    	{
    		1: 11,
    		2: 12,
    		3: 13,
    	},
    	{
    		1: 21,
    		2: 22,
    		3: 23,
    	},
    	{
    		1: 24,
    		2: 25,
    		3: 26,
    	},
    ];

// раздел 3.7

// console.log(sumElemArrObj(data))
function sortLetter(str) {
    str.toLowerCase()
    const arr = str.split(" ")
    arr.sort()
    return arr.join(" ")
}
// console.log(sortLetter('sdfcas dfargh dcgf ojkgi acdfa ifdhgdi'))
function doArrDividersNumber(num) {
    newArr  = []
    for (i = 1; i < num + 1; i++){
        if (num % i == 0) newArr.push(i)
    }
    return newArr     
}
// console.log(doArrDividersNumber(90))
function doArrDividersTwoNum(n1, n2) {
    let del
    n1 < n2 ?  del = n1 : del = n2
    const newArr = []
    for (i = 1; i < del + 1; i++){
        if (n1 % i == 0 && n2 % i == 0) newArr.push(i)
    }
    return newArr
}
// console.log(doArrDividersTwoNum(9, 3))
function checkOneDivider(num) {
    count = 0
    for (i = 2; i < num; i++){
        if (num % i == 0) count++
        console.log(count)
    }
    count == 1 ? console.log('Один делитель кроме себя и 1') : console.log('не один делитель или нет делителей кроме себя и 1')
}
// console.log(checkOneDivider(4))
// console.log(checkOneDivider(12))
function getMax(str) {
    const arr = str.split(", ")
    for (i of arr) i = +i
    return Math.max(...arr)
}
// console.log(getMax('1323, 1412, 4564, 1, 23, 356'))
function cloneElem(arr) {
    newArr = []
    for (i in arr) newArr.push(i,i)
    return newArr
}
// console.log(cloneElem([1, 2, 3, 4, 5, 6]))
function delVowelInStr(str) {
    let vowel = 'аоеиуяюёэы'
    str.toLowerCase()
    newStr = ""
    for (i of str) {
        let count = 0
        for (j of vowel){
            if (i == j) {
                count = 1
                break;
            }
        }
        if (count == 0) newStr += i
    }
    return newStr
}
// console.log(delVowelInStr('ивыншвыимрмнс'))
function getUpperCaseLostLetterWordInStr(str) {
    const arr = str.split(' ')
    newArr = []
    for (i of arr) {
        let newI
        toUp = i.slice(-1)
        newI = i.slice(0,i.length) + toUp.toUpperCase()
        newArr.push(newI)
    }
    return newArr.join(" ")
}
// console.log(getUpperCaseLostLetterWordInStr('sdv asfgau ahufagifuc hwaufhqwag hwaucf'))
let data2 = [
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
];
function sumElemData(data) {
    let s = 0
    let su = 0
    for (let obj of data) {
        for (key in obj){
            let sum = obj[key].reduce((acc,a) => (acc + a), 0)
            su += parseInt(key) + sum 
        }
    }
    return s + su
}
// console.log(sumElemData(data2))
function checkElemThisTshree(arr) {
    count = 0
    for (i of arr) {
        i+=""
        if (i.search(3)!= -1) count ++
    }
    count == 0 ? console.log('нет числа 3') : console.log('есть число 3')
}
// checkElemThisTshree([1342, 4356, 45, 353])
// checkElemThisTshree([142, 456, 45, 5])
function replaceSnakeSubStr(str) {
    let subStr = str.slice(0, str.indexOf('-') + 1)
    return str.replace(subStr, 'snake_')
}
// console.log(replaceSnakeSubStr('kebab-case'))
function replaseCamelC(str) {
    let substr = str.slice(str.indexOf('_') + 2, str.length)
    return 'camelC' + substr
}
// console.log(replaseCamelC('snake_case'))
function doSnake_(str) {
    subStr = str.slice(str.indexOf('C') + 1, str.length)
    return 'snake_C' + subStr
}
// console.log(doSnake_('camelCase'))
function getArr() {
   const bigArr = []
   let smallArr = []
   for (i = 1; i < 4; i++){
    smallArr.push(i)
    }
   for (i = 0; i < 5; i++) {
    bigArr.push(smallArr)
   }
return bigArr
}
// console.log(getArr())

// раздел 3.9

function checkStrNumber(str) {
    if (+str) {
        console.log('строка состоит из чисел')
    } else {
        console.log('В строке есть буквы')
    }
}
// checkStrNumber('wgwgwe536egd')
// checkStrNumber('25346356')
// checkStrNumber('05346356')
function checkStrForEvenNum(str) {
    let s = ''
    if (+str ) {
        for (i of str) {
            n = +i
        if (n % 2 != 0) {
            return console.log('строка не состоит из чётных чисел')
        } else {
            s ='строка состоит из чётных чисел'
        }
    }
    }  else {
        return console.log('строка не состоит из чётных чисел')
    }


    return console.log(s)
}
// checkStrForEvenNum('wgwgwe536egd')
// checkStrForEvenNum('25346356')
// checkStrForEvenNum('024466')
function delElemThisTwoZero(arr) {
    let newArr = []
    for (i of arr) {
        let count = 0
        i+=""
        for (j of i) {
            if (j == 0) count++
        }


        if (count < 3) newArr.push(+i)
    }
    return newArr
}
// console.log(delElemThisTwoZero([1, 1003, 105, 1155333300000, 12, 10]))
function findNumberSumNumThirteenOneToThousend() {
    for (i = 58; i < 1001; i++) {
        let s = 0
        i+=''
        for (j of i) {
            j = +j
            s+=j
        }
        if (s == 13) console.log(i)
    }
}
// findNumberSumNumThirteenOneToThousend()
function doArray() {
    const bigArr = []
    let count = 1
    for (i = 0; i < 3; i++) {
        let smallArr = []
        for (j = count; j < count + 3; j++ ) {
            smallArr.push(j)  
        }
        bigArr.push(smallArr)
        count+=3
    }
    return bigArr
}
// console.log(doArray())

// раздел 3.9

function checkStrNumber(str) {
    if (+str) {
        console.log('строка состоит из чисел')
    } else {
        console.log('В строке есть буквы')
    }
}
// checkStrNumber('wgwgwe536egd')
// checkStrNumber('25346356')
// checkStrNumber('05346356')
function checkStrForEvenNum(str) {
    let s = ''
    if (+str ) {
        for (i of str) {
            n = +i
        if (n % 2 != 0) {
            return console.log('строка не состоит из чётных чисел')
        } else {
            s ='строка состоит из чётных чисел'
        }
    }
    }  else {
        return console.log('строка не состоит из чётных чисел')
    }


    return console.log(s)
}
function delElemThisTwoZero(arr) {
    let newArr = []
    for (i of arr) {
        let count = 0
        i+=""
        for (j of i) {
            if (j == 0) count++
        }


        if (count < 3) newArr.push(+i)
    }
    return newArr
}
// Найдите все числа от 1 до 1000, сумма цифр которых равна 13.
function findNumberSumNumThirteenOneToThousend() {
    for (i = 58; i < 1001; i++) {
        let s = 0
        i+=''
        for (j of i) {
            j = +j
            s+=j
        }
        if (s == 13) console.log(i)
    }
}
// findNumberSumNumThirteenOneToThousend()
function doArray() {
    const bigArr = []
    let count = 1
    for (i = 0; i < 3; i++) {
        let smallArr = []
        for (j = count; j < count + 3; j++ ) {
            smallArr.push(j)  
        }
        bigArr.push(smallArr)
        count+=3
    }
    return bigArr
}

// раздел 3.10

// console.log(doArray())
function repeatElemInArr(arr) {
    newArr = []
    for(i of arr) {
        newArr.push(i,i)
    }
    return newArr
}
// console.log(repeatElemInArr([1, 2, 34, 56, 6]))
function doArrDividersNum(arr, num) {
    newArr = []
    for (i of arr) {
        if (+i == 1 || num % +i == 0) newArr.push(i)
    }
    return newArr
}
// console.log(doArrDividersNum([0,1,2,3,4,5,6,7,8,9], 2))
function doArrInNumbers(num1,num2) {
    let arr =  Array.from("" + num1 + num2)
    let set = new Set(arr);
    return Array.from(set)
}
// console.log(doArrInNumbers(2364364364,12412))
// Дано число. Получите массив позицией всех цифр 3 в этом числе, за исключением первой и последней.
function findPosThsreeInNumberExpFirstAndLost(num) {
    let str = num+=""
    newStr = str.slice(str.indexOf('3') + 1 , str.lastIndexOf('3'))
    console.log(newStr)
    const arr = []
    for (i = 0; i < newStr.length; i++) {
        if (newStr[i] == '3') arr.push(i)
    }
    return arr
}
// console.log(findPosThsreeInNumberExpFirstAndLost(163563673651))
function getNumberIsDifferentNum(arr) {
    const newArr = []
    for (i of arr) {
        i+=""
        const set = new Set(i);
        if (i.length == set.size) newArr.push(i)
    }
    return newArr
}
// console.log(getNumberIsDifferentNum([13413423, 1212, 12345, 55668, 1234, 6789]))
ar3 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]
function doOneArr(arrrr) {
    let arrr =  arrrr.join(",")
    return arrr.split(',')
}
console.log(doOneArr(ar3))