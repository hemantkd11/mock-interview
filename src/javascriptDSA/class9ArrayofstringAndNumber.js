// var restoreString = function (s, indices) {
//   let i = 0;
//   const resultArray = new Array(s.length);
//   for (i; i < s.length; i++) {
//     // console.log(s[i])
//     // console.log(indices[i])
//    resultArray[indices[i]] = s[i];
//     console.log("array",resultArray)
//   }
  
//     console.log( resultArray.join(""))
  
// };

// const output = restoreString("mehnat", [2, 1, 0, 4, 3, 5]);
// // console.log(output);


function rearrangeString(array, string) {
    const resultArray = Array.from({ length: string.length }, (_, i) => string[array.indexOf(i)]);
    return resultArray.join('');
  }
  
  const array = [0, 2, 3, 5, 1, 4];
  const string = "mnahte";
  const output = rearrangeString(array, string);
  
  console.log(output); // Output: "hemant"