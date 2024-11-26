//Recursion : when FUcntion call itself
// otherwise it will get called for infinite time
//if a funtion call itself then must be an end point\

// let count = 1
// function demo(name){ // function with defination

//      if(count > name){
//         return;
//      }
//     console.log("name"+count)
//     count++;
//     demo(20) /// function calling itself is known as recursive function
// }
// demo(10)

// ************** example for recurtion *******************

// const recurtion = (arr) => {
//     for(let i = 0 ; i < arr.length ;i++)
//     for (let j = 0; j < arr.length -1; j++) {
//         if (arr[j] > arr[j + 1]) {
//          console.log( [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]);
//         }
//       }
// };

// recurtion([2, 3, 1, 4]);

// ********** other way
let myArray = [2, 3, 1, 4];

// function bubbleSort(arr) {
//   let len = arr.length;
//   for (let i = 0; i < len - 1; i++) {
//     console.log('i',i)
//     for (let j = 0; j < len - 1 - i; j++) {
//         console.log("j",j)
//       if (arr[j] > arr[j + 1]) {
//         console.log("j***",j)
//         let temp = arr[j];
//         console.log("temp", temp);
//         arr[j] = arr[j + 1];
//         console.log("arr[j]", arr[j]);
//         arr[j + 1] = temp;
//         console.log("arr[j + 1] ",arr[j + 1] )
//       }
//       else{
//         console.log("arr[j] is smaller then the arr[j+1]")
//       }
//     }

//   }
// }

// bubbleSort(myArray);
// console.log(myArray);

function incNum(n) {
  let temp = 0;
  for (let i = 0; i < n.length; i++)
    if (n[i] > n[i + 1]) {
      temp = n[i];
      n[i] = n[i + 1];
      n[i + 1] = temp;
      console.log("n",n);
    }
}

incNum([2, 1, 5, 4, 6, 7]);
