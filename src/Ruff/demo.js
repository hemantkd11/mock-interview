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
function f(x) {
  x = "x-" + x; // x-a
  return function (y) {
    y = "y-" + x; //y - x - a;
    return function (z) {
      return "z-" + y;
      z;
    };
  };
}

let g = f("a")("b")("c");
console.log(g);

function RotateArr(A, T) {
  let N = A.length;
  let start = T;
  let end = N - 1;
  while (start <= end) {
    let temp = A[start];
    A[start] = A[end];
    A[end] = temp;
    start++;
    end--;
  }
  start = 0;
  end = N - 1;
  while (start < end) {
    temp = A[start];
    A[start] = A[end];
    A[end] = temp;
    start++;
    end--;
  }
  start = T;
  end = N - 1;
  while (start <= end) {
    let temp = A[start];
    A[start] = A[end];
    A[end] = temp;
    start++;
    end--;
  }

  console.log("right", A);
}
RotateArr([1, 2, 3, 4, 5, 6], 3);

function RotateArrleft(A, T) {
  let N = A.length;

  let start = 0;
  let end = N - 1;
  while (start <= end) {
    temp = A[start];
    A[start] = A[end];
    A[end] = temp;
    start++;
    end--;
  }
  start = T;
  end = N - 1;
  while (start < end) {
    let temp = A[start];
    A[start] = A[end];
    A[end] = temp;
    start++;
    end--;
  }
  start = 0;
  end = T - 1;
  while (start < end) {
    let temp = A[start];
    A[start] = A[end];
    A[end] = temp;
    start++;
    end--;
  }

  console.log("left", A);
}
RotateArrleft([1, 2, 3, 4, 5, 6], 3);

function RotateArrLeftToRight() {
  A = [1, 2, 3, 4, 5, 6];
}
RotateArrLeftToRight();

function MostAppearEle() {
  A = [1, 2, 3, 4, 3, 5, 3];
  let fq = {};
  let max = 0;
  let ele = 0;
  for (let i = 0; i < A.length; i++) {
    let curEle = A[i];
    if (fq[curEle]) {
      fq[curEle]++;
    } else {
      fq[A[i]] = 1;
    }
    if (fq[curEle] > max) {
      max = fq[curEle];
      ele = curEle;
    }
  }
  console.log(" MostAppearEle()", max, ele);
}
MostAppearEle();

function MajorityEle() {
  A = [1, 2, 1, 3, 1, 2, 1];
  let N = A.length;
  let count = 0;
  let Majorityele = 0;

  for (let i = 0; i < A.length; i++) {
    if (count === 0) {
      Majorityele = A[i];
      count = 1;
    } else if (A[i] === Majorityele) {
      count++;
    } else {
      count--;
    }
  }
  let majoritycount = 0;
  for (let j = 0; j < N; j++) {
    if (A[j] === Majorityele) {
      majoritycount += 1;
    }
  }
  if (majoritycount > N / 2) {
    return Majorityele;
  } else {
    return -1;
  }
}
let MajorityEleCheck = MajorityEle();
console.log(MajorityEleCheck);

// //// Find the max sum of subarray
function MaxSum() {
  A = [-1, 2, -2, 3, -1, 4, -1, 2];
  let sum = 0;
  let start = 0;
  let end = 0;
  let max = 0;
  for (let i = 0; i < A.length; i++) {
    if (sum == 0) {
      start = i;
    }
    sum += A[i];
    if (sum > max) {
      max = sum;
      end = i;
    } else if (sum < 0) {
      sum = 0;
    }
  }
  let y = [];
  for (let j = start; j <= end; j++) {
    y.push(A[j]);
  }
  console.log(max, start, end, y);
}
MaxSum();

function MoveZeroend() {
  A = [1, 0, 2, 1, 3, 0, 2, 1, 4];
  let n = A.length;
  for (let i = 0; i < n; i++) {
    if (A[i] == 0) {
      let ele = A[i];
      for (let j = i; j < n; j++) {
        A[j] = A[j + 1];
      }
      A[n - 1] = ele;
    }
  }
  console.log("MoveZeroend()", A);
}
MoveZeroend();

function ReverseStrWord(A) {
  let str = "";
  let y = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== " ") {
      str += A[i];
    } else {
      y.push(str);
      str = "";
    }
  }
  if (str.length > 0) {
    y.push(str);
  }
  left = 0;
  right = y.length - 1;
  while (left <= right) {
    let temp = y[left];
    y[left] = y[right];
    y[right] = temp;
    left++;
    right--;
  }
  console.log(y);
}
ReverseStrWord("Hello im hemant kumar diwakar");

//  date 16/10/2024
function LargestoddNumInStrM1(A) {
  let str = " ";
  let max = 0;
  let N = A.length;
  console.log(N);
  for (let i = 0; i < A.length; i++) {
    str += A[i];
    if (parseInt(str) % 2 !== 0) {
      if (parseInt(str) > parseInt(max)) {
        max = str;
      }
    }
  }
  console.log(max);
}
LargestoddNumInStrM1("4208362");

function LargestoddNumInStrM2(A) {
  let str = " ";
  let endIdx = 0;
  let N = A.length;
  console.log(N);
  for (let i = N - 1; i >= 0; i--) {
    if (A[i] % 2 !== 0) {
      endIdx = i;
    }
  }
  for (let i = 0; i <= endIdx; i++) {
    str += A[i];
  }
  console.log(str);
}
LargestoddNumInStrM2("4208362");

function largestCommonPrefix(A) {
  let testStr = A[0];
  for (let i = 1; i < A.length; i++) {
    let tempstr = "";
    for (let j = 0; j < A[i].length; j++) {
      if (testStr[j] === A[i][j]) {
        tempstr += A[i][j];
      } else {
        break;
      }
    }
    testStr = tempstr;
  }
  console.log(testStr);
}
largestCommonPrefix(["abawer", "abaffrr", "abajhjhj"]);

function CheckStrRotation() {
  let A = "waterbottle";
  let B = "erbottlewat";
  let newstr = A + A;
  let str = "";
  console.log(newstr);
  for (let i = 0; i < newstr.length; i++) {
    console.log("B[i]", B[i]);
    if (newstr[i] == B[str.length]) {
      str += newstr[i];
    } else {
      if (str === B) {
        break;
      } else {
        str = "";
      }
    }
  }
  if (str === B) {
    console.log("true");
  } else {
    console.log("false");
  }
}
CheckStrRotation();

function checkAnagram() {
  let A = "listten";
  let B = "silentt";
  if (A.length !== B.length) {
    return false;
  }
  const CharCount = new Array(26).fill(0);
  for (let char of A) {
    let ss = char.charCodeAt(0) - "a".charCodeAt(0);
    CharCount[ss]++;
  }
  for (let char of B) {
    let index = char.charCodeAt(0) - "a".charCodeAt(0);
    CharCount[index]--;
    if (CharCount[index] < 0) {
      return false;
    }
  }
  return true;
}
let checkAnagramstr = checkAnagram();
console.log(checkAnagramstr);

function ArrangeEle(A) {
  let N = A.length;
  // let pos = [];
  // let neg = [];
  let ans = [];
  let indexP = 0;
  let indexN = 1;
  for (let i = 0; i < N; i++) {
    if (A[i] > 0) {
      ans[indexP] = A[i];
      indexP += 2;
    } else {
      ans[indexN] = A[i];
      indexN += 2;
    }
  }
  console.log(ans);
}
ArrangeEle([1, 2, -1, -2, 3, -2]);

function Parenthises() {
  let A = "(()())(())";
  let N = A.length;
  let str = " ";
  let count = 0;
  for (let i = 0; i < N; i++) {
    if (A[i] === "(") {
      if (count > 0) {
        str += "(";
      }
      count++;
    } else {
      count--;
      if (count > 0) {
        str += ")";
      }
    }
  }
  console.log(str);
}
Parenthises();
function Paranthesis(A) {
  let result = "";
  console.log(A.length);
  let count = 0;
  let totelp = 0;
  let totalR = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] == "(") {
      if (count > 0) {
        result += "(";
        totelp++;
      }
      count++;
      totalR++;
    } else {
      count--;
      if (count > 0) {
        result += ")";
        totelp++;
      }
      totalR++;
    }
  }
  console.log(result, totelp, totalR);
}
Paranthesis("(()())(())");

function SetmatrixZero() {
  A = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];
  let newArri = [];
  let newArrj = [];
  let N = A.length;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < A[i].length; j++) {
      if (A[i][j] === 0) {
        newArri[i] = true;
        newArrj[j] = true;
      }
    }
  }
  for (let i = 0; i < A.length; i++) {
    if (newArri[i]) {
      for (let j = 0; j < A[i].length; j++) {
        A[i][j] = 0;
      }
    }
  }
  console.log(A);
  for (let j = 0; j < A[0].length; j++) {
    if (newArrj[j]) {
      for (let i = 0; i < N; i++) {
        A[i][j] = 0;
      }
    }
  }
  console.log(A);
}
SetmatrixZero();

function LongestKsumPos() {
  let A = [2, 3, 5, 9, 2, 2, 1, 5, 4, 5];
  let n = A.length;
  let t = 19;
  let max = 0;
  let count = 0;
  let finalTotal = 0;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += A[i];
    count += 1;
    if (sum == t) {
      if (count > max) {
        max = count;
        finalTotal = sum;
      }
    } else if (sum > t) {
      sum = A[i];
      count = 1;
    }
  }
  console.log(finalTotal, max);
}
LongestKsumPos();

function MaxsumInSubArray() {
  let A = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  let Maxsumm = 0;
  let sum = 0;
  let start = 0;
  let end = 0;
  // let SubArrStarr = 0;
  for (let i = 0; i < A.length; i++) {
    if (sum === 0) {
      start = i;
    }
    sum += A[i];

    if (sum > Maxsumm) {
      Maxsumm = sum;
      end = i;
    } else if (sum <= 0) {
      sum = 0;
    }
  }
  console.log(start, end, Maxsumm);
}
MaxsumInSubArray();

function longestSubArrWithposneg() {
  let A = [-1, 1, 1];
  let MaxCount = 0;
  let count = 0;
  let maxSum = 0;
  let k = 1;
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    sum += A[i];
    count++;
    if (sum > maxSum) {
      if (count > MaxCount) {
        maxSum = sum;
        MaxCount = count;
      }
    } else if (sum > k) {
      sum = A[i];
      count = 1;
    }
  }
  console.log(maxSum, MaxCount);
}
longestSubArrWithposneg();

function MaxConsecutiveOne() {
  let A = [1, 1, 2, 1, 1, 0, 1, 1, 1, 1];
  let maxCount = 0;
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 1) {
      count += 1;
      if (count > maxCount) {
        maxCount = count;
      }
    } else {
      count = 0;
    }
  }
  console.log(maxCount);
}
MaxConsecutiveOne();

function InfixTopostfix() {}
