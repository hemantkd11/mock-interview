//Checking Square in another array

// arr1 = [1,2,3,4]
// arr2 = [1,9,4,16]
// console.log(arr2.sort((a,b)  => a - b))

// const CheckingSquare = (arr1, arr2) => {
//   arr2 = arr2.sort((a, b) => a - b);
//   // if(aar1.length == aar2.length){
//   //     console.log("length of two array are not same")
//   // }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] * arr1[i] == arr2[i]) {
//       console.log(arr1[i], arr2[i]);
//     } else {
//       console.log("no square in arr2");
//     }
//   }
// };

// CheckingSquare([1, 2, 3, 4], [1, 9, 4, 16]);

// const CheckSquare = (arr1, arr2) => {
//   for (let i = 0; i < arr1.length; i++) {
//     let isSquare = false;
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] * arr1[i] === arr2[j]) {
//         isSquare = true;
//         console.log(arr2[j]);
//       }
//     //   if (j === arr2.length - 1) {
//     //     console.log("false");
//     //   } else console.log("true");
//     if(j === arr2.length-1){
//         if(!isSquare){
//             return false
//         }
//     }
//     }
//   }
// };

// CheckSquare([1, 2, 3, 4], [1, 9, 4, 16, 17]);

/////////***********new way to make it easy and solve that in simple way using map and all */

// arr1 = [1,2,3,4]   arr2 = [1,9,4,16] case 1

//arr3= [1,2,3,2] arr4 = [1,4,4,16]   case 2

// map1={1:1,2:2,4:1}
// map2={1:1,4:2,16:1}

const case2CheckSquareWithMap = (arr3, arr4) => {
  let map1 = {};
  let map2 = {};
  for (item of arr3) {
    map1[item] = (map1[item] || 0) + 1;
    //   console.log("map1",map1)
  }
  //    console.log(map1)
  for (item2 of arr4) {
    map2[item2] = (map2[item2] || 0) + 1;
    //  console.log("map2",map2)
  }

  for (let key in map1) {
    console.log("keyssssssss", key);
   //  console.log("key",[map2[key * key]])
    if (!map2[key * key]) {
      console.log("key",[map2[key * key]]);
      console.log("false");
    } else {
      console.log(true);
    }
  }
  //   let Keys1 = Object.keys(map1)
  //   let Keys2 = Object.keys(map2)

  //   console.log("keys1",Keys1)
  //   console.log("keys2",Keys2)

  // for(let key1 = 0; key1 < Keys1.length ; key1++){
  //    let k1 = Keys1[key1]
  //    console.log("key1 ******",k1)
  //    // console.log("Keys1.length",Keys1.length , Keys1)

  //     for(let key2 = 0; key2 < Keys2.length  ; key2++){
  //       let k2 = Keys2[key2]
  //       console.log("key2 ******",k2)
  //       if(Number(k1) * Number(k1) == Number(k2) ){
  //          console.log(k2+"is the square of :" + k1)
  //          break
  //       }
  //       else{
  //          console.log("no square for :" ,k1)
  //       }
  //     }
  // }
};
case2CheckSquareWithMap([1, 2, 4, 2], [1, 4, 4, 16]);
