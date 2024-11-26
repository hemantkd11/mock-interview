// divide & Conqquerer Techniquw
// find the index of given no in a sorted array 7
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] ==> index 6 output

// condition
// min = 0   arr[0]
// max  = arr.length - 1    arr[14]
//midindex = (min+max)/2     => index(7)  => element(8)

// if the arr[midIndex] >  givenNum the midIndex-- else midIndex++
// const binarySearch =(arr,givenNum)=>{
//   let min = 0
//   let max = arr.length -1
//   minindex = (min+max)/2

//   for(minindex ;arr[minindex] > givenNum;){
//     if(arr[minindex] > givenNum){
//         console.log("number is greater then the given number",arr[minindex])
//         minindex--
//       }
//       else if(arr[minindex] < givenNum){
//         console.log("number is smaller then the given number",arr[minindex])
//         minindex++
//       }
//       else{
//      console.log("found the given numver",arr[minindex])
//       }
//   }

// }

// binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],7 );
// // try {
//     const result = binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] );
//     console.log(result);
//   } catch (error) {
//     console.log(error.message);
//   }

// const binarySearch =(arr,givenNum)=>{
//     let min = 0
//     let max = arr.length -1
//     let minindex;
//   //   minindex = (min+max)/2

//     while (min <= max) {
//       minindex = Math.floor((min + max) / 2);
//   if(arr[minindex] > givenNum){
//       console.log("number is greater then the given number",arr[minindex])
//       max = minindex -1
//     }
//         else if(arr[minindex] < givenNum){
//           console.log("number is smaller then the given number",arr[minindex])
//           min = minindex +1
//         }
//         else{
//        console.log("found the given numver",arr[minindex])
//         console.log(minindex)

//         }
//     }

//   }

//   binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],7 );

const binarySearch = (arr, givenNum) => {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let midIndex = Math.floor(min + max) / 2;
    console.log(midIndex)
    if (arr[midIndex] > givenNum) {
      console.log("number is greater then the given number", arr[midIndex]);
      max = midIndex - 1;
    } else if (arr[midIndex] < givenNum) {
      console.log("number is smaller then the given number", arr[midIndex]);
      min = midIndex + 1;
    } else {
      return midIndex
    }
  }
  return -1
};

const sea = binarySearch([1, 2, 3, 4, 5, 6,7, 8, 9, 10, 11, 12, 13, 14, 15], 7);

console.log("Index for given muber is :",sea)
