// let str = "aanaaa";
// let newstr = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   newstr += str[i];
// }
// if (newstr === str) {
//   console.log("true");
// } else {
//   console.log("false");
// }
// let left = 0;
// let right = str.length - 1;
// let isPalimdrom = true;
// while (left < right) {
//   if (str[left] !== str[right]) {
//     isPalimdrom = false;
//   }
//   left++;
//   right--;
// }
// if (isPalimdrom) {
//   console.log("true");
// } else {
//   console.log("false");
// }

function FindMaxandMin() {
  let Arr = [3, 2, 1, 56, 122, 11];
  let max = Arr[0];
  let min = Arr[0];
  for (let i = 0; i < Arr.length; i++) {
    if (Arr[i] > max) {
      max = Arr[i];
    } else if (Arr[i] < min) {
      min = Arr[i];
    }
  }
  console.log("FindMaxandMin() :  ", max, min);
}
FindMaxandMin();

function ReverseArr() {
  let Arr = [3, 2, 1, 56, 122, 11];
  let N = Arr.length;
  let left = 0;
  let right = N - 1;
  while (left < right) {
    [Arr[left], Arr[right]] = [Arr[right], Arr[left]];
    left++;
    right--;
  }
  console.log("ReverseArr() : ", Arr);
}
ReverseArr();

function RotateArr() {
  let Arr = [1, 2, 3, 4, 5];
  let N = Arr.length;
  let k = 3;
  let start = 0;
  let end = N - 1 - k;
  while (start < end) {
    [Arr[start], Arr[end]] = [Arr[end], Arr[start]];
    start++;
    end--;
  }
  start = 0;
  end = N - 1;
  while (start < end) {
    [Arr[start], Arr[end]] = [Arr[end], Arr[start]];
    start++;
    end--;
  }
  start = 0;
  end = k - 1;
  while (start < end) {
    [Arr[start], Arr[end]] = [Arr[end], Arr[start]];
    start++;
    end--;
  }
  console.log("RotateArr()", Arr);
}
RotateArr();

function findduplicate() {
  let A = [2, 3, 4, 1, 2, 3];
  let N = A.length;
  let frq = {};
  for (let i = 0; i < N; i++) {
    let ele = A[i];
    if (frq[ele]) {
      frq[ele]++;
    } else {
      frq[ele] = 1;
    }
  }
  for (let key in frq) {
    if (frq[key] > 1) {
      console.log(key);
    }
  }
  //   console.log("findduplicate()", frq);
}
findduplicate();

function WavelikeArr() {
  let A = [2, 4, 7, 8, 9, 10];
  let N = A.length;
  for (let i = 0; i < N; i++) {
    if (i % 2 !== 0) {
      let temp = A[i];
      A[i] = A[i - 1];
      A[i - 1] = temp;
    }
  }
  console.log("WavelikeArr()", A);
}
WavelikeArr();

let A = [1, 2, 8, 2, 4, 7, 5, 6];
console.log(
  "Sort Array",
  A.sort((a, b) => b - a)
);

function findPalamdrom() {
  let str = "aanaaa";
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  if (newStr === str) {
    return "ture";
  }
  return "false";
}
const Palamdrom = findPalamdrom();
console.log("Palamdrom", Palamdrom);

// find the factor of the given number
function FindFactor(A) {
  let count = 0;
  for (let i = 0; i * i <= A; i++) {
    if (i * i === A) {
      count += 1;
    } else if (A % i === 0) {
      count += 2;
    }
  }
  console.log("FindFactor", count);
}
FindFactor(10);

//  find the given number is a prime number or not
function FindPrimeNumber(A) {
  let count = 0;
  for (let i = 1; i * i <= A; i++) {
    if (i * i == A) {
      count += 1;
    } else if (A % i === 0) {
      count += 2;
    }
  }
  if (count === 2) {
    return "ture";
  } else {
    return "false";
  }
}
let CheckPrime = FindPrimeNumber(4);
console.log("FindPrimeNumber", CheckPrime);

// check all prime number in  a given number
function CheckAllPrime(A) {
  let primeCount = 0;
  for (let i = 1; i <= A; i++) {
    let count = 0;
    for (let j = 1; j * j <= i; j++) {
      if (j * j == i) {
        count += 1;
      } else if (i % j === 0) {
        count += 2;
      }
    }
    if (count === 2) {
      primeCount += 1;
    }
  }
  console.log("CheckAllPrime", primeCount);
}
CheckAllPrime(10);

// Check weather the given number is perfect number or not

function CheckPerfectNumber(A) {
  let sum = 0;
  // for (let i = 1; i < A; i++) {
  //   if (A % i === 0) {
  //     console.log(i);
  //     sum += i;
  //   }
  // }
  // if (sum === A) {
  //   console.log("CheckPerfectNumber", "ture");
  // } else {
  //   console.log("CheckPerfectNumber", "false");
  // }
  for (let i = 1; i * i <= A; i++) {
    if (i * i === A) {
      sum += i;
    } else if (A % i === 0) {
      sum += i + Math.floor(A / i);
      console.log(sum);
    }
  }
  if (sum - A === A) {
    console.log("CheckPerfectNumber", "ture");
  } else {
    console.log("CheckPerfectNumber", "false");
  }
}
CheckPerfectNumber(6);

function Printalleleofarr() {
  let arr = [1, 2, 3, 4, 5, 6];
  let N = arr.length;
  for (let i in arr) {
    console.log("Printalleleofarr()", arr[i]);
  }
}
Printalleleofarr();

function ReverseArray(A) {
  let N = A.length;
  let left = 0;
  let right = N - 1;
  while (left < right) {
    let temp = A[left];
    A[left] = A[right];
    A[right] = temp;
    // [A[left], A[right]] = [A[right], A[left]];
    left++;
    right--;
  }
  console.log(A);
}
ReverseArray([1, 2, 3, 4, 5]);

// good pair in an  array
function Goodpair(A, B) {
  let n = A.length;
  let f = {};
  let count = 0;
  for (let i = 0; i < n; i++) {
    let diff = B - A[i];
    if (f[diff]) {
      count += 1;
      console.log(diff, A[i]);
    } else {
      f[A[i]] = 1;
    }
  }
  console.log("Goodpair", count);
}
let Good = Goodpair([1, 2, 2, 3], 4);
console.log(Good);

// Reverse the array in a given range
function ReverseArrFromBTOC(A, B, C) {
  let n = A.length;
  if (B > C) {
    [B, C] = [C, B];
  }
  let left = B;
  let right = C;
  while (left < right) {
    [A[B], A[C]] = [A[C], A[B]];
    left++;
    right--;
  }
  console.log(A, B, C);
}
ReverseArrFromBTOC([1, 2, 3, 4, 5, 6], 4, 2);

// Rotate Array
function RotateArrtoRight(arr, B) {
  let n = arr.length;
  for (let i = 0; i < B; i++) {
    let lastItem = arr.pop();
    arr.unshift(lastItem);
  }

  // for (let i = 0; i < B; i++) {
  //   let lastindex = arr[n - 1];
  //   for (let j = n - 1; j >= 0; j--) {
  //     arr[j] = arr[j - 1];
  //   }
  //   arr[0] = lastindex;
  // }

  console.log(arr);
}
RotateArrtoRight([1, 2, 3, 4, 5, 6], 3);
// [4, 5, 6, 1, 2, 3];

// Time taken to make all element equal
function TimeToMakeEleEqual(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  let sec = 0;
  for (let i = 0; i < arr.length; i++) {
    sec += max - arr[i];
  }
  console.log("TimeToMakeEleEqual", sec);
}
TimeToMakeEleEqual([2, 4, 1, 3, 2]);

// number that have atleast one greater element
function findgreatercount(arr) {
  let fq = {};
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let diff = arr[i];
    if (max < diff) {
      max = diff;
    }
    if (fq[diff]) {
      fq[diff] += 1;
    } else {
      fq[diff] = 1;
    }
  }
  console.log(fq);
  delete fq[max];
  let sum = Object.values(fq).reduce((acc, val) => acc + val, 0);
  console.log(sum);
}
findgreatercount([3, 1, 2]);

// var globalvar = "abc";
//  closure funtion example
// function Outerfuntion(outerArg) {
//   let outerFintionvar = "x";
//   function Innerfuntion(innerarg) {
//     let innerfuntionvar = "y";
//     globalvar = innerfuntionvar;
//     console.log(
//       "outerArg = " +
//         outerArg +
//         "\n" +
//         "outerfuntionvar = " +
//         outerFintionvar +
//         "\n" +
//         "innerarg  = " +
//         innerarg +
//         "\n" +
//         "innerfuntionvar = " +
//         innerfuntionvar +
//         "\n" +
//         "globalvar =" +
//         globalvar
//     );
//   }
//   Innerfuntion(5);
// }
// Outerfuntion(6);

// function mul1(x) {
//   return function mul2(y) {
//     return function mul3(z) {
//       return " x * y * z";
//     };
//   };
// }
// let multi = mul1(2)(2)(10);
// console.log(multi);

// console.log(Array.isArray([1, 2, 3, 4]));
// console.log(
//   Object.prototype.toString.call([1, 2, 3, 4, 5]) === "[object Array]"
// );

var z = 1,
  y = (z = typeof y);

console.log(y);

var salary = "1000$";

var salaryfunction = function () {
  console.log("Original salary was " + salary);

  var salary = "5000$";

  console.log("My New Salary " + salary);
};
salaryfunction();

//  method 1 by function based method
function Employee(fname, lname) {
  this.Firstname = fname;
  this.Lastname = lname;
}
var employee1 = new Employee("Jone", "Moto");

var employeeId = "1234abe";
(function () {
  console.log(employeeId);
  var employeeId = "122345";
})();

(function () {
  var objA = {
    foo: "foo",
    bar: "bar",
  };
  var objB = {
    foo: "foo",
    bar: "bar",
  };
  console.log(objA == objB);
});

let Obj1 = {
  name: "hh",
};
let obj2 = Obj1;

console.log(obj2 == Obj1);

(function () {
  var array1 = [];
  var array2 = new Array("100");
  var array3 = new Array([1, 2, 3, 4, 5]);
  console.log(array1);
  console.log(array2);
  console.log(array2.length);
  console.log(array3);
  console.log(array3.length);
})();

// function FlatNextedArray(arr) {
//   let N = arr.length;
//   let result = [];
//   for (let i = 0; i < N; i++) {
//     if (Array.isArray(arr[i])) {
//       result = result.concat(FlatNextedArray(arr[i]));
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// let flat = FlatNextedArray([1, [2, [3, [4, 5]], 6], 7]);
// console.log(flat);

function flatArray(arr) {
  // let newArr = arr.flat(Infinity);
  // console.log(newArr);
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatArray(arr[i]);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
let flat = flatArray([1, [2, [3, [4, 5]], 6], 7]);
console.log("flatArray", flat);

const randomStr = (len) =>
  Math.random()
    .toString(36)
    .substring(2, 2 + len);
console.log(randomStr());

function SequenceOfStr(str) {
  let count = 0;
  let ans = 0;
  for (let i = 0; i < str.length; i++) {
    console.log(i, str[i]);
    if (str[i] === "A") {
      console.log(str[i]);
      count += 1;
      console.log("count", count);
    } else if (str[i] === "G") {
      ans += count;
    }
  }
  return ans;
}
let Aa = "ABCGAG";
let newfn = SequenceOfStr(Aa);
console.log("newfn ", newfn);

const snakeLadder = () => {
  let arr = [];
  let row = 10;
  let col = 10;
  let num = 100;
  for (let i = 1; i <= row; i++) {
    let x = [];
    for (let j = 1; j <= col; j++) {
      x.push(num--);
    }
    if (i % 2 === 0) {
      x.reverse();
      arr.push(x);
    } else {
      arr.push(x);
    }
  }
  console.log("arr", arr);
};
snakeLadder();
