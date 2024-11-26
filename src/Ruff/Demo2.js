// // // let fruits = [[1, 2], [3, 4], 5];
// // // let veg = ["tomato", "potato", "redish"];
// // // let grocery = [...fruits, ...veg];
// // // console.log(grocery);
// // // console.log(String(grocery));

// // // fruits.splice(1, 1, "mango", "pineapple");
// // // console.log(fruits); // ['apple', 'mango', 'pineapple']

// // // let Hemant = { name: "hemant", age: 23 };
// // // let newHemanrt = [1, 2, 3, 4];
// // // console.log("fruits keys", newHemanrt.has(key));

// // // function Num(num) {
// // //   return num;
// // // }
// // // function newfnc(callback, a) {
// // //   return callback * a;
// // // }
// // // console.log(newfnc(Num(2), 4));

// // // state ={
// // //     value:1
// // //    }
// // //    componentDIdMount(){
// // //        console.log("mounted")
// // //        this.setState((prevState)=>{
// // //            return {value:prevState.value+1}
// // //        })
// // //        this.setState((prevState)=>{
// // //            return {value:prevState.value+1}
// // //        })
// // //    }
// // //    render(){
// // //        console.log("Rendered")
// // //        return(
// // //            <div>
// // //                Hi
// // //            </div>
// // //        )
// // //    }

// // let Student = {
// //   firstname: "jonaThan",
// //   lastName: "doe",
// // };
// // delete Student.firstname;
// // console.log(Student.firstname);

// // let num = 3;
// // if (num > 0) {
// //   console.log("Positice Number");
// // } else if (num < 0) {
// //   console.log("negative number");
// // } else {
// //   console.log("Zero");
// // }

// // let isLoggedIn = false;

// // console.log(!isLoggedIn ? "Welcome" : "Please log in.");
// // console.log(num % 2 == 0 ? "evem" : "odd");

// // let passworn = "secret";
// // let userInput;
// // while (userInput !== passworn) {
// //   userInput = "secret";
// // }

// // console.log("Assess granted");

// // let sum = 0;
// // for (let i = 1; i <= 10; i++) {
// //   sum += i;
// // }

// // // let facNum = 4;
// // // for (let i = 1; i <= facNum; i++) {
// // //   let factorial = reduce((a, b) > a * i, 1);
// // //   return factorial;
// // // }

// // // console.log(factorial);

// // let newHemanrt = [1, 2, 3, 4];
// // let keys = newHemanrt.keys();
// // for (let keys of newHemanrt) {
// //   console.log(keys);
// // }

// // function person(name, age) {
// //   this.name = name;
// //   this.age = age;
// // }
// // const props = ["hemant", 26];
// // const jhone = new person(...props);
// // console.log(jhone.name);

// // let a = [{ name: "j" }, 2, 3, 4, 5];
// // let b = a.slice();
// // b[0] = "hemant";
// // b[4] = 6;
// // console.log(a[4]);

// // pinku = "jnjnjncc";
// // console.log(pinku);

// // class Animal {
// //   // parent class
// //   constructor(name) {
// //     this.name = name;
// //   }
// //   makeSound() {
// //     //parent class method
// //     console.log(`${this.name} make a sound`);
// //   }
// // }

// // // child class extending the Animal class
// // class Dog extends Animal {
// //   constructor(name, bread) {
// //     super(name);
// //     this.bread = bread;
// //   }
// //   makeSound() {
// //     console.log(`${this.name}, the ${this.bread}, barks !`);
// //   }
// // }

// // const animal = new Animal("Tommy");
// // animal.makeSound();
// // const dog = new Dog("Rex", "Germal shepherd");
// // dog.makeSound();

// // function Arrsort(arr) {
// //   for (let i = 0; i < arr.length; i++) {
// //     for (let j = i + 1; j < arr.length; j++) {
// //       if (arr[j] < arr[i]) {
// //         let temp = arr[i];
// //         arr[i] = arr[j];
// //         arr[j] = temp;
// //       } else {
// //         temp = arr[i];
// //       }
// //     }
// //   }
// //   return arr;
// // }
// // arr = [1, 4, 5, 2, 1, 4, 5];
// // console.log(Arrsort(arr));

// // function findDOMNode(arr) {
// //   for (let i = 0; i < arr.length; i++) {
// //     console.log(arr.find((arr[i] = arr[i] % 2 == 0)));
// //   }
// // }
// // arr = [1, 4, 5, 2, 1, 4, 5];
// // console.log(findDOMNode(arr));

// // arr = [1, 4, 5, 2, 1, 4, 5];
// // n = arr.find((num) => num % 2 == 0);
// // console.log(n);
// arr = [1, 4, 5, 2, 1, 4, 1];
// (function (arr) {
//   let a = 0;
//   arr.forEach((element) => {
//     a += element + element;
//   });
//   if (a > 1) {
//     console.log("a", a);
//   } else {
//     console.log("error");
//   }
// })(arr);

// // arr1 = [
// //   [1, 3, 4],
// //   [2, 4, 4],
// //   [4, 4, 5],
// // ];

// // let totalNewArr = function (arr1) {
// //   let totalArr = [];
// //   arr1.forEach((num) => {
// //     let total = 0;
// //     num.forEach((sum) => (total += sum));
// //     if (total >= 10) {
// //       totalArr.push(total);
// //     }
// //   });
// //   console.log(totalArr);
// // };
// // totalNewArr(arr1);

// // A = [1, 11, 4, 2, 6, 4, 3];
// // A.sort((a, b) => a - b);
// // console.log(A);

// // function ASort(ar) {
// //   return ar.sort();
// // }
// // A = [1, 11, 4, 2, 6, 4, 3];
// // let B = ASort(A);
// // console.log("function ASort(ar)", B);
// // arr = [1, 2, 3];
// // console.log(1 instanceof arr);

// // let num = 4.7;
// // function RoundValue(num) {
// //   let roundA = Math.round(num);
// //   console.log(roundA);
// // }
// // RoundValue(num);

// // function sumOfNum(num1, num2) {
// //   return num1 + num2;
// // }
// // console.log(sumOfNum(2, 1));

// // function LargeNum(arr) {
// //   return Math.max(arr);
// // }
// // A = [1, 11, 4, 2, 6, 4, 3];
// // console.log(...A);
// // console.log(LargeNum(...A));

// // function UseOfIn(arr) {
// //   for (let num in arr) {
// //     console.log(arr[num]);
// //   }
// // }
// // A = [1, 11, 4, 2, 6, 4, 3];
// // UseOfIn(A);

// // factors
// // function M1FactorCount(A) {
// //   let i = 1;
// //   let count = 0;
// //   while (i <= A) {
// //     if (A % i == 0) {
// //       count += 1;
// //       console.log("question 1 input M1", i);
// //     }
// //     i++;
// //   }
// //   return count;
// // }
// // let NewFncForCountM1 = M1FactorCount(6);
// // console.log("questio 1 M1", NewFncForCountM1);

// function FactorCount(A) {
//   let i = 1;
//   let count = 0;
//   while (i * i <= A) {
//     if (i * i == A) {
//       count += 1;
//     } else if (A % i == 0) {
//       count += 2;
//       console.log("question 1 input", i);
//     }
//     i++;
//   }
//   return count;
// }
// let NewFncForCountM2 = FactorCount(4);
// console.log("questio 1", NewFncForCountM2);

// // console.log(6 % 4);

// // isPrime or not

// function primeNum(A) {
//   let i = 1;
//   let count = 0;
//   while (i * i < A) {
//     if (i * 1 == A) {
//       count += 1;
//     } else if (A % i == 0) {
//       count += 2;
//     }
//     i++;
//   }
//   if (count == 2) {
//     return 1;
//   }
//   return 0;
// }
// console.log("PrimeNumber", primeNum(7));

// // function countOfPrimeInN(N) {
// //   let primeCount = 0;
// //   for (num in N) {
// //     let i = 1;
// //     let count = 0;
// //     while (i * i <= num) {
// //       if (i * i == num) {
// //         count += 1;
// //       } else if (num % i == 0) {
// //         count += 2;
// //       }
// //       i++;
// //     }
// //     return count;
// //   }
// // }
// // console.log("countOfPrimeInN(N)", countOfPrimeInN(19));

// function countOfPrimeInN(N) {
//   let primeCount = 0;
//   for (let j = 1; j <= N; j++) {
//     let i = 1;
//     let count = 0;
//     while (i * i <= j) {
//       if (i * i == j) {
//         count += 1;
//       } else if (j % i == 0) {
//         count += 2;
//       }
//       i++;
//     }
//     if (count == 2) {
//       primeCount += 1;
//     }
//   }
//   return primeCount;
// }
// console.log("countOfPrimeInN(N)", countOfPrimeInN(1));

// function GoodPair(arr, target) {
//   let N = arr.length;
//   let B = target;
//   let count = 0;
//   for (let i = 0; i < N; i++) {
//     // console.log("i for good array", i);

//     for (let j = i + 1; j <= N; j++) {
//       if (arr[i] + arr[j] == B) {
//         count += 1;
//       }
//     }
//   }
//   return count;
// }
// A = [1, 2, 4, 2];
// console.log("Good pairs", GoodPair(A, 4));

// function GoodPairs(A, B) {
//   let f = {};
//   for (let i in A) {
//     let diff = B - A[i];
//     if (f[diff] !== undefined) {
//       return 1;
//     } else {
//       f[A[i]] = true;
//     }
//   }
// }
// A = [1, 2, 4, 2];
// console.log(GoodPairs(A, 4));

// // time 9:12

// function ReverseArrInRange(A, B, C) {
//   if (B > C) {
//     let D = B;
//     B = C;
//     C = D;
//   }
//   if (C >= A.length) {
//     return 0;
//   }
//   while (B < C) {
//     let temp = A[B];
//     A[B] = A[C];
//     A[C] = temp;

//     B++;
//     C--;
//   }
//   return A;
// }
// console.log(ReverseArrInRange([2, 5, 6], 3, 2));
// // end time 9:44

// // time  9:46 new Question

// function RotateArrNtime(A, B) {
//   for (let i = 0; i < B; i++) {
//     let num = A.pop();
//     A.unshift(num);
//   }
//   return A;
// }
// console.log(RotateArrNtime([1, 2, 3, 4], 3));
// // end time =  15 min , 10:01

// //   time 10:03
// function SumOfMaxMinElement(A) {
//   let Max = Math.max(...A);
//   //   console.log(Max);
//   let Min = Math.min(...A);
//   //   console.log(Min);
//   let sum = Max + Min;
//   console.log(sum);
// }
// SumOfMaxMinElement([-2, 1, -4, 5, 3]);

// // end time = 6 min , 10:09

// function SecondLargestNum(A) {
//   let NewArr = [...new Set(A)];
//   NewArr.sort((a, b) => b - a);
//   console.log(NewArr[1]);
//   //   let reverseArr[]
// }
// SecondLargestNum([1, 2, 1, 2, 3, 4, 7, 5]);

// function SecondlargestNo(A) {
//   let largest = -1;
//   let secondLargest = -1;
//   if (A.length < 1) {
//     return -1;
//   }
//   for (let i = 0; i < A.length; i++) {
//     if (A[i] > largest) {
//       secondLargest = largest;
//       largest = A[i];
//     } else if (A[i] > secondLargest && A[i] !== largest) {
//       secondLargest = A[i];
//     }
//   }
//   console.log(secondLargest);
// }
// SecondlargestNo([1, 2, 1, 2, 3, 4, 7, 5]);

// // day 2 time 11:43

// function PrefixSum2DArr(A, B) {
//   let N = A.length;
//   let pf = [];
//   pf.push(A[0]);
//   for (let i = 1; i < A.length; i++) {
//     let sum = 0;
//     sum = pf[i - 1] + A[i];
//     pf.push(sum);
//   }
//   for (let i = 0; i < B.length; i++) {
//     let start = B[i][0];
//     let end = B[i][1];
//     if (start === 0) {
//       console.log(`prefix sum ${B[i][0]} to $ ${B[i][1]}`, pf[end]);
//     } else {
//       console.log(
//         `prefix sum ${B[i][0]} to $ ${B[i][1]}`,
//         pf[end] - pf[start - 1]
//       );
//     }
//   }

//   console.log(pf);
// }
// PrefixSum2DArr(
//   [1, 2, 3, 4, 5],
//   [
//     [0, 3],
//     [1, 2],
//   ]
// );

// function PrefixSum2DArr(A, B) {
//   for (let i = 0; i < B.length; i++) {
//     let sum = 0;
//     let start = B[i][0];
//     let end = B[i][1];

//     for (let j = start; j <= end; j++) {
//       sum += A[j];
//     }

//     console.log(`Sum for range [${start}, ${end}] is: ${sum}`);
//   }
// }

// PrefixSum2DArr(
//   [1, 2, 3, 4, 5],
//   [
//     [0, 3],
//     [1, 2],
//   ]
// );

// //   time 2:45
// function PrefixSum(A) {
//   let pf = [];
//   pf.push(A[0]);
//   let sum = 0;
//   for (let i = 1; i < A.length; i++) {
//     sum = pf[i - 1] + A[i];
//     pf.push(sum);
//   }
//   console.log(pf);
// }

// PrefixSum([1, 2, 3, 4, 5]);

// A = [1, 2, 3, 4, 5];
// console.log(String(A));

// // function Person(firstName, lastName) {
// //   this.firstName = firstName;
// //   this.lastName = lastName;

// //   this.getFullName = function () {
// //     return this.firstName;
// //   };
// // }

// // // function getFullName() {
// // //   return this.firstName;
// // // }
// // // Adding a method to the prototype of the constructor function
// // // Person.prototype.getFullName = function() {
// // //   return this.firstName + " " + this.lastName;
// // // };

// // // Create new instances of Person
// // const person1 = new Person("John", "Doe");
// // const person2 = new Person("Jane", "Doe");

// // // Accessing the method from the prototype
// // console.log(person1.getFullName()); // Output: John Doe
// // // console.log(person2.getFullName()); // Output: Jane Doe

// class Person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   // Method inside the class
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// // Creating an instance
// const person2 = new Person("Jane", "Doe", 25);
// console.log(person2.getFullName()); // { firstName: 'Jane', lastName: 'Doe', age: 25 }

// //  time 10:56

// // function FindSmallestSubArray(arr) {
// //   let max = -1
// //   let min =  -1
// //   for(let i = 0 ;)
// // }
// // A = [1, 2, 9, 1, 9];
// // FindSmallestSubArray(A);

// function IsAnaGram(A, B) {
//   if (A.length !== B.length) {
//     return -1;
//   }
//   let fq = {};
//   for (let i = 0; i < A.length; i++) {
//     let item = A[i];
//     if (fq[item]) {
//       fq[item]++;
//     } else {
//       fq[item] = 1;
//     }
//   }
//   for (let i = 0; i < B.length; i++) {
//     let item = B[i];
//     if (!fq[item]) {
//       console.log(false);
//     } else {
//       fq[item]--;
//     }
//   }
//   for (let key in fq) {
//     console.log(fq[key]);
//   }
// }
// IsAnaGram("silent", "listen");

// function IsStringPalendrom(Arr) {
//   let N = Arr.length;
//   let newStr = "";
//   for (let i = N - 1; i >= 0; i--) {
//     if (Arr[i] >= "a" && Arr[i] <= "z") newStr += Arr[i];
//   }
//   console.log(newStr);
//   if (Arr === newStr) {
//     return true;
//   }
//   return false;
// }
// let StrFn = IsStringPalendrom("aanaa");
// console.log(StrFn);

// function IsAnagram(A, B) {
//   let fqChar = {};
//   if (A.length !== B.length) {
//     return false;
//   }
//   for (let i = 0; i < A.length; i++) {
//     let item = A[i];
//     if (fqChar[item]) {
//       fqChar[item]++;
//     } else {
//       fqChar[item] = 1;
//     }
//   }
//   for (let i = 0; i < B.length; i++) {
//     let item = B[i];
//     if (fqChar[item]) {
//       fqChar[item]--;
//     } else {
//       return false;
//     }
//   }
//   for (let key in fqChar) {
//     if (fqChar[key] !== 0) {
//       return false;
//     }
//     return true;
//   }
// }
// let str1 = "hello";
// let str2 = "helle";
// let NewIsAnaFn = IsAnagram(str1, str2);
// console.log("gg", NewIsAnaFn);

// // function smallestSubarray(){
// //   for(let i = 0; i < arr.length; i++){
// //     for(let j = 0 ; j< arr.length)
// //   }
// // }

// function SequenceOfStr(str) {
//   let count = 0;
//   let ans = 0;
//   for (let i = 0; i < str.length; i++) {
//     console.log(i, str[i]);
//     if (str[i] === "A") {
//       console.log(str[i]);
//       count += 1;
//       console.log("count", count);
//     } else if (str[i] === "G") {
//       ans += count;
//     }
//   }
//   return ans;
// }
// A = "ABCAGG";
// let newfn = SequenceOfStr(A);
// console.log("newfn ", newfn);

// function OtherMethodToFIndCount(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "A") {
//       for (let j = i + 1; j < str.length; j++) {
//         if (str[j] === "G") {
//           count += 1;
//         }
//       }
//     }
//   }
//   return count;
// }
// let newFn = OtherMethodToFIndCount("ABCGAG");
// console.log(newFn);

// function ReturnSubArr(arr, A, B) {
//   let start = A;
//   let end = B;
//   let subArr = [];
//   for (let i = start; i <= end; i++) {
//     subArr += arr[i];
//   }
//   return subArr;
// }

// let newSubarr = ReturnSubArr([1, 2, 3, 4], 1, 3);
// console.log(newSubarr);

// function RetrunSubArr(arr, A, B) {
//   let NewAee = arr.slice(A, B + 1);
//   console.log("NewAee", NewAee);
// }
// RetrunSubArr([1, 2, 3, 4], 1, 3);

// function subArr(A) {
//   let newSubArr = [];

//   for (let i = 0; i < A.length; i++) {
//     let sum = 0;
//     let y = [];

//     for (let j = i; j < A.length; j++) {
//       // console.log("j and i ", j, A[j]);
//       sum += A[j];
//       console.log("sum:", sum);
//       y.push(A[j]);
//     }
//     newSubArr.push(y);
//     // console.log(sum);
//   }
//   console.log(newSubArr);
// }
// subArr([1, 2, 3, 4]);

// //  sub Array start
// function SubarayFromArray(arr) {
//   let x = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       let y = [];
//       for (let k = i; k <= j; k++) {
//         y.push(arr[k]);
//       }
//       x.push(y);
//     }
//   }
//   console.log(x);
// }
// SubarayFromArray([1, 2, 3]);

// function SubarayFromArray1(arr) {
//   let x = [];
//   let sumArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let y = [];
//     sum = 0;
//     for (let j = i; j < arr.length; j++) {
//       sum += arr[j];
//       y.push(arr[j]);
//       x.push([...y]);
//       sumArr.push([sum]);
//     }
//   }
//   console.log("x array", x, "sumArr", sumArr);
// }
// SubarayFromArray1([1, 2, 3]);

// // subArray end

// function profit(arr) {
//   let maxpro = -1;
//   let buyprice = arr[0];
//   let day = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > maxpro) {
//       maxpro = arr[i];
//       day = i;
//     }
//   }
//   console.log(maxpro - buyprice);
// }
// profit([1, 4, 5, 2, 4]);

// //  remove element from subarray and check max possible sum

// function maxPossibleSubArray(A, B) {
//   curSum = 0;

//   for (let i = 0; i <= B; i++) {
//     curSum += A[i];
//   }
//   // console.log(curSum);
//   if (A.length < B) {
//     return curSum;
//   }
//   let maxSum = 0;
//   for (let j = 0; j < B; j++) {
//     // console.log("helllo 1", B - 1 - j, A.length - 1 - j);
//     curSum += A[B - 1 - j] - A[A.length - 1 - j];
//     if (curSum > maxSum) {
//       maxSum = curSum;
//     }
//   }
//   console.log(maxSum);
//   // let start = B - 1;
//   // let end = A.length - 1;
//   // while (start >= 0) {
//   //   console.log("helllo 2", start, end);
//   //   curSum += A[start] - A[end];

//   //   // "for  start 2  (3), end 4 (2)" = 1  6 + 1 = 7
//   //   // "for  start 1  (-2), end 3 (1)" =  7 + -2 - 1  = -3 4
//   //   // "for  start 0  (5), end 2 (3)" = 4 + 5 -3 =

//   //   if (curSum > maxSum) {
//   //     maxSum = curSum;
//   //   }
//   //   start--;
//   //   end--;
//   // }
//   // console.log(maxSum);
// }

// maxPossibleSubArray([5, -2, 3, 1, 2], 3);

// function SrtingConversion(S) {
//   let newStr = "";
//   for (let i = 0; i < S.length; i++) {
//     if (S[i] >= "a" && S[i] <= "z") {
//       let lowerStr = S[i];
//       newStr += String.fromCharCode(lowerStr.charCodeAt(0) - 32);
//     } else if (S[i] >= "A" && S[i] <= "Z") {
//       let lowerStr = S[i];
//       newStr += String.fromCharCode(lowerStr.charCodeAt(0) + 32);
//     }
//   }
//   console.log(newStr);
// }
// SrtingConversion("HeLlo");
// // let uppercaseChar = "B";
// // let lowercaseChar = String.fromCharCode(uppercaseChar.charCodeAt(0) + 32);
// // console.log(lowercaseChar); // Output: 'a'

// function reverseString(S) {
//   let X = "";
//   for (let i = S.length - 1; i >= 0; i--) {
//     console.log("i", i, "S[i]", S[i]);
//     X += S[i];
//   }
//   console.log(X);
// }
// reverseString("HeLlo");

// // function palemdromfromStr(A){
// //   let N =  A.length
// //   let max =
// //   for(let  i = 0 ; i < N ; i ++){

// //     for(let j  = N-1 ; j>=0 ; j--){
// //       if(A[i]=== A[j]){

// //       }
// //     }
// //   }
// // }
// // palemdromfromStr("aaaanaa")

// function ReplaceChar(A) {
//   let newSrt = A + A;
//   console.log(newSrt);
//   str = "";
//   for (let i = 0; i < newSrt.length; i++) {
//     if (newSrt[i] >= "A" && newSrt[i] <= "Z") {
//       continue;
//     } else if (
//       newSrt[i] === "a" ||
//       newSrt[i] === "e" ||
//       newSrt[i] === "i" ||
//       newSrt[i] === "o" ||
//       newSrt[i] === "u"
//     ) {
//       str += "#";
//     } else {
//       str += newSrt[i];
//     }
//   }
//   console.log(str);
// }

// ReplaceChar("aeiOUz");

// function AllCharacterAreAlphaNumerical(A) {
//   let charA = 0;
//   let charB = 0;
//   let charC = 0;
//   for (let i = 0; i < A.length; i++) {
//     charCode = A[i].charCodeAt(0);
//     // console
//     //   .log
//     // `Character: ${String.fromCharCode(charCode)}, Code: ${charCode}`
//     // ();
//     if (A[i].charCodeAt(0) >= 65 && A[i].charCodeAt(0) <= 90) {
//       charA = 1;
//     } else if (A[i].charCodeAt(0) >= 97 && A[i].charCodeAt(0) <= 122) {
//       charB = 1;
//     } else if (charCode >= 48 && charCode <= 57) {
//       charC = 1;
//     } else {
//       return 0;
//     }
//   }
//   if (charA == 1 && charB == 1 && charC == 1) {
//     return 1;
//   } else {
//     return 0;
//   }
// }
// AA = [
//   "S",
//   "c",
//   "a",
//   "l",
//   "e",
//   "r",
//   "A",
//   "c",
//   "a",
//   "d",
//   "e",
//   "m",
//   "y",
//   "2",
//   "1&",
//   "2",
//   "0",
// ];
// let NewFnForChar = AllCharacterAreAlphaNumerical(AA);
// console.log(NewFnForChar);

// function largestString() {
//   str1 = "";
//   for (let i = 0; i < A.length; i++) {
//     for (let j = 0; j < A[i].length; i++) {}
//   }
// }

// function findString(S) {
//   count = 0;
//   for (let i = 0; i < S.length; i++) {
//     if (S[i] == "o" && i - 1 >= 0 && i + 1 < S.length) {
//       if (S[i - 1] == "b" && S[i + 1] == "b") {
//         count += 1;
//       }
//     }
//   }
//   console.log(count);
// }
// findString("abobobc");

// function AmazingSubScrint(S) {
//   let count = 0;
//   let V = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
//   for (let i = 0; i < S.length; i++) {
//     if (V.includes(S[i])) {
//       for (let j = i; j < S.length; j++) {
//         count += 1;
//       }
//     }
//   }
//   console.log("count of string start with Vowel", count);
// }
// AmazingSubScrint("ABeD");

// // V = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
// // if (i in V) {
// //   console.log(i);
// // }

// function longestString(str) {
//   let testStr1 = str[0];
//   for (let i = 1; i < str.length; i++) {
//     let tempStr = "";
//     for (let j = 0; j < str[i].length; j++) {
//       if (testStr1[j] === str[i][j]) {
//         tempStr += str[i][j];
//       } else {
//         break;
//       }
//     }
//     testStr1 = tempStr;
//     if (testStr1 === "") {
//       break;
//     }
//   }
//   console.log(testStr1);
// }
// longestString(["abcdefgh", "aefghijk", "abcefgh"]);

// console.log("ab" === "ab");

// //  revision

// // Question 1 find the factor  time start = 12:38 end 12:43

// function FindFactor(A) {
//   let count = 0;
//   for (let i = 1; i * i <= A; i++) {
//     if (A == i * i) {
//       count += 1;
//     } else if (A % i == 0) {
//       count += 2;
//     }
//   }
//   return count;
// }
// let Factor = FindFactor(11);

// console.log(Factor);

// // Question 2 prime number from a given Number  time start = 12:44 end 12:50

// function PrimeNum(A) {
//   if (A == 2) {
//     return true;
//   }
//   count = 0;
//   for (let i = 2; i <= A; i++) {
//     if (A % i == 0) {
//       count += 2;
//     }
//   }
//   if (count === 2) {
//     return true;
//   }
//   return false;
// }
// let prime = PrimeNum(11);
// console.log(prime);

// // Question 3 Find the number of times below code runs where N is a perfect square (time start = 12:50 end 12:51)

// //  ------------for i -> 1 to N

// //  ------------if(i * i == N)

// // -------------return i

// // Question 4 The sum of n natural numbers is : n*(n+1)/2 (time start = 12:51 end 12:52)

// // Question 5 No. of iteration (time start = 12:53 end 12:54)

// // Question 6 No. of iteration if i = 0 and length   i < n (time start = 12:53 end 12:54)

// // Question 8 count of  prime NUmber in that number from A  given Number   i < n (time start = 1:05 end 1:14)

// function CountPrime(A) {
//   let PrimeCount = 0;
//   for (let i = 1; i <= A; i++) {
//     let count = 0;
//     for (let j = 0; j * j <= i; j++) {
//       if (i == j * j) {
//         count += 1;
//       } else if (i % j == 0) {
//         count += 2;
//       }
//     }
//     if (count === 2) {
//       PrimeCount += 1;
//     }
//   }
//   return PrimeCount;
// }
// let primeCount = CountPrime(0);
// console.log(primeCount);

// // Question 9  Find the Given Number is a Perfect Number or Not (time start = 1:16 end 1:19)

// function PerfectNum(A) {
//   let sum = 0;
//   for (let i = 1; i < A; i++) {
//     if (A % i == 0) {
//       sum += i;
//     }
//   }
//   if (sum === A) {
//     return 1;
//   }
//   return -1;
// }
// let perfectNum = PerfectNum(6);
// console.log(perfectNum);

// // Question 11  good pair (time start = 1:41 end 1:19)
// function Goodpair(A, B) {
//   for (let i = 0; i < A.length; i++) {
//     for (let j = i + 1; j < A.length; j++) {
//       if (A[i] + A[j] == B) {
//         return 1;
//       }
//     }
//   }
//   return -1;
// }
// let GoodPair = Goodpair([1, 2, 3, 4], 7);
// console.log(GoodPair);

// function GoodpainInArr(A, B) {
//   let fq = {};
//   for (let i = 0; i < A.length; i++) {
//     let deff = B - A[i]; //  7 - 1 = 6  , 7- 2 = 5 , 7 - 3 = 4 , 7  - 4 = 3
//     if (fq[deff]) {
//       return 1;
//     } else {
//       fq[A[i]] = true;
//     }
//   }
// }

// // Question 12   reverse The array from B to C (time start = 2:04 end 2:12)

// function reversefromBtoC(A, B, C) {
//   if (B > C) {
//     let D = B;
//     B = C;
//     C = D;
//   }
//   while (B < C) {
//     let temp = A[B];
//     A[B] = A[C];
//     A[C] = temp;
//     B += 1;
//     C -= 1;
//   }
//   return A;
// }

// let reverseArrrFromBtoC = reversefromBtoC([1, 2, 3, 4], 0, 2);
// console.log(reverseArrrFromBtoC);

// // Question 12  rotate Array B time (time start = 2:12 end 2:12)

// function RotateArrBTime(A, B) {
//   let N = A.length - 1;
//   for (let i = 0; i < B; i++) {
//     let temp = A[i];
//     A[i] = A[N];
//   }
// }

// //   Question 13 Find the sum of Max and Min  (time =  start 2:24 end  2 :30)

// function MaxMinSum(A) {
//   let max = 0;
//   let min = 0;
//   for (let i = 0; i < A.length; i++) {
//     if (A[i] > max) {
//       min = max;
//       max = A[i];
//     } else if (A[i] < min) {
//       min = A[i];
//       console.log("min", min, "at ", i);
//     }
//   }
//   return max + min;
// }
// let maxminsum = MaxMinSum([1, 3, 4, 1]);
// console.log(maxminsum);

// //   Question 14 second largest element  (time =  start 2:30 end  2 :39)
// function SeondlargestElement(A) {
//   let max = -1;
//   let min = -1;
//   for (let i = 0; i < A.length; i++) {
//     if (A[i] > max) {
//       min = max;
//       max = A[i];
//     } else if (min < A[i] && A[i] != max) {
//       min = A[i];
//     }
//   }
//   return min;
// }
// let Seondlargest = SeondlargestElement([2, 1, 2]);
// console.log(Seondlargest);

// //   Question 15  No of occurance of B in A  (time =  start 2:40 end  2 :39)

// function CountOfB(A, B) {
//   let count = 0;
//   for (let i = 0; i < A.length; i++) {
//     if (A[i] === B) {
//       count += 1;
//     }
//   }
//   return count;
// }
// let countOfB = CountOfB([1, 2, 2], 2);
// console.log(countOfB);

// //   Question 16  time Requed to make all element equal like max in the array (time =  start 2:40 end  2 :39)

// function timerequied(A) {
//   let max = 0;
//   for (let i in A) {
//     if (A[i] > max) {
//       max = A[i];
//     }
//   }
//   let minTime = 0;
//   for (let i = 0; i < A.length; i++) {
//     minTime += max - A[i];
//   }
//   return minTime;
// }
// let Mintime = timerequied([2, 4, 1, 3, 2]);
// console.log(Mintime);

// //   Question 17  Atleast 1 element in greater (time =  start 2:40 end  2 :39)
// function AtleastOneGrater(A) {
//   let num = 0;
//   let max = [];
//   for (let i = 0; i < A.length; i++) {
//     for (let j = i + 1; j < A.length; j++) {
//       if (A[i] < A[j]) {
//         let temp = A[i];
//         A[i] = A[j];
//         A[j] = temp;
//       }
//     }
//   }

//   let f = {};
//   for (let k = 1; k < A.length; k++) {
//     if (A[k] !== A[0]) {
//       let item = A[k];
//       if (f[item]) {
//         f[item] += 1;
//       } else {
//         f[A[k]] = 1;
//       }
//     }
//   }
//   let sum = 0;
//   for (let key in f) {
//     sum += f[key];
//   }
//   return sum;
// }
// let gratercoutOfelelmt = AtleastOneGrater([5, 2, 3]);
// console.log(gratercoutOfelelmt);

// function AtleastOneGrater(A) {
//   let num = 0;
//   let max = [];
//   for (let i = 0; i < A.length; i++) {
//     for (let j = i + 1; j < A.length; j++) {
//       if (A[i] < A[j]) {
//         let temp = A[i];
//         A[i] = A[j];
//         A[j] = temp;
//       }
//     }
//   }

//   let f = {};
//   let Max = A[0];
//   let count = 0;
//   for (let k = 1; k < A.length; k++) {
//     if (A[k] < Max) {
//       count += 1;
//     }
//   }
//   return count;
// }
// let gratercoutOfelelmt11 = AtleastOneGrater([5, 2, 2, 3]);
// console.log("count", gratercoutOfelelmt11);

// // DSA Questions. [ lists, strings, and some logical-based questions.]
// // Classes [ Basics ] JS-
// // Output-based questions.
// // Basic conceptual questions of React library and code-based questions.

// // Question 18 find the maxSubStr()

// function MaxSubStringSUm(A) {
//   //
//   let maxSum = -1;
//   let x = []; //
//   for (let i = 0; i < A.length; i++) {
//     //
//     let y = []; //
//     let SubStringSum = 0;
//     for (let j = i; j < A.length; j++) {
//       SubStringSum += A[j];
//       y.push(A[j]);
//       // maxSum.push(SubStringSum);
//       if (SubStringSum > maxSum) {
//         maxSum = SubStringSum;
//         x = y;
//       }
//     }
//   }
//   console.log("maxSum", maxSum, x);
// }
// MaxSubStringSUm([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
// // function SubarayFromArray1(arr) {
// //   let x = [];
// //   let sumArr = [];
// //   for (let i = 0; i < arr.length; i++) {
// //     let y = [];
// //     sum = 0;
// //     for (let j = i; j < arr.length; j++) {
// //       sum += arr[j];
// //       y.push(arr[j]);
// //       x.push([...y]);
// //       sumArr.push([sum]);
// //     }
// //   }
// //   console.log("x array", x, "sumArr", sumArr);
// // }
// // SubarayFromArray1([1, 2, 3]);

// function majorityofElement(A) {
//   let f = {};
//   let num = 0;
//   for (let i = 0; i < A.length; i++) {
//     let item = A[i];
//     if (f[item]) {
//       f[item] += 1;
//     } else {
//       f[A[i]] = 1;
//     }
//   }
//   console.log(f);
//   let majority = 0;
//   for (let key in f) {
//     if (f[key] > majority) {
//       majority = key;
//     }
//   }
//   console.log(majority);
// }

// majorityofElement([1, 2, 2, 3, 3, 3, 4]);

// function IndiceOf2Num(A, T) {
//   let fq = {};
//   for (let i = 0; i < A.length; i++) {
//     let temp = T - A[i];
//     // console.log(fq[temp]);
//     if (fq[A[i]] !== undefined) {
//       console.log(fq[A[i]]);
//       return [fq[A[i]], i];
//     }
//     fq[temp] = i;
//   }
// }
// let Indeoce = IndiceOf2Num([2, 7, 4, 3], 9);
// console.log(Indeoce);

// function Sumof3num(A, T) {
//   for (let i = 0; i < A.length; i++) {
//     for (let j = i + 1; j < A.length; j++) {
//       for (let k = j + 1; k < A.length; k++) {
//         if (A[i] + A[j] + A[k] === T) {
//           return [i, j, k];
//         }
//       }
//     }
//   }
// }
// let SumOf3 = Sumof3num([2, 5, 4, 1, 2], 9);
// console.log(SumOf3);

// function ZeroToend(A) {
//   let index = 0;
//   for (let i = 0; i < A.length; i++) {
//     if (A[i] !== 0) {
//       let temp = A[i];
//       A[i] = A[index];
//       A[index] = temp;
//       index++;
//     }
//   }
//   console.log(A);
// }

// ZeroToend([1, 0, 6, 9, 0, 7]);

// function reverseword(S) {
//   let NewStr = [];
//   let temp = "";
//   for (let i = 0; i < S.length; i++) {
//     if (S[i] !== " ") {
//       temp += S[i];
//     } else if (temp.length > 0) {
//       NewStr.push(temp);
//       temp = "";
//     }
//   }
//   if (temp.length > 0) {
//     NewStr.push(temp);
//   }
//   let newAr = [];
//   for (let j = NewStr.length - 1; j >= 0; j--) {
//     newAr.push(NewStr[j]);
//   }
//   console.log(newAr);
// }
// reverseword("Hello Hemant");

// function LongestPalebdtrom(A) {
//   let newStr = "";
//   let N = A.length;
//   for (let i = 0; i < A.length; i++) {
//     let left = i;
//     let right = i;
//     if (i !== 0 && i > N) {
//       while (left >= 0 && right < N) {
//         if (A[left - 1] && A[rigth + 1]) {
//           newStr = A[left - 1] + A[i] + A[right + 1];
//         }
//       }
//     }
//   }
//   return newStr;
// }
// let longestStr = LongestPalebdtrom("aaaabaaa");
// console.log(longestStr);

// // function snakeLader(N) {
// //   let a = [];
// //   let index = 0;
// //   for (let i = N; i >= 1; i -= 10) {
// //     let row = [];
// //     for (let j = 0; j < 10; j++) {
// //       if (index % 2 !== 0) {
// //         row.push(i - j);
// //         index++;
// //       } else {
// //         row.push(i - j).reverse();
// //         index++;
// //       }
// //     }
// //     a.push(row);
// //   }
// //   console.log(a);
// // }
// // snakeLader(100);

// function Patten1(A) {
//   for (let i = 0; i < A; i++) {
//     let str = "";
//     for (let j = 0; j <= i; j++) {
//       str += "* ";
//     }
//     console.log(str);
//   }
//   console.log("\n");
// }
// Patten1(5);
// function Patten1_1(A) {
//   let str = "";
//   for (let i = 0; i < A; i++) {
//     console.log("str", (str += "* "));
//   }
// }
// Patten1_1(5);

// function Patten2(A) {
//   for (let i = 0; i < A; i++) {
//     let str = "";
//     for (let j = 0; j < i; j++) {
//       str += " ";
//     }
//     for (let k = A; k > i; k--) str += "* ";
//     console.log(str);
//   }
// }
// Patten2(5);

// // function Patten2_1(A) {
// //   let str = "";
// //   for (let i = 0; i < A; i++) {
// //     str += "*";
// //     let space = "";
// //     for (let j = A - i - 1; j > 0; j--) {
// //       // console.log("j", j);
// //       space += "s";
// //     }
// //     console.log(space + str);
// //   }
// // }
// // Patten2_1(5);

// // console.log(4 * "*");

// function Patter2_2(A) {
//   // let str = "";
//   // let num = 1;
//   for (let i = 0; i < A; i++) {
//     let str = "";
//     let num = 1;
//     for (let j = A - 1 - i; j > 0; j--) {
//       str += " ";
//     }
//     for (let K = 0; K <= i; K++) {
//       if (K == 0 || K == i) {
//         str += " " + num;
//         num++;
//       } else {
//         str += " ";
//       }
//     }
//     console.log("new start", str);
//   }
//   for (let i = 0; i < A; i++) {
//     let str = "";
//     let num = 1;
//     if (i % 2 !== 0) {
//       for (let j = A - 1 - i; j > 0; j--) {
//         if (j == A - 1 - i || j == 1) {
//           str += num + " ";
//           num++;
//         } else {
//           str += " ";
//         }
//       }
//       for (let K = 0; K <= i; K++) {
//         str += " ";
//       }
//       if (i % 2 !== 0) {
//         str = str.split(" ").reverse().join(" ");
//       }

//       console.log("new start", str);
//     } else {
//       for (let K = 0; K <= i; K++) {
//         str += " ";
//       }
//       for (let j = A - 1 - i; j > 0; j--) {
//         if (j == A - 1 - i || j == 1) {
//           str += num + " ";
//           num++;
//         } else {
//           str += " ";
//         }
//       }
//       if (i % 2 !== 0) {
//         str = str.split(" ").reverse().join(" ");
//       }

//       console.log("new start", str);
//     }
//   }
// }
// Patter2_2(5);

// function BlankTriangle(A) {
//   for (let i = 0; i < A; i++) {
//     let srt = "";
//     for (let j = A - 1 - i; j > 0; j--) {
//       // console.log("j", j);
//       srt += " ";
//     }
//     for (let k = 0; k <= i; k++) {
//       if (k == 0 || k == i) {
//         // console.log("k", k);
//         srt += " *";
//       } else {
//         srt += "  ";
//       }
//       // if (k != i) {
//       //   srt += " ";
//       // }
//     }
//     console.log(srt);
//   }
//   // part 2
//   // for (let i = 0; i < A; i++) {
//   //   let srt = "";
//   //   for (let k = 0; k <= i; k++) {
//   //     // console.log("k", k);
//   //     srt += " ";
//   //   }
//   //   for (let j = A - 1 - i; j >= 0; j--) {
//   //     if (j == A - 1 - i || j == 0 || i == A - 1) {
//   //       // console.log("k", k);
//   //       srt += "* ";
//   //     } else {
//   //       srt += "  ";
//   //     }
//   //   }

//   //   console.log(srt);
//   // }

//   for (let i = 0; i < A; i++) {
//     let srt = "";
//     for (let k = 0; k <= i; k++) {
//       srt += " ";
//     }
//     for (let j = A - 1 - i; j >= 1; j--) {
//       if (j == A - 1 - i || j === 1 || i == A - 1) {
//         // console.log("j", j, "i", i);
//         srt += " *";
//       } else {
//         srt += "  ";
//       }
//     }
//     console.log(srt);
//   }
// }
// BlankTriangle(5);
// // function Patten2(A) {
// //   for (let i = 0; i < A; i++) {
// //     let str = "";
// //     for (let j = 0; j < i; j++) {
// //       str += " ";
// //     }
// //     for (let k = A; k > i; k--) str += "* ";
// //     console.log(str);
// //   }
// // }

// // selection and shorting

// function sortArr(A) {
//   for (let i = 0; i < A.length; i++) {
//     let min = i;
//     for (let j = i + 1; j < A.length; j++)
//       if (A[i] > A[j]) {
//         min = j;
//       }
//     let temp = A[i];
//     A[i] = A[min];
//     A[min] = temp;
//   }
//   console.log(A);
// }
// sortArr([13, 46, 24, 52, 20, 9]);

// function RemoveDuplicate(A) {
//   let newArr = [];
//   for (let i = 0; i < A.length; i++) {
//     let temp = 0;
//     for (let j = 1 + i; j < A.length; j++) {
//       if (A[i] > A[j]) {
//         temp = A[i];
//         A[i] = A[j];
//         A[j] = temp;
//       }
//     }
//     if (!newArr.includes(A[i])) {
//       newArr.push(A[i]);
//     }
//   }
//   console.log(newArr);
// }
// RemoveDuplicate([1, 1, 2, 3, 4, 5, 5, 6]);

// //  time 7:54
// function LargestElementInArray(Arr) {
//   let max = 0;
//   for (let i = 0; i < Arr.length; i++) {
//     if (Arr[i] > max) {
//       max = Arr[i];
//     }
//   }
//   console.log(max);
// }
// LargestElementInArray([1, 2, 3, 5, 4]);

// // time 7:55
// function SecondLargestElementInArray(Arr) {
//   let max = 0;
//   let SecondMax = 0;
//   for (let i = 0; i < Arr.length; i++) {
//     if (Arr[i] > max) {
//       SecondMax = max;
//       max = Arr[i];
//     } else if (Arr[i] > SecondMax && Arr[i] !== max) {
//       SecondMax = Arr[i];
//     }
//   }
//   console.log(SecondMax);
// }
// SecondLargestElementInArray([1, 2, 3, 5, 4]);

// // time 8:00

// function ArrIsSortedOrNot(Arr) {
//   for (let i = 0; i < Arr.length - 1; i++) {
//     console.log("Arr[i]", Arr[i], "Arr[i+1]", Arr[i + 1]);
//     if (Arr[i] > Arr[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// }
// let ArrisSort = ArrIsSortedOrNot([1, 2, 3, 4, 1]);

// console.log(ArrisSort);

// function removeDublicate(A) {
//   let newArr = [];
//   for (let i = 0; i < A.length; i++) {
//     if (!newArr.includes(A[i])) {
//       newArr.push(A[i]);
//     }
//   }
//   console.log(newArr);
// }
// removeDublicate([1, 1, 2, 3, 3, 4, 2, 2]);

// function ZeroAtend(A) {
//   for (let i = 0; i < A.length; i++) {
//     for (let j = i + 1; j < A.length; j++) {
//       if (A[i] === 0) {
//         let temp = A[i];
//         A[i] = A[j];
//         A[j] = temp;
//       }
//     }
//   }
//   console.log(A);
// }
// ZeroAtend([0, 1, 2, 0, 2, 0, 4, 0]);

// let num = 3;
// A = [1, 2, 3, 4, 5];
// for (let i = 0; i < A.length; i++) {
//   if (num == A[i]) {
//     console.log(i);
//   }
//   console.log(-1);
// }

// function UnionOfTwoArr(Arr1, Arr2) {
//   let N = 0;
//   let newArr = [...Arr1, ...Arr2];
//   let finalArr = [];
//   for (let i = 0; i < newArr.length; i++) {
//     if (!finalArr.includes(newArr[i])) {
//       finalArr.push(newArr[i]);
//     }
//   }
//   for (let k = 0; k < finalArr.length; k++) {
//     for (let j = k + 1; j < finalArr.length; j++) {
//       if (finalArr[k] > finalArr[j]) {
//         let temp = finalArr[k];
//         finalArr[k] = finalArr[j];
//         finalArr[j] = temp;
//       }
//     }
//   }
//   console.log("final Aerer", finalArr);
// }
// arr1 = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr2 = [1, 2, 3, 4, 4, 5, 11, 12];

// UnionOfTwoArr(arr1, arr2);

// // function findUnion(A, B) {
// //   let newArr = new Map();
// //   let union = [];
// //   for (let i = 0; i < A.length; i++) {
// //     newArr.set(num, (newArr.get(num) || 0) + 1);
// //   }
// //   for (let i = 0; i < B.length; i++) {
// //     newArr.set(num, (newArr.get(num) || 0) + 1);
// //   }
// //   for (let [num, count] of newArr) {
// //     union.push(num);
// //   }
// //   console.log(union);
// // }
// // arr1 = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// // arr2 = [1, 2, 3, 4, 4, 5, 11, 12];
// // findUnion(arr1, arr2);

// function findthemisingNum(N, A) {
//   let sum = 0;
//   let sumOfN = N * ((N + 1) / 2);
//   for (let i = 0; i < A.length; i++) {
//     sum += A[i];
//   }
//   console.log(sum, sumOfN, " The missing Number is ", sumOfN - sum);
// }
// findthemisingNum(3, [1, 3]);

// function MaxConsicutive(A) {
//   let max = 0;
//   for (let i = 0; i < A.length; i++) {
//     let sum = A[i];
//     for (let j = i + 1; j < A.length; j++) {
//       if (A[i] != A[j]) {
//         break;
//       } else {
//         sum += A[j];
//       }
//     }
//     if (max < sum) {
//       max = sum;
//     }
//   }
//   console.log(max);
// }
// MaxConsicutive([1, 1, 0, 1, 2, 1]);

// function NumverAppear(A) {
//   let num = {};
//   for (let i = 0; i < A.length; i++) {
//     let temp = A[i];
//     if (num[temp] === undefined) {
//       num[A[i]] = 1;
//     } else {
//       num[temp]++;
//     }
//   }
//   for (let key in num) {
//     if (num[key] == 1) {
//       console.log(key);
//     }
//   }
//   console.log(num);
// }
// NumverAppear([2, 2, 1]);

// function LongestSubString(A) {
//   let y = [];
//   let max = 5;
//   let maxLegth = 0;
//   for (let i = 0; i < A.length; i++) {
//     let x = [];
//     let sum = 0;
//     for (let j = i; j < A.length; j++) {
//       x.push(A[j]);
//       sum += A[j];
//       if (max == sum && x.length > maxLegth) {
//         y = [...x];
//         maxLegth = x.length;
//       }
//       // console.log(x);
//     }
//   }
//   console.log(y, maxLegth);
// }
// LongestSubString([2, 1, 2, 5]);

// function search(nums, target) {
//   // Write your code here
//   let left = 0;
//   let right = nums.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     let MidEle = nums[mid];
//     if (MidEle === target) {
//       console.log("mid", mid);
//     }
//     if (MidEle < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
// }
// search([1, 2, 3, 4, 5, 6, 7], 3);

// function FindLowerBound(A, x) {
//   let n = A.length;
//   for (let i = 0; i < A.length; i++) {
//     if (A[i] >= x) {
//       return i;
//     }
//   }
//   return n;
// }
// let findLowestBound = FindLowerBound([1, 2, 3, 4, 5, 6], 7);
// console.log(findLowestBound);

// function FindUpperBound(A, x) {
//   let n = A.length;
//   for (let i = 0; i < A.length; i++) {
//     if (A[i] > x) {
//       return i;
//     }
//   }
//   return n;
// }
// let findupperBound = FindUpperBound([1, 2, 3, 4, 5, 6], 7);
// console.log(findLowestBound);

// function Paranthesis(A) {
//   let result = "";
//   let count = 0;
//   for (let i = 0; i < A.length; i++) {
//     if (A[i] == "(") {
//       if (count > 0) {
//         result += "(";
//       }
//       count++;
//     } else {
//       count--;
//       if (count > 0) {
//         result += ")";
//       }
//     }
//   }
//   console.log(result);
// }
// Paranthesis("(()(()())())");

// // text field
// //  search
// //

// function createCalendar(year) {
//   // let date = new Date("February 01, 2024");
//   let daysofweek = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];

//   let daysInMonths = [];
//   for (let month = 0; month < 12; month++) {
//     let daysInMonth = new Date(2024, month + 1, 0).getDate();
//     daysInMonths.push(daysInMonth);
//   }
//   //  aCalender .
//   const calendar = [];
//   for (let i = 0; i < 12; i++) {
//     let MonthBox = [];
//     let firstDayOfMonth = new Date(year, i, 1).getDay();
//     // console.log("firstDayOfMonth", firstDayOfMonth);
//     for (let j = 0; j < firstDayOfMonth; j++) {
//       MonthBox.push("");
//     }
//     // calendar.push(MonthBox);
//     for (let j = 1; j <= daysInMonths[i]; j++) {
//       MonthBox.push[j];
//     }
//     calendar.push(MonthBox);
//   }

//   return { calendar, daysofweek };
// }
// const year = 2024;
// const { calendar, daysofweek } = createCalendar(year);

// // Displaying the calendar
// calendar.forEach((month, index) => {
//   console.log(month.length);
//   console.log(`\nMonth ${index + 1} :`);
//   console.log(daysofweek.join(" | "));
//   let weekOutput = "";
//   for (let j = 0; j < month.length; j++) {
//     weekOutput += month[j] ? String(month[j]).padStart(2, " ") : "   ";
//     if (j % 7 === 6) {
//       // console.log(weekOutput); // Print the current week's output
//       weekOutput = ""; // Reset for the next week
//     } else {
//       weekOutput += " | "; // Add separator for the same week
//     }
//   }
//   if (weekOutput) {
//     console.log(weekOutput);
//   }
// });

// console.log(6 % 7);

// (function () {
//   let target = 9;
//   let arr = [];
//   let A = [1, 3, 4, 5];
//   for (let i = 0; i < A.length; i++) {
//     for (let j = i + 1; j < A.length; j++) {
//       if (A[i] + A[j] == target) {
//         arr.push(A[i], A[j]);
//         break;
//       }
//     }
//   }
//   console.log(arr);
// })();

// (function () {
//   let A = [1, 0, 0, 2, 1, 3];
//   for (let i = 0; i < A.length; i++) {
//     for (let j = i + 1; j < A.length; j++) {
//       if (A[i] > A[j]) {
//         let temp = A[i];
//         A[i] = A[j];
//         A[j] = temp;
//       }
//     }
//   }
//   console.log(A);
// })();

// (function () {
//   let A = [1, 0, 4, 0, 2, 1, 0, 3];
//   let currntEle = A[0];
//   count = 1;
//   for (let i = 1; i < A.length; i++) {
//     if (A[i] === currntEle) {
//       count++;
//     } else {
//       count--;
//       if (count === 0) {
//         currntEle = A[i];
//         count = 1;
//       }
//     }
//   }
//   console.log(currntEle);
// })();

// function countOfPrimeInN(N) {
//   let primeCount = 0;
//   for (let num = 2; num <= N; num++) {
//     let i = 1;
//     console.log(num);
//     let count = 0;
//     while (i * i <= num) {
//       if (i * i == num) {
//         count += 1;
//       } else if (num % i == 0) {
//         count += 2;
//       }
//       i++;
//     }
//     if (count == 2) {
//       primeCount += 1;
//     }
//   }
//   primeCount;
// }
// console.log("countOfPrimeInN(N)", countOfPrimeInN(19));

// (function () {
//   let N = 19;
//   let arr = [];
//   primeCount;
//   for (let i = 2; i <= N; i++) {
//     let count = 0;
//     for (let j = 1; j <= i; j++) {
//       if (i % j === 0) {
//         count++;
//       }
//     }
//     if (count === 2) {
//       arr.push(i);
//     }
//   }
//   console.log(arr);
// })();

// (function () {
//   let N = [, 4, , 6, 9, ,];
//   let arr = [];
//   primeCount;
//   for (let i = 0; i < N.length; i++) {
//     let count = 0;
//     for (let j = 1; j <= N[i]; j++) {
//       if (N[i] % j === 0) {
//         count++;
//       }
//     }
//     if (count === 2) {
//       arr.push(N[i]);
//     }
//   }
//   console.log(arr);
// })();

// let str4 = "arer";
// N = str4.length;
// let newstr = str4 + N;
// console.log(newstr);

// (function () {
//   let A = [1, 0, 2, 4, 0, 3, 4];
//   for (let i = 0; i < A.length; i++) {
//     if (A[i] !== 0)
//       for (let j = i + 1; j < A.length; j++) {
//         let temp = A[i];
//         A[i] = A[j];
//         A[j] = temp;
//       }
//   }
//   console.log(A);
// })();

// // console.log(Math.abs(5));

// // function duplicates(a, n) {
// //   let newArr = [];
// //   let duplicate = [];
// //   for (let i = 0; i < a.length; i++) {
// //     if (!newArr.includes(a[i])) {
// //       newArr.push(a[i]);
// //     } else {
// //       duplicate.push(a[i]);
// //     }
// //   }
// //   if (duplicate.length > 0) {
// //     console.log(duplicate);
// //   } else {
// //     console.log(-1);
// //   }
// // }
// // duplicates(
// //   [
// //     1, 1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 7, 8, 98, 9, 90, 0, 0, 0, 9, 8, 78, 7, 6,
// //     5, 5, 4, 4, 33, 3, 3, 3, 2, 2, 2,
// //   ],
// //   4
// // );
// function leaders(n, arr) {
//   let leader = arr[n - 1];
//   let totalleader = [];
//   totalleader.push(leader);
//   for (let i = n - 2; i > 0; i--) {
//     if (arr[i] >= leader) {
//       leader = arr[i];
//       totalleader.push(leader);
//     }
//   }
//   console.log(totalleader);
// }
// leaders(6, [16, 17, 4, 3, 5, 2]);
// // function MaxSubStringSUm(A) {
// //   //
// //   let maxSum = -1;
// //   let x = []; //
// //   for (let i = 0; i < A.length; i++) {
// //     //
// //     let y = []; //
// //     let SubStringSum = 0;
// //     for (let j = i; j < A.length; j++) {
// //       SubStringSum += A[j];
// //       console.log("sub string", y.push(A[j]));
// //       // maxSum.push(SubStringSum);
// //       // if (SubStringSum > maxSum) {
// //       //   maxSum = SubStringSum;
// //       //   x = [...y];
// //       // }
// //       // x.push(y);
// //     }
// //   }
// //   console.log("maxSum", maxSum, x);
// // }
// // MaxSubStringSUm([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

// function PrintSubString(arr) {
//   let maxSum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let x = [];
//     let sum = 0;
//     for (let j = i; j < arr.length; j++) {
//       x.push(arr[j]);
//       sum += arr[j];
//       if (sum > maxSum) {
//         maxSum = sum;
//         console.log(x);
//       }
//     }
//   }
//   console.log(maxSum);
// }
// PrintSubString([1, 3, -8, -2, 1, 10]);

// (function () {
//   let str = "aaabbaaa";
//   let N = str.length;
//   let isPalindrome = true;
//   // for(let i = N-1 ; i >= 0 ; i-- ){
//   //   if(str[i] !== str[N-i-1])
//   // }
//   let left = 0;
//   let rigth = N - 1;
//   while (left <= rigth) {
//     if (str[left] !== str[rigth]) {
//       isPalindrome = false;
//       break;
//     }
//     left += 1;
//     rigth -= 1;
//   }
//   if (isPalindrome) {
//     console.log("ture");
//   } else {
//     console.log("false");
//   }
//   // console.log("hello");
// })();

function Anagram(A, B) {
  if (A.length !== B.length) {
    return -1;
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
      return true;
    } else {
      return -1;
    }
  }
}
let isAnagram = Anagram("listen", "silent");
console.log(isAnagram);

function SecondLargestElement(arr) {
  let max = -1;
  let secondMax = -1;
  let N = arr.length;
  for (let i = 0; i < N; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i];
    }
  }
  return secondMax;
}

let SecondMaxele = SecondLargestElement([76, 73, 2, 3, 4, 5]);
console.log(SecondMaxele);

// let A = "1,2,3,4,5,6";
// let newaa = [];
// let newArr = A.forEach((element) => {
//   Number(element);
//   newaa.push(element);
// });
// console.log(newaa);
// console.log(Number("5"));

// move zero to the end

function ZerosToEnd(arr) {
  let N = arr.length;
  let index = 0;
  for (let i = 0; i < N; i++) {
    if (arr[i] !== 0) {
      arr[index] = arr[i];
      index++;
    }
  }
  for (let j = index; j < N; j++) {
    arr[j] = 0;
  }
  console.log(arr);
}
ZerosToEnd([1, 0, 2, 0, 5, 8]);

function ZerosToTop(arr) {
  let N = arr.length; // length of an array
  let index = N - 1; // index from where we start filling non zero element
  for (let i = N - 1; i >= 0; i--) {
    if (arr[i] !== 0) {
      // If we find non-zero than start to fill it in end index and then index--
      arr[index] = arr[i];
      index--;
    }
  }
  console.log(arr);
  for (let j = 0; j < index; j++) {
    arr[j] = 0;
  }
  console.log(arr);
}
ZerosToTop([1, 0, 3, 0, 4, 5, 9]);

nums = [2, 7, 2, 1, 1, 8];
let N = nums.length;
let fq = {};
for (let i = 0; i < N; i++) {
  let currentele = nums[i];
  if (fq[currentele]) {
    fq[currentele]++;
  } else {
    fq[nums[i]] = 1;
  }
}
console.log(fq);
// for (let j = 0; j < N; j++) {
//   if (fq[0] > 0) {
//     nums[j] = 0;
//     fq[0]--;
//   } else if (fq[1] > 0) {
//     nums[j] = 1;
//     fq[1]--;
//   } else if (fq[2] > 0) {
//     nums[j] = 2;
//     fq[2]--;
//   }
// }
// console.log(nums);

function SortArray(arr) {
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
let SortArr = SortArray([1, 2, 0, 0, 2, 1]);
console.log(SortArr);

function BinarySearch(newArr, B) {
  let N = newArr.length;
  let left = 0;
  let right = N - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (newArr[mid] === B) {
      return newArr[mid];
    } else if (newArr[mid] > B) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}
let Binarysearch = BinarySearch([-42, -2, 5, 7, 23, 87, 509], -2);
console.log(Binarysearch);

// console.log(5("i"));

// for (let i = 0; i < 5; i++) {
//   console.log("*".repeat(i));
// }

function Pattern() {
  let str = "";
  let N = 5;
  for (let i = 0; i < 5; i++) {
    // for (let j = 5 - 1; j >= i; j--) {
    //   str
    // }
    console.log(
      " ".repeat(N - i - 1) + "*".repeat(i + 1) + "*".repeat(i - 1 + 1)
    );
  }
}
Pattern();

// var animar = "lion";
// if (1) {
//   animar = "tiger";
//   function animar() {}
//   animar = "duck";
// }

// console.log(animar);

// console.log(y);
// let y = 6;
// console.log(x);
// var x = 3;

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

function pairOfgivenSum(A) {
  let N = A.length;
  let target = 10;
  let arr = new Set();
  for (let i = 0; i < N; i++) {
    let element = target - A[i];
    if (arr.has(element)) {
      return "yes";
    } else {
      arr.add(A[i]);
    }
  }
  return "No";
}
let pairexist = pairOfgivenSum([1, 5, 6, 4, 2, 11]);
console.log(pairexist);

function Majority(A) {
  let N = A.length;
  let count = 0;
  let current;
  for (let i = 0; i < N; i++) {
    if (count === 0) {
      count = 1;
      current = A[i];
    } else if (current === A[i]) {
      count++;
    } else {
      count--;
    }
  }
  console.log(current);
}
Majority([2, 3, 2, 2, 1, 2, 0, 2, 1]);

// for (let i = 0; i < A.length; i++) {
//   let left = i - 1;
//   let right = i + 1;
//   while (left >= 0 && right < A.length) {
//     if (A[left] !== A[right]) {
//       break;
//     } else {
//       if (right - left > length) {
//         x = left;
//         y = right;
//         length = right - left;
//       }
//       left--;
//       right++;
//     }
//   }
//   left = i;
//   right = i + 1;
//   while (left >= 0 && right < A.length) {
//     if (A[left] !== A[right]) {
//       break;
//     } else {
//       if (right - left > length) {
//         x = left;
//         y = right;
//         length = right - left;
//       }
//       left--;
//       right++;
//     }
//   }
// }

// console.log(A.slice(x, y + 1));

// LongestPalemdrom("aaaabbaaa");

// function RotateArrToRight(A, K) {
//   for (let i = 0; i < K; i++) {
//     let lastIndEle = A[N - 1];
//     for (let j = A.length - 1; j >= 0; j--) {
//       A[j] = A[j - 1];
//     }
//     A[0] = lastIndEle;
//   }
//   console.log(A);
// }
// RotateArrToRight([1, 2, 3, 4, 5, 6], 3);

let A = [1, 2, 3, 4, 5, 6];
let a = [];
for (let i = 3; i < A.length; i++) {
  a.push(A[i]);
}
for (let i = 0; i < A.length - 3; i++) {
  a.push(A[i]);
}
console.log(a);

function rotateArray(A, K) {
  let N = A.length;

  // If K is greater than the length of the array, reduce it to within bounds
  K = K % N;

  // Helper function to reverse a portion of the array
  function reverse(arr, start, end) {
    while (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }

  // Step 1: Reverse the whole array
  reverse(A, 0, N - 1);

  // Step 2: Reverse the first K elements
  reverse(A, 0, K - 1);

  // Step 3: Reverse the remaining N - K elements
  reverse(A, K, N - 1);

  return A;
}

// Example Usage:
// let A = [1, 2, 3, 4, 5, 6];
// let K = 3;
// rotateArray(A, K);
// console.log(A); // Output: [4, 5, 6, 1, 2, 3]

function RotateArrRight(A, K) {
  let N = A.length;
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
  reverse(A, 0, N - 1);
  reverse(A, 0, K - 1);
  reverse(A, K, N - 1);
  console.log(A);
}

RotateArrRight([1, 2, 3, 4, 5, 6], 4);

function RotateArrLeft(A, K) {
  let N = A.length;
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
  console.log(A);
}

RotateArrLeft([1, 2, 3, 4, 5, 6], 4);

function FindEleInTwoDArr(A, T) {
  let N = A.length;
  let i = 0;
  while (i < N) {
    IL = A[i].length; //inner Array Length
    let left = 0;
    let right = IL - 1;
    console.log("Inner length", IL);
    while (left <= right) {
      let mid = Math.floor((right + left) / 2);
      console.log("mid", mid);

      if (T === A[i][mid]) {
        // console.log(i, mid);
        return [i, mid];
      } else if (A[i][mid] < T) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    i++;
  }
}
arr = [
  [2, 3, 4],
  [5, 11, 10],
  [66, 77, 88, 99],
];

let FindArr = FindEleInTwoDArr(arr, 99);
console.log(FindArr);

function MaxSybArray(A) {
  let y = [];
  sum = 0;
  y[0] = parseInt(A[0]);
  for (let i = 1; i < A.length; i++) {
    y[i] = y[i - 1] + parseInt(A[i]);
  }
  console.log(y);
  let max = 0;
  for (let i = 0; i < A.length; i++) {
    sum += A[i];
    if (sum > max) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  console.log(max);
}
MaxSybArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

function SubArrSumAndSubArr(A) {
  let max = 0;
  let n = A.length;
  let sum = 0;
  let SubArrStart = 0;
  let end = 0;
  for (let i = 0; i < n; i++) {
    if (sum == 0) {
      start = i;
    }
    sum += A[i];
    if (sum > max) {
      max = sum;
      SubArrStart = start;
      end = i;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  console.log(max);
  for (let j = SubArrStart; j <= end; j++) {
    console.log(A[j]);
  }
}
SubArrSumAndSubArr([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

function MaxProfit(A) {
  let n = A.length;
  let maxPro = 0;
  let BuyDay = 0;
  let sellday = 0;
  let BuyPriceprice = A[0];

  for (let i = 0; i < n; i++) {
    if (BuyPriceprice > A[i]) {
      BuyDay = i + 1;
      BuyPriceprice = A[i];
    }
  }
  let sellprice = A[BuyDay];
  for (let j = BuyDay; j < n; j++) {
    console.log("j", j, "A[j]", A[j]);
    if (sellprice < A[j]) {
      sellprice = A[j];
      sellday = j + 1;
    }
  }
  console.log("days", BuyDay, BuyPriceprice, sellday, sellprice);
}
MaxProfit([7, 5, 1, 3, 6, 4]);

// function moveEnd() {
//   let A = [1, 0, 2, 0, 3, 4, 5, 0, 6];
//   let index = A.length - 1;
//   for (let i = 0; i < A.length; i++) {
//     if (A[i] != 0) {
//       A[index] = A[i];
//       index++;
//     }
//   }
//   for (let j = index; j < A.length; j++) {
//     A[j] = 0;
//   }

//   console.log(A);
// }
// moveEnd();
function moveTop() {
  let A = [1, 0, 2, 0, 3, 4, 5, 0, 6];
  let N = A.length;
  let index = A.length - 1;
  for (let i = N - 1; i >= 0; i--) {
    if (A[i] != 0) {
      A[index] = A[i];
      index--;
    }
  }
  console.log("index", index);
  for (let j = 0; j <= index; j++) {
    A[j] = 0;
  }

  console.log(A);
}
moveTop();

// Function to return precedence of operators
function precedence(op) {
  if (op === "+" || op === "-") {
    return 1;
  }
  if (op === "*" || op === "/") {
    return 2;
  }
  if (op === "^") {
    return 3;
  }
  return 0;
}

// Function to check if the character is an operator
function isOperator(c) {
  return ["+", "-", "*", "/", "^"].includes(c);
}

// Function to convert infix to postfix
function infixToPostfix(expression) {
  let stack = [];
  let result = "";

  for (let i = 0; i < expression.length; i++) {
    let char = expression[i];

    // If the character is an operand, add it to the result
    if (
      (char >= "a" && char <= "z") ||
      (char >= "A" && char <= "Z") ||
      (char >= "0" && char <= "9")
    ) {
      result += char;
    }
    // If the character is '(', push it to the stack
    else if (char === "(") {
      stack.push(char);
    }
    // If the character is ')', pop and output from the stack
    // until an '(' is encountered
    else if (char === ")") {
      while (stack.length && stack[stack.length - 1] !== "(") {
        result += stack.pop();
      }
      stack.pop(); // Remove '(' from the stack
    }
    // If the character is an operator
    else if (isOperator(char)) {
      while (
        stack.length &&
        precedence(stack[stack.length - 1]) >= precedence(char)
      ) {
        result += stack.pop();
      }
      stack.push(char); // Push the current operator to the stack
    }
  }

  // Pop all the remaining operators from the stack
  while (stack.length) {
    result += stack.pop();
  }

  return result;
}

// Example usage:
let infixExpression = "a+b*(c^d-e)^(f+g*h)-i";
let postfixExpression = infixToPostfix(infixExpression);
console.log("Infix Expression: " + infixExpression);
console.log("Postfix Expression: " + postfixExpression);

// Function to return precedence of operators
function precedence(ch) {
  switch (ch) {
    case "+":
    case "-":
      return 1;
    case "*":
    case "/":
      return 2;
    case "^":
      return 3;
    default:
      return -1;
  }
}

// Function to reverse a string
function reverse(exp) {
  let result = "";
  for (let i = exp.length - 1; i >= 0; i--) {
    if (exp[i] === "(") {
      result += ")";
    } else if (exp[i] === ")") {
      result += "(";
    } else {
      result += exp[i];
    }
  }
  return result;
}

// Function to convert infix to postfix
function infixToPostfix(exp) {
  let result = "";
  let stack = [];

  for (let i = 0; i < exp.length; i++) {
    let ch = exp[i];

    // If the character is an operand, add it to the result
    if (/[a-zA-Z0-9]/.test(ch)) {
      result += ch;
    }
    // If the character is '(', push it to the stack
    else if (ch === "(") {
      stack.push(ch);
    }
    // If the character is ')', pop and output from the stack until '(' is encountered
    else if (ch === ")") {
      while (stack.length && stack[stack.length - 1] !== "(") {
        result += stack.pop();
      }
      stack.pop(); // Remove '(' from stack
    }
    // If the character is an operator
    else {
      while (
        stack.length &&
        precedence(ch) <= precedence(stack[stack.length - 1])
      ) {
        result += stack.pop();
      }
      stack.push(ch);
    }
  }

  // Pop all remaining operators in the stack
  while (stack.length) {
    result += stack.pop();
  }

  return result;
}

// Function to convert infix to prefix
function infixToPrefix(exp) {
  // Step 1: Reverse the infix expression
  let reversedExp = reverse(exp);

  // Step 2: Convert reversed infix to postfix
  let postfixExp = infixToPostfix(reversedExp);

  // Step 3: Reverse the postfix expression to get prefix
  return reverse(postfixExp);
}

// Test the conversion
let infixExp = "(A-B/C)*(A/K-L)";
let prefixExp = infixToPrefix(infixExp);
console.log("Infix Expression: " + infixExp);
console.log("Prefix Expression: " + prefixExp);
