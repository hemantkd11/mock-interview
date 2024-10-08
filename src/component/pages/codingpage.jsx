import React, { useEffect, useState } from "react";
import { Anagram, FindPalinderom, SecondLargestElement, ZerosToEnd, ZerosToTop } from "../utiils/functions";
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
  }

  // const handleInputAnagram = () => {
  //   let result = Anagram(inputfield1, inputfield2)
  //   setOutput(result)
  // }

  return (
    <div>
      <div>
        <div>
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
          <div>
            Code editor
          </div>
        </div>
      </div>
    </div>
  );
}
// export default Codingpage;
