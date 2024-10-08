// Anagram check
export function Anagram(A, B) {
    if (A.length !== B.length) {
        return "false";
    }
    let fq = {};
    for (let i = 0; i < A.length; i++) {
        let char = A[i];
        if (fq[char]) {
            fq[char]++;
        } else {
            fq[A[i]] = 1;
        }
    }
    for (let i = 0; i < B.length; i++) {
        let char = B[i];
        if (fq[char]) {
            fq[char]--;
        }
    }
    for (let key in fq) {
        if (fq[key] === 0) {
            return "true";
        } else {
            return "false";
        }
    }
}

// Palindrom check
export function FindPalinderom(str) {

    let N = str.length;
    let isPalindrome = true;
    let left = 0;
    let rigth = N - 1;
    while (left < rigth) {
        if (str[left] !== str[rigth]) {
            isPalindrome = false;
            break;
        }
        left += 1;
        rigth -= 1;
    }
    if (isPalindrome) {
        return "true"
    } else {
        return "false"
    }
};

export function SecondLargestElement(arr) {
    // console.log(arr)
    let newArr = []
    let str = ''
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] !== ",") {
            str += arr[j]
        }
        else {
            newArr.push(Number(str))
            str = ''
        }
    }
    if (str.length > 0) {
        newArr.push(Number(str))
    }
    // console.log(typeof newArr)
    let max = -1;
    let secondMax = -1;
    let N = newArr.length;
    for (let i = 0; i < N; i++) {
        let num = Number(newArr[i])
        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax && num !== max) {
            secondMax = num;
        }
    }
    return secondMax;
}
// let SecondMaxele = SecondLargestElement([1, 2, 3, 4, 5, 6]);
// console.log(SecondMaxele);

// move zero at end 
export function ZerosToEnd(arr) {
    let newArr = []
    let str = ''
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] !== ",") {
            str += arr[j]
        }
        else {
            newArr.push(Number(str))
            str = ''
        }
    }
    if (str.length > 0) {
        newArr.push(Number(str))
    }
    let N = newArr.length;
    let index = 0;
    for (let i = 0; i < N; i++) {
        if (newArr[i] !== 0) {
            newArr[index] = newArr[i];
            index++;
        }
    }
    for (let j = index; j < N; j++) {
        newArr[j] = 0;
    }
    return newArr;
}

// move zero at top 

export function ZerosToTop(arr) {
    let newArr = []
    let str = ''
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] !== ",") {
            str += arr[j]
        }
        else {
            newArr.push(Number(str))
            str = ''
        }
    }
    if (str.length > 0) {
        newArr.push(Number(str))
    }
    let N = newArr.length; // length of an array
    let index = N - 1; // index from where we start filling non zero element
    for (let i = N - 1; i >= 0; i--) {
        if (newArr[i] !== 0) {
            // If we find non-zero than start to fill it in end index and then index--
            newArr[index] = newArr[i];
            index--;
        }
    }
    for (let j = 0; j < index; j++) {
        newArr[j] = 0;
    }
    return newArr;
}