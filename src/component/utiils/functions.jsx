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



// sort 
export function SortArray(newArr) {
    let arr = []
    let str = ''
    for (let j = 0; j < newArr.length; j++) {
        if (newArr[j] !== ",") {
            str += newArr[j]
        }
        else {
            arr.push(Number(str))
            str = ''
        }
    }
    if (str.length > 0) {
        arr.push(Number(str))
    }
    let fq = {};
    let N = arr.length;
    for (let i = 0; i < N; i++) {
        let currentele = arr[i];
        if (fq[currentele]) {
            fq[currentele]++;
        } else {
            fq[arr[i]] = 1;
        }
    }
    console.log(fq);
    // for (let j = 0; j < N; j++) {
    //   if (fq[0] > 0) {
    //     arr[j] = 0;
    //     fq[0]--;
    //   } else if (fq[1] > 0) {
    //     arr[j] = 1;
    //     fq[1]--;
    //   } else if (fq[2] > 0) {
    //     arr[j] = 2;
    //     fq[2]--;
    //   }
    // }
    let index = 0;
    for (let key in fq) {
        while (fq[key] > 0) {
            arr[index] = parseInt(key);
            fq[key]--;
            index++;
        }
    }
    return arr;
}

// Binarysearch
export function BinarySearch(A, B) {
    // console.log(A)
    let newArr = []
    let str = ''
    for (let i = 0; i < A.length; i++) {
        if (A[i] !== ",") {
            str += A[i]
        } else {
            newArr.push(parseInt(str))
            str = ''
        }

    }
    if (str.length > 0) {
        newArr.push(parseInt(str))
    }
    console.log(newArr)
    console.log(typeof parseInt(B))
    let N = newArr.length;
    let left = 0;
    let right = N - 1;
    let index = 0
    B = parseInt(B)
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (newArr[mid] === B) {
            index = mid
            break
        } else if (newArr[mid] < B) {
            left = mid + 1;

        } else {
            right = mid - 1;
        }
    }
    return newArr[index] === B ? `${newArr[index]} at index of ${index}` : -1
}



//Two Sum : Check if a pair with given sum exists in Array
export function pairOfgivenSum(newArr, B) {
    let A = []
    let str = ''
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] !== ",") {
            str += newArr[i]
        } else {
            A.push(parseInt(str))
            str = ''
        }

    }
    if (str.length > 0) {
        A.push(parseInt(str))
    }
    let N = A.length;
    // let target = 10;

    B = parseInt(B)
    let arr = new Set();
    for (let i = 0; i < N; i++) {
        let element = B - A[i];
        if (arr.has(element)) {
            return "yes";
        } else {
            arr.add(A[i]);
        }
    }
    return "No";
}

////////////////// Another way to do this
// function pairOfgivenSum(A) {
//   let N = A.length;
//   let target = 10;
//   for (let i = 0; i < N; i++) {
//     // let sum = 0;
//     for (let j = i + 1; j < N; j++) {
//       if (A[i] + A[j] === target) {
//         return "Yes";
//       }
//     }
//   }
//   return "No";
// }
// let pairexist = pairOfgivenSum([1, 5, 6, 3, 2, 11]);
// console.log(pairexist);

// let pairexist = pairOfgivenSum([1, 5, 6, 4, 2, 11]);
// console.log(pairexist);



// ////////////////////////  LargestPalimdrom in given String
export function LargestPalimdrom(A) {
    let N = A.length;
    let max = 0;
    let start = 0;
    let end = 0;
    for (let i = 0; i < N; i++) {
        let left = i;
        let right = i + 1;
        while (left >= 0 && right < N) {
            if (A[left] !== A[right]) {
                break;
            } else {
                if (right - left > max) {
                    start = left;
                    end = right;
                    max = right - left;
                }
                left--;
                right++;
            }
        }
        left = i - 1;
        right = i + 1;
        while (left >= 0 && right < N) {
            if (A[left] !== A[right]) {
                break;
            } else {
                if (right - left > max) {
                    start = left;
                    end = right;
                    max = right + 1 - left;
                }
                left--;
                right++;
            }
        }
    }
    return A.slice(start, end + 1)
}
// LargestPalimdrom("aaabaa");


// rotate Array k Time left
export function RotateArrLeft(newArr, K) {
    let A = []
    let str = ''
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] !== ",") {
            str += newArr[i]
        } else {
            A.push(parseInt(str))
            str = ''
        }

    }
    if (str.length > 0) {
        A.push(parseInt(str))
    }
    let N = A.length;
    K = parseInt(K)
    function reverse(arr, start, end) {
        while (start < end) {
            console.log(start, end);
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
    // reverse(A, 0, N - 1); /// to rotate right
    reverse(A, 0, K - 1);
    reverse(A, K, N - 1);
    reverse(A, 0, N - 1); /// to rotate left
    return A
}

//   RotateArrLeft([1, 2, 3, 4, 5, 6], 4);

export function RotateArrRight(newArr, K) {
    let A = []
    let str = ''
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] !== ",") {
            str += newArr[i]
        } else {
            A.push(parseInt(str))
            str = ''
        }

    }
    if (str.length > 0) {
        A.push(parseInt(str))
    }
    let N = A.length;
    K = parseInt(K)
    function reverse(arr, start, end) {
        while (start < end) {
            console.log(start, end);
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
    reverse(A, 0, N - 1); /// to rotate right
    reverse(A, 0, K - 1);
    reverse(A, K, N - 1);
    // reverse(A, 0, N - 1); /// to rotate left
    console.log(A)
    return A
}

// //////////////////////  check if the str is valid or not 
export function CheckValidStr(str) {
    console.log(typeof str)
    let newArr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
            newArr.push(str[i]);
        } else if (str[i] === ")") {
            if (newArr[newArr.length - 1] === "(") {
                newArr.pop();
            } else {
                return "false";
            }
        } else if (str[i] === "]") {
            if (newArr[newArr.length - 1] === "[") {
                newArr.pop();
            } else {
                return "false";
            }
        } else if (str[i] === "}") {
            if (newArr[newArr.length - 1] === "{") {
                newArr.pop();
            } else {
                return "false";
            }
        }
    }
    if (newArr.length > 0) {
        return "false";
    } else {
        return "true";
    }
}
//  Given 2D array find the target
// export function FindEleInTwoDArr(A, T) {
//     let N = A.length;
//     let i = 0;
//     while (i < N) {
//       IL = A[i].length; //inner Array Length
//       let left = 0;
//       let right = IL - 1;
//       console.log("Inner length", IL);
//       while (left <= right) {
//         let mid = Math.floor((right + left) / 2);
//         console.log("mid", mid);

//         if (T === A[i][mid]) {
//           // console.log(i, mid);
//           return [i, mid];
//         } else if (A[i][mid] < T) {
//           left = mid + 1;
//         } else {
//           right = mid - 1;
//         }
//       }
//       i++;
//     }
//     return -1
//   }
//   arr = [
//     [2, 3, 4],
//     [5, 11, 10],
//     [66, 77, 88, 99],
//   ];

//   let FindArr = FindEleInTwoDArr(arr, 99);
//   console.log(FindArr);



////////// Maximum Subarray Sum in an Array  and that sub array
// function MaxSybArray(A) {
//     let N = A.length;
//     let max = 0;
//     let y = [];
//     for (let i = 0; i < A.length; i++) {
//       let sum = 0;
//       let x = [];
//       for (let j = i; j < A.length; j++) {
//         x.push(A[j]);
//         sum += A[j];
//         if (sum > max) {
//           max = sum;
//           y = x;
//         }
//       }
//     }
//     console.log(y, max);
// ///////////////////  another mathod
// let max = 0;
// let sum  = 0
// for (let i = 0; i < A.length; i++) {
//     sum += A[i];
//     if (sum > max) {
//         max = sum;
//     }
//     if (sum < 0) {
//         sum = 0;
//     }
// }
// console.log(max);
// ///////////////////  another mathod  end
//   }
//   MaxSybArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);



// /////////////////////////  max sun and subarray
// function SubArrSumAndSubArr(A) {
//     let max = 0;
//     let n = A.length;
//     let sum = 0;
//     let SubArrStart = 0;
//     let end = 0;
//     for (let i = 0; i < n; i++) {
//       if (sum == 0) {
//         start = i;
//       }
//       sum += A[i];
//       if (sum > max) {
//         max = sum;
//         SubArrStart = start;
//         end = i;
//       }
//       if (sum < 0) {
//         sum = 0;
//       }
//     }
//     console.log(max);
//     for (let j = SubArrStart; j <= end; j++) {
//       console.log(A[j]);
//     }
//   }
//   SubArrSumAndSubArr([-2, 1, -3, 4, -1, 2, 1, -5, 4]);


////////////////////Most Appear element in an array

// function MostAppearEle() {
//     A = [1, 2, 3, 4, 3, 5, 3];
//     let fq = {};
//     let max = 0;
//     let ele = 0;
//     for (let i = 0; i < A.length; i++) {
//         let curEle = A[i];
//         if (fq[curEle]) {
//             fq[curEle]++;
//         } else {
//             fq[A[i]] = 1;
//         }
//         if (fq[curEle] > max) {
//             max = fq[curEle];
//             ele = curEle;
//         }
//     }
//     console.log(" MostAppearEle()", max, ele);
// }
// MostAppearEle();


///////////////////// Majority Element in Array a majority element is appear more then N/2
// function MajorityEle() {
//     A = [1, 2, 1, 3, 1, 2, 1]
//     let N = A.length
//     let count = 0
//     let Majorityele = 0

//     for (let i = 0; i < A.length; i++) {
//         if (count === 0) {
//             Majorityele = A[i]
//             count = 1
//         } else if (A[i] === Majorityele) {
//             count++
//         } else {
//             count--
//         }
//     }
//     let majoritycount = 0
//     for (let j = 0; j < N; j++) {
//         if (A[j] === Majorityele) {
//             majoritycount += 1
//         }
//     }
//     if (majoritycount > N / 2) {
//         return Majorityele
//     } else {
//         return -1
//     }
// }
// let MajorityEleCheck = MajorityEle()
// console.log(MajorityEleCheck)