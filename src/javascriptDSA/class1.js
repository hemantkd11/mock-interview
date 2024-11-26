//*********************/checking sum zero
//[-5,-4,-3,-2,0,2,4,6,8]

// [?,?] -> output

// 1st logic compare index 0 from every other index

// example [-4, 4]  is  equal 2 zero if we run loop

//////  SOLUTION @@@1
/*
function getSumPairZero(arr){
    for(let number of arr){
        for(let i = 1;i <arr.length ; i++){
            if(number + arr[i] == 0 ){
                const re = [number,arr[i]]
              
                // return  re;
                console.log("result",re)
               
            }
            break
        }
       
    }
}
getSumPairZero([-5,-4,-3,-2,0,2,4,6,8])

// time complexity is 0(n^2) quadratic
*/

//////  SOLUTION @@@2

// now make is lenear time complexity

// by using pointer
// take left and right in the array and compare it if the left - right is more then zeo then we shift to nxt number to left side

function findSumPairZero(arr) {
  let left = 0;
  let right = arr.length -1 ;

  for (left; left < right; ) {
    let sum = arr[left] + arr[right];
    if (sum == 0) {
      console.log([arr[left], arr[right]]);
      left++
      right--;
    } else if (sum > 0) {
      console.log("err elif");
      right--;
    } else {
      console.log("err else");
      left++;
    }
  }
}
findSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);

// while(left < right){
//     let sum = arr[left]+arr[right]
//     if(sum == 0 ){
//         console.log([arr[left],arr[right]])
//     }
//     else if(sum > 0)
//   {  right--}
// else
// {left++}
// }



const Year = [1997,1998,1993,1994]
const Age = Year.map(item => 2023 - item)
  // return 2013 - item
  console.log(Age)


//


const CountArr = (Arr)=>{
  let disc = {}
  // let A = 
  for(i = 0 ;i < Arr.length;i++){
    disc[Arr[i]]= (disc[Arr[i]] || 0) + 1
  }
  let key  = Object.keys(disc)
  console.log(disc)
  console.log(key)
}
CountArr([1,1,5,3,4,2,3])