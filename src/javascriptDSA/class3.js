//count unique number
//      i   j
// [1,2,3,2,3,4,5,6,7,8,8]

//  conditions --
/*
  i = 0 
  j = 1
  arr[i]=arr[j]
  if i and j are not same then i++ and put j valye in array i 


*/

function countUniqueValue(arr) {
  if (arr.length > 0) {
    let i = 0;
    let j = 1;
    for (j; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        i++;
        arr[i] = arr[j];
      }
    }
    console.log( "result",i+1)
    return i+1
  }else{
    throw new Error("array is empty")
  }
}

try{
    const result = countUniqueValue([]);
    console.log(result)
}catch(error){
    console.log(error.message)
}


