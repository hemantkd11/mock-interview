// var A = "hello welocme to my new vlog im hemant";
// var reverseStrimg = reverse(A, "");
// console.log(reverseStrimg);
// // function reverse() {
// //   var reverseWords = reverseStrimg.reverse();
// //   console.log(reverseWords);
// // }
// // reverse();
// var reverseWords = reverse(reverseStrimg, " ");
// console.log(reverseWords);
// function reverse(A, separator) {
//   return A.split(separator).reverse().xdzjoin(separator);
// }

// var a = [1, 2, 5, 3, 4, 7, 6];
// var b = a.sort();
// // console.log(b);

// function missingNumber(array, n) {
//   a = array.sort((a, b) => a - b);
//   // console.log(a);
//   for (let i = 1; i <= n; i++) {
//     console.log(i, i - 1);
//     if (i !== a[i - 1]) {
//       console.log(i);
//       i++;
//     }
//   }
// }
// missingNumber([1, 2, 3, 4, 5, 6, 7, 8, 10], 10);

// function midelement(A, N) {
//   let left = 0;
//   let right = A.length - 1;
//   console.log(right);
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//   }
// }
// midelement([1, 2, 3, 4, 5, 6, 7, 8, 10], 10);

// greedy ===> maximize our profit and minimize the cost

//  its is an approch to solve optimisation problem locally optimal choice
// function f(x) {
//   x = "x-" + x; // x-a
//   return function (y) {
//     y = "y-" + x; //y - x - a;
//     return function (z) {
//       return "z-" + y;
//       z;
//     };
//   };
// }

// let g = f("a")("b")("c");
// console.log(g);

// function RotateArr(A, T) {
//   let N = A.length;
//   let start = T;
//   let end = N - 1;
//   while (start <= end) {
//     let temp = A[start];
//     A[start] = A[end];
//     A[end] = temp;
//     start++;
//     end--;
//   }
//   start = 0;
//   end = N - 1;
//   while (start < end) {
//     let temp = A[start];
//     A[start] = A[end];
//     A[end] = temp;
//     start++;
//     end--;
//   }
//   start = T;
//   end = N - 1;
//   while (start <= end) {
//     let temp = A[start];
//     A[start] = A[end];
//     A[end] = temp;
//     start++;
//     end--;
//   }

//   console.log("right", A);
// }
// RotateArr([1, 2, 3, 4, 5, 6], 3);

// function RotateArrleft(A, T) {
//   let N = A.length;

//   let start = 0;
//   let end = N - 1;
//   while (start <= end) {
//     temp = A[start];
//     A[start] = A[end];
//     A[end] = temp;
//     start++;
//     end--;
//   }
//   start = T;
//   end = N - 1;
//   while (start < end) {
//     let temp = A[start];
//     A[start] = A[end];
//     A[end] = temp;
//     start++;
//     end--;
//   }
//   start = 0;
//   end = T - 1;
//   while (start < end) {
//     let temp = A[start];
//     A[start] = A[end];
//     A[end] = temp;
//     start++;
//     end--;
//   }

//   console.log("left", A);
// }
// RotateArrleft([1, 2, 3, 4, 5, 6], 3);

// function RotateArrLeftToRight() {
//   A = [1, 2, 3, 4, 5, 6];
// }
// RotateArrLeftToRight();

// function MostAppearEle() {
//   A = [1, 2, 3, 4, 3, 5, 3];
//   let fq = {};
//   let max = 0;
//   let ele = 0;
//   for (let i = 0; i < A.length; i++) {
//     let curEle = A[i];
//     if (fq[curEle]) {
//       fq[curEle]++;
//     } else {
//       fq[A[i]] = 1;
//     }
//     if (fq[curEle] > max) {
//       max = fq[curEle];
//       ele = curEle;
//     }
//   }
//   console.log(" MostAppearEle()", max, ele);
// }
// MostAppearEle();

// function MajorityEle() {
//   A = [1, 2, 1, 3, 1, 2, 1];
//   let N = A.length;
//   let count = 0;
//   let Majorityele = 0;

//   for (let i = 0; i < A.length; i++) {
//     if (count === 0) {
//       Majorityele = A[i];
//       count = 1;
//     } else if (A[i] === Majorityele) {
//       count++;
//     } else {
//       count--;
//     }
//   }
//   let majoritycount = 0;
//   for (let j = 0; j < N; j++) {
//     if (A[j] === Majorityele) {
//       majoritycount += 1;
//     }
//   }
//   if (majoritycount > N / 2) {
//     return Majorityele;
//   } else {
//     return -1;
//   }
// }
// let MajorityEleCheck = MajorityEle();
// console.log(MajorityEleCheck);

// // //// Find the max sum of subarray
// function MaxSum() {
//   A = [-1, 2, -2, 3, -1, 4, -1, 2];
//   let sum = 0;
//   let start = 0;
//   let end = 0;
//   let max = 0;
//   for (let i = 0; i < A.length; i++) {
//     if (sum == 0) {
//       start = i;
//     }
//     sum += A[i];
//     if (sum > max) {
//       max = sum;
//       end = i;
//     } else if (sum < 0) {
//       sum = 0;
//     }
//   }
//   let y = [];
//   for (let j = start; j <= end; j++) {
//     y.push(A[j]);
//   }
//   console.log(max, start, end, y);
// }
// MaxSum();

// function MoveZeroend() {
//   A = [1, 0, 2, 1, 3, 0, 2, 1, 4];
//   let n = A.length;
//   for (let i = 0; i < n; i++) {
//     if (A[i] == 0) {
//       let ele = A[i];
//       for (let j = i; j < n; j++) {
//         A[j] = A[j + 1];
//       }
//       A[n - 1] = ele;
//     }
//   }
//   console.log("MoveZeroend()", A);
// }
// MoveZeroend();

// function ReverseStrWord(A) {
//   let str = "";
//   let y = [];
//   for (let i = 0; i < A.length; i++) {
//     if (A[i] !== " ") {
//       str += A[i];
//     } else {
//       y.push(str);
//       str = "";
//     }
//   }
//   if (str.length > 0) {
//     y.push(str);
//   }
//   left = 0;
//   right = y.length - 1;
//   while (left <= right) {
//     let temp = y[left];
//     y[left] = y[right];
//     y[right] = temp;
//     left++;
//     right--;
//   }
//   console.log(y);
// }
// ReverseStrWord("Hello im hemant kumar diwakar");

// //  date 16/10/2024
// function LargestoddNumInStrM1(A) {
//   let str = " ";
//   let max = 0;
//   let N = A.length;
//   console.log(N);
//   for (let i = 0; i < A.length; i++) {
//     str += A[i];
//     if (parseInt(str) % 2 !== 0) {
//       if (parseInt(str) > parseInt(max)) {
//         max = str;
//       }
//     }
//   }
//   console.log(max);
// }
// LargestoddNumInStrM1("4208362");

// function LargestoddNumInStrM2(A) {
//   let str = " ";
//   let endIdx = 0;
//   let N = A.length;
//   console.log(N);
//   for (let i = N - 1; i >= 0; i--) {
//     if (A[i] % 2 !== 0) {
//       endIdx = i;
//     }
//   }
//   for (let i = 0; i <= endIdx; i++) {
//     str += A[i];
//   }
//   console.log(str);
// }
// LargestoddNumInStrM2("4208362");

// function largestCommonPrefix(A) {
//   let testStr = A[0];
//   for (let i = 1; i < A.length; i++) {
//     let tempstr = "";
//     for (let j = 0; j < A[i].length; j++) {
//       if (testStr[j] === A[i][j]) {
//         tempstr += A[i][j];
//       } else {
//         break;
//       }
//     }
//     testStr = tempstr;
//   }
//   console.log(testStr);
// }
// largestCommonPrefix(["abawer", "abaffrr", "abajhjhj"]);

// function CheckStrRotation() {
//   let A = "waterbottle";
//   let B = "erbottlewat";
//   let newstr = A + A;
//   let str = "";
//   console.log(newstr);
//   for (let i = 0; i < newstr.length; i++) {
//     console.log("B[i]", B[i]);
//     if (newstr[i] == B[str.length]) {
//       str += newstr[i];
//     } else {
//       if (str === B) {
//         break;
//       } else {
//         str = "";
//       }
//     }
//   }
//   if (str === B) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// }
// CheckStrRotation();

// function checkAnagram() {
//   let A = "listten";
//   let B = "silentt";
//   if (A.length !== B.length) {
//     return false;
//   }
//   const CharCount = new Array(26).fill(0);
//   for (let char of A) {
//     let ss = char.charCodeAt(0) - "a".charCodeAt(0);
//     CharCount[ss]++;
//   }
//   for (let char of B) {
//     let index = char.charCodeAt(0) - "a".charCodeAt(0);
//     CharCount[index]--;
//     if (CharCount[index] < 0) {
//       return false;
//     }
//   }
//   return true;
// }
// let checkAnagramstr = checkAnagram();
// console.log(checkAnagramstr);

// function ArrangeEle(A) {
//   let N = A.length;
//   // let pos = [];
//   // let neg = [];
//   let ans = [];
//   let indexP = 0;
//   let indexN = 1;
//   for (let i = 0; i < N; i++) {
//     if (A[i] > 0) {
//       ans[indexP] = A[i];
//       indexP += 2;
//     } else {
//       ans[indexN] = A[i];
//       indexN += 2;
//     }
//   }
//   console.log(ans);
// }
// ArrangeEle([1, 2, -1, -2, 3, -2]);

// function Parenthises() {
//   let A = "(()())(())";
//   let N = A.length;
//   let str = " ";
//   let count = 0;
//   for (let i = 0; i < N; i++) {
//     if (A[i] === "(") {
//       if (count > 0) {
//         str += "(";
//       }
//       count++;
//     } else {
//       count--;
//       if (count > 0) {
//         str += ")";
//       }
//     }
//   }
//   console.log(str);
// }
// Parenthises();
// function Paranthesis(A) {
//   let result = "";
//   console.log(A.length);
//   let count = 0;
//   let totelp = 0;
//   let totalR = 0;
//   for (let i = 0; i < A.length; i++) {
//     if (A[i] == "(") {
//       if (count > 0) {
//         result += "(";
//         totelp++;
//       }
//       count++;
//       totalR++;
//     } else {
//       count--;
//       if (count > 0) {
//         result += ")";
//         totelp++;
//       }
//       totalR++;
//     }
//   }
//   console.log(result, totelp, totalR);
// }
// Paranthesis("(()())(())");

// function SetmatrixZero() {
//   A = [
//     [1, 1, 1],
//     [1, 0, 1],
//     [1, 1, 1],
//   ];
//   let newArri = [];
//   let newArrj = [];
//   let N = A.length;
//   for (let i = 0; i < N; i++) {
//     for (let j = 0; j < A[i].length; j++) {
//       if (A[i][j] === 0) {
//         newArri[i] = true;
//         newArrj[j] = true;
//       }
//     }
//   }
//   for (let i = 0; i < A.length; i++) {
//     if (newArri[i]) {
//       for (let j = 0; j < A[i].length; j++) {
//         A[i][j] = 0;
//       }
//     }
//   }
//   console.log(A);
//   for (let j = 0; j < A[0].length; j++) {
//     if (newArrj[j]) {
//       for (let i = 0; i < N; i++) {
//         A[i][j] = 0;
//       }
//     }
//   }
//   console.log(A);
// }
// SetmatrixZero();

// function LongestKsumPos() {
//   let A = [2, 3, 5, 9, 2, 2, 1, 5, 4, 5];
//   let n = A.length;
//   let t = 19;
//   let max = 0;
//   let count = 0;
//   let finalTotal = 0;
//   let sum = 0;
//   for (let i = 0; i < n; i++) {
//     sum += A[i];
//     count += 1;
//     if (sum == t) {
//       if (count > max) {
//         max = count;
//         finalTotal = sum;
//       }
//     } else if (sum > t) {
//       sum = A[i];
//       count = 1;
//     }
//   }
//   console.log(finalTotal, max);
// }
// LongestKsumPos();

// function MaxsumInSubArray() {
//   let A = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
//   let Maxsumm = 0;
//   let sum = 0;
//   let start = 0;
//   let end = 0;
//   // let SubArrStarr = 0;
//   for (let i = 0; i < A.length; i++) {
//     if (sum === 0) {
//       start = i;
//     }
//     sum += A[i];

//     if (sum > Maxsumm) {
//       Maxsumm = sum;
//       end = i;
//     } else if (sum <= 0) {
//       sum = 0;
//     }
//   }
//   console.log(start, end, Maxsumm);
// }
// MaxsumInSubArray();

// function longestSubArrWithposneg() {
//   let A = [-1, 1, 1];
//   let MaxCount = 0;
//   let count = 0;
//   let maxSum = 0;
//   let k = 1;
//   let sum = 0;
//   for (let i = 0; i < A.length; i++) {
//     sum += A[i];
//     count++;
//     if (sum > maxSum) {
//       if (count > MaxCount) {
//         maxSum = sum;
//         MaxCount = count;
//       }
//     } else if (sum > k) {
//       sum = A[i];
//       count = 1;
//     }
//   }
//   console.log(maxSum, MaxCount);
// }
// longestSubArrWithposneg();

// function MaxConsecutiveOne() {
//   let A = [1, 1, 2, 1, 1, 0, 1, 1, 1, 1];
//   let maxCount = 0;
//   let count = 0;
//   for (let i = 0; i < A.length; i++) {
//     if (A[i] === 1) {
//       count += 1;
//       if (count > maxCount) {
//         maxCount = count;
//       }
//     } else {
//       count = 0;
//     }
//   }
//   console.log(maxCount);
// }
// MaxConsecutiveOne();

// function InfixTopostfix() {}

function findPalamdrom1(A) {
  let newstr = "";
  for (let i = A.length - 1; i >= 0; i--) {
    newstr += A[i];
  }
  if (A === newstr) {
    console.log("true");
  } else {
    console.log("False");
  }
}
findPalamdrom1("aanaaa");

function checkAnagramstr(str1, str2) {
  let frq = {};
  for (let i = 0; i < str1.length; i++) {
    let curEle = str1[i];
    if (frq[curEle]) {
      frq[curEle] += 1;
    } else {
      frq[curEle] = 1;
    }
  }
  for (let i = 0; i < str2.length; i++) {
    let curEle = str2[i];
    if (frq[curEle]) {
      frq[curEle] -= 1;
    } else {
      return -1;
    }
  }
  console.log(frq);
  for (let key in frq) {
    if (frq[key] !== 0) {
      return -1;
    }
  }
  return 1;
}
const Anagram = checkAnagramstr("liseetn", "silent");
console.log(Anagram);

function movezeroend(arr) {
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[index] = arr[i];
      index++;
    }
  }
  console.log(arr);
  for (let i = index; i < arr.length; i++) {
    arr[i] = 0;
  }
  console.log(arr);
}
movezeroend([1, 0, 2, 0, 2, 3, 0, 4]);

function movezerotop(arr) {
  let index = arr.length - 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== 0) {
      arr[index] = arr[i];
      index--;
    }
  }
  console.log(arr);
  for (let i = index; i >= 0; i--) {
    arr[i] = 0;
  }
  console.log(arr);
}
movezerotop([1, 0, 2, 0, 2, 3, 0, 4]);

function SortArr(arr) {
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = i + 1; j < arr.length; j++) {
  //     if (arr[i] > arr[j]) {
  //       [arr[i], arr[j]] = [arr[j], arr[i]];
  //     }
  //   }
  // }
  let frq = {};
  for (let i = 0; i < arr.length; i++) {
    let curEle = arr[i];
    if (frq[curEle]) {
      frq[curEle] += 1;
    } else {
      frq[curEle] = 1;
    }
  }
  let index = 0;
  for (let key in frq) {
  }
  console.log("SortArr(arr)", arr);
}
SortArr([1, 2, 3, 0, 0, 0, 1, 1, 2, 2, 3, 3]);

// function GetKthElement(A, x) {
//   let i = 0;
//   let temp = A[i];
//   while (temp != undefined) {
//     if (temp === x) {
//       return true;
//     }
//     i++;
//   }
// }
// let GetKthEle = GetKthElement([1, 2, 3, 4, 5, 6], 4);
// console.log(GetKthEle);

// class Node {
//   constructor(value) {
//     this.head = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   append(value) {
//     const newNode = new Node(value);
//     if (!this.head) {
//       this.head = newNode;
//     } else {
//       let current = this.head;
//       while (current.next) {
//         current = current.next;
//       }
//       current.next = newNode;
//     }
//   }
// }

function LPlalin(A) {
  let start = 0;
  let end = A.length - 1;
  while (start < end) {
    if (A[start] === A[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }
  return true;
}
let palimdrom = LPlalin("aannaa");
console.log(palimdrom);

function findPalamdromInStr(str) {
  let n = str.length;
  let max = 0;
  let start = 0;
  let end = 0;
  for (let i = 0; i < n; i++) {
    let left = i;
    let right = i + 1;
    while (left >= 0 && right < n) {
      if (str[left] !== str[right]) {
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
    // left = i;
    // right = i;
    // while (left >= 0 && right < n) {
    //   if (str[left] !== str[right]) {
    //     break;
    //   } else {
    //     if (right - left > max) {
    //       start = left;
    //       end = right;
    //       max = right + 1 - left;
    //     }
    //     left--;
    //     right++;
    //   }
    // }
  }
  let newStr = "";
  for (let i = start; i < end + 1; i++) {
    newStr += str[i];
  }
  console.log(start, end, max, newStr);
}

findPalamdromInStr("heanal");

function convertallzerotoOne(arr) {
  let n = arr.length;
  let arrcol = [];
  let arrrow = [];
  for (let i = 0; i < n; i++) {
    let innerlength = arr[i].length;
    for (let j = 0; j < innerlength; j++) {
      if (arr[i][j] == 0) {
        // console.log("Hello", arr[i][j]);
        arrcol.push(j);
        arrrow.push(i);
      }
    }
  }
  for (let i = 0; i < arrrow.length; i++) {
    let index = arrrow[i];
    let n = arr[i].length;

    for (let j = 0; j < n; j++) {
      arr[index][j] = 0;
    }
  }
  for (let j = 0; j < arrcol.length; j++) {
    let index = arrcol[j];
    for (let i = 0; i < arr.length; i++) {
      arr[i][index] = 0;
    }
  }
  console.log(arr);
}
convertallzerotoOne([
  [1, 1, 0, 1],
  [1, 0, 1, 1],
  [1, 1, 1, 1],
]);

function converAllZeroToOne(arr) {
  let n = arr.length;
  let m = arr[0].length;
  let firstRowZero = false;
  let firstColZero = false;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] == 0) {
        arr[i][0] = 0;
        arr[0][j] = 0;
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      console.log(j);
      if (arr[i][0] == 0 || arr[0][j] == 0) {
        arr[i][j] = 0;
      }
    }
  }
  console.log(arr);
}
converAllZeroToOne([
  [1, 1, 0, 1],
  [1, 0, 1, 1],
  [1, 1, 1, 1],
  // [1, 1, 1, 0],
]);

function BinnarySearchIn2DArr(arr, B) {
  let n = arr.length;
  let m = arr[0].length;
  for (let i = 0; i < n; i++) {
    let start = 0;
    let end = arr[i].length - 1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[i][mid] === B) {
        return 1;
      } else {
        if (arr[i][mid] > B) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      }
    }
  }
  return 0;
}
let BinaryIn2D = BinnarySearchIn2DArr(
  [
    [1, 2, 6, 8, 6],
    [22, 3, 11, 5, 77],
    [23, 34, 56, 7, 9],
  ],
  78
);
console.log("BinaryIn2D", BinaryIn2D);

function RotateArr(arr, K) {
  function rotate(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  rotate(arr, 0, K - 1);
  rotate(arr, K, arr.length - 1);
  rotate(arr, 0, arr.length - 1);
  return arr;
}
let Rotate = RotateArr([1, 2, 3, 4, 5, 6], 3);
console.log(Rotate);

function sumofcolumn(arr) {
  let n = arr.length;
  let m = arr[0].length;
  let newArr = [];
  for (let j = 0; j < m; j++) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      console.log("arr[i][j]", "i", i, "j", j, arr[i][j]);
      sum += arr[i][j];
      console.log(sum);
    }
    newArr.push(sum);
  }
  console.log(newArr);
}
sumofcolumn([
  [1, 2, 6, 8, 6],
  [22, 3, 11, 5, 77],
  [23, 34, 56, 7, 9],
]);

// function diagonalSUm(arr) {
//   let n = arr.length;
//   let m = arr[0].length;
//   // let newArr = [];
//   let sum = 0;
//   for (let j = 0; j < m; j++) {
//     for (let i = 0; i < n; i++) {
//       if (i == j) {
//         sum += arr[i][j];
//       }
//     }
//     newArr.push(sum);
//   }
//   console.log(newArr);
// }
// diagonalSUm([
//   [1, 2, 6, 8, 6],
//   [22, 3, 11, 5, 77],
//   [23, 34, 56, 7, 9],
// ]);

// console.log(x);
// var x = 7;

///////////// count of pairs in string

// function CountPairOfStr(str) {
//   let n = str.length;
//   let count = 0;
//   for (let i = 0; i < n; i++) {
//     if (str[i] === "a") {
//       for (let j = i + 1; j < n; j++) {
//         if (str[j] === "g") {
//           count++;
//         }
//       }
//     }
//   }
//   console.log(count);
// }
// CountPairOfStr("abegag");

function CountPairOfStr(str) {
  let n = str.length;
  let gcount = 0;
  let acount = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (str[i] === "g") {
      gcount++;
    } else if (str[i] === "a") {
      acount += gcount;
    }
  }
  console.log(acount);
}
CountPairOfStr("abegagag");

// function TotalSubArr(arr) {
//   let count = 0;
//   let maxsum = 0;
//   let maxArr = [];
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let x = [];
//     let sum = 0;
//     for (let j = i; j < arr.length; j++) {
//       x.push(arr[j]);
//       sum += arr[j];
//       // if (x.length > max) {
//       //   max = x.length;
//       //   maxArr = [...x];
//       // }
//       if (sum > maxsum) {
//         maxsum = sum;
//       }

//       // count++;
//       // newArr.push(x);
//     }
//   }
//   count = (arr.length * (arr.length + 1)) / 2;
//   console.log("newArr", newArr, "MaxArr", maxArr, count);
// }
// TotalSubArr([1, 2, 3, -4, 5, 6]);

function TotalSubArr(arr) {
  let n = arr.length;
  let size = n;
  let ans = 0;
  let maxindex = -1;
  let minindex = -1;
  let maxele = arr[0];
  let minele = arr[0];
  for (let k = 0; k < n; k++) {
    if (arr[k] > maxele) {
      maxele = arr[k];

      // maxindex = k;
    } else if (arr[k] < minele) {
      minele = arr[k];
      // minindex = k;
    }
  }
  for (let i = 0; i < n; i++) {
    if (arr[i] === maxele) {
      maxindex = i;
      if (minindex !== -1) {
        ans = i - minindex + 1;
      }
    } else if (arr[i] === minele) {
      minindex = i;
      if (maxindex !== -1) {
        ans = i - maxindex + 1;
      }
    }
  }
  if (size > ans) {
    size = ans;
  }

  console.log(size);
}
TotalSubArr([2, 2, 6, 4, 5, 1, 5, 2, 6, 4]);

function SubArrFromBToC() {
  let arr = [4, 2, 2];
  let B = 0;
  let c = 1;
  let newArr = [];
  for (let i = B; i <= c; i++) {
    newArr.push(arr[i]);
  }
  console.log(newArr);
}
SubArrFromBToC();

function subOfSubArray(arr) {
  let n = arr.length;
  let newSumArr = [];
  let largetsumarr = 0;
  let max = -1;
  for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    let sum = 0;
    let x = [];
    for (let j = i; j < n; j++) {
      sum += arr[j];
      x.push(arr[j]);
      if (sum > max) {
        max = sum;
        largetsumarr = [...x];
      }
      newSumArr.push(sum);
    }
  }
  console.log("SumOfSubArray", newSumArr, largetsumarr);
}

subOfSubArray([-10, 20, 30, 40]);
