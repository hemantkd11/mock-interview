import React, { useEffect, useState } from "react";
import {
  Anagram,
  FindPalinderom,
  SecondLargestElement,
  ZerosToEnd,
  ZerosToTop,
  SortArray,
  BinarySearch,
  pairOfgivenSum,
  LargestPalimdrom,
  RotateArrLeft,
  RotateArrRight,
  CheckValidStr
} from "../utiils/functions";
export const Codingpage = () => {
  const [inputfield1, setInputfield1] = useState()
  const [inputfield2, setInputfield2] = useState()
  const [arr1, setArr1] = useState([])
  const [output, setOutput] = useState()
  useEffect(() => {

  })
  const handleInputPalindrom = (type) => {
    if (type === "Palindrom") {
      let result = FindPalinderom(inputfield1)
      setOutput(result)
    } else if (type === 'Anagram') {
      let result = Anagram(inputfield1, inputfield2)
      setOutput(result)
    }
    else if (type === 'SecondlargestNum') {
      let result = SecondLargestElement(arr1)
      setOutput(result)
    }
    else if (type === 'ZeroToEnd') {
      let result = ZerosToEnd(arr1)
      setOutput(result)
    }
    else if (type === 'ZeroToTop') {
      let result = ZerosToTop(arr1)
      setOutput(result)
    }
    else if (type === 'SortArray') {
      let result = SortArray(arr1)
      setOutput(result)
    } else if (type === 'Findtarget') {
      let result = BinarySearch(arr1, inputfield2)
      setOutput(result)
    }
    else if (type === 'SumOfPair') {
      let result = pairOfgivenSum(arr1, inputfield2)
      setOutput(result)
    }
    else if (type === 'LargestPalimdrom') {
      let result = LargestPalimdrom(inputfield2)
      setOutput(result)
    }
    else if (type === 'RotateArrLeft') {
      let result = RotateArrLeft(arr1, inputfield2)
      setOutput(result)
    }
    else if (type === 'RotateArrRight') {
      let result = RotateArrRight(arr1, inputfield2)
      setOutput(result)
    }
    else if (type === 'CheckValidstr') {
      let result = CheckValidStr(inputfield2)
      setOutput(result)
    }
  }

  // const handleInputAnagram = () => {
  //   let result = Anagram(inputfield1, inputfield2)
  //   setOutput(result)
  // }

  return (
    <div>
      <div>
        <div className="AppBox">
          {/* question 1 */}
          <dl>
            <dt>
              <h3>Q 1 :- Find if the given string is palamdrom or not</h3>
            </dt>
            <dd>
              <pre>
                {`function findPalinderom (str){
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
        console.log("ture");
      }else {
        console.log("false");
      }
    };
 }    
console.log(findPalinderom ("aabaa")) // Output : ture
console.log(findPalinderom ("aasa")) // Output : false
console.log(findPalinderom ("aabbaa")) // Output : ture
Time Complexity: O(N)  (since the loop is running only N/2  time)
Space Complexity: O(1)  (no additional data structures used, just a few variables)
                `}
              </pre>
            </dd>
            <dd>Input : - <input type="text" placeholder="Test Input" onChange={(e) => setInputfield1(e.target.value)} /></dd>
            <br />
            <dd><button onClick={() => handleInputPalindrom("Palindrom")} style={{ background: "skyblue" }}>Run Code</button> Output : - {output}</dd>

          </dl>
          {/* Question 2 */}
          <dl>
            <dt><h3>Q 2 :- Find the given two Strings are Anagrams or not</h3></dt>
            <dd>
              <pre>{`function Anagram(A, B) {
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
console.log(isAnagram); Output : ture
Time Complexity: O(N)  (since the loop is running n+n+n time)
Space Complexity: O(N)  (no additional data structures used, just a few variables)
              `}</pre>

            </dd>
            <dd>Input : - <input type="text" placeholder="Test Input" onChange={(e) => setInputfield1(e.target.value)} /></dd>
            <dd>Input : - <input type="text" placeholder="Test Input" onChange={(e) => setInputfield2(e.target.value)} /></dd>
            <br />
            <dd><button onClick={() => handleInputPalindrom("Anagram")} style={{ background: "skyblue" }}>Run Code</button> Output : - {output}</dd>
          </dl>
          {/* Question 3 */}
          <dl>
            <dt>
              <h3>Q 3 :- Find the second largest Number in given array of size N</h3>
            </dt>
            <dd>
              <pre>
                {`function SecondLargestElement(arr) {
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
let SecondMaxele = SecondLargestElement([1, 2, 3, 4, 5, 6]);
console.log(SecondMaxele);`}
              </pre>
            </dd>
            <dd>Input : - <input type="text" placeholder="Test Input" onChange={(e) => setArr1(e.target.value)} /></dd>
            <br />
            <dd><button onClick={() => handleInputPalindrom("SecondlargestNum")} style={{ background: "skyblue" }}>Run Code</button> Output : - {output}</dd>
          </dl>
          {/* Question 4 */}
          <dl>
            <dt>
              <h3>Q 4 :- Move all zero to end</h3>
            </dt>
            <dd>
              <pre>
                {`function ZerosToEnd(arr) {
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
    return arr;
}

                `}
              </pre>
            </dd>
            <dd>Input : - <input type="text" placeholder="Test Input" onChange={(e) => setArr1(e.target.value)} /></dd>
            <br />
            <dd><button onClick={() => handleInputPalindrom("ZeroToEnd")} style={{ background: "skyblue" }}>Run Code</button> Output : - {output}</dd>
          </dl>
          {/* Question 5 */}
          <dl>
            <dt>
              <h3>Q 5 :- Move all zero to top</h3>
            </dt>
            <dd>
              <pre>
                {`function ZerosToTop(arr) {
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
    return arr;
}
                `}
              </pre>
            </dd>
            <dd>Input : - <input type="text" placeholder="Test Input" onChange={(e) => setArr1(e.target.value)} /></dd>
            <br />
            <dd><button onClick={() => handleInputPalindrom("ZeroToTop")} style={{ background: "skyblue" }}>Run Code</button> Output : - {output}</dd>
          </dl>
          {/* Question 6 */}
          <dl>
            <dt>
              <h3>Q 6 :- Sort an array</h3>
            </dt>
            <dd>
              <pre>
                {`function SortArray(arr) {
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
  // Method 1 
  for (let j = 0; j < N; j++) {
    if (fq[0] > 0) {
      arr[j] = 0;
      fq[0]--;
    } else if (fq[1] > 0) {
       arr[j] = 1;
       fq[1]--;
     } else if (fq[2] > 0) {
       arr[j] = 2;
       fq[2]--;
     }
   }
  // Method 2
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
console.log(SortArr);   // output [0,0,1,1,2,2]  
// Notes : - 
  In JavaScript, object keys that resemble integers are automatically sorted in 
  ascending numeric order.if you use array of integers 

                `}
              </pre>
            </dd>
            <dd>Input : - <input type="text" placeholder="Test Input" onChange={(e) => setArr1(e.target.value)} /></dd>
            <br />
            <dd><button onClick={() => handleInputPalindrom("SortArray")} style={{ background: "skyblue" }}>Run Code</button> Output : - {output}</dd>
          </dl>
          {/* Question 7*/}
          <dl>
            <dt>
              <h3>Q 7 :- Given sorted Array of length N and you have to find  the num in it</h3>
            </dt>
            <dd>
              <pre>
                {`function BinarySearch(newArr, B) {
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

                `}
              </pre>
            </dd>
            <dd>Input : - <input type="text" placeholder="Test Input" onChange={(e) => setArr1(e.target.value)} /></dd>
            <dd>Input : - <input type="text" placeholder="Test Input" onChange={(e) => setInputfield2(e.target.value)} /></dd>
            <br />
            <dd><button onClick={() => handleInputPalindrom("Findtarget")} style={{ background: "skyblue" }}>Run Code</button> Output : - {output}</dd>
          </dl>
          {/* Question 8 */}
          <dl>
            <dt>
              <h3>Q 8 :- Check if a pair with given sum exists in Array</h3>
            </dt>
            <dd>
              <pre>
                {`pairOfgivenSum(A) {
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
console.log(pairexist); // Out put No

                `}
              </pre>
            </dd>
            <dd> array  : - <input type="text" placeholder="Test Input" onChange={(e) => setArr1(e.target.value)} /></dd>
            <dd>Target : - <input type="text" placeholder="Test Input" onChange={(e) => setInputfield2(e.target.value)} /></dd>
            <br />
            <dd><button onClick={() => handleInputPalindrom("SumOfPair")} style={{ background: "skyblue" }}>Run Code</button> Output : - {output}</dd>
          </dl>
          {/* Question 9*/}
          <dl>
            <dt>
              <h3>Q 9 :- Largest LargestPalimdrom in a string</h3>
            </dt>
            <dd>
              <pre>
                {`function LargestPalimdrom(A) {
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
  console.log(max, start, end);
}
LargestPalimdrom("aaabaa");

                `}
              </pre>
            </dd>

            <dd>String : - <input type="text" placeholder="Test Input" onChange={(e) => setInputfield2(e.target.value)} /></dd>
            <br />
            <dd><button onClick={() => handleInputPalindrom("LargestPalimdrom")} style={{ background: "skyblue" }}>Run Code</button> Output : - {output}</dd>
          </dl>
          {/* Question 10*/}
          <dl>
            <dt>
              <h3>Q 10 :- Rotate Array  from  left</h3>
            </dt>
            <dd>
              <pre>
                {`function RotateArrLeft(A, K) {
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

                `}
              </pre>
            </dd>

            <dd> array  : - <input type="text" placeholder="Test Input" onChange={(e) => setArr1(e.target.value)} /></dd>
            <dd>Target : - <input type="text" placeholder="Test Input" onChange={(e) => setInputfield2(e.target.value)} /></dd>
            <br />
            <dd><button onClick={() => handleInputPalindrom("RotateArrLeft")} style={{ background: "skyblue" }}>Run Code</button> Output : - {output}</dd>
          </dl>
          {/* Question 11*/}
          <dl>
            <dt>
              <h3>Q 11 :- Rotate Array  from  right</h3>
            </dt>
            <dd>
              <pre>
                {`function RotateArrRight(A, K) {
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
  reverse(A, 0, N - 1); /// to rotate right
  reverse(A, 0, K - 1);
  reverse(A, K, N - 1);
  // reverse(A, 0, N - 1); /// to rotate left
  console.log(A);
}

RotateArrRight([1, 2, 3, 4, 5, 6], 4);
                `}
              </pre>
            </dd>
            <dd> array  : - <input type="text" placeholder="Test Input" onChange={(e) => setArr1(e.target.value)} /></dd>
            <dd>Target : - <input type="text" placeholder="Test Input" onChange={(e) => setInputfield2(e.target.value)} /></dd>
            <br />
            <dd><button onClick={() => handleInputPalindrom("RotateArrRight")} style={{ background: "skyblue" }}>Run Code</button> Output : - {output}</dd>
          </dl>
          {/* Question 12*/}
          <dl>
            <dt>
              <h3>Q 12 :- Check if the given str is valid or not </h3>
            </dt>
            <dd>
              <pre>
                {`function CheckValidStr(str) {
  let newArr = [];   // create a new array to store opening of str
  for (let i = 0; i < str.length; i++) {
  //check if its opening of str and there type
    if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
    // if true then push to newArr
      newArr.push(str[i]);   
    }

    //   from here check if its close str and match the last element in the array if not return false and its your ans
    else if (str[i] === ")") {
      if (newArr[newArr.length - 1] === "(") {
        newArr.pop();
      } else {
        return false;
      }
    } else if (str[i] === "]") {
      if (newArr[newArr.length - 1] === "[") {
        newArr.pop();
      } else {
        return false;
      }
    } else if (str[i] === "}") {
      if (newArr[newArr.length - 1] === "{") {
        newArr.pop();
      } else {
        return false;
      }
    }
  }
    //   if length of the str is greater the 0 then false else true
  if (newArr.length > 0) {
    return false;
  } else {
    return true;
  }
}
let CheckStrvalid = CheckValidStr("[)}");
console.log(CheckStrvalid); // false
                `}
              </pre>
            </dd>
            <dd>Target : - <input type="text" placeholder="Test Input" onChange={(e) => setInputfield2(e.target.value)} /></dd>
            <br />
            <dd><button onClick={() => handleInputPalindrom("CheckValidstr")} style={{ background: "skyblue" }}>Run Code</button> Output : - {output}</dd>
          </dl>
          <div>
            question.13  How does the this keyword work in JavaScript? <br />

            ----  It refers to the context in which a function is called (e.g., the global object, an object, or undefined in strict mode).
          </div>
          <div>
            question.14  What are JavaScript closures? Give an example.

            <br />
            -----  A closure is a function that remembers its lexical scope even when executed outside it.
            {`function outer() {
    let count = 0;
    return function inner() {
        count++;
        return count;
    };
}
const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
`}

          </div>
          <div>
            Question.15 <em> What is the difference between synchronous and asynchronous programming?</em> <br />
            ----- Synchronous: Tasks execute one at a time in order.
            Asynchronous: Tasks can run independently, allowing others to execute concurrently.
          </div>
          <div>
            Question 16 <em>Explain prototypes and prototypal inheritance.</em> <br />
            Every JavaScript object has a prototype, an object it inherits properties from.
          </div>
          <div>
            Question 17  <em>WHat are the differnece between call(), apply, bind</em><br />
            call(): Calls a function with a specific this and arguments passed individually.
            apply(): Similar to call, but arguments are passed as an array.
            bind(): Returns a new function with a bound this.
          </div>
          <div>
            Question 18 <em>WHat are  modules</em>
            --- the are reuseable pieces of  code thta encapsulate funtionality.
            they allow to organize your code into smaller, manageable files.
          </div>
          <div>
            Question 19<em>What are JavaScript generators, and how do they work? </em>
            <br />
            Generators produce values on demand using yield.

            {`function* generate() {
              yield 1;
            yield 2;`}

          </div>
          <div>
            Question 20 <em>what is the DOM and how do you manipulate it</em><br />
            --- the dom is the structure of html elements
          </div>
          <div>
            Question 21 <em> What is debouncing and throttling?</em> <br />
            ---- Debouncing: Delays function execution.
            Throttling: Limits function execution rate.
          </div>
          <div>
            Question 22 <em>what is the difference between local storage, session strorage and cookies?</em>
            LocalStorage: Persistent storage.
            SessionStorage: Temporary storage.
            Cookies: Small data stored with the HTTP request.

          </div>
          Question 23  <em>How would you optimize a JavaScript application?</em>
          --- Minimize DOM manipulations, use efficient data structures, lazy loading, and optimize state management.
        </div>
      </div>
    </div>
  );
}
// export default Codingpage;


// {/* Question */ }
// <dl>
//   <dt>
//     <h3>Q NA :-  </h3>
//   </dt>
//   <dd>
//     <pre>
//       {`
//                 `}
//     </pre>
//   </dd>
//   <dd>Array : - <input type="text" placeholder="Test Input" onChange={(e) => setInputfield2(e.target.value)} /></dd>
//   <dd>Target : - <input type="text" placeholder="Test Input" onChange={(e) => setInputfield2(e.target.value)} /></dd>
//   <br />
//   <dd><button onClick={() => handleInputPalindrom("CheckValidstr")} style={{ background: "skyblue" }}>Run Code</button> Output : - {output}</dd>
// </dl>